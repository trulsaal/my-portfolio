import React from "react";

const ProfileImage = () => {
  return (
    <img
      className="z-10 absolute overflow-hidden md:w-2/3 md:h-full md:-bottom-10 md:-right-10 md:object-cover"
      src="/images/truls3.svg"
      alt="A photo of Truls"
    />
  );
};

export default ProfileImage;
