"use client";

import { Compass, Blocks, Route, BadgeInfo } from "lucide-react";

const capabilities = [
  {
    icon: Compass,
    title: "Product Positioning Systems",
    description:
      "Structuring how products communicate value, differentiation, market relevance, and strategic perception across the user journey.",
  },

  {
    icon: Blocks,
    title: "Narrative Architecture",
    description:
      "Building consistent messaging systems across onboarding, interfaces, workflows, landing pages, and product communication layers.",
  },

  {
    icon: Route,
    title: "User Understanding Flows",
    description:
      "Designing clearer progression logic so users can understand what the product does, how it works, and why actions matter.",
  },

  {
    icon: BadgeInfo,
    title: "Clarity & Trust Communication",
    description:
      "Translating operational complexity into understandable product narratives that strengthen confidence, adoption, and decision-making.",
  },
];

export default function NarrativeCapabilitiesSection() {
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
          bg-violet-400/10 blur-[140px]
          rounded-full
        "
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="max-w-4xl">
          <p
            className="
              bodyfont
              text-xs sm:text-sm
              font-semibold
              tracking-[0.22em]
              uppercase
              text-violet-400
            "
          >
            What We Structure
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
            Product narratives designed for clarity, positioning, and user
            understanding.
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
            Strong products fail when users cannot clearly interpret value,
            workflow logic, differentiation, or system behavior. Narrative
            systems align product perception with operational reality.
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
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-6
                  min-h-[260px]

                  transition-all duration-300
                  hover:border-violet-400/40
                  hover:bg-white/[0.045]
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    top-0 right-0
                    w-24 h-24
                    bg-violet-400/10
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
                      border border-violet-400/10
                      bg-violet-400/10
                      flex items-center justify-center
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={2}
                      className="text-violet-400"
                    />
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
