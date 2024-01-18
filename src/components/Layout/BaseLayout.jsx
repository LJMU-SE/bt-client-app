import { Inter } from "next/font/google";
import Navigation from "./Navigation";

const inter = Inter({ subsets: ["latin"] });

export default function BaseLayout({ children }) {
    return (
        <main className={`w-full h-screen ${inter.className} flex`}>
            <Navigation />
            <div className="w-full h-screen bg-base-bg flex items-center justify-center">
                {children}
            </div>
        </main>
    );
}
