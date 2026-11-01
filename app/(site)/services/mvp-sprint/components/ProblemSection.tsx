const mvpProblems = [
  {
    number: "01",
    title: "An idea without clear direction.",
    description:
      "You know what you want to build, but the target user, core problem, and product value aren't clearly defined yet.",
    label: "UNCLEAR PRODUCT STRATEGY",
  },
  {
    number: "02",
    title: "Too much to build, too soon.",
    description:
      "Feature ideas keep accumulating. Without clear priorities, the first version becomes larger, slower, and more expensive than necessary.",
    label: "UNCONTROLLED SCOPE",
  },
  {
    number: "03",
    title: "Assumptions mistaken for demand.",
    description:
      "Building around unvalidated assumptions creates the risk of launching something users don't actually need or understand.",
    label: "UNVALIDATED ASSUMPTIONS",
  },
  {
    number: "04",
    title: "Design and development disconnected.",
    description:
      "When strategy, UX, and engineering work in isolation, decisions get lost between concepts, prototypes, and the final product.",
    label: "FRAGMENTED EXECUTION",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[#111c26] px-6 py-24 text-white lg:px-10 lg:py-32">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-sky-300" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
              The MVP challenge
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Great ideas need more than
            <span className="block text-blue-300">a development team.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Turning an idea into a successful first product takes more than
            writing code. Unclear priorities, untested assumptions, and
            disconnected execution can make an MVP expensive to build and
            difficult to launch.
          </p>
        </div>

        {/* PROBLEM CARDS */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-slate-700 bg-slate-700 sm:grid-cols-2">
          {mvpProblems.map((problem) => (
            <article
              key={problem.number}
              className="group relative bg-[#15232f] p-8 transition-colors duration-300 hover:bg-[#1a2d3c] sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-sky-300">
                  {problem.number}
                </span>

                <span className="text-[9px] font-semibold tracking-[0.16em] text-slate-500">
                  {problem.label}
                </span>
              </div>

              <h3 className="mt-9 text-2xl font-semibold tracking-tight text-white">
                {problem.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                {problem.description}
              </p>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-sky-400/50 to-transparent opacity-50 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            The goal isn&apos;t to build everything. It&apos;s to identify what
            matters, build it well, and get it into users&apos; hands.
          </p>

          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-300">
            Build with purpose.
          </span>
        </div>
      </div>
    </section>
  );
}
