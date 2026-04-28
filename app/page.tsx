import FinalCTASection from "./components/FinalCTASection";
import HomeHero from "./components/HomeHero";
import FintechNarrativeSection from "./components/Problem2";
import FintechClarityProblemSection from "./components/Problem";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import HowIWorkFocusSection from "./components/Solution";
import Bridge from "./components/Bridge";
import MiddleCta from "./components/MiddleCta";

export default function Home() {
  return (
    <>
      <HomeHero />

      <ProjectSection />
      <FintechClarityProblemSection />
      <FintechNarrativeSection />
      <Bridge
        text="When this goes unresolved, growth slows, conviction weakens, and
                capital conversations stretch longer than they should."
      />
      <HowIWorkFocusSection />
      <Bridge text="This usually shows up before a raise or after early traction." />
      <FinalCTASection
        text1="If the problem feels familiar,"
        text2="a conversation usually helps."
      />
    </>
  );
}
