import { projectsData } from "@/data/projects";
import Image from "next/image";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-gray-400 mb-8">{project.description}</p>
            <div className="flex space-x-4">
              {project.gitUrl && (
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  GitHub
                </a>
              )}
              {project.previewUrl && (
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-colors"
                >
                  Preview
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
} 