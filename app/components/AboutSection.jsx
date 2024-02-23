"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Technical Skills",
    id: "tskills",
    content: (
      <ul className="list-disc pl-2">
        <li>C++/C</li>
        <li>Python</li>
        <li>HTML / CSS / JavaScript</li>
        <li>Typescript / Node.js</li>
        <li>Git / Bitbucket / Github</li>
        <li>Linux Programming</li>
        <li>Docker / Containers</li>
        <li>Embedded Software</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "sskills",
    content: (
      <ul className="list-disc pl-2">
        <li>Teamwork</li>
        <li>Problem Solving</li>
        <li>Communication</li>
        <li>Adaptability</li>
        <li>Time Management</li>
        <li>Leadership</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of California, Irvine - 3.54 GPA</li>
        <li>Cerritos College - 3.86 GPA</li>
      </ul>
    ),
  },
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>English</li>
        <li>Spanish</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("tskills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-[#2C3531]" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 border-8 border-[#2C3531] rounded-lg">
            <Image
              src="./images/japan2.jpg"
              alt="Japan Nick"
              layout="responsive"
              width={400}
              height={400}
              objectFit="cover"
            />
          </div>
          <div className="order-1 md:order-2 text-left space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
            <p className="text-sm md:text-base lg:text-lg">
              Motivated Software Engineer with experience in coding,
              troubleshooting, and deploying applications for high-traffic
              environments. Demonstrates expertise in crafting and implementing
              software with a diverse set of technologies, leading to
              significant improvements in data processing and system
              functionality. Adept at diagnosing and resolving complex issues,
              aiming to leverage technical skills and a proactive approach to
              drive innovation and excellence in a dynamic team setting.
            </p>
            <div className="flex flex-wrap gap-2">
              {TAB_DATA.map((data) => (
                <TabButton
                  key={data.id}
                  selectTab={() => handleTabChange(data.id)}
                  active={tab === data.id}
                >
                  {data.title}
                </TabButton>
              ))}
            </div>
            <div className="mt-4">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
