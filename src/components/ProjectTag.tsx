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
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover: 