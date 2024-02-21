import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border-2 z-10 border-t-[#2C3531] border-l-transparent border-r-transparent text-[#2C3531] bg-[#D1e8e2]">
      <div className="container p-8 flex justify-between items-center">
        <Image src="./images/NC.png" alt="logo" className="border-4 border-[#2C3531] rounded-lg" width={100} height={100} />
        <p className="text-[#2C3531]">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;