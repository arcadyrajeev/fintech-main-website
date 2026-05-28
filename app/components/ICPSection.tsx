"use client";

import Image from "next/image";

const cards = [
  {
    title: "Fintech Platforms",
    image: "/images/fintech-platforms.webp",
    description:
      "Payments, lending, and financial infrastructure products where trust and activation drive growth.",
  },

  {
    title: "Operational SaaS",
    image: "/images/operational-saas.webp",
    description:
      "Workflow-heavy platforms where clarity, hierarchy, and execution determine adoption.",
  },

  {
    title: "Scaling Product Teams",
    image: "/images/scaling-teams.webp",
    description:
      "Teams navigating growth, repositioning, fundraising, or product expansion.",
  },
];

export default function ICPSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase bodyfont font-bold tracking-[0.18em]  text-accent ">
            WHO WE WORK WITH
          </p>

          <h2 className="mt-5 heading text-4xl md:text-5xl leading-[0.95] text-primary-text">
            Built for teams running
            <br />
            high-complexity products.
          </h2>

          <p className="mt-5 text-base text-secondary-text leading-relaxed max-w-2xl">
            We help product teams improve trust, activation, clarity, and
            operational effectiveness across complex digital systems.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="
                overflow-hidden
                rounded-xl
                bg-zinc-200/60
                transition-all
                p-2
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]
              "
            >
              {/* Image */}
              <div className="relative rounded-lg overflow-hidden aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-2 pb-10">
                <h3 className="mt-3 heading text-3xl font-semibold leading-tight text-slate-800">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-secondary-text">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
