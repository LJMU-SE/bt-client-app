import { Inter } from "next/font/google";
import Navigation from "./Navigation";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function BaseLayout({ title, pageID, children }) {
    return (
        <main className={`w-full h-screen ${inter.className} flex`}>
            <Head>
                <title>
                    {title
                        ? `${title} | Bullet Time Client`
                        : "Bullet Time Client"}
                </title>
            </Head>
            <Navigation activePage={pageID} />
            <div className="w-full h-screen bg-base-bg p-5 text-[#202020]">
                {children}
            </div>
        </main>
    );
}
