import React from "react";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-[#181818] w-full h-[400px] flex flex-col">
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
        <p className="text-[#ADB7BE] line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
