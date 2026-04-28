import React from "react";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
  return (
    <div className="w-full flex-col bg-neutral-100 px-24 mb-30">
      <h1 className="heading text-primary-text/90 text-2xl mb-8 text-center ">
        Other Skills
      </h1>
      <div className=" flex flex-col lg:flex-row w-full justify-between rounded-4xl ">
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
};

export default SkillsSection;
