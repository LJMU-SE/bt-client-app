import TextInput from "./TextInput";

export default function DetailsForm({ fNameRef, lNameRef, emailRef }) {
    return (
        <div className="w-full h-auto">
            <div className="flex flex-nowrap justify-between gap-5">
                <TextInput
                    ref={fNameRef}
                    label={"First Name"}
                    type="text"
                    placeholder="John"
                    required={true}
                    defaultValue={"John"}
                />
                <TextInput
                    ref={lNameRef}
                    label={"Last Name"}
                    type="text"
                    placeholder="Doe"
                    required={true}
                    defaultValue={"Doe"}
                />
            </div>
            <div className="mt-2">
                <TextInput
                    ref={emailRef}
                    label={"Email"}
                    type="email"
                    placeholder="example@ljmu.dev"
                    required={true}
                    defaultValue={"example@ljmu.dev"}
                />
            </div>
        </div>
    );
}
