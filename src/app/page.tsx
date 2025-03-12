"use client";
import { FlipWordsDemo } from "@/components/custom/FlipWordCustom";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import { useRef, useEffect } from "react";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

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
    try {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } catch (error) {
      console.error("Error setting up scroll listener:", error);
    }
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
      <div id="projects" ref={sectionRefs[2]} className="h-screen">
        <ProjectsSection />
      </div>
      <div id="contact" ref={sectionRefs[3]} className="h-screen">
        {/* Contact content */}
      </div>
      <Footer />
    </div>
  );
}
