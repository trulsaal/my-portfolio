import React from "react";

const DevImage = ({ src, className = "w-24" }) => {
  return <img className={className} src={src}></img>;
};

export default DevImage;
