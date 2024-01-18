import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main
            className={`text-black w-full h-screen flex justify-center items-center ${inter.className} bg-white`}
        >
            <h1>Hello World!</h1>
        </main>
    );
}
