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
import ContactSection from "@/components/ContactSection";

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

    
    handleHash();

  
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
              href="#contact"
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </div>
      <div id="about" ref={sectionRefs[1]} className="min-h-screen">
        <AboutSection />
      </div>
      <div id="projects" ref={sectionRefs[2]} className="min-h-screen">
        <ProjectsSection />
      </div>
      <div id="contact" ref={sectionRefs[3]} className="min-h-screen">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
