"use client";
import Image from 'next/image';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import TimelineDemo from "@/components/ui/timeline-demo";
import { TracingBeam } from "@/components/ui/tracing-beam";

interface TimelineEntry {
  title: string;
  content: string;
}

const aboutText = "Je suis un développeur web débutant, passionné par la création d'applications web interactives. J'aime apprendre de nouvelles technologies et m'adapter rapidement à différents environnements de travail. J'ai déjà participé à des projets en équipe, ce qui m'a permis de découvrir les méthodes agiles comme Scrum et Kanban pour organiser le travail et livrer des fonctionnalités de manière continue. Je suis motivé par l'idée de relever de nouveaux défis et de travailler avec des équipes dynamiques pour créer des solutions web utiles. Mon objectif est de continuer à apprendre et de contribuer activement aux projets auxquels je participe.Je me suis rendu compte que j'aimer ca travailler en équipe mais je ne savais pas comment c'en game chnage pour moi d'etre capable de entraider et avoir du fun .Je remercie les gens que j'ai coloborer du fond de mon cours il m'ont apris et mon supporter qui ma grandement aider.Je ne plus jamais traviller sans une équip.e ";

const timelineData: TimelineEntry[] = [
  {
    title: "2024",
    content: "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
  },
  {
    title: "Early 2023",
    content: "Started working on the initial design and concept for Aceternity UI",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="text-white relative z-10">
      <TracingBeam>
        <div className="backdrop-blur-md bg-black/30 rounded-lg p-8">
          <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
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
              <h1 className="text-4xl font-bold text-white mb-8 font-cinzel">À propos de moi</h1>
              <TextGenerateEffect words={aboutText} className="text-lg text-white mb-12 font-cinzel" />
            </div>
          </div>
          {/* Full-width Timeline with container */}
          <div className="w-full px-4 py-12 relative z-10">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center font-cinzel">Mon Parcours</h2>
              <TimelineDemo />
            </div>
          </div>
        </div>
      </TracingBeam>
    </section>
  );
} 