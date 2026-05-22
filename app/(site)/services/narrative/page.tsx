import HeroSection from "@/app/components/HeroSection";
import NarrativeProblemsSection from "./components/NarrativeProblemsSection";
import NarrativeCapabilitiesSection from "./components/NarrativeCapbilitiesSection";
import NarrativeCaseStudySection from "./components/NarrativeCaseStudySection";
import NarrativeTargetingSection from "./components/NarrativeTargetingSection";
import NarrativeResultsSection from "./components/NarrativeResultSection";
import NarrativeWorkflowSection from "./components/NarrativeWorkflowSection";
import FAQSection from "@/app/components/FAQSection";
import FinalCTASection from "@/app/components/FinalCTASection";

export default function page() {
  return (
    <main>
      <HeroSection
        toptext="Product Narrative"
        heading1="Clarify "
        headingColor="the story "
        heading2="behind complex products."
        subheading="Narrative systems that make workflows, value, and product behavior easier to understand."
        imageUrl="/images/narrative-long.webp"
      />
      <NarrativeProblemsSection />
      <NarrativeCapabilitiesSection />
      <NarrativeCaseStudySection />
      <NarrativeTargetingSection />
      <NarrativeResultsSection />
      <NarrativeWorkflowSection />

      <FinalCTASection
        text1="Reduce confusion across onboarding,"
        text2=" workflows, and product communication."
      />
      <FAQSection />
    </main>
  );
}
