"use client";
import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import LogoCarousel from "@/components/custom/LogoCarousel";
import { ShimmerButton } from "@/components/ui/shimmer-button";

// Define your logos
const logos = [
  {
    id: 1,
    name: "CSS",
    img: "/images/stackicon/css.png",
  },
  {
    id: 2,
    name: "Next.js",
    img: "/images/stackicon/js.png",
  },
  {
    id: 3,
    name: "TypeScript",
    img: "/logos/typescript.svg",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    img: "/logos/tailwindcss.svg",
  },
  {
    id: 5,
    name: "Node.js",
    img: "/logos/nodejs.svg",
  },
];

function distributeLogos(logos: Logo[], columnCount: number): Logo[][] {
  const distributedLogos: Logo[][] = Array.from({ length: columnCount }, () => []);
  logos.forEach((logo, index) => {
    distributedLogos[index % columnCount].push(logo);
  });
  return distributedLogos;
}

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="min-h-screen py-12">
      <div className="backdrop-blur-md bg-black/30 rounded-lg p-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8">Mes Projets</h1>
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            Mes projets
          </h2>
          <div className="px-4 flex gap-2 py-6 text-white sm:justify-center">
            <ShimmerButton
              onClick={() => handleTagChange("All")}
              className={`${tag === "All" ? "bg-lime-400 text-black" : ""}`}
            >
              All
            </ShimmerButton>
            <ShimmerButton
              onClick={() => handleTagChange("Web")}
              className={`${tag === "Web" ? "bg-lime-400 text-black" : ""}`}
            >
              Web
            </ShimmerButton>
            <ShimmerButton
              onClick={() => handleTagChange("Mobile")}
              className={`${tag === "Mobile" ? "bg-lime-400 text-black" : ""}`}
            >
              Mobile
            </ShimmerButton>
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
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-400 line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <LogoCarousel columnCount={3} logos={logos} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 