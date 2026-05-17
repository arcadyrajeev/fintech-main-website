"use client";

import {
  ArrowRightLeft,
  TrendingDown,
  ShieldAlert,
  Workflow,
  Landmark,
} from "lucide-react";

const timelineItems = [
  {
    title: "Conversion drops after onboarding",

    description:
      "Users complete flows, but activation, deposits, or operational adoption stay weak.",

    pattern: "Users understand the flow, but hesitate before committing.",

    icon: ArrowRightLeft,
  },

  {
    title: "The product feels harder to trust at scale",

    description:
      "Growth increases complexity. Interfaces, workflows, and messaging stop feeling coherent.",

    pattern: "Trust signals stop scaling consistently across the product.",

    icon: ShieldAlert,
  },

  {
    title: "Metrics improve but decisions slow",

    description:
      "Teams ship features continuously, but users and stakeholders struggle to understand value.",

    pattern: "Performance improves, but clarity around direction weakens.",

    icon: TrendingDown,
  },

  {
    title: "Operational workflows become fragmented",

    description:
      "Dashboards, hierarchy, permissions, and systems evolve separately across the product.",

    pattern: "Operational logic becomes harder to navigate over time.",

    icon: Workflow,
  },

  {
    title: "The company prepares for growth or fundraising",

    description:
      "Positioning, product structure, and trust signals need to communicate maturity instantly.",

    pattern: "The business grows faster than product perception.",

    icon: Landmark,
  },
];

export default function Timeline() {
  return (
    <section className="w-full py-24 md:py-32 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase bodyfont font-semibold   text-neutral-500 ">
            SIGNALS
          </p>

          <h2 className="mt-4 heading text-4xl md:text-6xl leading-[0.95] text-primary-text">
            Companies usually
            <br />
            reach out when:
          </h2>

          <p className="mt-6 text-base md:text-lg text-secondary-text leading-relaxed max-w-2xl">
            Operational friction becomes visible through hesitation, fragmented
            workflows, trust gaps, or slowing decision-making.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-neutral-300" />

          <div className="space-y-10">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    relative
                    flex
                    gap-6
                    md:gap-10
                    items-start
                  "
                >
                  {/* Dot + Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="
                        w-14 h-14
                        rounded-2xl
                        bg-white
                        border border-neutral-200
                        shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                        flex items-center justify-center
                      "
                    >
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                        className="text-[#1d4ed8]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="
                      flex-1
                      rounded-2xl
                      border border-neutral-200
                      bg-white
                      p-6 md:p-8
                      shadow-[0_20px_60px_rgba(0,0,0,0.03)]
                    "
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="max-w-2xl">
                        <p className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                          0{index + 1}
                        </p>

                        <h3 className="mt-3 heading text-2xl md:text-3xl leading-tight text-primary-text">
                          {item.title}
                        </h3>

                        <p className="mt-5 text-secondary-text leading-relaxed text-sm md:text-base max-w-xl">
                          {item.description}
                        </p>
                      </div>

                      {/* Right Mini Signal */}
                      <div
                        className="
                          lg:min-w-[220px]
                          rounded-2xl
                          border border-blue-100
                          bg-blue-50/60
                          px-5 py-4
                        "
                      >
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                          Common Pattern
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                          {item.pattern}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
