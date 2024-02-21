import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-8 place-self-center text-center md:text-centerjustify-self-start">
          <h1 className="text-[#116466] mb-4 text-5xl md:text-6xl lg:text-8xl lg:leading-normal font-extrabold">
            Hello I&apos;m Nick
          </h1>
          <p className="text-[#116466] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to my website
          </p>
          <div>
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 w-full text-lg sm:w-fit rounded-full mr-4 mb-4 bg-[#D1e8e2] hover:bg-[#57726b] hover:text-white text-[#2C3531] border-4 border-[#2C3531]"
            >
              Contact Me
            </Link>
            <a
                href="/documents/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 w-full text-lg sm:w-fit rounded-full bg-[#D1e8e2] hover:bg-[#57726b] hover:text-white text-[#2C3531] border-4 border-[#2C3531]"
                >
                Download Resume
                </a>
          </div>
        </div>
        <div className="lg:col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full border-8 border-[#2C3531] mx-auto lg:mx-0 h-[250px] w-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="public/images/gradPicClose.jpg"
              alt="image of Nicholas"
              layout="fill"
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
