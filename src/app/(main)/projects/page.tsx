"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectTag from "@/components/ProjectTag";
import { projectsData } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div className="min-h-screen text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Mes projets
        </h1>
        <div className="px-4 flex gap-2 py-6 text-white sm:justify-center bg-gray-800/50 rounded-lg">
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
      </div>
    </div>
  );
} 