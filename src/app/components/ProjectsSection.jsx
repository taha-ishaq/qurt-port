"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sariyasspinite",
    description: "Sariyasspinite Managed By me",
    image: "/images/projects/1.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://www.instagram.com/sariyassipnbite?igsh=MXJtbTV6ZTM3aGR6Zw==",
    previewUrl: "https://www.instagram.com/sariyassipnbite?igsh=MXJtbTV6ZTM3aGR6Zw==",
  },
  {
    id: 2,
    title: "SanaHaroonatelier",
    description: "SanaHaroonatelier Branded and Managed By Me",
    image: "/images/projects/2.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://www.instagram.com/sanaharoonatelier?igsh=MWhoeWh0YjI0dGFhYw==",
    previewUrl: "https://www.instagram.com/sanaharoonatelier?igsh=MWhoeWh0YjI0dGFhYw==",
  },
  {
    id: 3,
    title: "Daak Factory",
    description: "Daak Factory Branding nd Social Handled by Me ",
    image: "/images/projects/3.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://www.instagram.com/daak.factory?igsh=MXRjMTQzd3FtdjF3Nw==",
    previewUrl: "https://www.instagram.com/daak.factory?igsh=MXRjMTQzd3FtdjF3Nw==",
  },
  {
    id: 4,
    title: "Downtown Faisabalbad",
    description: "Pages Social Media and Management Seen By Me",
    image: "/images/projects/4.jpeg",
    tag:["All","Branding","Social"],
    gitUrl: "https://www.instagram.com/downtownfaisalabad?igsh=MWR3NTZ5eXduMzIyag==",
    previewUrl: "https://www.instagram.com/downtownfaisalabad?igsh=MWR3NTZ5eXduMzIyag==",
  },
  {
    id: 5,
    title: "NaturalsFarms",
    description: "Naturals Farm Social Media handled and branding by Me",
    image: "/images/projects/5.jpeg",
    tag: ["All","Branding","Social"],
    gitUrl: "https://www.instagram.com/naturalsfarms.pk?igsh=MW95OXJrbnF4bXFwYw==",
    previewUrl: "https://www.instagram.com/naturalsfarms.pk?igsh=MW95OXJrbnF4bXFwYw==",
  },
  {
    id: 6,
    title: "Naturals Pk",
    description: "Naturals Pk Social Media Handled and Branded by ME",
    image: "/images/projects/6.jpeg",
    tag: ["All","Branding","Social"],
    gitUrl: "https://www.instagram.com/naturals.pk?igsh=cGw5dWl0dTk0b2lo",
    previewUrl: "https://www.instagram.com/naturals.pk?igsh=cGw5dWl0dTk0b2lo",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Branding"
          isSelected={tag === "Branding"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Social"
          isSelected={tag === "Social"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
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
