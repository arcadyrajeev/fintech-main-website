"use client";

const scenariosLeft = [
  "Operational fintech dashboards",
  "Multi-role SaaS platforms",
  "Internal admin systems",
  "Workflow automation products",
  "AI operational platforms",
  "Financial reporting interfaces",
  "Data-heavy enterprise tools",
  "Infrastructure monitoring systems",
  "Decision-support platforms",
  "Cross-functional operational products",
];

const scenariosRight = [
  "Analytics and intelligence dashboards",
  "CRM and sales operation systems",
  "Compliance and verification platforms",
  "Trading and investment interfaces",
  "B2B workspace products",
  "Complex onboarding environments",
  "Operational workflow systems",
  "Multi-step product ecosystems",
  "Role-based enterprise products",
  "High-complexity product architectures",
];

export default function ProductTargetingSection() {
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
            Product systems
          </p>

          <h2 className="mt-6 heading text-white font-light text-4xl md:text-6xl leading-[0.95] tracking-[-0.05em]">
            Structured product systems across operational workflows and
            high-complexity platforms.
          </h2>

          <p className="mt-8 text-neutral-400 text-sm md:text-lg max-w-3xl leading-relaxed">
            Designed for products where clarity, workflow structure, operational
            confidence, and scalable UX systems directly affect user trust and
            product adoption.
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
