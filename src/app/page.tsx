import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";

export default function Home() {
  const words = ["Développeur", "Créatif", "Passionné", "Innovant"];
  const introText = "Bonjour, je suis Tamoor, un développeur web basé à Montréal.";

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 text-center">
        {/* Section Titre et Introduction */}
        <TextGenerateEffect words={introText} className="text-6xl font-bold text-white mb-4" />
        
        {/* Section FlipWords */}
        <div className="pt-8">
          <FlipWords words={words} className="text-4xl font-bold text-lime-400 mb-8" />
        </div>

        {/* Section Boutons */}
        <div className="mt-8 space-x-4">
          <Link
            href="/projects"
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Voir mes projets
          </Link>
          <Link
            href="/contact"
            className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
