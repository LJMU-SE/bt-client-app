import IPInput from "@/components/Forms/IPInput";
import BaseLayout from "@/components/Layout/BaseLayout";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function Settings({}) {
    const startAddrRef = useRef(null);
    const endAddrRef = useRef(null);

    useEffect(() => {
        startAddrRef.current.value = localStorage.getItem("startAddress");
        endAddrRef.current.value = localStorage.getItem("endAddress");
    }, []);

    function saveAddresses() {
        localStorage.setItem("startAddress", startAddrRef.current.value);
        localStorage.setItem("endAddress", endAddrRef.current.value);
        toast.success("Settings Saved. Restart to see changes.");
    }

    return (
        <BaseLayout pageID={"settings"}>
            <div className="w-full mb-5">
                <h1 className="text-2xl font-light">App Settings</h1>
            </div>
            <div className="max-w-[50%]">
                <h3 className="text-xl font-light">Node Addressesing</h3>
                <p className="my-2 text-sm opacity-75">
                    Node addressing is sequential, and nodes are on the subnet
                    10.0.0.0. Specify your start and end addresses below.
                </p>
                <div className="flex w-full gap-3 flex-nowrap">
                    <IPInput
                        label={"Start Address"}
                        ref={startAddrRef}
                        type="number"
                        placeholder="101"
                        required={true}
                        max={254}
                        min={1}
                    />
                    <IPInput
                        label={"End Address"}
                        ref={endAddrRef}
                        type="number"
                        placeholder="254"
                        required={true}
                        max={254}
                        min={1}
                    />
                </div>
                <button
                    type="button"
                    className="bg-accent-primary w-max text-white font-normal rounded-md py-2 px-5 text-sm hover:bg-accent-hover transition-all"
                    onClick={saveAddresses}
                >
                    Save Changes
                </button>
            </div>
        </BaseLayout>
    );
}
