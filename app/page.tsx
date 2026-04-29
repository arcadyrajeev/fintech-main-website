import FinalCTASection from "./components/FinalCTASection";
import HomeHero from "./components/HomeHero";
import FintechNarrativeSection from "./components/Problem2";
import FintechClarityProblemSection from "./components/Problem";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import HowIWorkFocusSection from "./components/Solution";
import Bridge from "./components/Bridge";
import MiddleCta from "./components/MiddleCta";
import Problem from "./components/Problem";
import BridgeAccent from "./components/BridgeAccent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arcadydesign.com"),

  title: {
    default: "Fintech Brand & Product Strategy | Fix What Blocks Capital",
    template: "%s | Fintech Strategy",
  },

  description:
    "We help fintech founders align product, narrative, and trust so users, investors, and the market understand the business clearly. Fix conversion leaks, hesitation, and positioning gaps that block capital.",

  keywords: [
    "fintech strategy",
    "fintech product strategy",
    "fintech branding",
    "fintech UX",
    "startup positioning",
    "product narrative",
    "conversion optimization fintech",
    "investor readiness fintech",
    "fintech growth problems",
  ],

  openGraph: {
    title: "Make Your Fintech Legible to Capital",
    description:
      "Metrics improve, but capital doesn’t follow. Fix the gaps in product, narrative, and trust that block conviction.",
    url: "https://arcadydesign.com",
    siteName: "Your Brand Name",
    images: [
      {
        url: "/og-image.png", // create this later
        width: 1200,
        height: 630,
        alt: "Fintech strategy and product clarity",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Make Your Fintech Legible to Capital",
    description:
      "Fix the hidden frictions in fintech products that slow growth and block investment.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://arcadydesign.com",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <BridgeAccent />
      <ProjectSection />
      <Problem />
      <Bridge text="Individually they are small. But together, they block capital." />
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
