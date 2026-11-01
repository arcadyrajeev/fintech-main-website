import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";

const cards = [
  {
    number: "01",
    title: "Know what you're building, and why.",
    description:
      "Turn an early idea into a focused product direction. Understand your users, define the problem, and identify the core value your first version needs to deliver.",
    image: "/images/mvp/product-strategy.webp",
    alt: "Product strategy and early-stage product planning",
    tag: "PRODUCT CLARITY",
    outcomes: [
      "Clearly defined target users and problem",
      "Focused product vision and value proposition",
      "Prioritized MVP scope and feature roadmap",
    ],
    impact: "Clear direction. Fewer costly assumptions.",
  },
  {
    number: "02",
    title: "Give your idea a usable experience.",
    description:
      "Shape the product around real user needs. Translate key functionality into intuitive user journeys, thoughtful interfaces, and an interactive prototype.",
    image: "/images/mvp/experience-design.webp",
    alt: "Product interface design and interactive prototyping",
    tag: "PRODUCT EXPERIENCE",
    outcomes: [
      "Structured user journeys and workflows",
      "Consistent, intuitive interface design",
      "Interactive prototype of core functionality",
    ],
    impact: "Better usability. A clearer product experience.",
  },
  {
    number: "03",
    title: "Launch with a working foundation.",
    description:
      "Bring the essential experience to life through development. Get a functional first version ready for real users, feedback, and the next stage of product growth.",
    image: "/images/mvp/product-development.webp",
    alt: "MVP product development and working software",
    tag: "PRODUCT DELIVERY",
    outcomes: [
      "Working core product functionality",
      "Essential integrations and technical setup",
      "A first release ready for user testing",
    ],
    impact: "A real product. Meaningful market feedback.",
  },
];

export default function MVPSprintImpact() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1769B2]">
            The outcome
          </span>

          <h2 className="mt-5 text-4xl heading font-medium tracking-tight text-[#172338] sm:text-5xl">
            From early idea
            <span className="block text-accent">
              to a product worth testing.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500">
            A successful MVP gives you more than a launch. It gives you a
            focused product, a usable experience, and a foundation for learning
            from real users.
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
                    What you get
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
