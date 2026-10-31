import React from "react";
import ProjectCard from "./ProjectCard";
import CTAButton from "./CTAButton";

const ProjectSection = () => {
  return (
    <section className="w-full">
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
            We work across product strategy, workflows, interfaces, and systems
            to make complex platforms easier to understand, navigate, and trust.
          </p>
        </div>

        {/* Standard Case Studies */}
        <div className="flex flex-col gap-10 lg:gap-14">
          {/* 03 - Realestify */}
          <ProjectCard
            category="REAL ESTATE • PLATFORM SYSTEMS • OPERATIONAL TRUST"
            title="Building operational trust in a real estate platform | Realestify"
            description="Structuring a luxury real estate marketplace around property discovery, verification, and multi-role workflows, creating a more cohesive experience for buyers, sellers, and administrators."
            imageUrl="/cases/realestify-cover.png"
            caseStudyLink="/case-studies/realestify"
            tags={[
              "Marketplace UX",
              "Role-Based Systems",
              "Platform Architecture",
            ]}
            points={[
              "Structured multi-role user experiences",
              "Integrated property discovery and verification",
              "Designed connected marketplace workflows",
            ]}
            outcome="Connected Marketplace Experience"
            focus="Platform and Workflow Systems"
            accent="#e1481e"
          />
          {/* 01 - RupeeFlow */}
          <ProjectCard
            category="FINTECH • PAYMENTS • PRODUCT SYSTEMS"
            title="Designing trust into a fintech onboarding system | RupeeFlow"
            description="Bringing brand identity, onboarding UX, authentication flows, and product systems into one cohesive fintech experience to make financial operations easier to understand and trust."
            imageUrl="/images/rupeeflow-product.png"
            caseStudyLink="/case-studies/rupeeflow"
            tags={["Brand Identity", "KYC UX", "Authentication Flows"]}
            points={[
              "Unified brand and product experience",
              "Structured onboarding and KYC journeys",
              "Established consistent product interaction patterns",
            ]}
            outcome="Trust & Onboarding Clarity"
            focus="Brand Systems and Product UX"
            accent="#118479"
          />

          {/* 02 - Copeek */}
          <ProjectCard
            category="AI VISIBILITY • OPERATIONAL DASHBOARDS"
            title="Designing AI visibility infrastructure | Copeek"
            description="Exploring how complex AI visibility data can be structured into clearer operational dashboards, helping users understand performance, identify patterns, and navigate information."
            imageUrl="/cases/copeek-cover.png"
            caseStudyLink="/case-studies/copeek"
            tags={["AI Visibility", "Data Dashboards", "Product UX"]}
            points={[
              "Structured information hierarchy",
              "Clearer presentation of operational data",
              "Dashboard-focused product experience",
            ]}
            outcome="AI Visibility & Data Clarity"
            focus="Operational Dashboards"
            accent="#1eabab"
          />
        </div>

        {/* View All */}
        <div className="pt-12 flex justify-center">
          <CTAButton href="/case-studies" text="View All Case Studies" />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
