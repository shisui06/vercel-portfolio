"use client";
import { FlipWordsDemo } from "@/components/custom/FlipWordCustom";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import { useRef, useEffect } from "react";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";

export default function Home() {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];

  const handleScroll = () => {
    try {
      // Add logic to detect which section is in view and change background
    } catch (error) {
      console.error("Error in scroll handler:", error);
    }
  };

  // Handle initial URL and hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const section = document.getElementById(hash.slice(1));
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle initial load
    handleHash();

    // Handle hash changes
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen">
      <div id="home" ref={sectionRefs[0]} className="h-screen">
        <div className="container mx-auto px-4 py-16 text-center">
          
          {/* Section FlipWords */}
          <div className="pt-8">
            <FlipWordsDemo />
          </div>

          {/* Section Boutons */}
          <div className="mt-8 space-x-4">
            <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </div>
      <div id="about" ref={sectionRefs[1]} className="h-screen">
        <AboutSection />
      </div>
      <div id="projects" ref={sectionRefs[2]} className="min-h-screen bg-black py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Mes projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                slug={project.slug}
              />
            ))}
          </div>
        </div>
      </div>
      <div id="contact" ref={sectionRefs[3]} className="min-h-screen flex items-center justify-center bg-black">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Me</h1>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const data = Object.fromEntries(formData);
              console.log("Form data:", data);
            }}
            className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-md border-2 border-lime-400"
          >
            <div className="mb-4">
              <label className="block text-white font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-lime-400"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-lime-400"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-medium mb-2">Message</label>
              <textarea
                name="message"
                className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-lime-400"
                placeholder="Your message"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-lime-400 text-black px-4 py-2 rounded-full font-medium hover:bg-lime-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
