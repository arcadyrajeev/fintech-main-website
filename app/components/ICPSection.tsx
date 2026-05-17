"use client";

import { Landmark, Workflow, Layers3 } from "lucide-react";

export default function ICPSection() {
  const rows = [
    {
      title: "Fintech\nPlatforms",

      description:
        "Payments, remittance, lending, treasury, crypto, and financial infrastructure products where onboarding, trust, and workflow clarity directly affect activation and growth.",

      glow: "bg-blue-500/80",

      tags: ["Payments", "KYC UX", "Trust Systems", "Financial UX"],

      icon: Landmark,
    },

    {
      title: "Operational\nSaaS Systems",

      description:
        "Workflow-heavy platforms where dashboards, hierarchy, decision systems, and operational usability determine how teams execute daily work.",

      glow: "bg-cyan-400/80",

      tags: [
        "Dashboard UX",
        "Workflow Systems",
        "Operational Clarity",
        "Decision UX",
      ],

      icon: Workflow,
    },

    {
      title: "Scaling\nProduct Teams",

      description:
        "Teams preparing for scale, repositioning, fundraising, or product expansion where product understanding starts fragmenting across users, teams, and stakeholders.",

      glow: "bg-indigo-400/80",

      tags: ["Product Narrative", "Positioning", "Activation", "Product Trust"],

      icon: Layers3,
    },
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase bodyfont font-semibold   text-neutral-500">
            Who We Work With
          </p>

          <h2 className="mt-4 heading text-4xl md:text-6xl leading-[0.95] text-primary-text">
            Built for teams running
            <br />
            high-complexity products.
          </h2>

          <p className="mt-6 text-secondary-text text-base md:text-lg leading-relaxed max-w-2xl">
            Operational systems break differently. These are the teams we
            typically help restructure around clarity, trust, workflows, and
            product perception.
          </p>
        </div>

        {/* Main Wrapper */}
        <div className="relative mt-16 rounded-2xl overflow-hidden border border-white/10 bg-[#081125]">
          {/* Top Right Glow */}
          <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />

          {/* Bottom Left Glow */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-[350px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full" />

          {/* Center Glow */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-cyan-400/5 blur-[160px] rounded-full" />

          {/* Content */}
          <div className="relative z-10 divide-y divide-white/10">
            {rows.map((row, index) => {
              const Icon = row.icon;

              return (
                <div
                  key={index}
                  className="grid grid-cols-1 xl:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-20 p-6 md:p-12 lg:p-16 mb-8"
                >
                  {/* Left */}
                  <div className="flex gap-6 md:gap-10">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center">
                        {/* Glow */}
                        <div
                          className={`absolute w-10 h-10 rounded-full blur-xl ${row.glow}`}
                        />

                        {/* Icon */}
                        <Icon
                          size={34}
                          strokeWidth={1.8}
                          className="relative z-10 text-white"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="heading font-thin text-3xl md:text-5xl leading-[0.95] whitespace-pre-line text-white">
                        {row.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col justify-between">
                    <p className="text-sm md:text-base leading-relaxed text-neutral-300 max-w-lg">
                      {row.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-10 flex flex-wrap gap-3">
                      {row.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="
                            px-4 py-2
                            rounded-full
                            border border-white/10
                            bg-white/5
                            text-sm text-neutral-300
                            backdrop-blur-sm
                          "
                        >
                          {tag}
                        </span>
                      ))}
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
