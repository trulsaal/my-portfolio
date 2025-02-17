import React from "react";
import DefaultBtn from "../Buttons/DefaultBtn";
import { useState } from "react";

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);

  const changeHeader = (e) => {
    if (window.scrollY >= 100) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  window.addEventListener("scroll", changeHeader, true);

  return (
    <>
      <header
        className={
          scrollHeader
            ? "hidden"
            : "bg-white h-[68px] fixed flex z-20 items-center px-16 w-full"
        }
      >
        <nav className="h-10 w-full items-center flex"></nav>
        <div className="flex justify-center w-20 ">NO | EN</div>
      </header>
      {setScrollHeader && (
        <header
          className={
            scrollHeader
              ? "h-[68px] fixed flex w-full bg-white z-20 items-center px-16"
              : "hidden"
          }
        >
          <DefaultBtn className="nav-button" label="about" />
          <DefaultBtn className="nav-button" label="skills I have" />
          <DefaultBtn
            className="nav-button"
            label="skills I am planning to learn"
          />
        </header>
      )}
    </>
  );
};

export default Header;
