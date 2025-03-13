"use client";
import Image from 'next/image';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Timeline } from "@/components/ui/timeline";

const aboutText = "Je suis un développeur web débutant, passionné par la création d'applications web interactives. J'aime apprendre de nouvelles technologies et m'adapter rapidement à différents environnements de travail. J'ai déjà participé à des projets en équipe, ce qui m'a permis de découvrir les méthodes agiles comme Scrum et Kanban pour organiser le travail et livrer des fonctionnalités de manière continue. Je suis motivé par l'idée de relever de nouveaux défis et de travailler avec des équipes dynamiques pour créer des solutions web utiles. Mon objectif est de continuer à apprendre et de contribuer activement aux projets auxquels je participe.Je me suis rendu compte que j'aimer ca travailler en équipe mais je ne savais pas comment c'en game chnage pour moi d'etre capable de entraider et avoir du fun .Je remercie les gens que j'ai coloborer du fond de mon cours il m'ont apris et mon supporter qui ma grandement aider.Je ne plus jamais traviller sans une équip.e ";

const timelineData = [
  {
    title: "2023",
    content: "Formation en développement web"
  },
  {
    title: "2022",
    content: "Premiers projets personnels"
  },
  {
    title: "2022",
    content: "Premiers projets personnels"
  },
  {
    title: "2022",
    content: "Premiers projets personnels"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="text-white relative z-10">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 rounded-md">
        <div> 
          <Image 
            src="/images/about-image.jpg" 
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-full" 
            alt="About Me"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">À propos de moi</h1>
          <TextGenerateEffect words={aboutText} className="text-lg text-gray-400 mb-12" />
        </div>
      </div>
      {/* Full-width Timeline with container */}
      <div className="w-full px-4 py-12 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Mon Parcours</h2>
        <Timeline data={timelineData} />
      </div>
    </section>
  );
} 