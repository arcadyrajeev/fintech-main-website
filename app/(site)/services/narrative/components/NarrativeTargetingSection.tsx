"use client";

const scenariosLeft = [
  "Marketplace and platform ecosystems",
  "Multi-product SaaS environments",
  "Complex onboarding journeys",
  "AI products with abstract workflows",
  "Operational B2B software",
  "Enterprise workflow platforms",
  "Products struggling with positioning drift",
  "Feature-heavy digital products",
  "High-trust transactional platforms",
  "Scaling products with fragmented UX narratives",
];

const scenariosRight = [
  "Real estate and property platforms",
  "Fintech and financial service products",
  "Admin and governance systems",
  "Verification and compliance workflows",
  "Internal operational tools",
  "Products with low feature discoverability",
  "Cross-functional product ecosystems",
  "Multi-role platform architectures",
  "Data-heavy decision interfaces",
  "Products requiring stronger trust perception",
];

export default function NarrativeTargetingSection() {
  return (
    <section className="relative overflow-hidden w-full bg-[#020817]">
      {/* Glow */}
      <div className="pointer-events-none absolute top-0 left-0 w-[40vw] h-[40vw] bg-violet-500/10 blur-[120px] rounded-full" />

      <div className="pointer-events-none absolute bottom-0 right-0 w-[35vw] h-[35vw] bg-fuchsia-400/10 blur-[100px] rounded-full" />

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
          <p className="text-xs tracking-[0.28em] uppercase text-violet-400 font-semibold">
            Product narratives
          </p>

          <h2 className="mt-6 heading text-white font-light text-4xl md:text-6xl leading-[0.95] tracking-[-0.05em]">
            Narrative systems for products operating across complexity, trust,
            and multi-layered workflows.
          </h2>

          <p className="mt-8 text-neutral-400 text-sm md:text-lg max-w-3xl leading-relaxed">
            Built for platforms where positioning clarity, operational
            understanding, workflow communication, and product perception
            directly affect adoption, trust, and long-term scalability.
          </p>
        </div>

        {/* Lists */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
          {/* Left */}
          <div className="relative pl-8">
            {/* Line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-300 via-violet-400/60 to-transparent" />

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
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-300 via-violet-400/60 to-transparent" />

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
