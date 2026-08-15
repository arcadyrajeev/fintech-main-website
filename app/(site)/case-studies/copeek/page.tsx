// app/case-studies/copeek/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FinalCTASection from "@/app/components/FinalCTASection";

export const metadata: Metadata = {
  title:
    "Copeek Case Study | AI Brand Visibility & Operational Dashboard Direction",

  description:
    "Designing a brand visibility platform focused on AI perception, operational monitoring, and multi-platform visibility systems.",

  openGraph: {
    title: "Copeek Case Study | AI Visibility Infrastructure & Dashboard UX",

    description:
      "A platform direction focused on AI-era brand monitoring, perception systems, and operational visibility.",

    url: "https://arcadydesign.com/case-studies/copeek",

    siteName: "Arcady Design",

    images: [
      {
        url: "/cases/copeek-cover.png",
        width: 1200,
        height: 630,
        alt: "Copeek AI visibility platform",
      },
    ],

    type: "article",
  },

  alternates: {
    canonical: "https://arcadydesign.com/case-studies/copeek",
  },
};

export default function CopeekCaseStudy() {
  return (
    <main className="w-full overflow-hidden">
      {/* HERO */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 pt-28 md:pt-36">
          {/* HERO ACTIONS */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 text-sm hover:bg-neutral-100 transition-colors"
            >
              <ArrowLeft size={16} />
              Go back
            </Link>

            <Link
              href="https://copeek.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-700 text-white text-sm hover:opacity-90 transition-opacity"
            >
              Visit Live Site
            </Link>
          </div>

          <div className="mt-10 max-w-5xl">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#5acaca]">
              AI VISIBILITY • BRAND SYSTEMS • OPERATIONAL DASHBOARDS
            </p>

            <h1 className="mt-4 heading text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-primary-text">
              Designing visibility infrastructure
              <br />
              for AI-era brands.
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-secondary-text leading-relaxed">
              Copeek was designed as a monitoring and visibility platform that
              helps teams understand how brands are interpreted across AI
              systems, search surfaces, and conversational interfaces.
            </p>

            <p className="mt-5 max-w-3xl text-secondary-text leading-relaxed">
              The platform focused on operational visibility, perception
              tracking, and strategic monitoring systems for brands navigating
              AI-driven discovery environments.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Industry
                </p>

                <p className="mt-2 text-sm text-primary-text font-medium">
                  AI / Brand Infrastructure
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Scope
                </p>

                <p className="mt-2 text-sm text-primary-text font-medium">
                  Brand Systems, Dashboard Direction, Product Design
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Role
                </p>

                <p className="mt-2 text-sm text-primary-text font-medium">
                  Product & Brand Systems Designer
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-2xl overflow-hidden border border-neutral-200 ">
            <div className="relative aspect-[16/12] w-full">
              <Image
                src="/cases/copeek-cover.png"
                alt="Copeek Hero"
                fill
                unoptimized
                className="object-cover "
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="rounded-[2rem] border border-[#5acaca]/20 bg-[#f5ffff] p-8 md:p-10 grid lg:grid-cols-2 gap-14">
            <div>
              <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#1eabab]">
                Context
              </p>

              <h2 className="mt-4 heading text-3xl md:text-4xl border-b-8 border-[#5acaca] pb-10">
                AI changed how brands
                <br />
                are discovered.
                <br />
                But visibility became fragmented.
              </h2>
            </div>

            <div className="space-y-6 text-secondary-text leading-relaxed">
              <p>
                As AI-generated responses increasingly shape discovery,
                recommendation, and trust, brands face a new operational
                challenge:
              </p>

              <p>
                understanding how they appear across AI systems and
                conversational interfaces.
              </p>

              <p>
                The goal was to create a platform direction that transforms
                fragmented AI perception into structured operational visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FRICTION */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#1eabab]">
            Friction Signals
          </p>

          <h2 className="mt-5 max-w-4xl heading text-4xl leading-[1.05]">
            Brands had visibility data.
            <br />
            But no operational interpretation layer.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              "Brands had no operational visibility into AI interpretation",
              "Monitoring perception across platforms was fragmented",
              "AI responses created inconsistent trust signals",
              "Competitive visibility was difficult to measure clearly",
              "Existing monitoring tools lacked strategic hierarchy",
              "Brand teams could not easily identify narrative drift",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-neutral-200 bg-white p-6"
              >
                <p className="text-secondary-text leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND SYSTEM */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#1eabab]">
            Brand System
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            The identity system was designed
            <br />
            to feel analytical and operational.
          </h2>

          <ul className="mt-8 space-y-4 max-w-3xl">
            {[
              "High-contrast interface language",
              "Structured visual hierarchy for monitoring systems",
              "Brand identity optimized for dashboard environments",
              "Cyan accent system designed for visibility cues",
              "Minimal visual noise for data-heavy workflows",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 text-secondary-text">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#5acaca]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.4fr_.8fr] gap-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200 ">
              <Image
                src="/cases/copeek-brand1.png"
                alt="Copeek Brand System"
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>

            <div className="grid grid-rows-2 gap-6">
              <div className="relative rounded-2xl aspect-[16/8] overflow-hidden border border-neutral-200 ">
                <Image
                  src="/cases/copeek-brand3.png"
                  alt="Copeek Business Card"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              <div className="relative rounded-2xl aspect-[16/8] overflow-hidden border border-neutral-200 ">
                <Image
                  src="/cases/copeek-brand4.png"
                  alt="Copeek Color System"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
          <div
            className="
                        relative rounded-2xl
                        overflow-hidden
                        border border-neutral-200
                       mt-6
                        lg:col-span-12
                      "
          >
            <div
              className="
                          absolute inset-0 opacity-[0.03]
                        "
            />

            <div className="relative aspect-[16/6]">
              <Image
                src="/cases/copeek-brand2.png"
                alt=""
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#1eabab]">
            Dashboard Direction
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            The dashboard focused on
            <br />
            AI visibility interpretation.
          </h2>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.4fr_.8fr] gap-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200 bg-black">
              <Image
                src="/cases/copeek-dashboard1.png"
                alt="Copeek Dashboard"
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>

            <div className="grid grid-rows-2 gap-6">
              <div className="relative rounded-2xl aspect-[16/8] overflow-hidden border border-neutral-200 bg-black">
                <Image
                  src="/cases/copeek-dashboard2.png"
                  alt="Dashboard Direction"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              <div className="relative rounded-2xl aspect-[16/8] overflow-hidden border border-neutral-200 bg-black">
                <Image
                  src="/cases/copeek-dashboard3.png"
                  alt="Copeek Presentation"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Cross-platform AI visibility monitoring",
              "Competitive interpretation tracking",
              "Structured perception analytics",
              "Operational signal hierarchy",
              "Brand health monitoring systems",
              "Designed for repeated strategic analysis",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-neutral-200 bg-white p-5"
              >
                <p className="text-secondary-text leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONAL THINKING */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#1eabab]">
            Operational Thinking
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            The platform was designed as
            <br />
            decision infrastructure.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "AI visibility becomes measurable",
              "Narrative drift becomes detectable",
              "Competitive positioning becomes observable",
              "Brand trust becomes operationally trackable",
              "Perception becomes a strategic system",
              "Visibility becomes part of brand infrastructure",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-neutral-200 bg-[#081125] text-white p-6"
              >
                <p className="leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#1eabab]">
            Outcome
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            Structured visibility.
            <br />
            Clearer operational interpretation.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Clearer AI visibility hierarchy",
              "Stronger operational framing",
              "More structured perception monitoring",
              "Reduced cognitive overload in analysis workflows",
              "Consistent visual language across product surfaces",
              "Improved strategic readability",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-neutral-200 bg-white p-5"
              >
                <p className="text-secondary-text leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHT */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="rounded-2xl border border-neutral-200 bg-[#f8ffff] p-10 lg:p-14">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#1eabab]">
              Insight
            </p>

            <blockquote className="mt-6 heading text-3xl leading-[1]">
              “AI visibility is becoming part
              <br />
              of brand infrastructure.”
            </blockquote>

            <p className="mt-6 max-w-3xl text-secondary-text leading-relaxed">
              Brands are no longer shaped only through websites and ads.
              Increasingly, they are shaped through AI interpretation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full pt-10 pb-28">
        <FinalCTASection
          text1="If AI becomes the first touchpoint"
          text2="brand visibility becomes operational."
        />
      </section>
    </main>
  );
}
