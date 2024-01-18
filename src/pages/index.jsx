import BaseLayout from "@/components/Layout/BaseLayout";

export default function Home() {
    return (
        <BaseLayout title={"Dashboard"} pageID={"dashboard"}>
            <div className="w-full h-full flex flex-nowrap justify-between align-top py-5 text-[#FFFFFF]"></div>
        </BaseLayout>
    );
}
