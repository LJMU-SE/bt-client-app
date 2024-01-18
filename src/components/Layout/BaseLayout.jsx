import { Inter } from "next/font/google";
import Navigation from "./Navigation";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function BaseLayout({ title, pageID, children }) {
    return (
        <main className={`w-full h-screen ${inter.className} flex`}>
            <Navigation activePage={pageID} />
            <div className="w-full h-screen bg-base-bg p-5 text-[#202020] overflow-auto">
                {children}
            </div>
        </main>
    );
}
