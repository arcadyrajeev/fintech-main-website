"use client";

import React from "react";
import Image from "next/image";

const problems = [
  {
    title: "Metrics look fine",
    description: "But teams are confused about what to do",
    image: "/images/problem-metrics.png",
  },
  {
    title: "Users complete onboarding",
    description: "But hesitate before committing money",
    image: "/images/problem-onboarding.png",
  },
  {
    title: "Product is powerful",
    description: "But every demo requires explanation",
    image: "/images/problem-demo.png",
  },
  {
    title: "Everyone agrees in meetings",
    description: "But nothing actually moves after",
    image: "/images/problem-meetings.png",
  },
];

const Problem = () => {
  return (
    <section className="w-full bg-neutral-50">
      <div
        className="
          max-w-6xl mx-auto
          px-6 sm:px-18 md:px-18 lg:px-24
          py-10 
        "
      >
        {/* Eyebrow */}
        <p className="text-xs tracking-wide text-neutral-500 mb-3">
          A recurring pattern in fintech
        </p>

        {/* Heading */}
        <h2
          className="
    text-xl sm:text-2xl md:text-3xl lg:text-5xl
    heading
    font-medium md:font-normal
    tracking-tight
    text-primary-text
    mx-auto lg:mx-0
    leading-tight
  "
        >
          Where fintech products break?
        </h2>

        {/* Grid */}
        <div
          className="
            mt-12 
            grid grid-cols-1 sm:grid-cols-2
            gap-6 sm:gap-8
          "
        >
          {problems.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-xl
                shadow-[0_4px_6px_rgba(0,0,0,0.30)]
                overflow-hidden
                transition-all duration-300
                hover:shadow-[0_10px_20px_rgba(0,0,0,0.20)]
                p-2
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg w-full h-[160px] sm:h-[180px] bg-[#8FA1AF]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-95"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="heading text-xl font-medium text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-1 body-font text-sm text-neutral-600">
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
