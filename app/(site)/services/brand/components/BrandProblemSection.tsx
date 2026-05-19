"use client";

import {
  ShieldAlert,
  Palette,
  MessageSquareWarning,
  EyeOff,
} from "lucide-react";

const problems = [
  {
    icon: ShieldAlert,
    title: "The product feels less credible than it actually is",
    description:
      "Weak visual identity and inconsistent communication reduce trust before users fully understand the product.",
  },

  {
    icon: Palette,
    title: "Brand identity lacks consistency across touchpoints",
    description:
      "Interfaces, onboarding, website systems, and communication layers often feel disconnected instead of unified.",
  },

  {
    icon: MessageSquareWarning,
    title: "Tone of voice creates confusion instead of confidence",
    description:
      "Generic, inconsistent, or overly technical communication weakens clarity and makes products harder to trust.",
  },

  {
    icon: EyeOff,
    title: "Strong products become visually forgettable",
    description:
      "Without a clear identity system, products struggle to build recognition, differentiation, and long-term perception.",
  },
];

export default function BrandProblemsSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-28 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Faded Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
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
          bg-cyan-200/20
          blur-[140px]
          rounded-full
        "
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top */}
        <div className="max-w-5xl">
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
            Brand Identity & Communication
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
              max-w-5xl
            "
          >
            Most perception problems begin with inconsistent identity and
            unclear communication systems.
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
            Users form trust judgments long before onboarding begins. Visual
            identity, tone of voice, and communication consistency directly
            shape credibility and perceived product quality.
          </p>
        </div>

        {/* Problem Cards */}
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
                  hover:border-cyan-200
                  hover:shadow-[0_20px_80px_rgba(217,70,239,0.08)]
                "
              >
                {/* Card Glow */}
                <div
                  className="
                    absolute
                    top-0 right-0
                    w-40 h-40
                    bg-cyan-100/30
                    blur-3xl
                    rounded-full
                  "
                />

                <div className="relative">
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      border border-cyan-100
                      bg-cyan-50
                      flex items-center justify-center
                    "
                  >
                    <Icon className="text-cyan-600" size={24} strokeWidth={2} />
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
