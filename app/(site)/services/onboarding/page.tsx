import HeroSection from "@/app/components/HeroSection";

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
    </main>
  );
}
