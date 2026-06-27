import { NavLink } from "react-router-dom";

const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Contact", path: "/contact" },
];

function NavLinks({ dark = false, mobile = false, onClick }) {
    return (
        <ul
            className={`${mobile
                ? "flex flex-col gap-6 text-xl"
                : "hidden lg:flex items-center gap-10"
                }`}
        >
            {links.map((link) => (
                <li key={link.path}>
                    <NavLink
                        to={link.path}
                        onClick={onClick}
                        className={({ isActive }) =>
                            `group relative font-medium transition-all duration-300 ${dark
                                ? "text-[#0A1F44] hover:text-[#D4AF6A]"
                                : "text-white hover:text-[#D4AF6A]"
                            } ${isActive ? "text-[#D4AF6A]" : ""}`
                        }
                    >
                        {link.name}

                        <span
                            className="
    absolute
    left-0
    -bottom-2
    h-[2px]
    w-0
    bg-[#D4AF6A]
    transition-all
    duration-300
    group-hover:w-full
  "
                        ></span>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}

export default NavLinks;