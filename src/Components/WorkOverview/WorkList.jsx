import React from "react";
import ProjectInfo from "./ProjectInfo";

const WorkList = ({ setCurrentWork, works }) => {
  return (
    <div className="flex flex-col gap-2">
      {works.map((work) => (
        <ProjectInfo
          setCurrentWork={setCurrentWork}
          works={works}
          work={work}
          key={work.id}
          id={work.id}
        />
      ))}
    </div>
  );
};

export default WorkList;
