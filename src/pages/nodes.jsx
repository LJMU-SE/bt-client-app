import BaseLayout from "@/components/Layout/BaseLayout";
import NodeBox from "@/components/Nodes/NodeBox";
import { useWebSocket } from "@/utils/WebSocketContext";

export default function NodesPage() {
    const websockets = useWebSocket();
    return (
        <BaseLayout pageID={"nodes"}>
            <div>
                <div className="w-full mb-5">
                    <h1 className="text-2xl font-light">Node Management</h1>
                </div>
                <div className="flex flex-row flex-wrap gap-3 w-full">
                    {websockets.map((ws) => (
                        <NodeBox node={ws} />
                    ))}
                </div>
            </div>
        </BaseLayout>
    );
}
