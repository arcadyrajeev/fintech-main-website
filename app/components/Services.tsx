"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const topServices = [
  {
    title: "Onboarding & Conversion Clarity",
    desc: "Reduce friction across onboarding, KYC, and activation flows.",
    bullets: [
      "KYC UX optimization",
      "Activation flows",
      "Trust-building interactions",
    ],
    image: "/images/services/onboarding-conversion.png",
  },
  {
    title: "Trust & Decision Systems",
    desc: "Design financial interfaces that improve confidence and reduce hesitation.",
    bullets: ["Dashboard hierarchy", "Trust signaling", "Risk perception"],
    image: "/images/services/trust-decision.png",
  },
];

const bottomServices = [
  {
    title: "Product Narrative",
    desc: "Align product behavior with investor understanding.",
    image: "/images/services/product-narrative.png",
  },
  {
    title: "Financial UX Systems",
    desc: "Structure complex financial workflows into intuitive experiences.",
    image: "/images/services/financial-ux.png",
  },
  {
    title: "Information Architecture",
    desc: "Clarify data-heavy products through hierarchy and interaction design.",
    image: "/images/services/information-architecture.png",
  },
];

export default function Services() {
  return (
    <section className="w-full px-4 py-16 md:py-[4vw]">
      <div className="max-w-[1600px] mx-auto">
        {/* Heading */}
        <div className="px-2 lg:px-[10vw]">
          <h2 className="heading text-4xl md:text-7xl text-primary-text tracking-tight">
            What can we do for you?
          </h2>

          <p className="mt-4 text-neutral-600 text-lg md:text-xl max-w-2xl">
            Where clarity breaks, decisions slow. This is where we step in.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-[4vw] grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Top Large Cards */}
          {topServices.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#151E35] lg:col-span-6 min-h-[620px] p-4 md:p-10"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_45%)]" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col">
                {/* Top */}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="bodyfont text-white text-3xl md:text-5xl  leading-[1.05] max-w-md">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-white/70 text-sm md:text-base leading-relaxed max-w-lg">
                      {service.desc}
                    </p>
                  </div>

                  <Link
                    href="/case-studies"
                    className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <ArrowUpRight
                      size={22}
                      className="text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>

                {/* Bullets */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <div
                      key={bulletIndex}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/50 text-white/70 text-sm"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>

                {/* Image */}
                <div className="relative mt-auto pt-10">
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[320px] object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom Small Cards */}
          {bottomServices.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#151E35] lg:col-span-4 min-h-[500px] pl-6 md:pl-8  pt-6 md:pt-8"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.14),transparent_50%)]" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col">
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="bodyfont text-white text-2xl md:text-3xl leading-[1.1] ">
                    {service.title}
                  </h3>

                  <Link
                    href="/case-studies"
                    className="shrink-0 flex mr-6 items-center justify-center w-11 h-11 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <ArrowUpRight
                      size={20}
                      className="text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>

                {/* Desc */}
                <p className="mt-2 text-white/65 text-sm md:text-base leading-relaxed max-w-sm">
                  {service.desc}
                </p>

                {/* Image */}
                <div className="relative mt-auto ">
                  <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
