import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";

const cards = [
  {
    number: "01",
    title: "Start with clarity, not chaos.",
    description:
      "Understand how your product works today. Identify friction, fragmented workflows, and the structural issues worth solving.",
    image: "/images/transformation/product-clarity.webp",
    alt: "Product audit and structured workflow visualization",
    tag: "PRODUCT DIAGNOSIS",
    outcomes: [
      "Clear visibility into product friction",
      "Prioritized improvement roadmap",
      "Aligned product decisions",
    ],
    impact: "Better decisions. Less wasted effort.",
  },
  {
    number: "02",
    title: "Build systems that scale.",
    description:
      "Create connected architecture, reusable interface patterns, and workflows that can evolve as your product grows.",
    image: "/images/transformation/scalable-systems.webp",
    alt: "Product interface and design system components",
    tag: "SYSTEM ARCHITECTURE",
    outcomes: [
      "Consistent product experiences",
      "Connected workflows and information",
      "Reusable systems for future growth",
    ],
    impact: "Greater consistency. Easier expansion.",
  },
  {
    number: "03",
    title: "Design around real operations.",
    description:
      "Make decisions grounded in user behavior, operational requirements, and feedback from the people using your product.",
    image: "/images/transformation/real-world-feedback.webp",
    alt: "Product feedback and user experience collaboration",
    tag: "EXPERIENCE VALIDATION",
    outcomes: [
      "Simpler user journeys",
      "Fewer unnecessary interactions",
      "Experiences aligned with real workflows",
    ],
    impact: "Less friction. Smoother operations.",
  },
];

export default function TransformationImpact() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1769B2]">
            The transformation
          </span>

          <h2 className="mt-5 text-4xl heading font-medium tracking-tight text-[#172338] sm:text-5xl">
            From complexity
            <span className="block text-accent">to meaningful progress.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500">
            Better products start with better decisions. We bring structure to
            the systems, experiences, and workflows behind your product.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.number}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_55px_rgba(23,105,178,0.09)]"
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E9EEF4]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute bottom-4 left-4 rounded-full border border-white/50 bg-white/85 px-3 py-2 backdrop-blur-md">
                  <span className="text-[9px] font-semibold tracking-[0.14em] text-slate-700">
                    {card.tag}
                  </span>
                </div>

                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/80 text-xs font-semibold text-slate-700 backdrop-blur-md">
                  {card.number}
                </span>
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-semibold tracking-tight text-[#172338] sm:text-2xl">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {card.description}
                </p>

                {/* OUTCOMES */}
                <div className="mt-7 border-t border-slate-100 pt-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1769B2]">
                    What changes
                  </span>

                  <ul className="mt-4 space-y-3">
                    {card.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2.5 text-sm leading-5 text-slate-600"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0 text-[#1769B2]"
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* IMPACT */}
                <div className="mt-7 flex items-center justify-between gap-3 rounded-xl bg-[#F0F6FC] px-4 py-4">
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      Intended impact
                    </span>
                    <p className="mt-1 text-sm font-semibold text-[#173B68]">
                      {card.impact}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-[#1769B2] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
