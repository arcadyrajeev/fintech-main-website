"use client";

import { Check } from "lucide-react";

const results = [
  {
    value: "Improved operational clarity",

    desc: "Users understood workflows, hierarchy, and product structure more intuitively across complex systems.",
  },

  {
    value: "Reduced workflow confusion",

    desc: "Interfaces became easier to navigate with clearer sequencing, interaction logic, and decision visibility.",
  },

  {
    value: "Higher product confidence",

    desc: "Operational platforms felt more reliable, structured, and trustworthy during critical user actions.",
  },

  {
    value: "Scalable product consistency",

    desc: "Design systems created stronger alignment across dashboards, workflows, modules, and product states.",
  },
];

export default function ProductResultsSection() {
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
      <div className="pointer-events-none absolute top-0 right-0 w-[35vw] h-[35vw] bg-blue-400/10 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-24 md:py-32">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm  tracking-[0.28em] uppercase text-blue-700 font-bold">
            Outcomes
          </p>

          <h2 className="mt-6 heading text-[#0f172a] text-4xl md:text-6xl leading-[0.95] tracking-[-0.05em] font-light">
            Better product systems reduce operational friction before it affects
            user behavior.
          </h2>

          <p className="mt-8 text-neutral-600 text-sm md:text-lg leading-relaxed max-w-3xl">
            The goal is not interface polish alone. The goal is improving
            clarity, reducing interpretive effort, and helping users move
            through operational workflows with more confidence and less
            hesitation.
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
                hover:border-blue-200
                hover:shadow-[0_20px_80px_rgba(16,185,129,0.08)]
              "
            >
              {/* Glow */}
              <div className="pointer-events-none absolute top-0 right-0 w-28 h-28 bg-blue-400/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="
                    w-11 h-11 rounded-2xl
                    border border-blue-100
                    bg-blue-50
                    flex items-center justify-center
                    mb-7
                  "
                >
                  <Check className="w-5 h-5 text-blue-700 stroke-[2.5]" />
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
