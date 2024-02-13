import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4">
            <div className="flex flex-wrap item-center justify-between mx-auto px-8">
                <Link href="/" className="text-5xl text-white font-semibold">
                    LOGO
                </Link>
                <div className="menu">

                </div>
            </div>
        </nav>
    );
};