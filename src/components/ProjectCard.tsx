"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
    <Link href={`/projects/${slug}`}>
      <div
        onClick={handleClick}
        className="rounded-xl overflow-hidden shadow-lg bg-[#181818] w-full h-[400px] flex flex-col cursor-pointer hover:scale-105 transition-transform"
      >
        <div className="h-[250px] relative flex justify-center items-center">
          <Image
            alt={title}
            className="object-none"
            src={imgUrl}
            width={400}
            height={250}
            quality={75}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <div className="p-6 flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-[#ADB7BE] line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
} 