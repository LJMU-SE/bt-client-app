import ProgressBar from "@/components/Addins/ProgressBar";
import BaseLayout from "@/components/Layout/BaseLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useWebSocket } from "@/utils/WebSocketContext";
import toast from "react-hot-toast";

export default function ProcessPage() {
    const router = useRouter();
    const [progress, setProgress] = useState(0);

    const connectedSockets = useWebSocket().filter((socket) => {
        return socket.connected;
    });

    useEffect(() => {
        const { captureType, iso, shutterSpeed, firstName, lastName, email } =
            router.query;

        if (connectedSockets.length === 0) {
            toast.error(
                "There are no cameras connected. Please ensure at least one camera is connected and try again."
            );
            router.push("/");
        }

        setTimeout(() => {
            setProgress(33);
        }, 5000);

        setTimeout(() => {
            setProgress(66);
        }, 7000);

        setTimeout(() => {
            setProgress(100);
        }, 8000);
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
