import HeroSection from "@/app/components/HeroSection";
import BrandProblemsSection from "./components/BrandProblemSection";
import BrandCapabilitiesSection from "./components/BrandCapabilitiesSection";
import FAQSection from "@/app/components/FAQSection";
import FinalCTASection from "@/app/components/FinalCTASection";
import BrandCaseStudySection from "./components/BrandCaseStudySection";
import BrandTargetingSection from "./components/BrandTargetingSection";
import BrandWorkflowSection from "./components/BrandWorkflowSection";
import BrandResultsSection from "./components/BrandResultsSection";

export default function page() {
  return (
    <main>
      <HeroSection
        toptext="Brand Identity & Trust Perception"
        heading1="Perception shapes "
        headingColor="trust"
        heading2=" before products prove themselves."
        subheading="Trust is not created by branding alone. It is reinforced through messaging, and operational clarity."
        imageUrl="/images/brand-long.webp"
      />
      <BrandProblemsSection />
      <BrandCapabilitiesSection />
      <BrandCaseStudySection />
      <BrandTargetingSection />
      <BrandResultsSection />
      <BrandWorkflowSection />
      <FinalCTASection
        text1="Elevate your product's perception"
        text2=" and build stronger trust with your users."
      />
      <FAQSection />
    </main>
  );
}
