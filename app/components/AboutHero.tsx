import React from "react";

const AboutHero = () => {
  return (
    <div className="bg-neutral-100  w-full p-4 lg:p-24">
      <h1 className="p-4 text-3xl md:text-6xl text-center lg:text-left heading text-primary-text font-light mt-2 lg:leading-16 tracking-tight  pt-20">
        Hi! there, I'm <span className="font-normal">Rajeev Das</span>
        <br /> A <span className="font-medium text-accent">
          fintech & SaaS
        </span>{" "}
        <br />
        product strategist
      </h1>
      <div className="w-full">
        {" "}
        <h1 className="w-full lg:w-[50%] text-md lg:text-xl text-secondary-text font-medium ml-auto p-4 ">
          I strategize, design, and optimize data-driven fintech and SaaS
          products & websites that simplify complex systems, improve
          decision-making, and drive real business growth.
        </h1>
      </div>
      <div className="w-full mt-10 lg:mt-20 h-[70vh] bg-secondary-bg rounded-4xl"></div>
    </div>
  );
};

export default AboutHero;
