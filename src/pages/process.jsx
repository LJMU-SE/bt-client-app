import ProgressBar from "@/components/Addins/ProgressBar";
import BaseLayout from "@/components/Layout/BaseLayout";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { useWebSocket } from "@/utils/WebSocketContext";
import toast from "react-hot-toast";

export default function ProcessPage() {
    const router = useRouter();
    const [progress, setProgress] = useState(0);

    const images = useRef([]);

    const connectedSockets = useWebSocket().filter((socket) => {
        return socket.connected;
    });

    const params = {
        resolution: {
            x: parseInt(router.query.x),
            y: parseInt(router.query.y),
        },
        shutter_speed: parseInt(router.query.shutterSpeed),
        iso: parseInt(router.query.iso),
        time: new Date().toUTCString(),
    };

    function onImageData(data) {
        // If no image data received, return to the home page
        if (!data.image_data) {
            toast.error(
                `No image data received from ${data.node_name}. Please try again.`
            );
            return router.back();
        }

        // Log image data received
        console.log(
            `📷 | Image data received from ${data.node_name} (${
                images.current.length + 1
            }/${connectedSockets.length})`
        );

        // Parse image data as buffer string
        const imgData = Buffer.from(data.image_data).toString("base64");

        // Make capture data
        const captureData = {
            node: data.node_name,
            imgData,
        };

        // If the image is not already in the array, add it
        if (!images.current.includes(captureData)) {
            images.current = [...images.current, captureData];
        }

        // If the number of images is greater than or equal to the number of connected nodes, process the images
        if (images.current.length >= connectedSockets.length) {
            console.log("📷 | All images received. Processing...");
            processImages();
        }
    }

    function processImages() {
        console.log("📷 | Processing images...");

        const { firstName, lastName, email, x, y, captureType } = router.query;

        console.log(
            JSON.stringify({
                firstName,
                lastName,
                email,
                x,
                y,
                captureType,
                images: images.current,
            })
        );

        fetch("http://localhost:3001/render", {
            method: "POST",
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                x,
                y,
                captureType,
                images: images.current,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(async (res) => {
            const data = await res.json();
            console.log(data);
        });

        console.log("Queued Render");
    }

    useEffect(() => {
        if (connectedSockets.length === 0) {
            toast.error(
                "There are no cameras connected. Please ensure at least one camera is connected and try again."
            );
            router.push("/");
        }

        connectedSockets.forEach((socket) => {
            socket.on("IMAGE_DATA", onImageData);
        });

        return () => {
            connectedSockets.forEach((socket) => {
                socket.off("IMAGE_DATA", onImageData);
                images.current = [];
            });
        };
    }, []);

    function captureImages() {
        connectedSockets.forEach((socket) => {
            console.log("📷 | Capturing image from ", socket._opts.hostname);
            socket.emit("CAPTURE_IMAGE", params);
        });
    }

    useEffect(() => {
        setTimeout(() => {
            captureImages();
        }, 3000);
    }, []);

    return (
        <BaseLayout pageID={"processing"}>
            <div
                className={
                    "w-full h-full flex justify-center items-center text-black"
                }
            >
                <div className="w-full">
                    <ProgressBar progress={progress} />
                </div>
            </div>
        </BaseLayout>
    );
}
