"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Benactor",
    description: "Plateforme pour connecter les OBNL avec les bénévoles",
    image: "/images/projects/benactor.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Bento Sushi",
    description: "Composant style bento",
    image: "/images/projects/bento.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "TO-DO App",
    description: "Liste de tâches à faire",
    image: "/images/projects/todo.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Voyage X",
    description: "Application mobile pour sauvergarder les prochaines destinations de voyage",
    image: "/images/projects/voyagex.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Travel Card",
    description: "Composant de carte de voyage",
    image: "/images/projects/travel-card.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Mobilico",
    description: "Prototype avec Figma",
    image: "/images/projects/mobilico.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  

  const handleTagChange = (newTag) => {
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
      <div className="px-4 flex gap-2 py-6 text-white sm:justify-center ">
      
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
          <li
            key={index}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              className="w-full h-full object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
