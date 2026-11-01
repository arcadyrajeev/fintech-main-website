"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ProductTransformationModal from "@/app/components/modals/ProductTransformationModal";
import MVPAnimation from "./MVPAnimation";

const capabilities = [
  "Product Strategy",
  "UX / UI Design",
  "Prototyping",
  "Design & Development",
];

export default function HeroSection() {
  const [mvpModalOpen, setMvpModalOpen] = useState(false);

  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-20 lg:px-24 lg:pb-24 lg:pt-24">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute right-0 top-20 -z-0 h-[500px] w-[700px] rounded-full bg-blue-100/40 blur-[140px]" />

      <div className="relative z-10 mt-16">
        {/* SERVICE LABEL */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#1769B2]" />

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1769B2]">
            Product MVP Sprint
          </span>
        </div>

        {/* HEADLINE */}
        <h1 className="heading max-w-[1450px] text-[clamp(3.4rem,6.3vw,7.2rem)] leading-[0.98] tracking-[-0.055em] text-gray-800">
          Turn your idea into
          <span className="mt-3 block text-[#123EAD]">
            a product people can use.
          </span>
        </h1>

        {/* DESCRIPTION AND ACTIONS */}
        <div className="relative mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          {/* Gradient connector */}
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
                id="mvpConnectorGradient"
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
              d="M 0 130 H 630 C 735 132, 735 54, 830 54 H 1100"
              stroke="url(#mvpConnectorGradient)"
              strokeWidth="12"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>

          {/* Description */}
          <div className="relative z-10 max-w-[650px]">
            <p className="mb-6 ml-2 text-base leading-8 text-slate-600 sm:text-xl">
              We help founders turn early ideas into focused, usable products.
              From product strategy and UX design to prototyping and
              development, we build the right first version around real user
              needs.
            </p>
          </div>

          {/* Actions */}
          <div className="relative z-10 flex flex-col items-center gap-3 md:flex-row">
            <button
              onClick={() => setMvpModalOpen(true)}
              className="group relative w-full shrink-0 overflow-hidden rounded-full border-[3px] border-blue-900/80 bg-white px-6 py-4 transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:w-auto"
            >
              <span className="absolute -bottom-[2vh] left-1/2 z-0 h-2 w-3 origin-bottom rounded-full bg-accent transition-all duration-700 group-hover:scale-[110]" />

              <span className="heading relative z-10 flex items-center gap-2 text-lg font-medium transition-colors duration-700 group-hover:text-white">
                Start your MVP
                <ArrowUpRight size={24} className="ml-2" />
              </span>
            </button>

            <button
              type="button"
              onClick={scrollToProcess}
              className="shrink-0 rounded-full border border-slate-300 bg-white px-7 py-4 text-lg font-semibold text-[#26384F] transition-all duration-300 hover:border-[#1769B2] hover:text-[#1769B2]"
            >
              See how it works
            </button>
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

        {/* MVP ANIMATION */}
        <div className="relative mt-12 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_15px_60px_rgba(25,65,110,0.06)] sm:mt-16">
          {/* Visual header */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-6 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#1769B2]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                From idea to working product
              </span>
            </div>

            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Define → Design → Build
            </span>
          </div>

          {/* Animation */}
          <div className="relative p-3 sm:p-6 lg:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_0.8px,transparent_0.8px)] [background-size:22px_22px] opacity-30" />

            <div className="relative z-10 w-full">
              <MVPAnimation />
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <ProductTransformationModal
        open={mvpModalOpen}
        onClose={() => setMvpModalOpen(false)}
      />
    </section>
  );
}
