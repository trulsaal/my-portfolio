import { IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link } from "react-router";
import DefaultBtn from "../Buttons/DefaultBtn";

const ProjectInfo = ({ work, works, setCurrentWork, id }) => {
  const workSelectHandler = (e) => {
    const selectedWork = works.filter((state) => state.id === id);
    setCurrentWork(selectedWork[0]);
  };

  const [color, setColor] = useState(true);

  const changeColor = (e) => {
    if (window.scrollY > 800) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor, true);

  return (
    <section className="">
      <Link
        className={
          color
            ? "h-lvh text-xl grid grid-cols-[40%_60%] items-center rounded-lg  hover:shadow-gray-800 gap-4 text-white transition-opacity opacity-100 ease-in duration-[1s] font-bold"
            : "opacity-0"
        }
        to={work.site}
      >
        <div className="flex flex-col gap-4 p-4 w-[550px] rounded-xl duration-200">
          <p className="text-5xl bold">{work.name.toUpperCase()}</p>
          <p className="text-base tracking-wider">{work.info}</p>
          <div className="text-lg font-bold">
            DEVELOPMENT TOOLS:
            <ul className="pl-4 list-disc list-inside mt-2">
              {work.tools &&
                work.tools.map((tool, index) => (
                  <li
                    key={index}
                    className="my-2 list-none flex gap-1  text-gray-400 text-base leading-8 tracking-tight align-middle items-center h-fit"
                  >
                    <IconPlus size="12" stroke={2} /> {tool}
                  </li>
                ))}
            </ul>
            <DefaultBtn
              className="block w-56 border-gray-600 hover:border-white border-2 mt-6 px-6 py-4 rounded-lg text-center transition-all duration-150 hover:bg-white hover:text-black"
              label="Visit project"
            ></DefaultBtn>
          </div>
        </div>
        <div className="relative h-full items-center  flex flex-col justify-center  gap-10 w-full rounded-lg px-6 ">
          <div className="relative w-[850px] rounded-lg mb-10 ">
            <img src={work.preview} />

            <img
              className=" absolute z-10 w-fit -bottom-10 -right-10 h-96 rounded-lg object-contain"
              src={work.previewMobile}
            />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default ProjectInfo;
