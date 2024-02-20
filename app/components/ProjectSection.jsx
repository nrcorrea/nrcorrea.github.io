"use client";
import React, {useRef} from "react";
import ProjectCard from "./ProjectCard";
import {motion, useInView} from "framer-motion";

const ProjectsData = [
    {
        id: 1,
        title: "YourEdvisor",
        description: "A web application that helps students plan their academic journey. (Currently Private)",
        image: "/images/projects/yourEdvisor.png", 
        gitUrl: "https://github.com/varijjhaveri/YourEdvisor",
        liveUrl: "/",
    },
    {
        id: 2, 
        title: "Mafia Mayhem Game",
        description: "A web card game that is based on the popular party game, Mafia.",
        image: "/images/projects/mafiaMayhem.png", 
        gitUrl: "https://github.com/nrcorrea/MafiaMayhem",
        liveUrl: "https://spicy-churro.itch.io/mafia-meyham-prototype",
    },
    {
        id: 3,
        title: "Akuma E-Commerce",
        description: "An e-commerce website that sells art and clothing. (Currently in Development)",
        image: "/images/projects/akumaEcommerce.jpg", 
        gitUrl: "https://github.com/nrcorrea/akuma",
        liveUrl: "/",
    }
];

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {ProjectsData.map((project, index) => (
            <motion.li
                key={project.id}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.1 }}
            >
                <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                />
            </motion.li>
            ))}
        </ul>
        </section>
    );
};

export default ProjectsSection;