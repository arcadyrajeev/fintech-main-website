import React from "react";

const CSHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-neutral-50 w-full pt-24 p-4 portrait:lg:pt-16 landscape:lg:pt-32 lg:px-36">
      <h1
        className="
           heading font-light text-3xl md:text-6xl lg:text-7xl text-primary-text px-3 md:px-0 w-full 
          "
      >
        Case Studies
      </h1>
      <h2 className="heading text-secondary-text text-sm my-3 md:my-0 px-3 md:px-0 w-full md:w-[25%]">
        Work focused on clarity, risk, and decision-making, not surface-level
        design
      </h2>
    </div>
  );
};

export default CSHero;
