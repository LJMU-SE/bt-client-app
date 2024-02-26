import BaseLayout from "@/components/Layout/BaseLayout";
import DashBox from "@/components/Dashboard/DashBox";
import { useRef, useState } from "react";
import DetailsForm from "@/components/Capture/DetailsForm";
import CaptureSettingsForm from "@/components/Capture/CameraSettingsForm";
import CaptureTypeForm from "@/components/Capture/CaptureTypeForm";
import { useRouter } from "next/router";

export default function Capture() {
    const fNameRef = useRef();
    const lNameRef = useRef();
    const emailRef = useRef();

    const isoRef = useRef();
    const shutterSpeedRef = useRef();
    const resXRef = useRef();
    const resYRef = useRef();

    const [captureType, setCaptureType] = useState("360");

    const router = useRouter();

    function onFormSubmit(e) {
        e.preventDefault();

        router.push(
            `/process?captureType=${captureType}&iso=${isoRef.current.value}&shutterSpeed=${shutterSpeedRef.current.value}&firstName=${fNameRef.current.value}&lastName=${lNameRef.current.value}&email=${emailRef.current.value}&x=${resXRef.current.value}&y=${resYRef.current.value}`
        );
    }
    return (
        <BaseLayout pageID={"capture"}>
            <div>
                <div className="w-full mb-5">
                    <h1 className="text-2xl font-light">Capture</h1>
                </div>

                <form
                    onSubmit={onFormSubmit}
                    className="w-full flex flex-wrap justify-between gap-5"
                >
                    <DashBox title={"Personal Details"}>
                        <DetailsForm
                            fNameRef={fNameRef}
                            lNameRef={lNameRef}
                            emailRef={emailRef}
                        />
                    </DashBox>
                    <DashBox title={"Capture Settings"}>
                        <CaptureSettingsForm
                            isoRef={isoRef}
                            shutterSpeedRef={shutterSpeedRef}
                            resXRef={resXRef}
                            resYRef={resYRef}
                        />
                    </DashBox>
                    <DashBox title={"Capture Type"} full={true}>
                        <CaptureTypeForm setCaptureType={setCaptureType} />
                    </DashBox>
                    <DashBox title={"Continue"} full={true}>
                        <button
                            type="submit"
                            className="bg-accent-primary w-full text-white font-normal rounded-md py-4 px-6 text-lg hover:bg-accent-hover transition-all"
                        >
                            Capture Video
                        </button>
                    </DashBox>
                </form>
            </div>
        </BaseLayout>
    );
}
