// components/FinalCTASection.tsx

import React from "react";

interface FinalCTASectionProps {
  text1: string;
  text2: string;
}

const FinalCTASection = ({ text1, text2 }: FinalCTASectionProps) => {
  return (
    <section className="w-full  ">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-8 lg:py-24">
        <div
          className="
            w-full
            border border-neutral-700/40
            rounded-2xl
            px-8 sm:px-12
            py-16
          "
        >
          <div
            className="
              flex flex-col
              gap-12
              items-center text-center
              lg:flex-row lg:items-center lg:justify-between
              lg:text-left
            "
          >
            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl heading tracking-tight text-neutral-900 max-w-xl">
              {text1}
              <br /> {text2}
            </h2>
          </div>

          {/* CTA */}
          <div className="w-full justify-center lg:justify-end flex  mt-6">
            <div className="flex flex-col overflow-hidden justify-center items-center gap-2">
              <a
                href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20have%20a%20quick%20conversation."
                target="_blank"
                rel="noopener noreferrer"
                className="
                text-sm sm:text-xl
                relative 
                group
                overflow-hidden
                font-medium
                border-2 border-neutral-700
                 px-8 py-4 rounded-full
                text-neutral-900
                
                hover:border-accent
                hover:text-accent
                transition-colors
                duration-1200 ease-in-out
              "
              >
                <div
                  className="
    absolute -bottom-[2vh] left-1/2
    w-3 h-2 
    origin-bottom
    rounded-full
    origin-center
    duration-1200
    group-hover:scale-[110]
    transition-all ease-in-out 
    bg-accent 
    z-0
  "
                ></div>

                {/* The Text */}
                <span className="relative z-10 transition-colors duration-1200 group-hover:text-white">
                  Start a conversation
                </span>
              </a>
              <h3 className="text-secondary-text text-md"> Chat on Whatsapp</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
