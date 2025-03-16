"use client";
import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { ThreeDCard } from "@/components/ui/3d-card";
import LogoCarousel from "@/components/custom/LogoCarousel";
import ProjectTag from "@/components/ProjectTag";


export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const logos = [
    { id: 1, name: "Logo 1", img: "/logos/logo1.png" },
    { id: 2, name: "Logo 2", img: "/logos/logo2.png" },
  ];

  const filteredProjects = projectsData.filter((project) =>
    filter === "All" ? true : project.tag.includes(filter)
  );

  const handleFilter = (tag: string) => {
    setFilter(tag);
  };

  return (
    <section className="w-full min-h-screen py-12">
      <div className="w-full px-4 mx-auto">
        <h1 className="text-center text-5xl font-bold text-white mb-8">
          Mes projets
        </h1>
        <div className="px-4 flex gap-2 py-6 text-white sm:justify-center bg-black/80 backdrop-blur-lg rounded-lg border border-white/10 shadow-xl mb-8 z-10 relative">
          <ProjectTag
            onClick={() => handleFilter("All")}
            name="All"
            isSelected={filter === "All"}
          />
          <ProjectTag
            onClick={() => handleFilter("Web")}
            name="Web"
            isSelected={filter === "Web"}
          />
          <ProjectTag
            onClick={() => handleFilter("Mobile")}
            name="Mobile"
            isSelected={filter === "Mobile"}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProjects.map((project) => (
            <ThreeDCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.image}
              link={`/#projects`}
              className="hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-gray-800"
            />
          ))}
        </div>
        <LogoCarousel logos={logos} />
      </div>
    </section>
  );
}

export default ProjectsSection; 