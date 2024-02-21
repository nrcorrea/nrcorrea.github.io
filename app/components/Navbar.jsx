"use client";
import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";
import NavLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    { href: "#about", title: "About" },
    { href: "#projects", title: "Projects" },
    { href: "#contact", title: "Contact" },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto bg-[#D1E8E2] bg-opacity-100 top-0 left-0 right-0 z-10">
            <div className="flex container flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="text-5xl text-[#2C3531] font-semibold">
                    <Image src="./images/NC.png" alt="logo" className="border-4 border-[#2C3531] rounded-lg" width={100} height={100} />
                </Link>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border-2 border-[#2C3531] rounded text-[#2C3531] hover:text-[#D9B08C]">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border-2 border-[#2C3531] rounded text-[#2C3531] hover:text-[#D9B08C]">
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    )}
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;