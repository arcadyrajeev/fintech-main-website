"use client";

import {
  Palette,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    icon: Palette,
    title: "Brand Identity Systems",
    description:
      "Build cohesive visual systems that increase recognition, consistency, and perceived product quality.",
  },

  {
    icon: MessageSquareText,
    title: "Tone of Voice Direction",
    description:
      "Align product communication, messaging, and interaction language into a clearer communication system.",
  },

  {
    icon: ShieldCheck,
    title: "Trust & Credibility Design",
    description:
      "Strengthen perceived legitimacy across onboarding, interfaces, websites, and product touchpoints.",
  },

  {
    icon: Sparkles,
    title: "Perception Consistency",
    description:
      "Create consistent perception across product systems, marketing, onboarding, and communication layers.",
  },
];

export default function BrandCapabilitiesSection() {
  return (
    <section className="relative w-full overflow-hidden py-24 sm:py-32 bg-[#020817]">
      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.05]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[60vw] h-[60vw]
          bg-blue-500/10 blur-[140px]
          rounded-full
        "
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top */}
        <div className="max-w-4xl">
          <p
            className="
              bodyfont text-xs sm:text-sm
              font-semibold tracking-[0.22em]
              uppercase text-cyan-400
            "
          >
            What We Work On
          </p>

          <h2
            className="
              mt-5
              heading
              text-[2.2rem]
              sm:text-5xl
              lg:text-6xl
              leading-[0.92]
              tracking-[-0.05em]
              text-white
            "
          >
            We design brand systems that improve trust, perception, and product
            credibility.
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              text-base sm:text-lg
              leading-relaxed
              text-slate-400
            "
          >
            Strong products often fail perception before users fully understand
            the product itself. Identity systems and communication consistency
            shape how trust gets formed.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-14
            grid grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
          "
        >
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border border-white/50
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-6
                  min-h-[260px]

                  transition-all duration-300
                  hover:border-cyan-400/50
                  hover:bg-white/[0.045]
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    top-0 right-0
                    w-24 h-24
                    bg-blue-500/10
                    blur-3xl
                    rounded-full
                  "
                />

                <div className="relative flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className="
                      w-12 h-12
                      rounded-2xl
                      border border-cyan-400/10
                      bg-cyan-500/10
                      flex items-center justify-center
                    "
                  >
                    <Icon size={20} strokeWidth={2} className="text-cyan-300" />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-6
                      heading
                      text-xl
                      leading-[1.1]
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-4
                      text-sm
                      leading-relaxed
                      text-slate-400
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
