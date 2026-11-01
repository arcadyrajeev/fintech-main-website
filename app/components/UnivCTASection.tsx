import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  highlight?: string;
  description?: string;
  buttonText?: string;
  href?: string;
}

export default function UnivCTASection({
  eyebrow = "Start a conversation",
  title = "Have a product challenge?",
  highlight = "Let's work through it.",
  description = "Whether you're building something new or improving an existing product, let's explore how stronger product strategy, architecture, UX, and engineering can move it forward.",
  buttonText = "Discuss your product",
  href = "mailto:hello@arcadydesign.com",
}: CTASectionProps) {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#081426] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-16"
    >
      {/* BACKGROUND ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Light blue blob */}
        <div
          className="
      absolute
      -right-20
      -top-24
      h-[520px]
      w-[520px]
      rounded-full
      bg-blue-400/30
      blur-[120px]
    "
        />

        {/* Orange blob */}
        <div
          className="
      absolute
      right-[22%]
      bottom-[5%]
      h-[380px]
      w-[380px]
      rounded-full
      bg-orange-500/30
      blur-[110px]
    "
        />

        {/* Secondary blue glow */}
        <div
          className="
      absolute
      -bottom-64
      left-[5%]
      h-[480px]
      w-[480px]
      rounded-full
      bg-blue-500/20
      blur-[130px]
    "
        />

        {/* Slanted glass panels */}
        <div className="absolute inset-y-[-15%] right-[-12%] hidden w-[65%] lg:block">
          <div className="absolute inset-y-0 left-[4%] w-[19%] -skew-x-[16deg] border-x border-white/[0.12] bg-gradient-to-b from-white/[0.09] via-white/[0.015] to-white/[0.04] backdrop-blur-[2px]" />

          <div className="absolute inset-y-0 left-[27%] w-[19%] -skew-x-[16deg] border-x border-white/[0.10] bg-gradient-to-b from-white/[0.06] via-white/[0.01] to-white/[0.035]" />

          <div className="absolute inset-y-0 left-[50%] w-[19%] -skew-x-[16deg] border-x border-white/[0.10] bg-gradient-to-b from-white/[0.08] via-white/[0.015] to-white/[0.04]" />

          <div className="absolute inset-y-0 left-[73%] w-[19%] -skew-x-[16deg] border-x border-white/[0.08] bg-gradient-to-b from-white/[0.05] via-white/[0.01] to-white/[0.03]" />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-sky-200" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200">
              {eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {title}

            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              {highlight}
            </span>
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {description}
          </p>

          {/* CTA */}
          <Link
            href={href}
            className="group mt-10 inline-flex items-center gap-5 rounded-full border border-white/20 bg-white px-7 py-4 text-sm font-semibold text-[#0B192B] shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-300"
          >
            {buttonText}

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B192B] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
