"use client";

import { Check } from "lucide-react";

const results = [
  {
    value: "Improved trust perception",
    desc: "Products felt more credible, structured, and operationally reliable across touchpoints.",
  },

  {
    value: "Stronger brand consistency",
    desc: "Identity systems became more cohesive across product, website, onboarding, and communication.",
  },

  {
    value: "Clearer communication systems",
    desc: "Tone of voice and messaging became easier to understand and more confidence-building.",
  },

  {
    value: "Better product recognition",
    desc: "Products developed stronger differentiation, memorability, and perceived market maturity.",
  },
];

export default function BrandResultsSection() {
  return (
    <section className="relative overflow-hidden w-full bg-[#fdfcff]">
      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.4]
          [background-image:linear-gradient(to_right,#f3e8ff22_1px,transparent_1px),linear-gradient(to_bottom,#f3e8ff22_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-[35vw] h-[35vw] bg-cyan-400/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-24 md:py-32">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-xs tracking-[0.28em] uppercase text-cyan-600 font-semibold">
            Outcomes
          </p>

          <h2 className="mt-6 heading text-[#0f172a] text-4xl md:text-6xl leading-[0.95] tracking-tight">
            Better identity systems improve how products get interpreted,
            trusted, and remembered.
          </h2>

          <p className="mt-8 text-neutral-600 text-sm md:text-lg leading-relaxed max-w-3xl">
            Brand perception shapes trust before onboarding or product adoption
            begins. Clear identity and communication systems help products feel
            more legitimate, consistent, and operationally mature.
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
                rounded-2xl
                border border-[#f1e4ff]
                bg-white/80
                backdrop-blur-sm
                p-6 md:p-7
              "
            >
              {/* Soft Glow */}
              <div className="pointer-events-none absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                <div
                  className="
                    w-10 h-10 rounded-xl
                    border border-cyan-100
                    bg-cyan-50
                    flex items-center justify-center
                    mb-6
                  "
                >
                  <Check className="w-5 h-5 text-cyan-600 stroke-[2.5]" />
                </div>

                <h3 className="heading text-[#0f172a] font-medium text-xl leading-tight">
                  {item.value}
                </h3>

                <p className="mt-4 text-neutral-600 text-sm leading-relaxed">
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
