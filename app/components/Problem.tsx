"use client";

import React from "react";
import Image from "next/image";

const secondaryProblems = [
  {
    title: "Alignment exists",
    description: "But no decisions follow",
    image: "/images/problem-meetings.png",
  },
  {
    title: "Metrics improve",
    description: "But direction doesn’t",
    image: "/images/problem-metrics.png",
  },
];

const Problem = () => {
  return (
    <section className="w-full  ">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-24 pt-8">
        {/* Eyebrow */}
        <p className="text-xs tracking-wide text-neutral-500 mb-3">
          Recurring operational patterns
        </p>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl heading tracking-tight text-primary-text leading-tight">
          Where operational systems start breaking
        </h2>

        {/* FEATURED PROBLEM */}
        <div className="mt-10 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f1c3f] to-[#0a1230] p-6 sm:p-10">
          {/* subtle pattern / glow */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#3b82f6,_transparent_60%)]" />

          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            {/* Image */}
            <div className="relative w-full h-[160px] sm:h-[200px]">
              <Image
                src="/images/onboarding1.png"
                alt="Onboarding hesitation"
                fill
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-lg text-blue-200 mb-2">
                Users complete onboarding
              </p>

              <h3 className="heading text-3xl sm:text-5xl text-white leading-[1]">
                But don’t move <span className="text-blue-400">money</span>
              </h3>
            </div>
          </div>
        </div>

        {/* SUPPORTING PROBLEMS */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {secondaryProblems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-400 overflow-hidden hover:shadow-md transition"
            >
              <div className="relative w-full portrait:h-[18vh] landscape:h-[28vh] bg-[#8FA1AF]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-90"
                />
              </div>

              <div className="p-5">
                <h3 className="heading text-2xl text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
