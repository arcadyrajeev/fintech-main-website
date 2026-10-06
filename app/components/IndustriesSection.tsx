"use client";

import Image from "next/image";

const industries = [
  {
    title: "Fintech Platforms",
    image: "/images/fintech-platforms.webp",
    description:
      "Financial products where trust, data, transactions, and complex workflows need to feel simple and predictable.",
    products: [
      "Payments & transactions",
      "Financial dashboards",
      "Investor platforms",
      "Trading systems",
      "Risk & compliance",
      "KYC & onboarding",
    ],
  },
  {
    title: "HealthTech Platforms",
    image: "/images/health-tech.webp",
    description:
      "Healthcare products that coordinate people, processes, permissions, and operational workflows without adding friction.",
    products: [
      "Practice management",
      "Healthcare operations",
      "Credentialing workflows",
      "Multi-role systems",
      "Patient & provider workflows",
      "Administrative platforms",
    ],
  },
  {
    title: "Real Estate Platforms",
    image: "/images/real-estate.webp",
    description:
      "Property systems where multiple roles, large datasets, and complex decisions need a clear product structure.",
    products: [
      "Property marketplaces",
      "Investor platforms",
      "Agent & admin systems",
      "Property operations",
      "Multi-role platforms",
      "Decision-support tools",
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#081125]">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-10 md:py-32 lg:px-20">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="bodyfont text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
            WHO WE WORK WITH
          </p>

          <h2 className="mt-5 heading text-4xl font-light leading-[0.95] tracking-tight text-white md:text-5xl">
            Complex product systems
            <br />
            across three high-stakes industries.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55">
            We work with founders and product teams building data-heavy,
            workflow-driven products across fintech, healthtech, and real
            estate.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="
                group
                overflow-hidden
                rounded-2xl
                border border-white/[0.08]
                bg-white/[0.035]
                p-2
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-white/[0.15]
              "
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  unoptimized
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.04]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <h3
                  className="
                    absolute
                    bottom-5
                    left-5
                    pr-5
                    heading
                    text-2xl
                    font-light
                    leading-[0.95]
                    text-white
                    md:text-[28px]
                  "
                >
                  {industry.title}
                </h3>
              </div>

              {/* Description */}
              <div className="px-3 pb-5 pt-5">
                <p className="text-sm leading-6 text-white/55">
                  {industry.description}
                </p>
              </div>

              {/* Product types */}
              <div className="border-t border-white/[0.08] px-3 py-5">
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-white/30">
                  Product systems
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {industry.products.map((product) => (
                    <div
                      key={product}
                      className="text-sm leading-5 text-white/80"
                    >
                      {product}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
