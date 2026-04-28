// components/FinalCTASection.tsx

import React from "react";

interface FinalCTASectionProps {
  text1: string;
  text2: string;
}

const FinalCTASection = ({ text1, text2 }: FinalCTASectionProps) => {
  return (
    <section className="w-full bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-24 py-8 lg:py-24">
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
            <div className="flex flex-col justify-center items-center gap-2">
              <a
                href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20have%20a%20quick%20conversation."
                target="_blank"
                rel="noopener noreferrer"
                className="
                text-sm sm:text-base
                font-medium
                border border-neutral-700
                p-4 rounded-full
                text-neutral-900
                hover:border-accent
                hover:text-accent
                transition-colors
              "
              >
                Start a conversation
              </a>
              <h3 className="text-secondary-text text-xs"> Chat on Whatsapp</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
