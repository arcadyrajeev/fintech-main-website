import React from "react";
import ProjectCard from "./ProjectCard";

const AllProjects = () => {
  return (
    <section className="w-full">
      <div
        className="
          max-w-7xl mx-auto
          px-6 sm:px-10 lg:px-24
          py-[2vw] sm:pt-10 md:pt-12
          portrait:lg:py-4
          landscape:lg:pt-16
          flex flex-col
        "
      >
        {/* Cards */}
        <div
          className="
            flex flex-col
            w-full
            gap-16 sm:gap-20 lg:gap-24
          "
        >
          {/* RUPEEFLOW */}
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

          {/* CLOSEXPAY */}
          <ProjectCard
            category="PAYMENTS • BRAND SYSTEMS • USER TRUST"
            title="Building stronger financial trust through product perception | CloseXpay"
            description="Restructuring product communication, onboarding clarity, and trust signaling for a modern digital payments experience."
            imageUrl="/cases/closexpay-cover1.png"
            caseStudyLink="/case-studies/closexpay"
            tags={["Brand Systems", "Financial UX", "User Trust"]}
            points={[
              "Improved product perception",
              "Stronger onboarding clarity",
              "Reduced narrative ambiguity",
            ]}
            outcome="Increased Brand Clarity and User Trust"
            focus="Brand and Product Clarity"
            accent="#9d24de"
          />

          {/* BROKERQUANT */}
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

          {/* GST PLATFORM */}
          <ProjectCard
            category="COMPLIANCE • GST • FINANCIAL OPERATIONS"
            title="Making compliance workflows easier to navigate"
            description="Restructuring filing systems, invoice workflows, and operational visibility for teams managing complex tax and compliance processes."
            imageUrl="/cases/clarity.png"
            caseStudyLink="/case-studies/clarity1"
            tags={["Compliance UX", "Invoice Systems", "Financial Operations"]}
            points={[
              "Clearer filing status visibility",
              "Reduced operational confusion",
              "Improved compliance comprehension",
            ]}
            outcome="Improved Product Clarity"
            focus="Dashboard UI/UX"
            accent="#0dac77"
          />

          {/* INVESTOR NARRATIVE */}
          <ProjectCard
            category="INVESTOR UX • FINTECH NARRATIVE • POSITIONING"
            title="Making operational complexity easier for investors to understand | Rupeeflow"
            description="Designing investor-facing narrative systems focused on product clarity, market framing, and operational trust."
            imageUrl="/images/rupeeflow-pitch.png"
            caseStudyLink="/case-studies/pitch1"
            tags={["Pitch Design", "Market Framing", "Investor Narrative"]}
            points={[
              "Reduced investor ambiguity",
              "Clearer business positioning",
              "Improved financial storytelling",
            ]}
            outcome="Improved Investor Narrative Clarity"
            focus="Positioning and Pitch Design"
            accent="#0aa89d"
          />
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
