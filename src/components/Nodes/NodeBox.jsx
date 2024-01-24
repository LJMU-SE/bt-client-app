import { useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

function Ping({ status }) {
    switch (status) {
        case true:
            return (
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
            );
        case false:
            return (
                <span className="relative flex h-3 w-3">
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
            );
    }
}

export default function NodeBox({ node }) {
    const borderColour = "#e4e4e4";
    const logsContainerRef = useRef();
    const logsRef = useRef();
    const arrowRef = useRef();

    const [name, setName] = useState(node._opts.hostname);
    const [version, setVersion] = useState("0.0.0");
    const [status, setStatus] = useState(node.connected);

    function onNodeConnect() {
        setStatus(true);
    }

    function onNodeDisconnect() {
        setStatus(false);
    }

    function onNodeData(data) {
        setName(data.node);
        setVersion(data.version);
    }

    function onLogs(data) {
        if (data.logs) {
            logsRef.current.value = data.logs;
            logsRef.current.scrollTop = logsRef.current.scrollHeight;
        }
    }

    useEffect(() => {
        if (status) {
            node.emit("GET_NODE_DATA");
            node.emit("GET_LOGS");
        }

        node.on("connect", onNodeConnect);
        node.on("NODE_DATA", onNodeData);
        node.on("disconnect", onNodeDisconnect);
        node.on("LOGS", onLogs);

        return () => {
            node.off("CONNECT", onNodeConnect);
            node.off("NODE_DATA", onNodeData);
            node.off("DISCONNECT", onNodeDisconnect);
            node.off("LOGS", onLogs);
        };
    }, [status]);

    function toggleLogs(e) {
        logsContainerRef.current.classList.toggle("h-0");
        logsContainerRef.current.classList.toggle("h-60");

        arrowRef.current.classList.toggle("rotate-0");
        arrowRef.current.classList.toggle("rotate-180");
    }

    return (
        <div
            className={`bg-[#FFFFFF] rounded-md border border-solid border-[${borderColour}] w-full self-stretch flex flex-col`}
        >
            <div
                className={`px-5 py-3 border-b border-[${borderColour}] border-solid  cursor-pointer`}
                onClick={toggleLogs}
            >
                <div className="w-full flex justify-between items-center gap-5 select-none">
                    <Ping status={status} />
                    <p className="opacity-75">
                        <b>{name}</b> - version <b>{version}</b>
                    </p>
                    <div className="flex-grow" />
                    <button
                        className="transition-all hover:opacity-50 rotate-0"
                        ref={arrowRef}
                    >
                        <FaChevronDown />
                    </button>
                </div>
            </div>
            <div
                ref={logsContainerRef}
                className="overflow-hidden h-0 transition-all"
            >
                <div className="h-8 flex items-center justify-between px-5 text-sm border-b">
                    Node Logs
                </div>
                {status ? (
                    <textarea
                        ref={logsRef}
                        className="w-full p-5 h-52 resize-none text-xs"
                        disabled
                    />
                ) : (
                    <div className="w-full h-52 flex justify-center items-center">
                        Node must be connected to fetch logs
                    </div>
                )}
            </div>
        </div>
    );
}
