"use client";

import ProjectCard from "@/app/components/ProjectCard";

export default function WebsiteCaseStudySection() {
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
            Improving fintech credibility through website positioning and trust
            systems.
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
            CloseXpay’s website experience was restructured to improve product
            communication, onboarding clarity, and trust perception across the
            customer journey. The focus was reducing ambiguity while creating a
            more credible and cohesive fintech narrative.
          </p>
        </div>

        {/* Case Study */}
        <div className="mt-16">
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
        </div>
      </div>
    </section>
  );
}
