export default function ProgressBar({ progress }) {
    return (
        <div className="w-full bg-gray-200 rounded-full h-5">
            <div
                style={{ width: `${progress}%` }}
                className="h-full bg-blue-500 rounded-full flex justify-center items-center overflow-hidden transition-all"
            >
                <p className="text-white">{progress}%</p>
            </div>
        </div>
    );
}
