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
            accent="#0a9f7a"
          />

          <ProjectCard
            category="REAL ESTATE • PLATFORM SYSTEMS • OPERATIONAL TRUST"
            title="Designing a structured real estate platform with operational clarity | Realestify"
            description="Building a scalable marketplace ecosystem focused on property discovery, verification workflows, admin governance, and platform trust."
            imageUrl="/cases/realestify-cover.png"
            caseStudyLink="/case-studies/realestify"
            tags={["Marketplace UX", "Platform Systems", "Operational Trust"]}
            points={[
              "Structured property discovery flows",
              "Clearer governance and moderation systems",
              "Reduced operational friction across workflows",
            ]}
            outcome="Stronger Marketplace Trust and Workflow Clarity"
            focus="Platform Architecture and Trust Systems"
            accent="#345e8a"
          />

          {/* COPEEK */}
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
