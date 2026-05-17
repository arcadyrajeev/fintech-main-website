import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ProjectSection = () => {
  return (
    <section className="  w-full">
      <div
        className="
          max-w-7xl mx-auto
          px-6 sm:px-10 lg:px-24
          py-10 portrait:lg:py-12 landscape:lg:pt-[10vw]
          flex flex-col
        "
      >
        {/* Section Heading */}
        <h1
          className="
            heading
            text-3xl sm:text-4xl md:text-5xl
            text-center
            text-primary-text/90
            mb-1 sm:mb-2
          "
        >
          Featured Case Studies
        </h1>
        <h1
          className="
            heading
            text-sm
            font-medium 
            text-center
            text-primary-text/60
            mb-6 sm:mb-9
          "
        >
          Examples of what breaks when clarity doesn’t scale
        </h1>

        {/* Cards */}
        <div
          className="
            flex flex-col
            w-full
            gap-16 sm:gap-20 lg:gap-24
          "
        >
          <ProjectCard
            category="PAYMENTS • CROSS-BORDER • PRODUCT SYSTEMS"
            title="Making cross-border transfers easier to trust | Rupeeflow"
            description="Reducing onboarding hesitation, transaction uncertainty, and operational friction in a remittance platform built for high-volume money movement."
            imageUrl="/images/rupeeflow-product.png"
            caseStudyLink="/case-studies/rupeeflow"
            tags={["KYC UX", "Trust Systems", "Activation Flows"]}
            points={[
              "Improved onboarding comprehension",
              "Reduced transaction hesitation",
              "Clearer investor-facing product narrative",
            ]}
            outcome="Reduced Onboarding Friction"
            focus="UX flow and Positioning"
            accent="#0e5e90"
          />

          <ProjectCard
            category="AI VISIBILITY • BRAND SYSTEMS • OPERATIONAL DASHBOARDS"
            title="Designing AI visibility infrastructure | Copeek"
            description="Creating an operational monitoring platform that helps brands track AI perception, competitive visibility, and narrative consistency across emerging AI systems."
            imageUrl="/cases/copeek-cover.png"
            caseStudyLink="/case-studies/copeek"
            tags={[
              "AI Visibility",
              "Operational Dashboards",
              "Brand Infrastructure",
            ]}
            points={[
              "Structured AI visibility interpretation",
              "Reduced perception monitoring complexity",
              "Made brand visibility operationally measurable",
            ]}
            outcome="Improved AI Visibility Clarity"
            focus="Dashboard Direction and Brand Systems"
            accent="#1eabab"
          />

          <ProjectCard
            category="CRYPTO • RISK ANALYTICS • FINANCIAL UX"
            title="Structuring trading risk for faster decisions | BrokerQuant"
            description="Reorganizing execution risk, fee visibility, and market signals into a clearer operational system for crypto traders and analysts."
            imageUrl="/cases/bq-product1.png"
            caseStudyLink="/case-studies/brokerquant"
            tags={["Dashboard UX", "Data Hierarchy", "Behavioral Clarity"]}
            points={[
              "Improved financial signal hierarchy",
              "Reduced dashboard complexity",
              "Made risk perception immediately legible",
            ]}
            outcome="Improved Risk Signal Clarity"
            focus="UX Clarity and Information Architecture"
            accent="#de4c24"
          />
        </div>
        <div className=" my-14 flex items-center justify-center">
          <Link
            href={"/case-studies"}
            className="heading text-primary-text  font-medium hover:text-accent hover:underline py-2 px-4 underline-offset-5 transition-colors"
          >
            View All Case Studies
            <ArrowUpRight size={20} className="inline-block ml-2 mb-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
