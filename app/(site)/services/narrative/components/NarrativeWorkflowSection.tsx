"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const workflowSteps = [
  {
    title: "Product Structure Analysis",

    desc: "Understanding where operational complexity, unclear hierarchy, workflow inconsistency, and user confusion begin affecting product comprehension.",

    date: "STEP 01",
  },

  {
    title: "Workflow & System Mapping",

    desc: "Mapping dashboards, navigation systems, operational flows, permissions, decision paths, and interaction architecture across the platform.",

    date: "STEP 02",
  },

  {
    title: "Product System Restructuring",

    desc: "Restructuring workflows, hierarchy systems, interaction logic, and interface consistency into a more scalable operational UX system.",

    date: "STEP 03",
  },

  {
    title: "Validation & Refinement",

    desc: "Refining clarity through usage reviews, operational edge cases, stakeholder feedback, workflow testing, and product behavior analysis.",

    date: "STEP 04",
  },
];

export default function ProductWorkflowSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#081125]">
      {/* Glow Top Right */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* Glow Bottom Left */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full" />

      {/* Soft Center Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-cyan-400/5 blur-[140px] rounded-full" />

      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-24 md:py-32">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm tracking-[0.25em] uppercase text-neutral-500">
            Process
          </p>

          <h2 className="mt-4 heading text-4xl md:text-7xl leading-[0.95] tracking-[-0.05em] text-white font-light">
            Workflow
          </h2>

          <p className="mt-6 text-neutral-400 text-sm md:text-lg leading-relaxed max-w-2xl">
            Structured around operational clarity, workflow consistency,
            scalable UX systems, and decision-oriented product architecture
            across high-complexity platforms.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Line */}
          <div className="absolute top-3 left-0 w-full h-px bg-white/10" />

          {/* Items */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 xl:gap-10">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Dot */}
                <div className="relative z-10 flex items-center">
                  <div
                    className="
                      w-6 h-6 rounded-full
                      border border-white/10
                      bg-[#111827]
                      flex items-center justify-center
                    "
                  >
                    <div
                      className={`
                        w-2 h-2 rounded-full
                        ${index === 0 ? "bg-cyan-400" : "bg-neutral-600"}
                      `}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-8">
                  <p className="mb-4 text-xs tracking-[0.25em] uppercase text-neutral-400">
                    {step.date}
                  </p>

                  <h3 className="text-white heading text-xl md:text-2xl leading-[1.1] tracking-[-0.03em]">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-neutral-400 text-sm leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-neutral-300 hover:text-white transition-colors"
          >
            <span className="text-lg md:text-xl heading">
              Review your product system
            </span>

            <ArrowUpRight
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
