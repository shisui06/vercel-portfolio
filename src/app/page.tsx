"use client";
import { useRef } from "react";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Preview } from "@/components/ui/text-rotate";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function Home() {
  const sectionRefs = [
    useRef(null),
    
    useRef(null),
    useRef(null),
    useRef(null)
  ];

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
            <ShimmerButton 
              onClick={() => {
                console.log('Contact button clicked!');
                setTimeout(() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", "/#contact");
                  }
                }, 100); 
              }}
              className="mt-8"
            >
              Me contacter
            </ShimmerButton>
          </div>
        </div>
      </div>
      <div id="about" ref={sectionRefs[1]} className="min-h-screen">
        <AboutSection />
      </div>
      <div id="projects" className="min-h-screen">
        <ProjectsSection />
      </div>
      <div id="contact" ref={sectionRefs[3]} className="min-h-screen">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
