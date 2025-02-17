import React from "react";

const Hero = ({ children }) => {
  return (
    <hero className="bg-[#d4d2d3]  w-full px-16 grid grid-cols-[40%_60%] max-h-[600px] ">
      {children}
    </hero>
  );
};

export default Hero;
