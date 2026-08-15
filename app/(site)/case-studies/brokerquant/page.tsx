// app/case-studies/brokerquant/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import FinalCTASection from "@/app/components/FinalCTASection";

export const metadata: Metadata = {
  title:
    "BrokerQuant Case Study | Data Hierarchy, Risk Visibility & Trading UX",

  description:
    "How BrokerQuant restructured trading data hierarchy, execution visibility, and risk signaling to reduce false confidence and improve decision clarity in crypto trading.",

  keywords: [
    "crypto trading UX",
    "risk visibility dashboard",
    "financial dashboard UX",
    "execution oriented UX",
    "data hierarchy fintech",
    "crypto trading interface",
    "brokerquant case study",
  ],

  openGraph: {
    title: "BrokerQuant Case Study | Risk Visibility & Execution-Oriented UX",
    description:
      "A crypto trading platform restructured around risk visibility, execution feasibility, and decision clarity.",
    url: "https://arcadydesign.com/case-studies/brokerquant",
    siteName: "Arcady Design",
    images: [
      {
        url: "/cases/bq-product1.png",
        width: 1200,
        height: 630,
        alt: "BrokerQuant dashboard redesign",
      },
    ],
    type: "article",
  },

  alternates: {
    canonical: "https://arcadydesign.com/case-studies/brokerquant",
  },
};

