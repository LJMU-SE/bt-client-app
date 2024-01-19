import BaseLayout from "@/components/Layout/BaseLayout";
import NodeBox from "@/components/Nodes/NodeBox";
import { useWebSocket } from "@/utils/WebSocketContext";

export default function NodesPage() {
    const websockets = useWebSocket();
    return (
        <BaseLayout pageID={"404-not-found"}>
            <div>
                <div className="w-full mb-5">
                    <h1 className="text-2xl font-light">Node Management</h1>
                </div>
                {websockets.map((ws) => (
                    <NodeBox node={ws} />
                ))}
            </div>
        </BaseLayout>
    );
}
