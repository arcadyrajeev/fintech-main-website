// components/FintechClarityPatternSection.tsx

import React from "react";

const FintechNarrativeSection = () => {
  return (
    <section className="w-full bg-neutral-50">
      <div
        className="
          max-w-6xl mx-auto
          px-6 sm:px-18 md:px-18 lg:px-24
          py-[10vw] sm:py-16 md:py-18 lg:py-16
          text-left
        "
      >
        {/* Eyebrow */}
        <p className="text-xs tracking-wide text-neutral-500 mb-2 sm:mb-4">
          Why are you losing traction?
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
          Most fintech products don&apos;t fail.
          <br />
          They become hard to explain.
        </h2>

        {/* Intentional Pause */}
        <div className="h-10 sm:h-20 lg:h-24" />

        {/* Secondary Thought */}
        <p
          className="
    mx-auto lg:mx-0
    text-base sm:text-lg
    text-neutral-700
    leading-relaxed
  "
        >
          Inside the company, decisions usually make sense. Context exists.
          Trade-offs were intentional. But that context doesn&apos;t travel
          well, across teams, to users, or into capital conversations.
        </p>

        <p
          className="
    mt-4
    mx-auto lg:mx-0
    text-base sm:text-lg
    text-neutral-700
    leading-relaxed
  "
        >
          As the product grows, explanations begin to substitute for clarity.
          Momentum slows not because the system is wrong, but because it&apos;s
          increasingly hard to read from the outside.
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
              Signals without resolution
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Individual product decisions exist, but they don&apos;t converge
              into a clear answer to what the business is optimizing for.
            </p>
          </div>

          {/* Block 2 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-3">
              Explanations that keep shifting
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              The story changes between product reviews, sales calls, and
              investor conversations, without anyone intending it to.
            </p>
          </div>

          {/* Block 3 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-3">
              Metrics that don&apos;t settle decisions
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Numbers are tracked and debated, but they don&apos;t create
              alignment or confidence about what to do next.
            </p>
          </div>

          {/* Block 4 */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-3">
              Trust that takes too long to form
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Users hesitate. Partners ask for more proof. Investors want
              another meeting.
            </p>
          </div>
        </div>

        {/* Closing Reflection */}
        <p
          className="
    mt-12 sm:mt-18 lg:mt-24 
    border-l-2 border-neutral-300
    mx-auto lg:mx-0
    pl-4
    text-neutral-600
    italic
  "
        >
          Traction fades when understanding lags, even if the product itself
          hasn&apos;t fundamentally changed.
        </p>
      </div>
    </section>
  );
};

export default FintechNarrativeSection;
