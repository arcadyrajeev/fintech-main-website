// components/FinalCTASection.tsx

import React from "react";

import { MoveRightIcon } from "lucide-react";

interface FinalCTASectionProps {
  text1: string;
  text2: string;
  accent?: string;
}

const FinalCTASection = ({
  text1,
  text2,
  accent = "#2563eb",
}: FinalCTASectionProps) => {
  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-8 lg:py-24">
        <div
          className="
            relative
            overflow-hidden
            w-full
            rounded-[2rem]
            border border-blue-800/30
            bg-[#f7f8fa]
            px-8 sm:px-12 lg:px-16
            py-16 lg:py-20
          "
        >
          {/* Grid */}
          <div
            className="
              absolute inset-0 opacity-[0.04]
              [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
              [background-size:42px_42px]
            "
          />
          {/* Top Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] blur-[120px] opacity-30 rounded-full"
            style={{
              background: accent,
            }}
          />
          {/* Bottom Glow */}
          <div
            className="absolute bottom-0 right-0 w-[300px] h-[300px] blur-[120px] opacity-20 rounded-full"
            style={{
              background: accent,
            }}
          />
          {/* Faded Curved Lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.12]"
            viewBox="0 0 1600 700"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M-40 620C240 520 300 240 650 240C980 240 1050 580 1640 420"
              stroke="blue"
              strokeWidth="1.2"
            />

            <path
              d="M-120 500C220 420 340 140 710 140C1100 140 1220 520 1720 260"
              stroke="blue"
              strokeWidth="1"
            />

            <path
              d="M40 700C300 620 420 340 760 340C1120 340 1280 700 1680 520"
              stroke="black"
              strokeWidth="1"
            />
          </svg>
          {/* Content */}
          <div
            className="
              relative z-10
              flex flex-col
              gap-14 lg:gap-2
              items-center
              text-center
              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:text-left
            "
          >
            {/* Heading */}
            <div className="max-w-[41rem]">
              <p className="text-sm bodyfont font-semibold uppercase tracking-[0.20em] text-neutral-500 mb-5">
                START A CONVERSATION
              </p>

              <h2
                className="
                  heading
                  text-4xl  lg:text-5xl
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-neutral-900
                "
              >
                {text1}
                <br />
                {text2}
              </h2>
            </div>
            {/* CTA */}
            <div className="flex flex-col justify-center items-center lg:items-base ">
              {" "}
              <a
                href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20have%20a%20quick%20conversation."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative
                  group
                  overflow-hidden
                  rounded-full
                  border-2 border-blue-900/50
                  bg-white
                  px-8 
                  py-6
                  transition-all duration-500
                  hover:-translate-y-[2px]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                {" "}
                <div className=" absolute -bottom-[2vh] -left-10 w-3 h-2 origin-left rounded-full origin-center duration-1200 group-hover:scale-[110] transition-all ease-in-out bg-accent z-0 "></div>{" "}
                {/* The Text */}{" "}
                <span className="relative flex items-center  text-xl heading font-medium z-10 transition-colors duration-1200 group-hover:text-white">
                  {" "}
                  Start a conversation{" "}
                  <MoveRightIcon size={24} className="ml-2" />{" "}
                </span>{" "}
              </a>{" "}
              <p className="text-sm text-neutral-500 mt-3">
                Usually replies within a few hours
              </p>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
