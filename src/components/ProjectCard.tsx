"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  gitUrl?: string;
  previewUrl?: string;
  slug: string;
}

export default function ProjectCard({
  title,
  description,
  imgUrl,
  gitUrl,
  previewUrl,
  slug,
}: ProjectCardProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // If already on the main page, scroll to the project section
    if (window.location.pathname === "/") {
      const projectSection = document.getElementById("projects");
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: "smooth" });
        // Update URL hash
        window.history.pushState(null, "", `/#projects`);
      }
    } else {
      // Navigate to the dynamic project page
      router.push(`/projects/${slug}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-xl overflow-hidden shadow-lg bg-[#181818] w-full h-[400px] flex flex-col cursor-pointer"
    >
      <div className="relative h-60">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 flex-grow">{description}</p>
        <div className="mt-4 flex space-x-2">
          {gitUrl && (
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              onClick={(e) => e.stopPropagation()} // Prevent card click
            >
              GitHub
            </a>
          )}
          {previewUrl && (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors"
              onClick={(e) => e.stopPropagation()} // Prevent card click
            >
              Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 