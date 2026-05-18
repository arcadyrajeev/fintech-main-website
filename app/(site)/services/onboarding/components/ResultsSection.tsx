"use client";

import { Check } from "lucide-react";

const results = [
  {
    value: "Reduced onboarding hesitation",
    desc: "Clearer sequencing and trust communication across sensitive flows.",
  },

  {
    value: "Improved onboarding comprehension",
    desc: "Users better understood verification, permissions, and progression.",
  },

  {
    value: "Higher operational confidence",
    desc: "Interfaces felt more structured, reliable, and decision-oriented.",
  },

  {
    value: "Reduced explanation dependency",
    desc: "Products became easier to understand without guided walkthroughs.",
  },
];

export default function ResultsSection() {
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
      <div className="pointer-events-none absolute top-0 right-0 w-[35vw] h-[35vw] bg-blue-400/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-24 md:py-32">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-xs tracking-[0.28em] uppercase text-blue-600 font-semibold">
            Outcomes
          </p>

          <h2 className="mt-6 heading text-[#0f172a]  text-4xl md:text-6xl leading-[0.95] tracking-tight">
            Better onboarding systems create operational trust before activation
            begins.
          </h2>

          <p className="mt-8 text-neutral-600 text-sm md:text-lg leading-relaxed max-w-3xl">
            The goal is not visual polish alone. The goal is reducing
            uncertainty, improving comprehension, and helping users move through
            onboarding with more confidence and less friction.
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
                border border-[#dbe4f0]
                bg-white/80
                backdrop-blur-sm
                p-6 md:p-7
              "
            >
              {/* Soft Glow */}
              <div className="pointer-events-none absolute top-0 right-0 w-24 h-24 bg-blue-400/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                <div
                  className="
                    w-10 h-10 rounded-xl
                    border border-blue-100
                    bg-blue-50
                    flex items-center justify-center
                    mb-6
                    "
                >
                  <Check className="w-5 h-5 text-blue-600 stroke-[2.5]" />
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
