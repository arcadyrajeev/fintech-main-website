import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const AllProjects = () => {
  return (
    <section className="bg-neutral-50 w-full">
      <div
        className="
          max-w-7xl mx-auto
          px-6 sm:px-10 lg:px-24
          py-[2vw] sm:pt-10 md:pt-12 portrait:lg:py-4 landscape:lg:pt-16
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
          <ProjectCard
            title="Pitch Design & Investor Narrative | RupeeFlow"
            description="Investor-facing pitch deck and narrative design focused on clarity, assumptions, and market framing."
            imageUrl="/images/rupeeflow-pitch.png"
            caseStudyLink="/case-studies/pitch1"
            points={[
              "Assumption-driven market framing",
              "Clear financial logic",
              "Reduced investor ambiguity",
            ]}
          />
          <ProjectCard
            title="Brand & narrative flow design | CloseXpay"
            description="Aligning product logic, user flows, and business narrative for a high-friction cross-border payments platform."
            imageUrl="/cases/closexpay-cover1.png"
            caseStudyLink="/case-studies/closexpay"
            points={[
              "User-friendly interface",
              "Real-time analytics",
              "Secure transactions",
            ]}
          />

          <ProjectCard
            title="Clarity & Data hierarchy | BrokerQuant"
            description="A crypto trade risk analysis platform restructured to make execution risk, fees, and market integrity signals immediately legible."
            imageUrl="/cases/bq-product1.png"
            caseStudyLink="/case-studies/brokerquant"
            points={[
              "Assumption-driven market framing",
              "Clear financial logic",
              "Reduced investor ambiguity",
            ]}
          />

          <ProjectCard
            title="Clarity & Data hierarchy"
            description="A GST and invoice management platform restructured to make tax compliance status, filing risk, and financial health signals immediately legible."
            imageUrl="/cases/clarity.png"
            caseStudyLink="/case-studies/clarity1"
            points={[
              "Assumption-driven market framing",
              "Clear financial logic",
              "Reduced investor ambiguity",
            ]}
          />

          <ProjectCard
            title="Product & narrative Partner | Rupeeflow"
            description="Aligning product logic, user flows, and business narrative for a high-friction cross-border payments platform."
            imageUrl="/images/rupeeflow-product.png"
            caseStudyLink="/case-studies/rupeeflow"
            points={[
              "User-friendly interface",
              "Real-time analytics",
              "Secure transactions",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
