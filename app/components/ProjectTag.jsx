import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#116466] border-4 border-[#116466] font-bold"
    : "text-[#2C3531] border-[#2C3531] hover:border-[#D9B08C] hover:text-[#D9B08C]";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;