import HomeHero from "./components/HomeHero";

import ProjectSection from "./components/ProjectSection";

import Bridge from "./components/Bridge";
import Problem from "./components/Problem";
import BridgeAccent from "./components/BridgeAccent";
import ScrollTraceBackground from "./components/ScrollTraceBackground";

import type { Metadata } from "next";
import Services from "./components/Services";
import FAQSection from "./components/FAQSection";
import WorkflowSection from "./components/WorkFlowSection";
import ICPSection from "./components/ICPSection";
import Timeline from "./components/Timeline";

import POVSection from "./components/POVSection";
import IndustriesSection from "./components/IndustriesSection";
import TrustedBySection from "./components/TrustedBySection";
import BlogSection from "./components/BlogSection";
import CommonProblemsSection from "./components/CommonProblemsSection";
import FinalSection from "./components/HomeCTASection";

export const metadata: Metadata = {
  metadataBase: new URL("https://arcadydesign.com"),

  title: {
    default: "Product Clarity Systems for Fintech & Operational Platforms",
    template: "%s | Arcady Design",
  },

  description:
    "We help fintech and operational platforms improve trust, onboarding, product clarity, and decision-making through UX systems, narrative strategy, and operational design.",

  keywords: [
    "fintech UX",
    "fintech product strategy",
    "operational platform UX",
    "dashboard UX",
    "financial UX",
    "product clarity systems",
    "trust systems",
    "operational SaaS UX",
    "UX strategy",
    "product narrative",
    "fintech onboarding UX",
    "decision systems UX",
    "analytics dashboard design",
    "infrastructure product UX",
    "complex workflow UX",
  ],

  openGraph: {
    title: "Product Clarity Systems for Fintech & Operational Platforms",

    description:
      "We design trust, onboarding, dashboard, and operational UX systems for fintech and high-complexity platforms.",

    url: "https://arcadydesign.com",

    siteName: "Arcady Design",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Product clarity systems for fintech and operational platforms",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Product Clarity Systems for Fintech & Operational Platforms",

    description:
      "UX systems, onboarding clarity, trust architecture, and operational product strategy for fintech and complex software platforms.",

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
    <div className="relative overflow-hidden  ">
      <ScrollTraceBackground />

      <div className="relative z-10">
        <HomeHero />
        <BridgeAccent />
        <TrustedBySection />
        <ProjectSection />
        <Problem />

        <Bridge
          size="med"
          text="Individually they are small. But together, they block capital."
        />

        <Services />

        <ICPSection />
        <IndustriesSection />

        <Timeline />

        <WorkflowSection />
        <CommonProblemsSection />

        <POVSection />

        <FinalSection />
        <BlogSection />
        <FAQSection />
      </div>
    </div>
  );
}
