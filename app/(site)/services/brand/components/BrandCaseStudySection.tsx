"use client";

import ProjectCard from "@/app/components/ProjectCard";

export default function BrandCaseStudySection() {
  return (
    <section className="relative w-full overflow-hidden py-24 sm:py-32 bg-[#fcfaff]">
      {/* Glow */}
      <div
        className="
          absolute
          top-0 left-1/2
          w-[60vw] h-[60vw]
          bg-cyan-200/20
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
              text-cyan-600
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
            Building perception systems for AI visibility and operational trust.
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
            Copeek’s brand and dashboard systems were designed to improve
            visibility interpretation, strengthen product credibility, and make
            AI perception monitoring feel operationally understandable.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="mt-16">
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
            accent="#0db5af"
          />
        </div>
      </div>
    </section>
  );
}
