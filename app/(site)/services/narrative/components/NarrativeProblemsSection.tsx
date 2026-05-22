"use client";

import {
  MessageSquareWarning,
  Waypoints,
  EyeOff,
  ScrollText,
} from "lucide-react";

const problems = [
  {
    icon: MessageSquareWarning,
    title: "Products communicate features, not meaning",
    description:
      "Most platforms explain what users can do, but fail to explain why the product matters, how it works, or where value actually comes from.",
  },

  {
    icon: Waypoints,
    title: "Narratives break across the product journey",
    description:
      "Landing pages, onboarding, dashboards, workflows, and sales messaging often operate with different logic, language, and positioning.",
  },

  {
    icon: EyeOff,
    title: "Strong capabilities stay invisible to users",
    description:
      "When operational complexity is not translated into a clear narrative system, differentiation becomes difficult to perceive or trust.",
  },

  {
    icon: ScrollText,
    title: "Positioning becomes diluted as products evolve",
    description:
      "As new features, use cases, and workflows are added, the original product story weakens and users struggle to understand the core value.",
  },
];

export default function NarrativeProblemsSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-28 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          top-0 left-1/2
          w-[70vw] h-[70vw]
          bg-violet-200/20
          blur-[140px]
          rounded-full
        "
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="max-w-5xl">
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
            Product Narrative
          </p>

          <h2
            className="
              mt-5
              heading
              font-light
              text-[2.3rem]
              sm:text-5xl
              lg:text-7xl
              leading-[0.92]
              tracking-[-0.05em]
              text-slate-800
              max-w-4xl
            "
          >
            Most products lose trust when users cannot clearly understand the
            story behind the system.
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              text-base sm:text-lg lg:text-xl
              leading-relaxed
              text-slate-600
            "
          >
            Product narrative failures happen when positioning, workflows,
            onboarding, feature communication, and user perception stop aligning
            into a single coherent system.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-16 sm:mt-20
            grid grid-cols-1 md:grid-cols-2
            gap-5 sm:gap-6
          "
        >
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border border-slate-300
                  bg-white/90
                  backdrop-blur-sm
                  p-6 sm:p-8 lg:p-10
                  transition-all duration-300
                  hover:border-violet-200
                  hover:shadow-[0_20px_80px_rgba(139,92,246,0.08)]
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    top-0 right-0
                    w-40 h-40
                    bg-violet-100/30
                    blur-3xl
                    rounded-full
                  "
                />

                <div className="relative">
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      border border-violet-100
                      bg-violet-50
                      flex items-center justify-center
                    "
                  >
                    <Icon
                      className="text-violet-700"
                      size={24}
                      strokeWidth={2}
                    />
                  </div>

                  <h3
                    className="
                      mt-8
                      heading
                      text-2xl
                      leading-[1]
                      tracking-[-0.03em]
                      text-slate-800
                      max-w-md
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-base sm:text-lg
                      leading-relaxed
                      text-slate-600
                      max-w-lg
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
