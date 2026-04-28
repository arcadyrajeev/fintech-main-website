import AllProjects from "@/app/components/AllProjects";
import Bridge from "@/app/components/Bridge";
import CSHero from "@/app/components/CSHero";
import FinalCTASection from "@/app/components/FinalCTASection";
import React from "react";

const CaseStudies = () => {
  return (
    <div className="bg-neutral-50 ">
      <CSHero />
      <AllProjects />

      <FinalCTASection
        text1="If the problem feels familiar,"
        text2="a conversation usually helps."
      />
    </div>
  );
};

export default CaseStudies;
