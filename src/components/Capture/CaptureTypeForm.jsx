export default function CaptureTypeForm({ setCaptureType }) {
    function handleCaptureTypeChange(e) {
        const captureType = e.target.dataset.value;
        setCaptureType(captureType);

        document.querySelectorAll(".capture-setting-button").forEach((el) => {
            el.classList.remove("active");
            el.disabled = false;
        });

        e.target.classList.add("active");
        e.target.disabled = true;
    }

    return (
        <div className="flex justify-around gap-5 p-5">
            <button
                className={`w-full bg-nav-selected p-5 text-white transition-all capture-setting-button rounded-md active`}
                type="button"
                data-value={"360"}
                onClick={handleCaptureTypeChange}
            >
                360 Degree Video
            </button>
            <button
                className={`w-full bg-nav-selected p-5 text-white transition-all capture-setting-button rounded-md`}
                type="button"
                data-value={"slowmo"}
                onClick={handleCaptureTypeChange}
            >
                Slow Motion Video
            </button>
            <button
                className={`w-full bg-nav-selected p-5 text-white transition-all capture-setting-button rounded-md`}
                type="button"
                data-value={"lightpainting"}
                onClick={handleCaptureTypeChange}
            >
                Light Painting Video
            </button>
        </div>
    );
}
