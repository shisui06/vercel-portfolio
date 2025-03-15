// Page "À propos" (route "/about")
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Timeline } from "@/components/ui/timeline";

export default function About() {
  const aboutText = "Je suis un développeur web débutant, passionné par la création d'applications web interactives. J'aime apprendre de nouvelles technologies et m'adapter rapidement à différents environnements de travail. J'ai déjà participé à des projets en équipe, ce qui m'a permis de découvrir les méthodes agiles comme Scrum et Kanban pour organiser le travail et livrer des fonctionnalités de manière continue. Je suis motivé par l'idée de relever de nouveaux défis et de travailler avec des équipes dynamiques pour créer des solutions web utiles. Mon objectif est de continuer à apprendre et de contribuer activement aux projets auxquels je participe.";

  // Add timeline data
  const timelineData = [
    {
      title: "2023",
      content: "Formation en développement web"
    },
    {
      title: "2022",
      content: "Agent de service à la clientèle"
    },
    // Add more timeline entries as needed
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">À propos de moi</h1>
        <TextGenerateEffect 
          words={aboutText} 
          className="text-lg text-gray-400 mb-12"
          duration={0.5} // Adjust speed as needed
        />
        <h2 className="text-3xl font-bold text-white mb-8">Mon Parcours</h2>
        <Timeline data={timelineData} />
      </div>
    </div>
  );
} 



