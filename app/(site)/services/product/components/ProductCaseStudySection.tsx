"use client";

import ProjectCard from "@/app/components/ProjectCard";

export default function ProductCaseStudySection() {
  return (
    <section className="relative w-full overflow-hidden py-24 sm:py-32 bg-[#f8fbff]">
      {/* Glow */}
      <div
        className="
          absolute
          top-0 left-1/2
          -translate-x-1/2
          w-[60vw] h-[60vw]
          bg-blue-200/20
          blur-[140px]
          rounded-full
        "
      />

      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          [background-size:42px_42px]
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
              text-blue-700
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
            Designing operational clarity into a fintech product system.
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
            RupeeFlow’s platform experience was redesigned across onboarding,
            authentication, trust systems, and operational workflows to improve
            clarity, reduce hesitation, and create a more cohesive product
            experience.
          </p>
        </div>

        {/* Case Study */}
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
            accent="#0a9f7a"
          />
        </div>
      </div>
    </section>
  );
}
