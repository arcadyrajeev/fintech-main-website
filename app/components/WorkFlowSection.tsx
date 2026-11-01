const processSteps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "Identify product friction, workflow bottlenecks, user experience gaps, and the structural issues limiting growth.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Define the product structure, information architecture, workflow logic, and system relationships.",
  },
  {
    number: "03",
    title: "Transform",
    description:
      "Restructure interfaces, simplify interactions, and create consistent experiences across the product.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Build, integrate, and validate the redesigned system so it works in real operational environments.",
  },
];

const stageDetails = [
  {
    label: "Understand the problem",
    visual: ["Product audit", "UX evaluation", "Friction mapping"],
  },
  {
    label: "Establish the foundation",
    visual: ["Product architecture", "Workflow logic", "Information structure"],
  },
  {
    label: "Design the experience",
    visual: ["Interface systems", "Interaction design", "UX consistency"],
  },
  {
    label: "Bring it to life",
    visual: ["Development", "Integration", "Validation"],
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#0C1723] px-6 py-24 text-white lg:px-10 lg:py-36"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-blue-100/80" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100/80">
                How we work
              </span>
            </div>

            <h2 className="mt-7 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              From product complexity
              <span className="block text-blue-300">to a coherent system.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-slate-400 lg:pb-2">
            We connect product strategy, architecture, experience design, and
            engineering through one coordinated transformation process.
          </p>
        </div>

        {/* PROCESS VISUAL */}
        <div className="relative mt-24">
          {/* Connecting line */}
          <div className="absolute left-[7%] right-[7%] top-[31px] hidden h-px bg-gradient-to-r from-sky-500/20 via-blue-300/80 to-blue-500/20 lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const details = stageDetails[index];

              return (
                <article
                  key={step.number}
                  className="group relative flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-[#172838] to-[#101E2C] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-300/40 hover:shadow-[0_20px_60px_rgba(14,116,210,0.12)] lg:min-h-[390px] lg:p-8"
                >
                  {/* Number and connector node */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-blue-300">
                      STAGE {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-300/30 bg-[#112B40] transition-all duration-500 group-hover:border-sky-300 group-hover:bg-sky-500/20">
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(56,189,248,0.8)] transition-all group-hover:scale-150" />
                    </div>
                  </div>

                  {/* Large background number */}
                  <span className="pointer-events-none absolute right-6 top-16 text-[100px] font-bold leading-none tracking-tighter text-white/[0.035] transition-colors duration-500 group-hover:text-sky-300/[0.08]">
                    {step.number}
                  </span>

                  {/* Step title */}
                  <div className="relative mt-12">
                    <h3 className="text-2xl font-semibold tracking-tight text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="my-7 h-px bg-gradient-to-r from-blue-300/50 to-transparent" />

                  {/* Stage output */}
                  <div className="mt-auto">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {details.label}
                    </span>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {details.visual.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-2 text-[11px] text-slate-300 transition-colors group-hover:border-blue-300/20 group-hover:text-sky-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-7 right-7 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-300 to-blue-600 transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Every decision builds toward one outcome: a product whose
            architecture, workflows, and experience work together.
          </p>

          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-blue-300">
            Strategy · Design · Engineering
          </div>
        </div>
      </div>
    </section>
  );
}
