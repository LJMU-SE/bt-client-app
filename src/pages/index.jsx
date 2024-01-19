import DashBox from "@/components/Dashboard/DashBox";
import BaseLayout from "@/components/Layout/BaseLayout";
import NodeRing from "@/components/Dashboard/NodeRing";
import moment from "moment";

const testData = [
    {
        name: "Ollie B",
        date: "Thu, 18 Jan 2024 20:39:27 GMT",
        captureType: "360 Video",
    },
    {
        name: "Jack M",
        date: "Wed, 17 Jan 2024 20:39:27 GMT",
        captureType: "Light Painting",
    },
    {
        name: "Chris K",
        date: "Tue, 16 Jan 2024 20:39:27 GMT",
        captureType: "Slow Motion",
    },
    {
        name: "Precious O",
        date: "Mon, 15 Jan 2024 20:39:27 GMT",
        captureType: "360 Video",
    },
    {
        name: "Mark E",
        date: "Sun, 14 Jan 2024 20:39:27 GMT",
        captureType: "Light Painting",
    },
    {
        name: "David L",
        date: "Sat, 13 Jan 2024 20:39:27 GMT",
        captureType: "Slow Motion",
    },
];

import { FaEye } from "react-icons/fa";

export default function Home() {
    return (
        <BaseLayout title={"Dashboard"} pageID={"dashboard"}>
            <div>
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
                        <div className="my-[-0.75rem]">
                            {testData.map((item, index) => (
                                <div
                                    key={index}
                                    className={
                                        "w-full flex py-3 justify-between border-b border-solid border-[#e4e4e4] last:border-0"
                                    }
                                >
                                    <p className="w-full text-left">
                                        {item.name}
                                    </p>
                                    <p className="w-full text-left">
                                        {moment(item.date).fromNow()}
                                    </p>
                                    <p className="w-full text-left">
                                        {item.captureType}
                                    </p>
                                    <button className="mx-5">
                                        <FaEye size={15} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </DashBox>
                </div>
            </div>
        </BaseLayout>
    );
}
