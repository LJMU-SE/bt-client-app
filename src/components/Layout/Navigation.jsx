import Link from "next/link";
import { DiGhostSmall } from "react-icons/di";
import { FaCamera } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";

export default function Navigation({ activePage }) {
    function NavLink({ href, id, icon }) {
        const active = activePage == id ? true : false;

        return (
            <Link
                href={href}
                className={`w-20 h-12 flex items-center justify-center px-5 transition-all hover:bg-nav-selected ${
                    active ? "bg-nav-selected" : ""
                } text-white`}
            >
                {icon}
            </Link>
        );
    }

    return (
        <nav className="w-20 max-w-20 bg-nav-bg h-screen flex flex-col items-center justify-start overflow-hidden">
            <div className="w-full h-20 flex items-center justify-center">
                <img
                    className="max-h-10"
                    src="/img/logo.webp"
                    alt="LJMU-SE Logo"
                />
            </div>

            <div className="w-full h-full flex flex-col items-center justify-start overflow">
                <NavLink
                    id={"dashboard"}
                    href="/"
                    icon={<DiGhostSmall size={20} />}
                />
                <NavLink
                    id={"capture"}
                    href="/capture"
                    icon={<FaCamera size={20} />}
                />
                <NavLink
                    id={"admin"}
                    href="/admin"
                    icon={<FaHashnode size={20} />}
                />
                <div className="flex-grow" />
                <NavLink
                    id={"settings"}
                    href="/settings"
                    icon={<IoSettingsSharp size={20} />}
                />
            </div>
        </nav>
    );
}
