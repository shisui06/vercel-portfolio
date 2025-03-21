"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { LanguageSwitcher } from './LanguageSwitcher';

const navItems = [
  {
    name: "Accueil",
    path: "/",
  },
  {
    name: "À propos",
    path: "/about",
  },
  {
    name: "Projets",
    path: "/#projects",
    onClick: () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "/#projects");
      }
    }
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

interface NavbarProps {
  onSectionChange: (index: number) => void;
}

export default function Navbar({ onSectionChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const router = useRouter();

  const handleNavClick = (index: number) => {
    try {
      onSectionChange(index);
      
      // Handle home click
      if (index === 0) {
        if (window.location.pathname !== "/") {
          window.location.href = "/";
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.pushState(null, "", "/");
        }
        return;
      }

      // Handle projects section
      if (navItems[index].path === "/#projects") {
        if (window.location.pathname === "/") {
          const projectsSection = document.getElementById("projects");
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", "/#projects");
            setActiveSection("projects");
          }
        } else {
          window.location.href = "/#projects";
        }
        return;
      }

      // Handle other sections
      const sectionId = navItems[index].path.slice(1);
      if (window.location.pathname === "/") {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `/#${sectionId}`);
          setActiveSection(sectionId);
        }
      } else {
        window.location.href = `/#${sectionId}`;
      }
    } catch (error) {
      console.error("Error in handleNavClick:", error);
    }
  };

  // Update active section detection in the scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        if (item.path === "/") return "home";
        return item.path.slice(1).replace("#", "");
      });
      
      let foundActive = false;
      
      // Check sections from bottom to top
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // More precise detection using 30% of viewport height
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
            setActiveSection(sectionId);
            foundActive = true;
            break;
          }
        }
      }

      // If no section is active, clear active section
      if (!foundActive) {
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add glowing underline style
  const activeLinkStyle = "relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:bg-white after:rounded-full after:shadow-[0_0_8px_2px_rgba(255,255,255,0.8)] hover:after:opacity-50";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick(0)}
            className="text-6xl md:text-3xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            Tamoor.
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <LanguageSwitcher />
            {navItems.map((item, index) => {
              const sectionId = item.path.slice(1).replace("#", "");
              const isActive = 
                activeSection === sectionId ||
                (sectionId === "projects" && activeSection === "projects") ||
                (sectionId === "" && activeSection === "home" && pathname === "/");
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(index)}
                  className={`relative text-jg font-large transition-colors ${
                    isActive ? 'text-white' : 'text-gray-300 hover:text-white hover:after:opacity-50'
                  } ${isActive ? activeLinkStyle : ''}`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>

            <ShimmerButton 
              onClick={async () => {
                console.log('Button clicked!');
                if (window.location.pathname === "/") {
                  // Scroll to contact section
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", "/#contact");
                  }
                } else {
                  // Redirect to home page with contact hash
                  window.location.href = "/#contact";
                  // Force scroll after page load
                  window.onload = () => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  };
                }
              }}
              className="bg-gradiet-white pxion-all duration-300 shadow-lg hover:shadow-xl"
            >
              Embaucher-moi !
            </ShimmerButton>
            
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-sm">
              {navItems.map((item, index) => {
                const sectionId = item.path.slice(1).replace("#", "");
                const isActive = 
                  activeSection === sectionId ||
                  (sectionId === "projects" && activeSection === "projects") ||
                  (sectionId === "" && activeSection === "home" && pathname === "/");
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      handleNavClick(index);
                      setIsOpen(false);
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "text-white bg-gray-900"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    } ${isActive ? activeLinkStyle : ''} hover:after:opacity-50`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
