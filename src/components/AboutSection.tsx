"use client";
import Image from 'next/image';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import TimelineDemo from "@/components/ui/timeline-demo";
import { TracingBeam } from "@/components/ui/tracing-beam";


interface TimelineEntry {
  title: string;
  content: string;
}

const aboutText = "Je suis un développeur web débutant, passionné par la création d'applications web interactives. J'aime apprendre de nouvelles technologies et m'adapter rapidement à différents environnements de travail. J'ai déjà participé à des projets en équipe, ce qui m'a permis de découvrir les méthodes agiles comme Scrum et Kanban pour organiser le travail et livrer des fonctionnalités de manière continue. Je suis motivé par l'idée de relever de nouveaux défis et de travailler avec des équipes dynamiques pour créer des solutions web utiles. Mon objectif est de continuer à apprendre et de contribuer activement aux projets auxquels je participe.";

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
        <div className="backdrop-blur-md rounded-lg p-8">
          <div className="bg-black/80 backdrop-blur-lg rounded-lg border border-white/10 shadow-xl p-8">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
              <div> 
                <Image 
                  src="/images/webdevpic.jpg" 
                  width={1000}
                  height={600}
                  className="rounded-xl object-cover" 
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
                <h2 className="text-5xl font-bold text-white mb-8 text-center font-cinzel">Mon Parcours</h2>
                <TimelineDemo />
              </div>
            </div>
          </div>
        </div>
      </TracingBeam>
    </section>
  );
} 