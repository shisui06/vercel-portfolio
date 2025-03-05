import React from "react";

const ProjectTag = ({ name, onClick, isSelected, className }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-lime-400";

  return (
    <button
      className={`${buttonStyles}  py-2 cursor-pointer px-10 inline-block w-full border-2 border-lime-400 sm:w-fit rounded-full bg-black text-white hover:bg-lime-400 hover:text-black  transition-colors duration-300">
         ${className}`}
      onClick={() => onClick(name)}
>
      {name}
    </button>
  );
};

export default ProjectTag;
