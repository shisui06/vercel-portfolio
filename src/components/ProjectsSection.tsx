"use client";
import React from "react";
import { projectsData } from "@/data/projects";
import { ThreeDCard } from "@/components/ui/3d-card";
import LogoCarousel from "@/components/custom/LogoCarousel";

export function ProjectsSection() {
  const logos = [
    { id: 1, name: "Logo 1", img: "/logos/logo1.png" },
    { id: 2, name: "Logo 2", img: "/logos/logo2.png" },
  ];

  return (
    <section className="w-full min-h-screen py-12">
      <div className="w-full px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {projectsData.map((project) => (
            <ThreeDCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.image}
              link={`/projects/${project.slug}`}
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