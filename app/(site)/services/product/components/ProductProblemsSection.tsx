"use client";

import { Layers3, Workflow, ShieldAlert, ScanSearch } from "lucide-react";

const problems = [
  {
    icon: Layers3,
    title: "Products become harder to interpret as they scale",
    description:
      "Interfaces often accumulate features, states, and workflows without a clear structural system connecting them.",
  },

  {
    icon: Workflow,
    title: "Operational flows feel fragmented",
    description:
      "Users lose confidence when dashboards, onboarding, workflows, and actions feel disconnected from each other.",
  },

  {
    icon: ShieldAlert,
    title: "Trust weakens under complexity",
    description:
      "In high-stakes platforms, unclear hierarchy and inconsistent interaction patterns create hesitation and decision fatigue.",
  },

  {
    icon: ScanSearch,
    title: "Users struggle to understand system behavior",
    description:
      "Most operational products explain features individually but fail to clarify how the overall system works together.",
  },
];

export default function ProductProblemsSection() {
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
          bg-blue-200/20
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
              text-blue-700
            "
          >
            Product Complexity
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
            Most product friction begins when UX becomes more complex than the
            workflow itself.
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
            Product systems fail when users cannot clearly interpret structure,
            hierarchy, workflow progression, permissions, or operational logic.
            Clarity becomes critical as platforms scale in complexity.
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
                  hover:border-blue-200
                  hover:shadow-[0_20px_80px_rgba(16,185,129,0.08)]
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    top-0 right-0
                    w-40 h-40
                    bg-blue-100/30
                    blur-3xl
                    rounded-full
                  "
                />

                <div className="relative">
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      border border-blue-100
                      bg-blue-50
                      flex items-center justify-center
                    "
                  >
                    <Icon className="text-blue-700" size={24} strokeWidth={2} />
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
