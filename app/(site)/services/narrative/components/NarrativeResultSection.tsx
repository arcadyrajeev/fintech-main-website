"use client";

import { Check } from "lucide-react";

const results = [
  {
    value: "Clearer product understanding",

    desc: "Users understood platform value, workflows, and operational logic more quickly across onboarding and product interaction layers.",
  },

  {
    value: "Stronger positioning clarity",

    desc: "Products communicated differentiation, trust, and strategic value more consistently across interfaces and messaging systems.",
  },

  {
    value: "Reduced narrative fragmentation",

    desc: "Landing pages, dashboards, workflows, onboarding, and feature communication aligned into a more cohesive product story.",
  },

  {
    value: "Higher trust and adoption confidence",

    desc: "Users felt more certain navigating complex systems when workflows, hierarchy, and product behavior became easier to interpret.",
  },
];

export default function NarrativeResultsSection() {
  return (
    <section className="relative overflow-hidden w-full bg-[#f8fafc]">
      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.4]
          [background-image:linear-gradient(to_right,#dbe4f022_1px,transparent_1px),linear-gradient(to_bottom,#dbe4f022_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-[35vw] h-[35vw] bg-violet-400/10 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-24 md:py-32">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm tracking-[0.28em] uppercase text-violet-700 font-bold">
            Outcomes
          </p>

          <h2 className="mt-6 heading text-[#0f172a] text-4xl md:text-6xl leading-[0.95] tracking-[-0.05em] font-light">
            Stronger product narratives reduce confusion before it affects
            trust, adoption, and user behavior.
          </h2>

          <p className="mt-8 text-neutral-600 text-sm md:text-lg leading-relaxed max-w-3xl">
            The objective is not better messaging alone. The objective is making
            products easier to understand, easier to trust, and easier to
            navigate across complex workflows, features, and operational
            systems.
          </p>
        </div>

        {/* Results Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {results.map((item, index) => (
            <div
              key={index}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border border-[#dbe4f0]
                bg-white/90
                p-7 md:p-8
                transition-all duration-300
                hover:border-violet-200
                hover:shadow-[0_20px_80px_rgba(139,92,246,0.08)]
              "
            >
              {/* Glow */}
              <div className="pointer-events-none absolute top-0 right-0 w-28 h-28 bg-violet-400/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="
                    w-11 h-11 rounded-2xl
                    border border-violet-100
                    bg-violet-50
                    flex items-center justify-center
                    mb-7
                  "
                >
                  <Check className="w-5 h-5 text-violet-700 stroke-[2.5]" />
                </div>

                {/* Title */}
                <h3 className="heading text-[#0f172a] font-medium text-xl leading-[1.1] tracking-[-0.03em]">
                  {item.value}
                </h3>

                {/* Description */}
                <p className="mt-5 text-neutral-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
