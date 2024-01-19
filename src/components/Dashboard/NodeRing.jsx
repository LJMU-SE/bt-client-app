import { useWebSocket } from "@/utils/WebSocketContext";
import { useEffect, useState } from "react";

export default function NodeRing() {
    const radius = 80;
    const strokeWidth = 15;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const sockets = useWebSocket();
    const initialConnectedCount = sockets.filter(
        (socket) => socket.connected
    ).length;
    const [connectedCount, setConnectedCount] = useState(initialConnectedCount);

    const [progress, setProgress] = useState(
        Math.round((initialConnectedCount / sockets.length) * 100)
    );

    const [offset, setOffset] = useState(
        circumference - (progress / 100) * circumference
    ); // Set offset to the current connected number of nodes

    function setProgressRing(count) {
        const newProgress = Math.round((count / sockets.length) * 100);
        const newOffset = circumference - (newProgress / 100) * circumference;

        setProgress(newProgress);
        setOffset(newOffset);
    }

    function onSocketConnect() {
        setConnectedCount((oldCount) => {
            const newCount = oldCount + 1;
            return newCount <= sockets.length ? newCount : oldCount;
        });
        setProgressRing(
            connectedCount + 1 <= sockets.length
                ? connectedCount + 1
                : connectedCount
        );
    }

    function onSocketDisconnect() {
        setConnectedCount((oldCount) => {
            const newCount = oldCount - 1;
            return newCount >= 0 ? newCount : oldCount;
        });
        setProgressRing(connectedCount - 1 >= 0 ? connectedCount - 1 : 0);
    }

    useEffect(() => {
        sockets.forEach((socket) => {
            socket.on("connect", onSocketConnect);
            socket.on("disconnect", onSocketDisconnect);
        });

        return () => {
            sockets.forEach((socket) => {
                socket.off("connect", onSocketConnect);
                socket.off("disconnect", onSocketDisconnect);
            });
        };
    }, []);

    return (
        <div className="h-full w-full flex flex-col items-center justify-center py-5">
            <div className="relative h-auto max-w-40 flex justify-center items-center w-full">
                <svg
                    width={radius * 2}
                    height={radius * 2}
                    viewBox="0 0 160 160"
                >
                    <circle
                        className="stroke-current text-gray-300"
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                    <circle
                        fill="transparent"
                        className="progress-ring__circle stroke-current text-[#ff9000]"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference + " " + circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />

                    <text
                        x={radius}
                        y={radius}
                        fontFamily="Verdana"
                        fontSize="20"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        className="font-bold"
                    >
                        {progress}%
                    </text>
                </svg>
            </div>
            <p className="mt-5">
                <b>{connectedCount}</b> of <b>{sockets.length}</b> node(s)
                connected
            </p>
        </div>
    );
}
