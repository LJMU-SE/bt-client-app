import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const WebSocketContext = createContext();

export const useWebSocket = (address) => {
    const sockets = useContext(WebSocketContext);

    if (!sockets) {
        throw new Error("useWebSocket must be used within a WebSocketProvider");
    }

    if (address === undefined) {
        return sockets;
    }

    const matchedSocket = sockets.find(
        (socket) => socket._opts.hostname === address
    );

    if (!matchedSocket) {
        throw new Error(`No socket found for address: ${address}`);
    }

    return matchedSocket;
};

export const WebSocketProvider = ({ children }) => {
    const [sockets, setSockets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        const storedStart = localStorage.getItem("startAddress");
        const storedEnd = localStorage.getItem("endAddress");

        if (!storedStart || !storedEnd) {
            // Handle the case where start and end addresses are not stored
            console.error(
                "Start and/or end addresses not found in localStorage"
            );

            // You might want to provide a way to set these values
            setIsLoading(false);
        } else {
            const start = parseInt(storedStart);
            const end = parseInt(storedEnd);
            let nodes = [];

            for (let i = start; i <= end; i++) {
                if (nodes.includes(`10.0.0.${i}`)) continue;
                setNodes((oldNodes) => {
                    return [...oldNodes, `10.0.0.${i}`];
                });
            }
        }

        // Cleanup function
        return () => {
            sockets.forEach((socket) => socket.close());

            setNodes([]);
            setSockets([]);
        };
    }, []);

    useEffect(() => {
        nodes.forEach((address) => {
            // Check if socket with the same address already exists
            if (sockets.some((socket) => socket._opts.hostname === address)) {
                return; // Continue to the next iteration
            }

            // Connect to socket
            const socket = io(`http://${address}:8080`, {
                connect_timeout: 4000,
                reconnection: true,
                transports: ["websocket", "polling", "flashsocket"],
            });

            // Add socket to array
            setSockets((oldSockets) => {
                return [...oldSockets, socket];
            });

            // Create event to listen for connection
            socket.on("connect", () => {
                console.log(`🟢 | Connected to node ${address}`);
            });

            // Create event to listen for disconnects
            socket.on("disconnect", () => {
                console.log(`🔴 | Disconnected from node ${address}`);
            });
        });
    }, [nodes]);

    useEffect(() => {
        // Check if the required number of sockets is reached
        if (sockets.length >= nodes.length) {
            setIsLoading(false);
        }
    }, [sockets]);

    if (isLoading) {
        // Return a loading indicator or null if you don't want to render anything
        return <p>Loading...</p>;
    }

    return (
        <WebSocketContext.Provider value={sockets}>
            {children}
        </WebSocketContext.Provider>
    );
};
