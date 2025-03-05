"use client";
import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";

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
        <button
          onClick={() => handleTagChange("All")}
          className={`px-4 py-2 rounded-full ${
            tag === "All" ? "bg-lime-400 text-black" : "bg-gray-800 text-white"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleTagChange("Web")}
          className={`px-4 py-2 rounded-full ${
            tag === "Web" ? "bg-lime-400 text-black" : "bg-gray-800 text-white"
          }`}
        >
          Web
        </button>
        <button
          onClick={() => handleTagChange("Mobile")}
          className={`px-4 py-2 rounded-full ${
            tag === "Mobile" ? "bg-lime-400 text-black" : "bg-gray-800 text-white"
          }`}
        >
          Mobile
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 p-4">
        {filteredProjects.map((project, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden">
            <Image
              alt={project.title}
              className="w-full h-64 object-cover"
              src={project.image}
              width={400}
              height={250}
              quality={75}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 line-clamp-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection; 