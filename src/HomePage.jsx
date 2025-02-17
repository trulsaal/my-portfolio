import React, { useState, useRef } from "react";
import Header from "./Components/Header/Header";
import SubHeader from "./Components/Header/SubHeader";
import Hero from "./Components/Hero/Hero";
import ProfileHero from "./Components/Hero/ProfileHero";
import WorkHero from "./Components/Hero/WorkHero";
import InfoHero from "./Components/Hero/InfoHero";
import WorkOverview from "./Components/WorkOverview/WorkOverview";

const HomePage = () => {
  return (
    <div>
      <section id="hero-section">
        <Header />
        <SubHeader>
          <p className="text-[34px]">hi, im</p>
          <p className="pb-10 tracking-tighter text-[250px] leading-[150px]">
            truls
          </p>
        </SubHeader>
        <Hero>
          <ProfileHero>
            <div className="text-2xl">
              <span>
                self-thought designer and front-end developer with passion for
                <span className="text-gray-600"> timeless</span> <br />
                and
                <span className="text-gray-600"> intuitive </span>
                design.
              </span>
            </div>
          </ProfileHero>

          <InfoHero />
        </Hero>
      </section>
      <main className="">
        <WorkOverview>
          <WorkHero />
        </WorkOverview>
      </main>
    </div>
  );
};

export default HomePage;
