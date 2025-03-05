"use client";
import { FlipWordsDemo } from "@/components/custom/FlipWordCustom";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import { useRef, useEffect } from "react";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {


  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];

  const handleScroll = () => {
    // Add logic to detect which section is in view and change background
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        {/* About content */}
      </div>
      <div id="projects" ref={sectionRefs[2]} className="h-screen">
        <ProjectsSection />
      </div>
      <div id="contact" ref={sectionRefs[3]} className="h-screen">
        {/* Contact content */}
      </div>
    </div>
  );
}
