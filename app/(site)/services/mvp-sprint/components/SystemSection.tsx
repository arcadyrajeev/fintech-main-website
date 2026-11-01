const mvpFoundations = [
  {
    title: "Product strategy",
    subtitle: "Define the problem, target users, and product value.",
    detail: "A clear direction for what the product needs to achieve.",
  },
  {
    title: "Feature prioritization",
    subtitle: "Separate essential functionality from future possibilities.",
    detail: "A focused MVP scope without unnecessary complexity.",
  },
  {
    title: "Experience design",
    subtitle: "Structure user journeys, interactions, and interfaces.",
    detail: "A usable product experience designed around real user needs.",
  },
  {
    title: "Technical foundation",
    subtitle: "Plan architecture, integrations, and development requirements.",
    detail: "A functional first version with room to evolve.",
  },
];

export default function SystemSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
      <div className="pointer-events-none absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#1769B2]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1769B2]">
              Beyond the idea
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#172338] sm:text-5xl">
            A successful MVP starts
            <span className="block text-[#1769B2]">before development.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            An idea needs structure before it becomes a product. You need to
            understand what you&apos;re solving, what users actually need, and
            which capabilities belong in the first version.
          </p>

          <p className="mt-5 leading-7 text-slate-500">
            We connect product strategy, experience design, and engineering from
            the beginning, so every decision contributes to a focused,
            functional product rather than an expanding list of features.
          </p>

          {/* Supporting statement */}
          <div className="mt-9 flex items-center gap-4 border-l-2 border-[#1769B2] py-2 pl-5">
            <p className="text-sm font-medium leading-6 text-[#173B68]">
              Build what matters first. Create a foundation for what comes next.
            </p>
          </div>
        </div>

        {/* RIGHT: PRODUCT FOUNDATIONS */}
        <div className="relative">
          {/* Connector */}
          <div className="absolute bottom-8 left-[27px] top-8 w-px bg-gradient-to-b from-blue-200 via-[#1769B2] to-blue-100" />

          <div className="space-y-4">
            {mvpFoundations.map((item, index) => (
              <article
                key={item.title}
                className="group relative rounded-xl border border-slate-200 bg-white/90 p-6 shadow-[0_5px_25px_rgba(25,65,110,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(23,105,178,0.08)] sm:p-7"
              >
                <div className="flex items-start gap-5">
                  {/* Number */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-[#F0F6FC] text-sm font-semibold text-[#1769B2] transition-colors group-hover:bg-[#1769B2] group-hover:text-white">
                    0{index + 1}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-[#172338] sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.subtitle}
                    </p>

                    <div className="mt-4 border-t border-slate-100 pt-3">
                      <p className="text-xs font-medium leading-5 text-[#1769B2]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
