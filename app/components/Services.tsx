"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const topServices = [
  {
    title: "Onboarding & KYC",
    desc: "Reduce hesitation across onboarding, activation, verification, and high-friction entry points.",

    bullets: ["KYC UX systems", "Activation flows", "Conversion clarity"],

    image: "/images/onboarding.webp",

    href: "/services/onboarding",
  },

  {
    title: "Product Design Systems",
    desc: "Structure operational products, dashboards, and workflows into clearer decision-oriented systems.",

    bullets: ["Dashboard hierarchy", "Workflow UX", "Operational interfaces"],

    image: "/images/product.webp",

    href: "/services/product",
  },
];

const bottomServices = [
  {
    title: "Brand Perception & Trust",

    desc: "Improve legitimacy, trust signaling, and perceived product credibility across digital experiences.",

    image: "/images/brand.webp",

    href: "/services/brand",
  },

  {
    title: "Website Positioning",

    desc: "Clarify what the product does, who it serves, and why it matters before users hesitate.",

    image: "/images/website.webp",

    href: "/services/website",
  },

  {
    title: "Product Narrative",

    desc: "Align product logic, business framing, and communication into one coherent narrative system.",

    image: "/images/narrative.webp",

    href: "/services/narrative",
  },
];

export default function Services() {
  return (
    <section className="w-full px-4 py-16 md:py-[4vw]">
      <div className="max-w-[1600px] mx-auto">
        {/* Heading */}
        <div className="px-2 lg:px-[10vw]">
          <p
            className="
              text-sm bodyfont font-semibold
              uppercase
              text-primary-text/60
             
              mb-4
            "
          >
            OUR SERVICES
          </p>
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
            <Link
              key={index}
              href={service.href}
              className="
      group relative overflow-hidden rounded-2xl
      border border-white/10 bg-[#081125]
      lg:col-span-6 min-h-[620px]
      py-8 md:py-2 block cursor-pointer
      transition-all duration-500
      hover:-translate-y-[2px]
      hover:border-white/20
    "
            >
              {/* Glow */}
              <div className="pointer-events-none absolute z-20 inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_45%)]" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col">
                {/* Top */}
                <div className="p-4 md:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="bodyfont text-white text-3xl md:text-5xl leading-[1.05] max-w-md">
                        {service.title}
                      </h3>

                      <p className="mt-5 text-white/70 text-sm md:text-base leading-relaxed max-w-lg">
                        {service.desc}
                      </p>
                    </div>

                    <div
                      className="
              shrink-0 flex items-center justify-center
              w-12 h-12 rounded-2xl
              border border-white/10 bg-white/5
            "
                    >
                      <ArrowUpRight
                        size={22}
                        className="
                text-white
                transition-transform duration-500
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
                      />
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <div
                        key={bulletIndex}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/20 text-white/70 text-sm"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="relative mt-auto pt-6">
                  <div className="overflow-hidden rounded-xl relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)]" />

                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative z-10 w-full aspect-[16/12] object-cover"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Bottom Small Cards */}
          {bottomServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="
      group relative overflow-hidden rounded-xl
      border border-white/10 bg-[#081125]
      lg:col-span-4 py-8 md:py-2
      block cursor-pointer
      transition-all duration-500
      hover:-translate-y-[2px]
      hover:border-white/20
    "
            >
              {/* Glow */}
              <div className="pointer-events-none absolute z-20 inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.14),transparent_50%)]" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col">
                <div className="p-4 md:p-6">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="bodyfont text-white text-2xl md:text-3xl leading-[1.1]">
                      {service.title}
                    </h3>

                    <div
                      className="
              shrink-0 flex items-center justify-center
              w-11 h-11 rounded-md
              border border-white/10 bg-white/5
            "
                    >
                      <ArrowUpRight
                        size={20}
                        className="
                text-white
                transition-transform duration-500
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
                      />
                    </div>
                  </div>

                  {/* Desc */}
                  <p className="mt-3 text-white/65 text-sm md:text-base leading-relaxed max-w-sm pr-6">
                    {service.desc}
                  </p>
                </div>

                {/* Image */}
                <div className="relative mt-10 md:mt-6">
                  <div className="overflow-hidden rounded-lg relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative z-10 w-full aspect-[16/12] object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
