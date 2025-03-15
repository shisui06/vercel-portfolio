"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/90 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Tamoor. Tous droits réservés.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 