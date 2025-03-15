import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projectsData } from "@/data/projects";
import { FlipWords } from "@/components/ui/flip-words";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const words = ["Innovant", "Créatif", "Efficace", "Moderne"];

  return (
    <div className="container mx-auto p-4 space-y-12">
      {/* Section Titre et Description */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-400 text-lg">{project.description}</p>
        <FlipWords words={words} className="text-2xl font-bold text-white mt-4" />
      </div>

      {/* Section Technologies */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Technologies Utilisées</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Section Défis */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Défis Rencontrés</h2>
        <ul className="list-disc list-inside space-y-2">
          {project.challenges.map((challenge, index) => (
            <li key={index} className="text-gray-400">
              {challenge}
            </li>
          ))}
        </ul>
      </div>

      {/* Section Captures d'écran */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Captures d'écran</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((image, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`Capture d'écran ${index + 1} de ${project.title}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Section Liens */}
      <div className="flex space-x-4">
        {project.gitUrl && (
          <a
            href={project.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Voir sur GitHub
          </a>
        )}
        {project.previewUrl && (
          <a
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            Voir en ligne
          </a>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projectsData.map(project => ({
    slug: project.slug,
  }));
} 