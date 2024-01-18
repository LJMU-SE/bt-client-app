import DashBox from "@/components/Dashboard/DashBox";
import BaseLayout from "@/components/Layout/BaseLayout";
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

function NodeRing({ total = 100, current = 100 }) {
    const radius = 80;
    const strokeWidth = 15;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const progress = Math.round((current / total) * 100);
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div class="relative h-auto max-w-40 flex justify-center items-center w-full">
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
                        style={{ strokeDashoffset }}
                        stroke-width={strokeWidth}
                        strokeLinecap="round"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />

                    <text
                        x={radius}
                        y={radius}
                        font-family="Verdana"
                        font-size="20"
                        text-anchor="middle"
                        alignment-baseline="middle"
                        className="font-bold"
                    >
                        {progress}%
                    </text>
                </svg>
            </div>
            <p className="mt-5">
                <b>{current}</b> of <b>{total}</b> node(s) connected
            </p>
        </div>
    );
}

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
                        <NodeRing total={42} current={38} />
                    </DashBox>
                    <DashBox title={"API Status"}>
                        <div className="w-96" />
                    </DashBox>
                    <DashBox title={"Node Status"}>
                        <div className="w-96 h-72" />
                    </DashBox>
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
