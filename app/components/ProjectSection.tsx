import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import CompactCaseCard from "./CompactCaseCard";
import CTAButton from "./CTAButton";

const ProjectSection = () => {
  return (
    <section className="w-full ">
      <div
        className="
          max-w-7xl mx-auto
          px-6 sm:px-10 lg:px-24
          py-20 lg:py-28
        "
      >
        {/* Heading */}
        <div className="mb-14 sm:mb-20">
          <p
            className="
              text-sm bodyfont font-semibold
              uppercase
              text-primary-text/60
              text-center
              mb-4
            "
          >
            Selected Work
          </p>

          <h2
            className="
              heading
              text-4xl sm:text-5xl lg:text-6xl
              leading-[0.95]
              tracking-[-0.04em]
              text-center
              text-primary-text/90
              max-w-3xl
              mx-auto
            "
          >
            Systems that became harder to trust at scale.
          </h2>

          <p
            className="
              mt-6
              text-sm sm:text-base
              leading-relaxed
              text-primary-text/55
              text-center
              max-w-2xl
              mx-auto
            "
          >
            These projects focused on reducing hesitation, improving product
            clarity, and restructuring trust across high-complexity platforms.
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col gap-8">
          {/* Expanded Featured */}
          <ProjectCard
            category="FINTECH • PAYMENTS • PRODUCT SYSTEMS"
            title="Designing trust into a fintech onboarding system | RupeeFlow"
            description="Building a cohesive fintech experience across brand identity, onboarding UX, authentication flows, and product systems to reduce hesitation and improve trust perception."
            imageUrl="/images/rupeeflow-product.png"
            caseStudyLink="/case-studies/rupeeflow"
            tags={["Brand Identity", "KYC UX", "Authentication Flows"]}
            points={[
              "Reduced onboarding hesitation",
              "Improved trust perception across touchpoints",
              "Created clearer product and operational narrative",
            ]}
            outcome="Improved Trust & Onboarding Clarity"
            focus="Brand Systems and Product UX"
            accent="#118479"
          />

          {/* Compact Cases */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CompactCaseCard
              category="AI VISIBILITY • OPERATIONAL DASHBOARDS"
              title="Designing AI visibility infrastructure"
              imageUrl="/cases/copeek-cover.png"
              caseStudyLink="/case-studies/copeek"
              accent="#1eabab"
            />

            <CompactCaseCard
              category="CRYPTO • RISK ANALYTICS • FINANCIAL UX"
              title="Structuring trading risk for faster decisions"
              imageUrl="/cases/bq-product1.png"
              caseStudyLink="/case-studies/brokerquant"
              accent="#de4c24"
            />
          </div>
        </div>
        <div className="pt-10">
          <CTAButton href="/case-studies" text="View All Case Studies" />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
