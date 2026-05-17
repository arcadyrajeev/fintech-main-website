"use client";

const transformations = [
  {
    before: "Functional but confusing",
    after: "Structured and understandable",
  },

  {
    before: "Complex onboarding",
    after: "Guided activation",
  },

  {
    before: "Generic interfaces",
    after: "Operational clarity",
  },

  {
    before: "Product noise",
    after: "Clear hierarchy",
  },

  {
    before: "Internal understanding only",
    after: "External trust and comprehension",
  },
];

export default function TransformationSection() {
  return (
    <section className="w-full pt-24 pb-6 md:pt-32 md:pb-12 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase bodyfont font-semibold text-neutral-500">
            TRANSFORMATION
          </p>

          <h2 className="mt-4 heading text-4xl md:text-6xl leading-[0.95] text-primary-text">
            What actually changes?
          </h2>

          <p className="mt-6 text-base md:text-lg text-secondary-text leading-relaxed max-w-2xl">
            The goal is not prettier interfaces. It is reducing hesitation,
            improving comprehension, and making operational systems easier to
            trust and navigate.
          </p>
        </div>

        {/* Table */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* BEFORE */}
          <div
            className="
      rounded-2xl
      border border-neutral-200
      bg-white
      overflow-hidden
      shadow-[0_20px_60px_rgba(0,0,0,0.03)]
    "
          >
            {/* Header */}
            <div className="px-6 md:px-10 py-6 border-b border-neutral-200">
              <p className="text-sm font-semibold tracking-[0.15em] uppercase text-neutral-400">
                Before
              </p>
            </div>

            {/* Items */}
            <div>
              {transformations.map((item, index) => (
                <div
                  key={index}
                  className="
            px-6 md:px-10 py-7
            border-b border-neutral-100
            last:border-b-0
          "
                >
                  <p className="text-base md:text-lg text-neutral-500 leading-snug">
                    {item.before}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER */}
          <div
            className="
      rounded-2xl
      border border-neutral-200
      bg-white
      overflow-hidden
      shadow-[0_20px_60px_rgba(0,0,0,0.03)]
    "
          >
            {/* Header */}
            <div className="px-6 md:px-10 py-6 border-b border-neutral-200 bg-[#f8fbff]">
              <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#1d4ed8]">
                After
              </p>
            </div>

            {/* Items */}
            <div>
              {transformations.map((item, index) => (
                <div
                  key={index}
                  className="
            px-6 md:px-10 py-7
            border-b border-neutral-100
            last:border-b-0
          "
                >
                  <p className="text-base md:text-lg text-primary-text leading-snug">
                    {item.after}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom Statement */}
        <div className="mt-12 max-w-3xl">
          <p className="text-xl md:text-3xl heading leading-[1.1] text-primary-text">
            Better structure changes how users understand, trust, and move
            through the product.
          </p>
        </div>
      </div>
    </section>
  );
}
