"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Product & Narrative Alignment",
      desc: "Teams, users, and investors understand the product differently. We align product logic, positioning, and messaging into one coherent system.",
    },
    {
      title: "Onboarding & Conversion Clarity",
      desc: "Users complete flows but hesitate before committing money. We restructure onboarding, KYC, and key decision flows to reduce hesitation and build trust.",
    },
    {
      title: "Pricing & Trust Architecture",
      desc: "Pricing exists, but doesn’t build trust or drive decisions. We clarify pricing logic, value progression, and financial signals across product and website.",
    },
  ];

  return (
    <section className="w-full bg-neutral-50 px-4 py-20">
      <div className="w-full mx-auto px-2 py-20">
        {/* Heading */}
        <div className="px-[15vw]">
          <h2 className="heading text-3xl md:text-7xl text-primary-text tracking-tight">
            What we can do for you?
          </h2>

          <p className="mt-4 text-neutral-600 text-lg md:text-xl">
            Where clarity breaks, decisions slow. This is where we step in.
          </p>
        </div>

        {/* Container */}
        <div className="relative mt-12 rounded-3xl overflow-hidden bg-[#151E35] p-6 md:p-10">
          {/* Top Right Glow */}
          <div className="pointer-events-none absolute top-0 right-0 w-[300px] h-[300px] bg-blue-400/20 blur-[120px] rounded-full" />

          {/* Bottom Left Glow */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-400/20 blur-[120px] rounded-full" />

          {/* Services */}
          <div className="flex flex-col divide-y divide-white/60">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between gap-6  py-16"
              >
                {/* Left */}
                <div className="flex items-center gap-10 md:w-1/2 px-10">
                  <div className="w-4 h-3 mt-3 rounded-full bg-white/70" />
                  <h3 className="body-font2 font-light text-2xl md:text-5xl text-white leading-[1]">
                    {service.title}
                  </h3>
                </div>

                {/* Right */}
                <div className="md:w-1/2 flex flex-col gap-6 md:ml-30">
                  <p className="bodyfont text-white/70 text-sm md:text-base leading-relaxed max-w-md">
                    {service.desc}
                  </p>

                  <Link
                    href="/case-studies"
                    className="flex items-center gap-2 w-fit text-white bodyfont text-sm md:text-base group"
                  >
                    <span className="relative">
                      View Projects
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-blue-400 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
