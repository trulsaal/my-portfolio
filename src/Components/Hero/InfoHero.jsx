import React, { useState } from "react";
import DefaultBtn from "../Buttons/DefaultBtn";
import ContactForm from "../ContactForm";
ContactForm;

const InfoHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    if (isVisible === true) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="bg-[#afadae] grid grid-cols-2 items-center h-[600px] p-24
    "
    >
      <div className="flex flex-wrap py-4 rounded-lg h-96 items-center justify-center text-2xl">
        <a
          className="text-black text-[100px] leading-[55px] tracking-tighter bold w-fit text-center hover:text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer transition-all duration-200
"
          href="#section1"
        >
          check out <br /> my work
        </a>
      </div>
      <div className="flex">
        <button
          className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
  text-[100px] leading-[30px] tracking-tighter bold w-full text-center hover:text-black cursor-pointer"
          onClick={openModal}
        >
          contact
        </button>
        {isVisible && (
          <button
            onClick={closeModal}
            className="z-50 top-0 absolute right-10 rounded-full text-[100px] text-white hover:text-gray-600 transition-all duration-100"
          >
            x
          </button>
        )}
        <ContactForm isVisible={isVisible}></ContactForm>
      </div>
    </div>
  );
};

export default InfoHero;
