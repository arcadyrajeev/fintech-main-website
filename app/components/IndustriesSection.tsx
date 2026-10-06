"use client";

const categoriesLeft = [
  "Fintech platforms",
  "Cross-border payments",
  "Financial dashboards",
  "Investor platforms",
  "Trading systems",
  "Risk & compliance systems",
  "KYC & onboarding",
  "Transaction workflows",
  "Financial operations",
  "Data-heavy fintech products",
];

const categoriesRight = [
  "HealthTech platforms",
  "Practice management systems",
  "Healthcare operations",
  "Credentialing workflows",
  "Real estate platforms",
  "Property marketplaces",
  "Agent & admin systems",
  "Multi-role platforms",
  "Operational SaaS",
  "Enterprise workflow systems",
];

export default function IndustriesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#081125]">
      {/* Glow Top */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Glow Bottom Left */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* Glow Right */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />

      <div
        className="
          relative z-10
          mx-auto max-w-7xl
          px-6 py-24
          sm:px-10
          md:py-32
          lg:px-24
        "
      >
        {/* Heading */}
        <div className="max-w-5xl">
          <p className="bodyfont mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-blue-300">
            Industries
          </p>

          <h2
            className="
              heading
              text-3xl font-light
              leading-[1.05]
              tracking-tight
              text-white
              md:text-5xl
            "
          >
            Complex product systems across fintech, healthcare, real estate, and
            operational SaaS.
          </h2>
        </div>

        {/* Lists */}
        <div
          className="
            mt-20
            grid grid-cols-2
            gap-10
            md:gap-24
          "
        >
          {/* Left */}
          <div className="relative pl-4 md:pl-8">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-400/80 to-transparent" />

            <div className="flex flex-col gap-6">
              {categoriesLeft.map((item) => (
                <p
                  key={item}
                  className="
                    text-sm leading-relaxed
                    text-white/90
                    md:text-base
                  "
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative pl-4 md:pl-8">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-cyan-400/80 to-transparent" />

            <div className="flex flex-col gap-6">
              {categoriesRight.map((item) => (
                <p
                  key={item}
                  className="
                    text-sm leading-relaxed
                    text-white/90
                    md:text-base
                  "
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
