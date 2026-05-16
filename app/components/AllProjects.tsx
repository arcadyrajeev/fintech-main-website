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
            title="Cross-border payments UX restructuring | Rupeeflow"
            description="Aligning onboarding, transaction flows, and trust systems for a high-friction remittance platform."
            imageUrl="/images/rupeeflow-product.png"
            caseStudyLink="/case-studies/rupeeflow"
            tags={["KYC UX", "Trust Systems", "Activation Flows"]}
            points={[
              "Improved onboarding comprehension",
              "Reduced transaction hesitation",
              "Clearer investor-facing product narrative",
            ]}
          />

          {/* CLOSEXPAY */}
          <ProjectCard
            category="PAYMENTS • BRAND SYSTEMS • USER TRUST"
            title="Brand and narrative redesign | CloseXpay"
            description="Restructuring messaging, financial trust signals, and product communication for a modern payments experience."
            imageUrl="/cases/closexpay-cover1.png"
            caseStudyLink="/case-studies/closexpay"
            tags={["Brand Systems", "Financial UX", "User Trust"]}
            points={[
              "Improved product perception",
              "Stronger onboarding clarity",
              "Reduced narrative ambiguity",
            ]}
          />

          {/* BROKERQUANT */}
          <ProjectCard
            category="CRYPTO • RISK ANALYTICS • FINANCIAL UX"
            title="Trading risk clarity system | BrokerQuant"
            description="Restructuring execution risk, fee visibility, and market integrity signals for a crypto analytics platform."
            imageUrl="/cases/bq-product1.png"
            caseStudyLink="/case-studies/brokerquant"
            tags={["Dashboard UX", "Data Hierarchy", "Behavioral Clarity"]}
            points={[
              "Improved financial signal hierarchy",
              "Reduced dashboard complexity",
              "Made risk perception immediately legible",
            ]}
          />

          {/* GST PLATFORM */}
          <ProjectCard
            category="COMPLIANCE • GST • FINANCIAL OPERATIONS"
            title="GST and compliance visibility redesign"
            description="Restructuring tax compliance workflows and invoice management systems to improve clarity across filing status and operational risk."
            imageUrl="/cases/clarity.png"
            caseStudyLink="/case-studies/clarity1"
            tags={["Compliance UX", "Invoice Systems", "Financial Operations"]}
            points={[
              "Clearer filing status visibility",
              "Reduced operational confusion",
              "Improved compliance comprehension",
            ]}
          />

          {/* INVESTOR NARRATIVE */}
          <ProjectCard
            category="INVESTOR UX • FINTECH NARRATIVE • POSITIONING"
            title="Investor narrative system | Rupeeflow"
            description="Designing investor-facing narrative systems focused on market framing, product clarity, and financial communication."
            imageUrl="/images/rupeeflow-pitch.png"
            caseStudyLink="/case-studies/pitch1"
            tags={["Pitch Design", "Market Framing", "Investor Narrative"]}
            points={[
              "Reduced investor ambiguity",
              "Clearer business positioning",
              "Improved financial storytelling",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
