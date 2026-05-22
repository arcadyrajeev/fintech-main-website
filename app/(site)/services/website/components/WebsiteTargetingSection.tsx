"use client";

const scenariosLeft = [
  "Early-stage SaaS companies refining positioning",
  "Fintech platforms building user trust",
  "AI startups struggling with product clarity",
  "B2B products with complex narratives",
  "Companies repositioning for growth",
  "Founders preparing for fundraising",
  "Products with weak website conversion clarity",
  "Brands expanding into competitive markets",
  "Operational products needing clearer communication",
  "Businesses with inconsistent messaging systems",
];

const scenariosRight = [
  "Startups with confusing homepage narratives",
  "Products hidden behind technical language",
  "Companies struggling to explain differentiation",
  "Multi-product businesses lacking cohesion",
  "Teams rebuilding market perception",
  "Brands with visually strong but strategically weak websites",
  "Complex SaaS products needing simplified communication",
  "Products with fragmented brand systems",
  "Websites failing to communicate trust",
  "Companies improving positioning before scaling acquisition",
];

export default function WebsiteTargetingSection() {
  return (
    <section className="relative overflow-hidden w-full bg-[#020817]">
      {/* Glow */}
      <div className="pointer-events-none absolute top-0 left-0 w-[40vw] h-[40vw] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="pointer-events-none absolute bottom-0 right-0 w-[35vw] h-[35vw] bg-emerald-400/10 blur-[100px] rounded-full" />

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
          <p className="text-xs tracking-[0.28em] uppercase text-blue-400 font-semibold">
            Website positioning systems
          </p>

          <h2 className="mt-6 heading text-white font-light text-4xl md:text-6xl leading-[0.95] tracking-[-0.05em]">
            Strategic websites designed for clarity, positioning, and market
            perception.
          </h2>

          <p className="mt-8 text-neutral-400 text-sm md:text-lg max-w-3xl leading-relaxed">
            Built for companies where communication clarity, trust perception,
            differentiation, and narrative structure directly influence growth,
            conversion, and market understanding.
          </p>
        </div>

        {/* Lists */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
          {/* Left */}
          <div className="relative pl-8">
            {/* Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-sky-300 via-sky-400/60 to-transparent" />

            <div className="space-y-8">
              {scenariosLeft.map((item, index) => (
                <div key={index}>
                  <p className="text-white bodyfont font-light text-base md:text-lg tracking-tight leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative pl-8">
            {/* Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-sky-300 via-sky-400/60 to-transparent" />

            <div className="space-y-8">
              {scenariosRight.map((item, index) => (
                <div key={index}>
                  <p className="text-white bodyfont font-light text-base md:text-lg tracking-tight leading-relaxed">
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
