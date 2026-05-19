"use client";

const scenariosLeft = [
  "Fintech and payment platforms",
  "AI and infrastructure products",
  "Operational SaaS systems",
  "Enterprise workflow platforms",
  "Data-heavy software products",
  "Investor-facing fintech products",
  "Dashboard and analytics systems",
  "Internal operational tools",
  "B2B product ecosystems",
  "High-trust digital products",
];

const scenariosRight = [
  "Products with weak trust perception",
  "Brands lacking visual consistency",
  "Generic SaaS brand systems",
  "Products struggling with credibility",
  "Operational tools with poor identity",
  "Complex products needing clarity",
  "Founders repositioning perception",
  "Products with fragmented communication",
  "Teams refining tone of voice",
  "Scaling products needing consistency",
];

export default function BrandTargetingSection() {
  return (
    <section className="relative overflow-hidden w-full bg-[#020817]">
      {/* Glow */}
      <div className="pointer-events-none absolute top-0 left-0 w-[40vw] h-[40vw] bg-cyan-600/10 blur-[140px] rounded-full" />

      <div className="pointer-events-none absolute bottom-0 right-0 w-[35vw] h-[35vw] bg-purple-400/10 blur-[120px] rounded-full" />

      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.05]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-24 md:py-32">
        {/* Heading */}
        <div className="max-w-5xl">
          <p className="text-xs tracking-[0.28em] uppercase text-cyan-400 font-semibold">
            Common brand perception scenarios
          </p>

          <h2 className="mt-6 heading text-white font-light text-4xl md:text-6xl leading-[0.95] tracking-tight">
            Identity systems built for products that need stronger trust,
            consistency, and perceived credibility.
          </h2>

          <p className="mt-8 text-neutral-400 text-sm md:text-lg max-w-3xl leading-relaxed">
            Especially for operational products where visual consistency,
            communication clarity, and perception directly influence trust and
            product interpretation.
          </p>
        </div>

        {/* Lists */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
          {/* Left */}
          <div className="relative pl-8">
            {/* Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-300 via-cyan-400/60 to-transparent" />

            <div className="space-y-8">
              {scenariosLeft.map((item, index) => (
                <div key={index}>
                  <p className="text-white bodyfont font-light text-base md:text-lg tracking-tight">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative pl-8">
            {/* Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-300 via-cyan-400/60 to-transparent" />

            <div className="space-y-8">
              {scenariosRight.map((item, index) => (
                <div key={index}>
                  <p className="text-white bodyfont font-light text-base md:text-lg tracking-tight">
                    {item}
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
