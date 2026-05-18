"use client";

import ProjectCard from "@/app/components/ProjectCard";

export default function OnboardingCaseStudySection() {
  return (
    <section className="relative w-full overflow-hidden py-24 sm:py-32 bg-[#f8fbff]">
      {/* Grid */}

      {/* Glow */}
      <div
        className="
          absolute
          top-0 left-1/2 
          w-[60vw] h-[60vw]
          bg-blue-200/20
          blur-[140px]
          rounded-full
        "
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="max-w-4xl">
          <p
            className="
              bodyfont
              text-xs sm:text-sm
              font-semibold
              tracking-[0.22em]
              uppercase
              text-[#118479]
            "
          >
            Example Case Study
          </p>

          <h2
            className="
              mt-5
              heading
              text-[2.3rem]
              sm:text-5xl
              lg:text-6xl
              leading-[0.92]
              tracking-[-0.05em]
              text-slate-800
            "
          >
            Restructuring onboarding for a high-trust fintech platform.
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              text-base sm:text-lg
              leading-relaxed
              text-slate-600
            "
          >
            RupeeFlow’s onboarding experience was redesigned to reduce
            hesitation, improve verification clarity, and create stronger trust
            perception across product touchpoints.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="mt-16">
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
        </div>
      </div>
    </section>
  );
}
