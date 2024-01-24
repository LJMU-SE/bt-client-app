import { forwardRef } from "react";

const IPInput = forwardRef(({ label, ...props }, ref) => {
    return (
        <div className="flex flex-col w-full">
            {label ? (
                <label className="text-sm opacity-90" htmlFor={props.id}>
                    {label}
                </label>
            ) : null}
            <div className="flex items-center">
                <span className="inline-block p-2 text-black">10.0.0.</span>
                <input
                    class={`w-full border border-gray-300 p-2 mb-2 mt-1 focus:outline-none focus:ring-1 focus:ring-accent-primary addr-input ${
                        props.className || ""
                    }`}
                    ref={ref}
                    {...{ ...props, className: undefined }}
                />
            </div>
        </div>
    );
});

export default IPInput;
