import React from "react";
import HeroGraphic from "./HeroGraphic";
import MiddleCta from "./MiddleCta";
import Image from "next/image";

const HomeHero = () => {
  return (
    <div className="bg-neutral-50  w-full p-4 portrait:lg:py-16 landscape:lg:py-24 lg:px-24">
      <p className="text-sm md:text-md lg:text-lg  body-font px-4 mt-22 lg:mt-16 font-medium text-slate-600 mb-3">
        <span className="text-orange-800 font-bold">PRODUCT</span>,{" "}
        <span className="text-orange-800 font-bold">NARRATIVE</span> , and{" "}
        <span className="text-orange-800 font-bold">TRUST</span> in fintech
        systems
      </p>

      <h1 className="heading text-5xl md:text-6xl lg:text-[7vw] text-primary-text  px-3  w-full portrait:lg:w-[70%] portrait:w-[80%] landscape:w-[80%]">
        Make your business legible to{" "}
        <span className="text-accent italic">Capital</span>
      </h1>
      <div className="relative w-screen left-1/2 right-1/2 lg:-mt-20 xl:-mt-[6vw] portrait:md:-mt-[4vw]  -ml-[50.5vw]">
        <Image
          className="w-full h-auto"
          src={"/hero-line12.svg"}
          alt="hero-line"
          height={20}
          width={1920}
        />

        {/* Pulsing Node */}
        <div className="absolute -top-2 right-10 md:-top-4 md:right-30  xl:-top-4 xl:right-50">
          <span className="relative flex h-[10vw] md:h-[6vw] w-[10vw] md:w-[6vw]">
            {/* Pulse */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping"></span>

            {/* Solid dot */}
            <span className="relative inline-flex rounded-full body-font text-white font-bold  text-4xl md:text-5xl xl:text-6xl items-center justify-center h-[10vw] md:h-[6vw] w-[10vw] md:w-[6vw] bg-blue-600">
              $
            </span>
          </span>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <h1 className="p-4 text-2xl portrait:md:-mt-[6vw] landscape:xl:-mt-[7vw] lg:text-4xl text-right heading text-primary-text/90 font-light lg:leading-[1.2] tracking-tight ">
          Metrics improve, <br />
          But capital doesn’t follow?
        </h1>
      </div>
      <div className="w-full px-2 lg:px-10 py-6 md:py-8 lg:py-10 xl:py-20 flex ">
        <HeroGraphic />
      </div>
      <MiddleCta />
    </div>
  );
};

export default HomeHero;
