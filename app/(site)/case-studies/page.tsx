import AllProjects from "@/app/components/AllProjects";
import Bridge from "@/app/components/Bridge";
import CSHero from "@/app/components/CSHero";
import FinalCTASection from "@/app/components/FinalCTASection";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fintech Case Studies | Fixing Clarity, Trust & Conversion Gaps",

  description:
    "Case studies on fintech products where growth slowed due to clarity gaps. See how aligning product, narrative, and trust improves decision-making, conversion, and capital readiness.",

  keywords: [
    "fintech case studies",
    "fintech product strategy",
    "startup positioning case study",
    "fintech UX case study",
    "conversion problems fintech",
    "product narrative examples",
    "investor readiness fintech",
    "fintech growth problems",
  ],

  openGraph: {
    title: "Fintech Case Studies | Clarity, Trust & Conversion",
    description:
      "Explore how fintech products fail silently through misinterpretation, and how fixing clarity changes outcomes.",
    url: "https://arcadydesign.com/case-studies",
    siteName: "Rajeev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fintech case studies and product clarity",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fintech Case Studies | Product & Narrative Alignment",
    description:
      "Real fintech systems where clarity, trust, and decision-making were improved.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://arcadydesign.com/case-studies",
  },
};

const CaseStudies = () => {
  return (
    <div className="bg-neutral-50 ">
      <CSHero />
      <AllProjects />

      <FinalCTASection
        text1="If the problem feels familiar,"
        text2="a conversation usually helps."
      />
    </div>
  );
};

export default CaseStudies;
