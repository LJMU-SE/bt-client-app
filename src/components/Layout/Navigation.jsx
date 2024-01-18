function NavLink({ href, children, active }) {
    return (
        <li
            className={`w-full h-12 flex items-center justify-start px-5 transition-all ${
                active ? "" : ""
            }`}
        >
            <a href={href} className="text-white">
                {children}
            </a>
        </li>
    );
}

export default function Navigation() {
    return (
        <nav className="w-full max-w-48 bg-nav-bg h-screen flex flex-col items-center justify-start">
            <div className="w-full h-20 flex items-center justify-center">
                <img
                    className="max-h-10"
                    src="/img/logo.webp"
                    alt="LJMU-SE Logo"
                />
            </div>
            <ul className="w-full flex flex-col items-center justify-start">
                <NavLink href="/">Dashboard</NavLink>
                <NavLink href="/capturing">Capturing</NavLink>
                <NavLink href="/admin">Node Management</NavLink>
                <NavLink href="/settings">Settings</NavLink>
            </ul>
        </nav>
    );
}
