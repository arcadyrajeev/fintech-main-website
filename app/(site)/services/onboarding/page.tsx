import CTAButton from "@/app/components/CTAButton";
import HeroSection from "@/app/components/HeroSection";
import OnboardingProblemsSection from "@/app/(site)/services/onboarding/components/OnboardingProblemsSection";
import OnboardingCapabilitiesSection from "./components/OnboardingCapabilitiesSection";
import OnboardingCaseStudySection from "./components/OnboardingCaseStudySection";
import OnboardingWorkflowSection from "./components/OnboardingWorkflowSection";
import FinalCTASection from "@/app/components/FinalCTASection";
import FAQSection from "@/app/components/FAQSection";
import OnboardingTargetingSection from "./components/OnboardingTargetingSection";
import ResultsSection from "./components/ResultsSection";

export default function page() {
  return (
    <main>
      <HeroSection
        toptext="Onboarding & KYC"
        heading1="Reduce"
        headingColor="hesitation "
        heading2="before users abandon the flow."
        subheading="Onboarding is where trust breaks first."
        imageUrl="/images/onboarding.webp"
      />
      <div className="py-12">
        <CTAButton
          text="Review My Onboarding Flow"
          href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20have%20a%20quick%20conversation."
          subtext="Let's explore how we can help."
        />
      </div>
      <OnboardingProblemsSection />
      <OnboardingCapabilitiesSection />
      <OnboardingCaseStudySection />
      <OnboardingTargetingSection />
      <ResultsSection />
      <OnboardingWorkflowSection />
      <FinalCTASection
        text1="Ready to reduce hesitation"
        text2="and Improve onboarding completion rates?"
      />
      <FAQSection />
    </main>
  );
}
