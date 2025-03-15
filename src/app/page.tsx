"use client";
import { TextRotate } from "@/components/ui/text-rotate";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import { useRef, useEffect } from "react";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";
import ContactSection from "@/components/ContactSection";
import { Preview } from "@/components/ui/text-rotate";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const logos = [
  { img: "/public/images/stackicon/css.png", name: "Logo 1" },
  { img: "/logos/logo2.png", name: "Logo 2" },
  // Ajoutez d'autres logos ici
];

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

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error("Unhandled error:", error);
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: "url('/public/background/bg1.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div id="home" ref={sectionRefs[0]} className="h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          {/* Section Preview */}
          <Preview />
          
          {/* Section Boutons */}
          <div className="mt-8 space-x-4">
            <ShimmerButton className="mt-8">
              Me contacter
            </ShimmerButton>
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
