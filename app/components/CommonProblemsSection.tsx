"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const problems = [
  "Onboarding hesitation",
  "Activation drop-offs",
  "Trust breakdown during critical workflows",
  "Fragmented operational systems",
  "Product perception gaps",
];

export default function CommonProblemsSection() {
  return (
    <section className="w-full py-24 md:py-32 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative  w-full h-[60vh]  md:h-full mt-0 md:mt-20">
            {/* BACK CARD */}

            <Image
              src={"/images/diagnosis-cover.webp"}
              fill
              alt="Signal Image"
              className="object-contain"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-xs uppercase bodyfont font-bold tracking-[0.18em]  text-accent ">
              DIAGNOSIS
            </p>

            <h2 className="mt-5 heading text-4xl md:text-5xl leading-[0.95] text-primary-text">
              Common problems we diagnose.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary-text">
              Most teams notice declining performance before they identify the
              underlying trust, activation, or operational issues causing it.
            </p>

            <div className="mt-10 space-y-5">
              {problems.map((problem) => (
                <div key={problem} className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-50
                      border border-blue-100
                    "
                  >
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="text-accent"
                    />
                  </div>

                  <p className="text-lg text-primary-text">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
