"use client";

const categoriesLeft = [
  "Fintech platforms",
  "Operational SaaS",
  "Cross-border payments",
  "Internal workflow tools",
  "Compliance systems",
  "Financial dashboards",
  "Risk analytics",
  "KYC & onboarding",
  "Admin systems",
  "Multi-role platforms",
];

const categoriesRight = [
  "Investor platforms",
  "Data-heavy interfaces",
  "Trading systems",
  "Workflow automation",
  "CRM operations",
  "Reporting systems",
  "Multi-step products",
  "B2B SaaS products",
  "Decision-support tools",
  "Enterprise UX systems",
];

export default function IndustriesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#081125]">
      {/* Glow Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Glow Bottom Left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Glow Right */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6 sm:px-10 lg:px-24
          py-24 md:py-32
        "
      >
        {/* Heading */}
        <div className="max-w-5xl">
          <p className="text-xs uppercase bodyfont font-semibold tracking-[0.15em] text-blue-300 mb-5">
            Industries
          </p>

          <h2
            className="
              heading
              text-white
              text-4xl md:text-5xl 
              leading-[1.05]
              tracking-tight
            "
          >
            Structured product systems across fintech, operational workflows,
            and high-complexity platforms.
          </h2>
        </div>

        {/* Lists */}
        <div
          className="
            mt-20
            grid grid-cols-1 md:grid-cols-2
            gap-14 md:gap-24
          "
        >
          {/* Left */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-400/80 to-transparent" />

            <div className="flex flex-col gap-6">
              {categoriesLeft.map((item, index) => (
                <p
                  key={index}
                  className="
                    text-white/90
                    text-sm md:text-base
                    leading-relaxed
                  "
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-cyan-400/80 to-transparent" />

            <div className="flex flex-col gap-6">
              {categoriesRight.map((item, index) => (
                <p
                  key={index}
                  className="
                    text-white/90
                    text-sm md:text-base
                    leading-relaxed
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
