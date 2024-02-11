import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 col-span-1 place-self-center text-center sm:text-left">
        <h1 className="text-[#116466] mb-4 text-4xl sm:text-5xl md:text-6xl font-extrabold">
            Hello I&apos;m Nick
        </h1>
          <p className="text-[#116466] text-base sm:text-lg mb-6 lg:text-xl">
            This is the hero section
          </p>
          <div>
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#D1e8e2] hover:bg-[#57726b] hover:text-white text-[#2C3531] border-4 border-[#2C3531]"
            >
              Hire Me
            </Link>
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 w-full sm:w-fit rounded-full bg-[#D1e8e2] hover:bg-[#57726b] hover:text-white text-[#2C3531] border-4 border-[#2C3531]"
            >
              Download Resume
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 col-span-1 self-center mt-4 lg:mt-0 lg:place-self-end">
          <div className="rounded-full border-8 border-[#2C3531] mx-auto lg:mx-0 h-[250px] w-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/nickPic2.jpg"
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
