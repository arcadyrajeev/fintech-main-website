import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#081426] px-6 py-24 text-white lg:px-16 lg:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue gradient orb */}
        <div className="absolute -right-20 -top-40 h-[550px] w-[550px] rounded-full bg-blue-600/30 blur-[130px]" />

        {/* Orange gradient orb */}
        <div className="absolute right-[25%] top-[35%] h-[380px] w-[380px] rounded-full bg-orange-500/20 blur-[130px]" />

        {/* Secondary blue glow */}
        <div className="absolute -bottom-64 left-[5%] h-[450px] w-[450px] rounded-full bg-sky-500/15 blur-[120px]" />

        {/* Slanted glass architecture */}
        <div className="absolute inset-y-0 right-[-10%] hidden w-[65%] lg:block">
          <div className="absolute inset-y-[-15%] left-[8%] w-[20%] -skew-x-[16deg] border-x border-white/10 bg-gradient-to-b from-white/[0.09] via-white/[0.015] to-white/[0.04] backdrop-blur-[2px]" />

          <div className="absolute inset-y-[-15%] left-[31%] w-[20%] -skew-x-[16deg] border-x border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.01] to-white/[0.035]" />

          <div className="absolute inset-y-[-15%] left-[54%] w-[20%] -skew-x-[16deg] border-x border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.015] to-white/[0.04]" />

          <div className="absolute inset-y-[-15%] left-[77%] w-[20%] -skew-x-[16deg] border-x border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.01] to-white/[0.035]" />

          {/* Glass highlight */}
          <div className="absolute left-[30%] top-[10%] h-[80%] w-px rotate-[16deg] bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>

        {/* Subtle background grid */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:70px_70px]" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030B17]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-sky-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Start a conversation
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            Your product needs
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-blue-600">
              a stronger system.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Tell us where your product stands, what&apos;s becoming difficult,
            and where you want to take it next. Let&apos;s identify what needs
            to change.
          </p>

          {/* CTA */}
          <Link
            href="mailto:hello@arcadydesign.com"
            className="group mt-10 inline-flex items-center gap-4 rounded-full border border-white/20 bg-white px-7 py-4 text-sm font-semibold text-[#0B192B] shadow-[0_8px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-sky-400"
          >
            Discuss your product
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B192B] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </div>

        {/* Bottom detail */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
            Arcady Design · Product Transformation
          </span>

          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
            Architecture · UX · Engineering
          </span>
        </div>
      </div>
    </section>
  );
}
