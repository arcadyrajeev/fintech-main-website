"use client";

import ProjectCard from "@/app/components/ProjectCard";

export default function NarrativeCaseStudySection() {
  return (
    <section className="relative w-full overflow-hidden py-24 sm:py-32 bg-[#f8fbff]">
      {/* Glow */}
      <div
        className="
          absolute
          top-0 left-1/2
          -translate-x-1/2
          w-[60vw] h-[60vw]
          bg-violet-200/20
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
              text-violet-700
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
            Structuring a clearer marketplace narrative for a real estate
            platform.
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
            Realestify’s platform narrative was redesigned across discovery,
            verification, governance, and operational workflows to improve user
            understanding, marketplace trust, and system clarity at scale.
          </p>
        </div>

        {/* Case Study */}
        <div className="mt-16">
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
        </div>
      </div>
    </section>
  );
}
