import moment from "moment";
import { FaEye } from "react-icons/fa";

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

export default function RecentCaptures() {
    return (
        <div className="my-[-0.75rem]">
            {testData.map((item, index) => (
                <div
                    key={index}
                    className={
                        "w-full flex py-3 justify-between border-b border-solid border-[#e4e4e4] last:border-0"
                    }
                >
                    <p className="w-full text-left">{item.name}</p>
                    <p className="w-full text-left">
                        {moment(item.date).fromNow()}
                    </p>
                    <p className="w-full text-left">{item.captureType}</p>
                    <button className="mx-5">
                        <FaEye
                            size={15}
                            className="hover:opacity-50 transition-all"
                        />
                    </button>
                </div>
            ))}
        </div>
    );
}
