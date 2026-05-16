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
    <section className="w-full   px-4 py-20">
      <div className="w-full mx-auto px-2 py-20">
        {/* Heading */}
        <div className="px-4 lg:px-[15vw]">
          <h2 className="heading text-3xl md:text-7xl text-primary-text tracking-tight">
            What can we do for you?
          </h2>

          <p className="mt-4 text-neutral-600 text-lg md:text-xl">
            Where clarity breaks, decisions slow. This is where we step in.
          </p>
        </div>

        {/* Container */}
        <div className="relative mt-12 rounded-3xl overflow-hidden bg-[#151E35] p-3 md:p-10">
          {/* Top Right Glow */}
          <div className="pointer-events-none absolute top-0 right-0 w-[300px] h-[300px] bg-blue-400/20 blur-[120px] rounded-full" />

          {/* Bottom Left Glow */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-400/20 blur-[120px] rounded-full" />

          {/* Services */}
          <div className="flex flex-col divide-y divide-white/60">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4 py-12 lg:py-16"
              >
                {/* Left */}
                <div className="flex items-center gap-4 lg:gap-10 lg:w-1/2 lg:px-10">
                  <div className="w-4 h-3 mt-3 rounded-full bg-white/70" />
                  <h3 className="body-font2 font-light text-2xl md:text-5xl text-white leading-[1]">
                    {service.title}
                  </h3>
                </div>

                {/* Right */}
                <div className="md:w-1/2 flex flex-col gap-6 md:px-20 ">
                  <p className="bodyfont text-white/80 text-sm md:text-base leading-relaxed max-w-md">
                    {service.desc}
                  </p>

                  <Link
                    href="/case-studies"
                    className="flex items-center gap-2 ml-auto w-fit text-white bodyfont mt-auto text-lg md:text-3xl group"
                  >
                    <span className="relative">
                      View Projects
                      <span className="absolute left-0 -bottom-4 w-full h-[6px] bg-gradient-to-r from-blue-400 to-indigo-500 scale-x-100 group-hover:scale-x-0 transition-transform origin-right" />
                    </span>
                    <ArrowUpRight
                      size={30}
                      className="group-hover:translate-x-2 group-hover:-translate-y-2 delay-150 transition-transform"
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