export default function BrokerQuantCaseStudy() {
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
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#f97316]">
              Crypto • Risk Analytics • Financial UX
            </p>

            <h1 className="mt-4 heading text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-primary-text">
              Clarity & Data hierarchy for execution-oriented trading.
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-secondary-text leading-relaxed">
              Making execution risk visible before traders commit capital.
            </p>

            <p className="mt-5 max-w-3xl text-secondary-text leading-relaxed">
              A crypto trading intelligence platform restructured to surface
              hidden fees, shallow liquidity, and execution risk before action
              is taken.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Industry
                </p>

                <p className="mt-2 text-sm text-primary-text font-medium">
                  Crypto / Trading
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Scope
                </p>

                <p className="mt-2 text-sm text-primary-text font-medium">
                  Risk Narrative &s Data Hierarchy
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Role
                </p>

                <p className="mt-2 text-sm text-primary-text font-medium">
                  Product & Narrative Partner
                </p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="mt-16 rounded-[2rem] overflow-hidden border border-neutral-200 bg-[#f7f7f7]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/cases/bq-product1.png"
                alt="BrokerQuant Dashboard"
                fill
                unoptimized
                className="object-contain object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div
            className="
              rounded-[2rem]
              border border-[#f97316]
              
              bg-[#fdf9fb]
              p-8 md:p-10
              grid lg:grid-cols-2 gap-14
            "
          >
            <div>
              <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#f97316]">
                Context
              </p>

              <h2 className="mt-4 heading text-3xl md:text-5xl border-b-10 border-[#f97316] pb-10">
                The product worked.
                <br />
                But Trust was missing.
              </h2>
            </div>

            <div className="space-y-6 text-secondary-text leading-relaxed">
              <p>
                In crypto markets, traders rarely suffer from lack of
                information. They suffer from fragmented risk visibility.
              </p>

              <p>
                The original system surfaced spreads, volatility, and execution
                data, but critical signals competed equally for attention.
              </p>

              <p>
                This created false confidence during execution, especially under
                speed and market pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#f97316]">
            Friction Signals
          </p>

          <h2 className="mt-5 max-w-3xl heading text-4xl leading-[1.05]">
            Clarity problems rarely appear as obvious UX problems.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              "Too many metrics competing for attention",
              "Execution feasibility blended into market noise",
              "Risk indicators existed but lacked priority",
              "Opportunity signals appeared stronger than danger signals",
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

      {/* BEFORE AFTER */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#f97316]">
            Before & After
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            From informational overload
            <br />
            to execution clarity.
          </h2>

          <div className="mt-14 grid lg:grid-cols-2 gap-10">
            {/* BEFORE */}
            <div className="rounded-2xl border border-red-200 bg-red-50/40 overflow-hidden">
              <div className="p-8">
                <div className="inline-flex rounded-full border border-red-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-red-500">
                  Before
                </div>

                <ul className="mt-8 space-y-4">
                  {[
                    "Metrics competed equally for attention",
                    "Execution risk appeared too late",
                    "Opportunity signals dominated perception",
                    "Visual hierarchy failed under pressure",
                    "Traders reacted to movement instead of consequence",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-secondary-text">
                      <span className="mt-2 h-2 w-2 rounded-full bg-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[16/10] w-full border-t border-red-100">
                <Image
                  src="/cases/bqbefore.webp"
                  alt="Before redesign"
                  fill
                  unoptimized
                  className="object-contain object-top p-3"
                />
              </div>
            </div>

            {/* AFTER */}
            <div className="rounded-2xl border border-[#17C085]/20 bg-[#a5f5a7]/5 overflow-hidden">
              <div className="p-8">
                <div className="inline-flex rounded-full border border-[#17C085]/60 bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#0A9967] font-medium">
                  After
                </div>

                <ul className="mt-8 space-y-4">
                  {[
                    "Risk surfaced before execution decisions",
                    "Hierarchy prioritized consequence over volume",
                    "Execution feasibility framed opportunity",
                    "Critical signals became immediately visible",
                    "The system supported slower but safer decisions",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-secondary-text">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#17C085]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative rounded-xl aspect-[16/10] w-full ">
                <Image
                  src="/cases/bq-product2.png"
                  alt="After redesign"
                  fill
                  unoptimized
                  className="object-contain object-top p-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DECISION SYSTEM */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#f97316]">
            Structural Decisions
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            The interface was rebuilt
            <br />
            around decision layers.
          </h2>

          <p className="mt-6 max-w-3xl text-secondary-text leading-relaxed">
            Instead of compressing information, the system was restructured to
            lead with consequence.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Layer 1",
                heading: "Action Summary",
                desc: "Best arbitrage opportunity, market volatility, and execution cost surfaced first.",
              },
              {
                title: "Layer 2",
                heading: "Execution Feasibility",
                desc: "Order book depth, spread behavior, and execution impact framed viability.",
              },
              {
                title: "Layer 3",
                heading: "Risk & Integrity Signals",
                desc: "Integrity alerts and manipulation indicators became impossible to ignore.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-neutral-200 bg-white p-6"
              >
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#f97316]">
                  {item.title}
                </p>

                <h3 className="mt-4 heading text-2xl leading-[1]">
                  {item.heading}
                </h3>

                <p className="mt-4 text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* IMAGES */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.4fr_.8fr] gap-6">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-neutral-200 bg-[#fafafa]">
              <Image
                src="/cases/bq-product2.png"
                alt="BrokerQuant Dashboard"
                fill
                unoptimized
                className="object-cover object-top "
              />
            </div>

            <div className="grid grid-rows-2 gap-6">
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 bg-[#fafafa]">
                <Image
                  src="/cases/bq-product1.png"
                  alt=""
                  fill
                  unoptimized
                  className="object-cover object-top "
                />
              </div>

              <div className="relative rounded-xl overflow-hidden border border-neutral-200 bg-[#fafafa]">
                <Image
                  src="/cases/bq-product3.png"
                  alt=""
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="rounded-2xl overflow-hidden border border-[#f97316]/20 bg-gradient-to-br from-[#fff7f2] to-[#fff]">
            <div className="grid lg:grid-cols-[.9fr_1.1fr] items-center">
              <div className="p-10 lg:p-14">
                <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#f97316]">
                  Risk Visibility
                </p>

                <h2 className="mt-5 heading text-4xl leading-[1]">
                  Risk visibility became
                  <br />a first-class decision layer.
                </h2>

                <ul className="mt-8 space-y-4">
                  {[
                    "Execution cost surfaced before opportunity framing",
                    "Severity and urgency became instantly scannable",
                    "Color usage reflected consequence instead of fluctuation",
                    "Critical risk signals separated from informational metrics",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-secondary-text">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#f97316]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[16/11]">
                <Image
                  src="/cases/bq-product2.png"
                  alt="Dashboard redesign"
                  fill
                  unoptimized
                  className="object-cover object-top pr-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#f97316]">
            Outcome
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            Reduced false confidence.
            <br />
            Increased execution clarity.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Risk surfaced before execution instead of after loss",
              "Reduced false confidence during volatile conditions",
              "Improved distinction between signal and noise",
              "Lower cognitive overload during execution windows",
              "Platform perceived as execution-aware instead of analytics-heavy",
              "Decision quality improved under speed and pressure",
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
          <div className="rounded-2xl border border-neutral-200 bg-[#fafafa] p-10 lg:p-14">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#f97316]">
              Insight
            </p>

            <blockquote className="mt-6 heading text-3xl  leading-[1] ">
              “Trading UX is about time, risk, and consequence. Not aesthetics.”
            </blockquote>

            <p className="mt-6 max-w-3xl text-secondary-text leading-relaxed">
              When systems expose consequence clearly, users make safer
              decisions without requiring persuasion.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full pt-10 pb-28">
        <FinalCTASection
          text1="If execution risk is invisible,"
          text2="performance metrics become misleading."
        />
      </section>
    </main>
  );
}
