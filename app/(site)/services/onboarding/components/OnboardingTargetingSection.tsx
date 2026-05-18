"use client";

const scenariosLeft = [
  "Payment onboarding flows",
  "GST & compliance submissions",
  "Investment platform onboarding",
  "B2B SaaS workspace setup",
  "Cross-border remittance onboarding",
  "Business verification systems",
  "Merchant activation flows",
  "KYC & identity verification",
  "Internal admin onboarding",
  "Multi-step onboarding systems",
];

const scenariosRight = [
  "Healthcare verification flows",
  "Insurance onboarding systems",
  "CRM workflow configuration",
  "Financial dashboard setup",
  "Enterprise onboarding systems",
  "Trading platform activation",
  "Workflow automation onboarding",
  "Operational reporting systems",
  "Data-heavy product interfaces",
  "Multi-role operational platforms",
];

export default function TargetingSection() {
  return (
    <section className="relative overflow-hidden w-full bg-[#020817]">
      {/* Glow */}
      <div className="pointer-events-none absolute top-0 left-0 w-[40vw] h-[40vw] bg-blue-600/10 blur-[140px] rounded-full" />

      <div className="pointer-events-none absolute bottom-0 right-0 w-[35vw] h-[35vw] bg-cyan-400/10 blur-[120px] rounded-full" />

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
            Common onboarding systems
          </p>

          <h2 className="mt-6 heading text-white font-light  text-4xl  md:text-6xl leading-[0.95] tracking-tight">
            Structured onboarding systems across operational workflows and
            high-complexity platforms.
          </h2>

          <p className="mt-8 text-neutral-400  text-sm md:text-lg max-w-3xl leading-relaxed">
            Designed for products where users need clarity, trust, and
            operational confidence before activation.
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
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-sky-300 via-sky-400/60 to-transparent" />

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
