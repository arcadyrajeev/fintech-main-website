import HeroSection from "@/app/components/HeroSection";
import ProductProblemsSection from "./components/ProductProblemsSection";
import ProductCapabilitiesSection from "./components/ProductCapbilitiesSection";
import ProductCaseStudySection from "./components/ProductCaseStudySection";
import ProductTargetingSection from "./components/ProductTargetingSection";
import ProductResultsSection from "./components/ProductResultSection";
import ProductWorkflowSection from "./components/ProductWorkflowSection";
import FinalCTASection from "@/app/components/FinalCTASection";
import FAQSection from "@/app/components/FAQSection";

export default function page() {
  return (
    <main>
      <HeroSection
        toptext="Product Design System"
        heading1=""
        headingColor="Product systems "
        heading2=" for high-complexity operational platforms"
        subheading="The strongest operational products reduce uncertainty, clarify decisions, and create confidence."
        imageUrl="/images/product-long2.webp"
      />
      <ProductProblemsSection />
      <ProductCapabilitiesSection />
      <ProductCaseStudySection />
      <ProductTargetingSection />
      <ProductResultsSection />
      <ProductWorkflowSection />

      <FinalCTASection
        text1="Reduce product complexity"
        text2="and create clearer operational workflows"
      />
      <FAQSection />
    </main>
  );
}
