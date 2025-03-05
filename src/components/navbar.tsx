"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

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
    path: "/projects",
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

  const handleNavClick = (index: number) => {
    onSectionChange(index);
    const sectionId = navItems[index].path.slice(1); // Remove the leading '/'
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: Navigate to the route if the section doesn't exist
      window.location.href = navItems[index].path;
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.path.slice(1));
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick(0)}
            className="text-2xl md:text-3xl font-bold text-white hover:text-lime-400 transition-colors"
          >
            Tamoor.
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const sectionId = item.path.slice(1);
              const isActive = activeSection === sectionId || pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(index)}
                  className="relative text-sm font-medium transition-colors text-gray-300 hover:text-white"
                >
                  {item.name}
                  {(isActive) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 top-full h-[2px] w-full bg-lime-400"
                    />
                  )}
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

            <button className="bg-lime-400 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-lime-500 transition-colors">
              Hire Me
            </button>
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
              {navItems.map((item, index) => (
                <button
                  key={item.path}
                  onClick={() => {
                    handleNavClick(index);
                    setIsOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.path
                      ? "text-lime-400 bg-gray-900"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
