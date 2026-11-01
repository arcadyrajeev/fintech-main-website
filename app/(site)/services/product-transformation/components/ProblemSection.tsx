import { problems } from "./data";

export default function ProblemSection() {
  return (
    <section className="bg-[#111c26] px-6 py-24 text-white lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">
            The complexity problem
          </span>
          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Growth introduces complexity.
            <span className="text-blue-300">
              {" "}
              Your product needs to keep up.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            New features, integrations, users, and operational requirements
            continuously reshape your product. Without a coherent system,
            complexity starts working against the people who use it.
          </p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-slate-700 bg-slate-700 sm:grid-cols-2">
          {problems.map((problem) => (
            <article
              key={problem.number}
              className="bg-[#15232f] p-8 transition hover:bg-[#1a2d3c] sm:p-10"
            >
              <span className="text-sm font-medium text-sky-200">
                {problem.number}
              </span>
              <h3 className="mt-8 text-2xl font-semibold">{problem.title}</h3>
              <p className="mt-4 max-w-md leading-7 text-slate-400">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
