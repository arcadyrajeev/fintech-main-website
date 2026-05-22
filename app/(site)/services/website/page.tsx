import HeroSection from "@/app/components/HeroSection";

import WebsiteProblemsSection from "./components/WebsiteProblemsSection";
import WebsiteCapabilitiesSection from "./components/WebsiteCapbilitiesSection";
import WebsiteCaseStudySection from "./components/WebsiteCaseStudySection";
import WebsiteTargetingSection from "./components/WebsiteTargetingSection";
import WebsiteResultsSection from "./components/WebsiteResultSection";
import WebsiteWorkflowSection from "./components/WebsiteWorkflowSection";
import FinalCTASection from "@/app/components/FinalCTASection";
import FAQSection from "@/app/components/FAQSection";

export default function page() {
  return (
    <main>
      <HeroSection
        toptext="Website Design & Positioning"
        heading1=""
        headingColor="Websites "
        heading2="fail when users cannot understand the value fast enough."
        subheading="Clarity, narrative structure, and positioning determine whether users continue or leave."
        imageUrl="/images/website-long.webp"
      />
      <WebsiteProblemsSection />
      <WebsiteCapabilitiesSection />
      <WebsiteCaseStudySection />
      <WebsiteTargetingSection />
      <WebsiteResultsSection />
      <WebsiteWorkflowSection />

      <FinalCTASection
        text1="Turn your website into a "
        text2="clearer business narrative."
      />
      <FAQSection />
    </main>
  );
}
