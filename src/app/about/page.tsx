// Page "À propos" (route "/about")
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { LogoCarousel } from "@/components/logo-carousel";

export default function About() {
  const aboutText = "Je suis un développeur web débutant, passionné par la création d'applications web interactives. J'aime apprendre de nouvelles technologies et m'adapter rapidement à différents environnements de travail. J'ai déjà participé à des projets en équipe, ce qui m'a permis de découvrir les méthodes agiles comme Scrum et Kanban pour organiser le travail et livrer des fonctionnalités de manière continue. Je suis motivé par l'idée de relever de nouveaux défis et de travailler avec des équipes dynamiques pour créer des solutions web utiles. Mon objectif est de continuer à apprendre et de contribuer activement aux projets auxquels je participe.";

  // Add timeline data
  const timelineData = [
    {
      title: "ADT 2016-2024",
      content: (
        <div>
          <Image
            src="/public/images/job-logo/adt-logo.png" // Path to your logo
            alt="ADT Logo"
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
            className="mb-4" // Add any additional styling here
          />
          <p>Description of ADT 2016-2024.</p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p>Built and launched Aceternity UI and Aceternity UI Pro from scratch.</p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p>Started working on the initial design and concept for Aceternity UI.</p>
        </div>
      ),
    },
    {
      title: "2022",
      content: "Agent de service à la clientèle"
    },
    // Add more timeline entries as needed
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">À propos de moi</h1>
        <TextGenerateEffect 
          words={aboutText} 
          className="text-lg text-white mb-12"
          duration={0.5} // Adjust speed as needed
        />
        <h2 className="text-3xl font-bold text-white mb-8">Mon Parcours</h2>
        <Timeline data={timelineData} />
        <LogoCarousel logos={logos} />
      </div>
    </div>
  );
} 



