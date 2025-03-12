"use client";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    console.log("Contact page mounted");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log("Form data:", data);
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Contactez-moi</h1>
        <form 
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-md border-2 border-red-500"
        >
          <div className="mb-4">
            <label className="block text-white font-medium mb-2">Nom</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              placeholder="Votre email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Envoyer
          </button>
          {formSubmitted && (
            <div className="mt-4 text-green-500 text-center">
              Merci! Votre message a été envoyé.
            </div>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
}
