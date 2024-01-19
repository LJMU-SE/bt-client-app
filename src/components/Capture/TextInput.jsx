import { forwardRef } from "react";

const TextInput = forwardRef(({ label, ...props }, ref) => {
    return (
        <div className="flex flex-col w-full">
            {label ? (
                <label className="text-sm opacity-90" htmlFor={props.id}>
                    {label}
                </label>
            ) : null}
            <input
                className="w-full border border-gray-300 p-2 mb-2 mt-1 focus:outline-none focus:ring-1 focus:ring-accent-primary"
                ref={ref}
                {...props}
            />
        </div>
    );
});

export default TextInput;
