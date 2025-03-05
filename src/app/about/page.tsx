// Page "À propos" (route "/about")
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function About() {
  const aboutText = "Je suis un développeur web débutant, passionné par la création d'applications web interactives. J'aime apprendre de nouvelles technologies et m'adapter rapidement à différents environnements de travail.";

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">À propos de moi</h1>
        <TextGenerateEffect words={aboutText} className="text-lg text-gray-400" />
      </div>
    </div>
  );
} 



