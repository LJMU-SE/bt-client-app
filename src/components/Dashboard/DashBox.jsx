export default function DashBox({ children, title, full }) {
    const borderColour = "#e4e4e4";
    return (
        <div
            className={`bg-[#FFFFFF] rounded-md border border-solid border-[${borderColour}] flex-grow self-stretch ${
                full ? "w-full" : "w-max"
            } flex flex-col`}
        >
            <div
                className={`px-5 py-3 border-b border-[${borderColour}] border-solid`}
            >
                <p className="opacity-75">{title}</p>
            </div>
            <div className="px-5 py-3 h-full">{children}</div>
        </div>
    );
}
