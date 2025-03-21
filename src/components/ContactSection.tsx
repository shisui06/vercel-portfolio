"use client";
import { useEffect } from "react";

export default function ContactSection() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.location.hash === "#contact") {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          // Add small delay to ensure section is rendered
          setTimeout(() => {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    // Initial check
    handleScroll();

    // Listen for hash changes
    window.addEventListener("hashchange", handleScroll);
    return () => window.removeEventListener("hashchange", handleScroll);
  }, []);

  return (
    <section id="contact" className="min-h-screen py-12 ">
      <div className="bg-black/80 backdrop-blur-lg rounded-lg border border-white/10 shadow-xl p-8">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Contactez-moi</h2>
          <form className="max-w-2xl mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-white mb-2">Nom</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
                placeholder="Votre nom"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
                placeholder="Votre email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
                rows={5}
                placeholder="Votre message"
              />
            </div>
            <button
              type="submit"
              className="bg-lime-400 text-black px-6 py-3 rounded-lg hover:bg-lime-500 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}



