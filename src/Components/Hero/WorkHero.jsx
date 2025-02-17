import React, { useRef, useState, useEffect } from "react";

import workData from "../../data.jsx";
import WorkList from "../WorkOverview/WorkList.jsx";
import DevImage from "./DevImage.jsx";

const WorkHero = ({}) => {
  const [works, setWorks] = useState(workData);
  const [currentWork, setCurrentWork] = useState(works[0]);

  // const workSelectHandler = (e) => {
  //   const selectedWork = works.filter((state) => state.id === id);
  //   setCurrentWork(selectedWork[0]);
  // };

  const [isOnSide, setIsOnSide] = useState(false);

  const changeText = () => {
    if (window.scrollY > 1100) {
      setIsOnSide(true);
    } else {
      setIsOnSide(false);
    }
  };

  window.addEventListener("scroll", changeText, true);
  return (
    <>
      <section
        id="section1"
        className="grid pt-10 bg-linear-to-b from-gray-700 to-black relative "
      >
        <div className=" h-full  p-16 grid grid-cols-[40%_60%] px-72">
          <div className="flex flex-col gap-10 ">
            <div className="flex flex-col  w-[600px] p-4 rounded-lg gap-8 ">
              {setIsOnSide && (
                <div
                  className={"fixed z-30  pl-8 top-96 h-96 left-0 flex w-96"}
                >
                  {/* Fortsett her */}

                  <p
                    className={
                      !isOnSide
                        ? "opacity-0"
                        : "transition-opacity opacity-50 ease-in duration-[1s] leading-none w-10 text-slate-800 font-bold text-[50px]"
                    }
                  >
                    developer work and projects
                  </p>
                </div>
              )}
              <span className="text-nowrap tracking-tight font-semibold leading-[60px] text-[100px] text-white">
                design & developer projects
              </span>
              <div className=" w-10 flex flex-row justify-between rounded-lg h-10 items-center gap-2">
                <DevImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <DevImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />

                <DevImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                <DevImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <DevImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                <DevImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                <DevImage src="https://img.icons8.com/?size=100&id=YSWCDCSF4H3N&format=png&color=FFFFFF" />
                <DevImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
              </div>
              <div className="flex h-fit text-gray-200">
                <WorkList works={works} setCurrentWork={setCurrentWork} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkHero;
