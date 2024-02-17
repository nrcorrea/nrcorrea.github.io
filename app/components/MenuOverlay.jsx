import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links}) => {
    return (
        <ul className="flex flex-col items-center justify-center h-screen w-full bg-amber-50 fixed top-0 left-0 z-50">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href = {link.href} title = {link.title} />
                </li>
            ))}
        </ul>
    );
}

export default MenuOverlay;