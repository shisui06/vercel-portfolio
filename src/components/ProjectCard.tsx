import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl?: string;
  previewUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  className,
}) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg bg-black w-full h-[400px] flex flex-col ${className}`}>
      <div className="h-[250px] relative flex justify-center items-center">
        <Image
          alt={title}
          className="object-cover"
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
        <p className="text-gray-400 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard; 