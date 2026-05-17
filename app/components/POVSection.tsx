"use client";

export default function POVSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border border-white/10
            bg-[#081125]
          "
        >
          {/* Grid Background */}
          <div
            className="
              absolute inset-0 opacity-[0.08]
              [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
              [background-size:50px_50px]
            "
          />

          {/* Glow Top */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-400/10 blur-[140px] rounded-full" />

          {/* Glow Right */}
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />

          {/* Glow Bottom */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-[350px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-10 lg:p-16">
            {/* Label */}
            <p className="text-xs bodyfont font-semibold tracking-[0.25em] uppercase text-blue-400">
              POINT OF VIEW
            </p>

            {/* Heading */}
            <h2 className="mt-6 max-w-4xl heading text-4xl  lg:text-6xl leading-[0.95] text-white">
              Clarity is
              <br />
              operational leverage.
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-base md:text-lg leading-relaxed text-neutral-300">
              In high-complexity products, structure changes how users trust,
              decide, activate, and move through the system.
            </p>

            {/* Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "Trust affects activation",
                  desc: "Users hesitate when interfaces feel operationally unclear.",
                },

                {
                  title: "Hierarchy affects decisions",
                  desc: "Poor structure increases cognitive load and slows action.",
                },

                {
                  title: "Onboarding affects retention",
                  desc: "Early confusion compounds across the entire product lifecycle.",
                },

                {
                  title: "Perception affects capital",
                  desc: "Investors and stakeholders judge operational maturity visually.",
                },

                {
                  title: "Workflows affect confidence",
                  desc: "Operational clarity changes how teams execute daily work.",
                },

                {
                  title: "Narrative affects adoption",
                  desc: "Products scale faster when value becomes instantly understandable.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-sm
                    p-6 md:p-8
                  "
                >
                  <p className="text-white heading text-base md:text-lg leading-tight">
                    {item.title}
                  </p>

                  <p className="mt-4 text-neutral-400 leading-relaxed text-xs md:text-sm max-w-md">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Statement */}
            <div className="mt-16 pt-10 ">
              <p className="max-w-4xl text-xl md:text-3xl heading leading-[1.1] text-white">
                Better interfaces are not the outcome.
                <br />
                Better operational understanding is.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
