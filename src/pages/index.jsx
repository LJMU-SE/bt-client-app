import DashBox from "@/components/Dashboard/DashBox";
import BaseLayout from "@/components/Layout/BaseLayout";
import NodeRing from "@/components/Dashboard/NodeRing";
import RecentCaptures from "@/components/Dashboard/RecentCaptures";

export default function Home() {
    return (
        <BaseLayout pageID={"dashboard"}>
            <div className="select-none">
                <div className="w-full mb-5">
                    <h1 className="text-2xl font-light">
                        Bullet Time Dashboard
                    </h1>
                </div>
                <div className="w-full h-auto flex flex-wrap justify-between gap-5">
                    <DashBox title={"Node Status"}>
                        <NodeRing />
                    </DashBox>
                    <DashBox title={"API Status"}>
                        <div className="w-96" />
                    </DashBox>
                    <DashBox title={"Node Status"}></DashBox>
                    <DashBox title={"Capture History"} full={true}>
                        <RecentCaptures />
                    </DashBox>
                </div>
            </div>
        </BaseLayout>
    );
}
