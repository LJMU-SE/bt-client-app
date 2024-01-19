import BaseLayout from "@/components/Layout/BaseLayout";

export default function Error404() {
    return (
        <BaseLayout pageID={"404-not-found"}>
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-xl font-light">404 - Page Not Found</h1>
            </div>
        </BaseLayout>
    );
}
