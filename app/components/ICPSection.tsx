"use client";

import Image from "next/image";

const cards = [
  {
    title: "Fintech Platforms",
    image: "/images/fintech-platforms.webp",
    description:
      "Financial products where trust, data, transactions, and complex workflows need to feel simple and predictable.",
  },

  {
    title: "HealthTech Platforms",
    image: "/images/health-tech.webp",
    description:
      "Healthcare products that coordinate people, processes, permissions, and operational workflows without adding friction.",
  },

  {
    title: "Real Estate Platforms",
    image: "/images/real-estate.webp",
    description:
      "Property and real estate systems where multiple roles, large datasets, and complex decision-making need a clear product structure.",
  },
];

export default function ICPSection() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="bodyfont text-xs font-bold uppercase tracking-[0.18em] text-accent">
            WHO WE WORK WITH
          </p>

          <h2 className="mt-5 heading text-4xl leading-[0.95] text-primary-text md:text-5xl">
            Product teams building
            <br />
            complex systems.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary-text">
            We work with founders and product teams building data-heavy,
            workflow-driven products across fintech, healthtech, and real
            estate.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="
                overflow-hidden
                rounded-xl
                bg-zinc-200/60
                p-2
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]
              "
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <h3
                  className="
                    absolute
                    bottom-5
                    left-5
                    pr-6
                    font-light
                    heading
                    text-3xl
                    leading-[0.95]
                    text-white
                    md:text-[32px]
                  "
                >
                  {card.title}
                </h3>
              </div>

              {/* Content */}
              <div className="px-2 py-5 pb-7">
                <p className="text-sm leading-relaxed text-secondary-text">
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
