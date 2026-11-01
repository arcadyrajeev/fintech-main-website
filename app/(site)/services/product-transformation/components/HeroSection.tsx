"use client";

import Link from "next/link";
import Image from "next/image";
import ArchitectureAnimation from "./ArchitectureAnimation";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ProductTransformationModal from "@/app/components/modals/ProductTransformationModal";

const capabilities = [
  "Product Architecture",
  "Workflow Systems",
  "UX Transformation",
  "Development",
];

export default function HeroSection() {
  const [transformationModalOpen, setTransformationModalOpen] = useState(false);
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-20 lg:px-24 lg:pb-24 lg:pt-24">
      {/* Subtle background atmosphere */}
      <div className="pointer-events-none absolute right-0 top-20 -z-0 h-[500px] w-[700px] rounded-full bg-blue-100/40 blur-[140px]" />

      <div className="relative z-10  mt-16 ">
        {/* SERVICE LABEL */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#1769B2]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1769B2]">
            Product Transformation
          </span>
        </div>

        {/* HEADLINE */}
        <h1 className="max-w-[1450px] heading text-[clamp(3.4rem,6.3vw,7.2rem)]  leading-[0.98] tracking-[-0.055em] text-gray-800">
          Your product has grown.
          <span className="mt-3 block text-[#123EAD]">
            Has its architecture kept up?
          </span>
        </h1>

        {/* DESCRIPTION AND ACTIONS */}

        <div className="relative mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          {/* Static gradient connector */}
          <svg
            className="pointer-events-none absolute -bottom-7 -left-40 z-0 hidden h-[110px] w-full overflow-visible lg:block"
            viewBox="0 0 1200 110"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="heroConnectorGradient"
                x1="0"
                y1="108"
                x2="960"
                y2="54"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#052f54" />
                <stop offset="75%" stopColor="#0788E8" />
              </linearGradient>
            </defs>

            <path
              d="M 0 130
         H 630
         C 735 132, 735 54, 830 54
         H 1100"
              stroke="url(#heroConnectorGradient)"
              strokeWidth="12"
              strokeLinejoin="round"
            />
          </svg>

          {/* Description */}
          <div className="relative z-10 max-w-[650px]">
            <p className="text-base leading-8 text-slate-600 sm:text-xl ml-2 mb-6">
              We diagnose product friction, restructure complex workflows, and
              transform fragmented experiences into cohesive operational systems
              that are easier to use, trust, and scale.
            </p>
          </div>

          {/* Actions */}
          <div className="relative flex-col z-10 flex md:flex-row items-center gap-3">
            <div
              onClick={() => setTransformationModalOpen(true)}
              className="w-full cursor-pointer flex flex-col items-center justify-center"
            >
              {" "}
              <div
                className="
                  relative
                  group
                  overflow-hidden
                  rounded-full
                  border-3 border-blue-900/80
                  bg-white
                  px-6 sm:px-6
                  py-4
                  transition-all duration-500
                  hover:-translate-y-[2px]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                {" "}
                <div className=" absolute -bottom-[2vh] left-1/2 w-3 h-2 origin-bottom rounded-full origin-center duration-1200 group-hover:scale-[110] transition-all ease-in-out bg-accent z-0 "></div>{" "}
                {/* The Text */}{" "}
                <span className="relative flex items-center gap-2 text-lg heading font-medium z-10 transition-colors duration-1200 group-hover:text-white">
                  {" "}
                  Discuss Your Product
                  <ArrowUpRight size={24} className="ml-2" />{" "}
                </span>{" "}
              </div>{" "}
            </div>
            <Link
              href="#process"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("process")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="shrink-0 rounded-full border border-slate-300 bg-white px-7 py-4 text-lg font-semibold text-[#26384F] transition-all duration-300 hover:border-[#1769B2] hover:text-[#1769B2]"
            >
              See how it works
            </Link>
          </div>
        </div>

        {/* CAPABILITIES */}
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-slate-200/80 pt-6">
          {capabilities.map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <span className="text-[10px] font-semibold text-[#1769B2]">
                0{index + 1}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* ARCHITECTURE VISUAL */}
        <div className="relative mt-12 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_15px_60px_rgba(25,65,110,0.06)] sm:mt-16">
          {/* Top visual label */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-6 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#1769B2]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Product system transformation
              </span>
            </div>

            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Fragmented → Unified
            </span>
          </div>

          {/* Diagram */}
          <div className="relative p-3 sm:p-6 lg:p-8 mt-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_0.8px,transparent_0.8px)] [background-size:22px_22px] opacity-30" />

            <div className="relative z-10 w-full">
              <ArchitectureAnimation />
            </div>
          </div>
        </div>
      </div>
      <ProductTransformationModal
        open={transformationModalOpen}
        onClose={() => setTransformationModalOpen(false)}
      />
    </section>
  );
}
