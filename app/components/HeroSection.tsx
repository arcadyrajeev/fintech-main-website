"use client";

import React from "react";

import Image from "next/image";

interface HeroSectionProps {
  heading1: string;
  headingColor: string;
  heading2: string;
  subheading: string;
  imageUrl: string;
  toptext?: string;
}

export default function HeroSection({
  heading1,
  headingColor,
  heading2,
  subheading,
  imageUrl,
  toptext,
}: HeroSectionProps) {
  return (
    <section className="w-full overflow-hidden relative">
      <div
        className="
          max-w-7xl 
          mx-auto
          px-5 sm:px-8 lg:px-12
          pt-28 sm:pt-32 lg:pt-40
          pb-12
        "
      >
        {/* Content */}
        <div className="max-w-5xl">
          {toptext && (
            <p
              className="
                bodyfont
                text-sm
                font-semibold
                tracking-[0.18em]
                uppercase
                text-neutral-500
                mb-4 sm:mb-6
              "
            >
              {toptext}
            </p>
          )}

          <h1
            className="
              heading
              text-[2.7rem]
              sm:text-6xl
              md:text-7xl
              lg:text-[6rem]
              leading-[0.88]
              tracking-[-0.04em]
              text-slate-700
              max-w-6xl
            "
          >
            {heading1}{" "}
            <span className="text-blue-900 italic">{headingColor}</span>{" "}
            {heading2}
          </h1>

          <p className="heading text-xl mt-3 lg:mt-6  lg:text-2xl text-slate-600 portrait:lg:w-[50%] portrait:w-[80%] portrait:md:w-[65%] landscape:w-[60%]">
            {subheading}
          </p>
        </div>

        {/* Visual */}
        <div className="w-full mt-12 sm:mt-16 lg:mt-24">
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl lg:rounded-3xl
              border border-[#dfe5f2]
              bg-[#eef4ff]
              
              min-h-[240px]
              sm:min-h-[380px]
              

              shadow-[0_30px_120px_rgba(37,99,235,0.08)]
            "
          >
            {/* Grid */}
            <div
              className="
                absolute inset-0
                opacity-[0.45]
                [background-image:linear-gradient(to_right,#cbd5e122_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e122_1px,transparent_1px)]
                [background-size:42px_42px]
              "
            />

            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_65%)]
              "
            />

            {/* Image */}
            <div className="absolute inset-0">
              <Image
                src={imageUrl}
                alt={`${heading1} ${headingColor} ${heading2}`}
                fill
                priority
                className="
                  object-cover
                  object-center
                  scale-[1.01]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
