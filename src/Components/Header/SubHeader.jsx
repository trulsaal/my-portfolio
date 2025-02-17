import React from "react";
import {
  FaGit,
  FaJsSquare,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaFigma,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

const SubHeader = ({ children }) => {
  return (
    <div className="grid grid-cols-2 px-16 mb-4 h-fit relative pt-[68px]">
      <div className=""> {children}</div>
      <div className="right-0 pr-16 bottom-[18px] flex absolute justify-end gap-2 text-4xl text-[#afadae]">
        <FaJsSquare />
        <FaGithub />
        <FaGit />
        <FaHtml5 />
        <FaCss3 />
        <FaReact />
        <FaNodeJs />
        <FaFigma />
      </div>
    </div>
  );
};

export default SubHeader;
