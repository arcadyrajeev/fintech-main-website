import Image from "next/image";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";

type ComplexityItem = {
  number: string;
  title: string;
  description: string;
  points: string[];
  challenge: string;
  image: string;
  imageAlt: string;
  label?: string;
};

const complexityItems: ComplexityItem[] = [
  {
    number: "01",
    title: "DATA",
    description: "When users need to understand a lot at once.",
    points: [
      "Tables",
      "Analytics",
      "Financial data",
      "Reporting",
      "Large datasets",
    ],
    challenge: "Making dense information easy to scan, understand, and act on.",
    image: "/images/complexity/rf-product2.png",
    imageAlt: "RupeeFlow financial dashboard interface",
    label: "RupeeFlow · Fintech",
  },
  {
    number: "02",
    title: "WORKFLOWS",
    description: "When one action depends on another.",
    points: [
      "Onboarding",
      "Approvals",
      "Verification",
      "Transactions",
      "Multi-step processes",
    ],
    challenge: "Making complex processes feel predictable and effortless.",
    image: "/images/complexity/realestify-users.png",
    imageAlt: "Multi-step product workflow interface",
    label: "Product workflow",
  },
  {
    number: "03",
    title: "ROLES",
    description: "When different people need different things.",
    points: ["Admins", "Operators", "Managers", "Agents", "Customers"],
    challenge:
      "Giving every role the right information, permissions, and actions without creating a fragmented product.",
    image: "/images/complexity/realestify-admin.png",
    imageAlt: "Realestify multi-role product dashboard",
    label: "Realestify · Real Estate",
  },
  {
    number: "04",
    title: "PRODUCT LOGIC",
    description: "When the interface sits on top of complicated rules.",
    points: [
      "Permissions",
      "States",
      "Integrations",
      "Notifications",
      "Dependencies",
    ],
    challenge: "Turning complicated product logic into a coherent experience.",
    image: "/images/complexity/lama-home.png",
    imageAlt: "Lama Healthcare operational product interface",
    label: "Lama Healthcare · Healthtech",
  },
];

function ComplexityCard({ item }: { item: ComplexityItem }) {
  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#0b1220] transition-colors duration-500 hover:border-white/50">
      <div className="grid lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)]">
        {/* Content */}
        <div className="flex flex-col p-6 sm:p-8 lg:p-9 xl:p-10">
          {/* Number */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-medium tracking-[0.2em] text-white/45">
              {item.number}
            </span>

            <span className="h-px w-10 bg-white/20" />
          </div>

          {/* Heading */}
          <div className="mt-7">
            <h3 className="text-[22px] font-medium tracking-[-0.02em] text-white sm:text-[25px]">
              {item.title}
            </h3>

            <p className="mt-3 max-w-[260px] text-[15px] leading-6 text-white/55 sm:text-[16px]">
              {item.description}
            </p>
          </div>

          {/* Points */}
          <div className="mt-8 flex flex-col gap-3">
            {item.points.map((point) => (
              <div
                key={point}
                className="text-[15px] bodyfont font-medium tracking-[-0.01em] text-blue-100 sm:text-[16px]"
              >
                {point}
              </div>
            ))}
          </div>

          {/* Challenge */}
          <div className="mt-auto pt-9">
            <div className="mb-4 h-px w-full bg-white/[0.09]" />

            <p className="text-[12px] font-medium tracking-[0.02em] text-white/45">
              The challenge:
            </p>

            <p className="mt-2 max-w-[300px] text-[14px] leading-5 text-white/65 sm:text-[15px] sm:leading-6">
              {item.challenge}
            </p>
          </div>
        </div>

        {/* Visual */}
        <div className="relative min-h-[320px] overflow-hidden border-t border-white/[0.06] bg-[radial-gradient(circle_at_50%_50%,rgba(72,91,150,0.16),transparent_65%)] sm:min-h-[380px] lg:min-h-full lg:border-l lg:border-t-0">
          <div
            className="
            absolute
            left-15
            top-1/2
            w-[145%]
            -translate-y-1/2
            overflow-hidden
            rounded-[16px]
            border
            border-black/10
            bg-white
            shadow-[0_30px_80px_rgba(0,0,0,0.35)]
            transition-transform
            duration-700
            ease-out
            group-hover:-translate-x-[5%]
          "
          >
            <div className="relative h-[280px] w-full sm:h-[330px] lg:h-[360px]">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="h-full w-full object-cover object-left"
                sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 80vw,
          700px
        "
              />
            </div>

            {item.label && (
              <div className="absolute bottom-4 left-4 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-[10px] font-medium text-black/65 shadow-lg backdrop-blur-md">
                {item.label}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ComplexitySection() {
  return (
    <section className="relative overflow-hidden bg-[#060b14] py-24 sm:py-32 lg:py-40">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[8%] h-[500px] w-[500px] rounded-full bg-[#314477]/10 blur-[140px]" />

        <div className="absolute bottom-[10%] right-[5%] h-[500px] w-[500px] rounded-full bg-[#1d3c70]/10 blur-[160px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.06]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <header className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 xl:gap-28">
          {/* Heading */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40 sm:text-[11px]">
              When products grow
            </p>

            <h2 className="mt-5 max-w-[760px] text-[42px] heading font-medium leading-[0.98] tracking-[-0.045em] text-white sm:text-[56px] md:text-[64px] lg:text-[68px]">
              Is your product getting harder to use as it grows?
            </h2>
          </div>

          {/* Intro */}
          <div className="flex items-start lg:pt-8">
            <div className="border-l border-white/20 pl-6 sm:pl-8">
              <p className="max-w-[480px] text-[16px] leading-7 text-white/60 sm:text-[17px] sm:leading-8">
                As products grow, complexity spreads across data, workflows,
                roles, and systems. The challenge is not removing that
                complexity. It is making sure users never have to think about
                it.
              </p>

              <div className="mt-7 flex items-center gap-4">
                <span className="h-px w-8 bg-white/25" />

                <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/35 sm:text-[10px]">
                  Complexity is inevitable. Confusion is optional.
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Large breathing space */}
        <div className="h-16 sm:h-20 lg:h-28" />

        {/* Complexity grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {complexityItems.map((item) => (
            <ComplexityCard key={item.number} item={item} />
          ))}
        </div>

        {/* Large breathing space */}
        <div className="h-20 sm:h-28 lg:h-36" />

        {/* Closing statement */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] ">
          {/* Statement */}
          <div>
            <h3 className="max-w-[900px] text-[34px] heading font-medium leading-[1.05] tracking-[-0.04em] text-white/50 sm:text-[40px] md:text-[40px] mt-6">
              The complexity can stay under the hood.
              <span className="mt-2 block text-white">
                The experience shouldn&apos;t feel complicated.
              </span>
            </h3>
          </div>

          {/* CTA */}
          <div className="flex items-end lg:pb-2">
            <div className="w-full border-l border-white/15 pl-6 sm:pl-8">
              <p className="max-w-[430px] text-[15px] bodyfont leading-6 text-white/55 sm:text-[12px] sm:leading-6">
                We structure the product, workflows, and interface so users can
                focus on what they need to accomplish, not how the system works.
              </p>

              <Link
                href="#process"
                className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white px-5 py-3 text-lg font-medium text-[#07101d] transition-all duration-300 hover:bg-white/90 sm:px-6 sm:py-3.5"
              >
                See how we turn complexity into clarity
                <ArrowLeft size={20} className="rotate-180 text-[#07101d]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
