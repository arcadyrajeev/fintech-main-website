// components/FintechClarityPatternSection.tsx

import React from "react";

const FintechClarityPatternSection = () => {
  return (
    <section className="w-full bg-neutral-50">
      <div
        className="
          max-w-5xl mx-auto
          px-6 sm:px-18 md:px-18 lg:px-24
          py-[10vw] sm:py-16 md:py-18 lg:py-16
          text-left
        "
      >
        {/* Eyebrow */}
        <p className="text-xs   tracking-wide text-neutral-500 mb-2 sm:mb-4">
          A recurring pattern in fintech
        </p>

        {/* Primary Statement */}
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
          Metrics look fine.
          <br />
          Yet something still leaks.
        </h2>

        {/* Intentional Pause */}
        <div className="h-10 sm:h-20 lg:h-24" />

        {/* Secondary Thought */}
        <p
          className="
          
          
            mx-auto lg:mx-0
            text-base
            text-neutral-700
            leading-relaxed
          "
        >
          In many fintech products, nothing is technically broken.
          Infrastructure works. Dashboards are full. Numbers move.
        </p>

        <p
          className="
            mt-4
            
            mx-auto lg:mx-0
            text-base 
            text-neutral-700
            leading-relaxed
          "
        >
          Progress stalls through small, distributed frictions that never
          register as outright failures.
        </p>

        {/* Concept Blocks */}
        <div
          className="
            mt-16 sm:mt-20 lg:mt-24
            space-y-16 sm:space-y-20 portrait:lg:space-y-18 landscape:space-y-22
            max-w-3xl
            mx-auto lg:mx-0
          "
        >
          {/* Block 1 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-3">
              Invisible onboarding friction
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Drop-offs happen, but dashboards don’t explain why users hesitate
              or where confidence breaks.
            </p>
          </div>

          {/* Block 2 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-3">
              Pricing & fee ambiguity
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Users interact with money flows they don’t fully understand,
              creating hesitation rather than conversion.
            </p>
          </div>

          {/* Block 3 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-3">
              Metrics without alignment on decisions
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Teams look at the same numbers but walk away with different
              conclusions about what’s actually wrong.
            </p>
          </div>

          {/* Block 4 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-3">
              Trust breaks across touchpoints
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Product, website, pitch, and real usage tell slightly different
              stories, enough to slow conviction.
            </p>
          </div>
        </div>

        {/* Closing Reflection */}
        <p
          className="
            mt-12 sm:mt-18 lg:mt-24
             border-l-2 border-neutral-300
             pl-4
            mx-auto lg:mx-0
            text-neutral-600
            italic
          "
        >
          When clarity breaks and friction is distributed, progress slows , even
          if nothing is technically wrong.
        </p>
      </div>
    </section>
  );
};

export default FintechClarityPatternSection;
