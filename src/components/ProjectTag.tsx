import React from "react";

interface ProjectTagProps {
  name: string;
  onClick: (tag: string) => void;
  isSelected: boolean;
  className?: string;
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  name,
  onClick,
  isSelected,
  className,
}) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
        isSelected ? 'text-white border-purple-500' : 'text-gray-300 border-gray-600 hover:border-white'
      } bg-black/80 backdrop-blur-lg transition-all duration-300 shadow-lg hover:shadow-xl`}
    >
      {name}
    </button>
  );
};

export default ProjectTag; 