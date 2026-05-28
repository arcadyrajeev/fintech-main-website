"use client";

const pillars = [
  {
    title: "Trust shapes activation",
    desc: "Users hesitate when systems feel unclear, risky, or operationally immature.",
  },

  {
    title: "Structure shapes decisions",
    desc: "Hierarchy, workflows, and navigation directly influence user behavior.",
  },

  {
    title: "Perception shapes growth",
    desc: "Products scale faster when value and operational maturity are instantly understood.",
  },
];

export default function POVSection() {
  return (
    <section className="w-full py-20 md:py-24 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            bg-[#081125]
          "
        >
          {/* Grid */}
          <div
            className="
              absolute inset-0 opacity-[0.05]
              [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
              [background-size:48px_48px]
            "
          />

          {/* Faded Curved Lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.5]"
            viewBox="0 0 1600 700"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M-40 620C240 520 300 240 650 240C980 240 1050 580 1640 420"
              stroke="#21E0EA"
              strokeWidth="1.2"
            />

            <path
              d="M-120 500C220 420 340 140 710 140C1100 140 1220 520 1720 260"
              stroke="#21E0EA"
              strokeWidth="1"
            />

            <path
              d="M40 700C300 620 420 340 760 340C1120 340 1280 700 1680 520"
              stroke="#21E0EA"
              strokeWidth="1"
            />
          </svg>

          {/* Glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-500/10 blur-[120px] rounded-full" />

          <div className="relative z-10 p-8 md:p-12 lg:p-14">
            {/* Label */}
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-sky-400">
              POINT OF VIEW
            </p>

            {/* Heading */}
            <h2 className="mt-5 heading text-4xl md:text-5xl leading-[0.95] text-white max-w-2xl">
              Clarity changes behavior.
            </h2>

            {/* Cards */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {pillars.map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-sm
                    p-5 md:p-6
                  "
                >
                  <h3 className="heading text-base md:text-lg text-white leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
