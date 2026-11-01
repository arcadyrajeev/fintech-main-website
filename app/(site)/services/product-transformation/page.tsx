import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SystemSection from "./components/SystemSection";
import ProcessSection from "./components/ProcessSection";
import CTASection from "./components/CTASection";
import UnivCTASection from "@/app/components/UnivCTASection";
import BlogSection from "@/app/components/BlogSection";
import FAQSection from "@/app/components/FAQSection";
import TransformationOutcomes from "./components/Outcomes";
import TransformationImpact from "./components/Outcomes";

export default function ProductTransformationPage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SystemSection />
      <ProcessSection />
      <TransformationImpact />
      <UnivCTASection />
      <BlogSection />
      <FAQSection />
    </main>
  );
}
