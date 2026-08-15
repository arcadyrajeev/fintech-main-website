// app/case-studies/rupeeflow-pitch-design/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FinalCTASection from "@/app/components/FinalCTASection";

export const metadata: Metadata = {
  title:
    "RupeeFlow Pitch Strategy Case Study | Fintech Narrative & Investor Clarity",

  description:
    "How RupeeFlow improved investor clarity, market framing, and fintech positioning through structured narrative systems, market hierarchy, and execution-focused pitch design.",

  openGraph: {
    title: "RupeeFlow Pitch Strategy | Investor Narrative & Positioning",
    description:
      "A fintech pitch strategy case study focused on market clarity, investor communication, and structured financial narratives.",
    url: "https://arcadydesign.com/case-studies/rupeeflow-pitch-design",
    siteName: "Arcady Design",
    images: [
      {
        url: "/cases/rf-pitch-cover.png",
        width: 1200,
        height: 630,
        alt: "RupeeFlow Investor Pitch Design",
      },
    ],
    type: "article",
  },

  alternates: {
    canonical: "https://arcadydesign.com/case-studies/rupeeflow-pitch-design",
  },
};

export default function PitchCaseStudy() {
  return (
    <main className="w-full overflow-hidden">
      {/* HERO */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 pt-28 md:pt-36">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 text-sm hover:bg-neutral-100 transition-colors"
          >
            <ArrowLeft size={16} />
            Go back
          </Link>

          <div className="mt-10 max-w-5xl">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#4A67FF]">
              Investor Narrative • Market Framing • Fintech Positioning
            </p>

            <h1 className="mt-4 heading text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-primary-text">
              Investor Narrative &
              <br />
              Pitch Strategy for Fintech.
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-secondary-text leading-relaxed">
              Structuring market clarity, operational positioning, and investor
              communication for a regulated fintech platform.
            </p>

            <p className="mt-5 max-w-3xl text-secondary-text leading-relaxed">
              The pitch system was redesigned to reduce ambiguity around market
              scope, business logic, operational feasibility, and growth
              assumptions.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Industry
                </p>

                <p className="mt-2 text-sm text-primary-text font-medium">
                  Fintech / Cross-border Payments
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Scope
                </p>

                <p className="mt-2 text-sm text-primary-text font-medium">
                  Pitch Design, Market Narrative, Positioning
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Role
                </p>

                <p className="mt-2 text-sm text-primary-text font-medium">
                  Product & Narrative Strategy Partner
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] overflow-hidden border border-neutral-200 bg-[#0d1320]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/cases/rf-pitch-cover.png"
                alt="RupeeFlow Pitch Strategy"
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="rounded-[2rem] border border-[#4A67FF]/20 bg-[#f5f7ff] p-8 md:p-10 grid lg:grid-cols-2 gap-14">
            <div>
              <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#4A67FF]">
                Context
              </p>

              <h2 className="mt-4 heading text-3xl md:text-4xl border-b-8 border-[#4A67FF] pb-10">
                Investors do not fund
                <br />
                feature collections.
              </h2>
            </div>

            <div className="space-y-6 text-secondary-text leading-relaxed">
              <p>
                Early-stage fintech companies often communicate capability
                before strategic clarity.
              </p>

              <p>
                The challenge was not visual presentation alone. It was reducing
                ambiguity around business logic, market constraints, and growth
                reasoning.
              </p>

              <p>
                The narrative needed stronger hierarchy, clearer assumptions,
                and more defensible positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FRICTION */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#4A67FF]">
            Friction Signals
          </p>

          <h2 className="mt-5 max-w-4xl heading text-4xl leading-[1.05]">
            The business had potential.
            <br />
            But the narrative lacked investor confidence.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              "Market opportunity framed too broadly",
              "Operational constraints not clearly surfaced",
              "Growth assumptions lacked strategic sequencing",
              "Positioning blurred across multiple categories",
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

      {/* WHAT BROKE */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#4A67FF]">
              What Actually Broke
            </p>

            <h2 className="mt-5 heading text-4xl leading-[1.05]">
              The issue was not information.
              <br />
              It was narrative structure.
            </h2>

            <div className="mt-8 space-y-6 text-secondary-text leading-relaxed">
              <p>
                The company already understood its market, operational model,
                and product direction internally.
              </p>

              <p>
                But investors could not immediately identify the business
                category, strategic wedge, or long-term expansion logic.
              </p>

              <p>
                In fintech fundraising, ambiguity weakens perceived execution
                capability before traction is evaluated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET FRAMING */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#4A67FF]">
            Market Framing
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1.05]">
            The pitch was structured
            <br />
            around legible reasoning.
          </h2>

          <ul className="mt-8 space-y-4 max-w-3xl">
            {[
              "Market sizing constrained by regulatory reality",
              "TAM narrowed through operational feasibility",
              "High-friction user segments isolated clearly",
              "Assumptions surfaced instead of hidden",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 text-secondary-text">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#4A67FF]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.5fr_.8fr] gap-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200 bg-[#f7f7f7]">
              <Image
                src="/cases/rf-rupeeflow-pitch-design.png"
                alt=""
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>

            <div className="grid grid-rows-2 gap-6">
              <div className="relative rounded-2xl aspect-[16/8] overflow-hidden border border-neutral-200 bg-[#f7f7f7] min-h-[220px]">
                <Image
                  src="/cases/rf-pitch3.png"
                  alt=""
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              <div className="relative rounded-2xl aspect-[16/8] overflow-hidden border border-neutral-200 bg-[#f7f7f7] min-h-[220px]">
                <Image
                  src="/cases/rf-pitch4.png"
                  alt=""
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* BEFORE AFTER */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 p-8 bg-white">
              <p className="text-sm font-medium text-neutral-400 uppercase tracking-[0.2em]">
                Before
              </p>

              <ul className="mt-6 space-y-4 text-secondary-text">
                <li>• Broad and generic fintech framing</li>
                <li>• Weak category distinction</li>
                <li>• Market sizing lacked constraints</li>
                <li>• Assumptions buried under slides</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#4A67FF]/20 bg-[#f5f7ff] p-8">
              <p className="text-sm font-medium text-[#4A67FF] uppercase tracking-[0.2em]">
                After
              </p>

              <ul className="mt-6 space-y-4 text-secondary-text">
                <li>• Structured investor narrative hierarchy</li>
                <li>• Clear fintech positioning</li>
                <li>• Defensible market framing</li>
                <li>• Stronger operational credibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#4A67FF]">
            Positioning Logic
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1.05]">
            The narrative prioritized
            <br />
            execution credibility over hype.
          </h2>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.5fr_.8fr] gap-6">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-200 bg-[#f7f7f7]">
              <Image
                src="/cases/rf-pitch2.png"
                alt=""
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>

            <div className="grid grid-rows-2 gap-6">
              <div className="relative rounded-2xl aspect-[16/9]  overflow-hidden border border-neutral-200 bg-[#f7f7f7] min-h-[220px]">
                <Image
                  src="/cases/rf-pitch5.png"
                  alt=""
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              <div className="relative rounded-2xl aspect-[16/9]  overflow-hidden border border-neutral-200 bg-[#f7f7f7] min-h-[220px]">
                <Image
                  src="/cases/rf-pitch6.png"
                  alt=""
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Narrative sequencing improved investor comprehension",
              "Business model logic became more legible",
              "Growth assumptions structured progressively",
              "Positioning aligned with operational reality",
              "Investor attention directed toward fundamentals",
              "Reduced ambiguity during pitch discussions",
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

      {/* STRATEGIC SHIFT */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="rounded-2xl border border-[#4A67FF]/20 bg-[#f5f7ff] p-10 md:p-14">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#4A67FF]">
              Strategic Shift
            </p>

            <h2 className="mt-5 heading text-4xl leading-[1.05] max-w-4xl">
              The pitch stopped sounding like a startup deck.
              <br />
              It started behaving like a business system.
            </h2>

            <p className="mt-8 max-w-3xl text-secondary-text leading-relaxed">
              In fintech fundraising, structured reasoning often matters more
              than aggressive storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#4A67FF]">
            Outcome
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1.05]">
            Investor clarity improved.
            <br />
            Narrative ambiguity reduced.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              "Clearer fintech positioning and differentiation",
              "Improved market narrative structure",
              "Reduced ambiguity around business logic",
              "Stronger investor-facing communication",
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

      {/* INSIGHT */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="rounded-2xl border border-neutral-200 bg-[#fafafa] p-10 lg:p-14">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#4A67FF]">
              Insight
            </p>

            <blockquote className="mt-6 heading text-3xl leading-[1.1]">
              “Investors rarely reject information.
              <br />
              They reject unclear reasoning.”
            </blockquote>

            <p className="mt-6 max-w-3xl text-secondary-text leading-relaxed">
              In regulated financial systems, narrative clarity directly shapes
              perceived execution capability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full pt-10 pb-28">
        <FinalCTASection
          text1="If the business feels complex"
          text2="but the narrative feels vague, clarity usually breaks first."
        />
      </section>
    </main>
  );
}
