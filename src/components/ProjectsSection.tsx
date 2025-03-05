"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Benactor",
    description: "Plateforme pour connecter les OBNL avec les bénévoles",
    image: "/images/projects/benactor.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    slug: "benactor",
  },
  {
    id: 2,
    title: "Bento Sushi",
    description: "Composant style bento",
    image: "/images/projects/bento.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    slug: "bento-sushi",
  },
  // ... autres projets
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mes projets
      </h2>
      <div className="px-4 flex gap-2 py-6 text-white sm:justify-center">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <li key={index}>
            <Link href={`/projects/${project.slug}`}>
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                className="w-full h-full object-cover"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection; 