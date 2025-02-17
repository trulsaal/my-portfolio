import React from "react";
import ProfileImage from "./ProfileImage";
import DefaultBtn from "../Buttons/DefaultBtn";

const ProfileHero = ({ children }) => {
  return (
    <div className="bg-[#d4d2d3] h-full pt-24 grid grid-cols-2 relative overflow-x-visible overflow-y-clip">
      <div className="flex h-fit gap-4 w-72 justify-between">{children}</div>
      <div className="md:w-5/6 lg:w-full bottom-0 left-0">
        <ProfileImage />
      </div>
    </div>
  );
};

export default ProfileHero;
