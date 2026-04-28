// app/case-studies/rupeeflow/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import MarketImageSlider from "@/app/components/ImageSlider";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RupeeFlow — Pitch Design & Investor Narrative",
  description:
    "Framing a fintech business so it can be evaluated clearly under uncertainty.",
};

export default function RupeeFlowPitchCaseStudy() {
  const images = [
    {
      src: "/cases/rf-pitch1.png",
      alt: "TAM SAM SOM market sizing logic",
    },
    {
      src: "/cases/rf-pitch3.png",
      alt: "High friction serviceable market analysis",
    },
    {
      src: "/cases/rf-pitch4.png",
      alt: "Initial beachhead market definition",
    },
    {
      src: "/cases/rf-pitch5.png",
      alt: "Initial beachhead market definition",
    },
  ];
  return (
    <main className="bg-neutral-50 text-neutral-900 heading">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] pt-24 lg:pt-32 pb-20">
        <Link
          href="/case-studies"
          className="flex items-center py-2 px-4 body-font font-bold gap-2 text-md border border-neutral-300 w-fit rounded-full hover:bg-neutral-100 cursor-pointer mb-6"
        >
          <ArrowLeft /> Go back
        </Link>
        <header className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-medium heading tracking-tight">
            Pitch Design & Investor Narrative | RupeeFlow
          </h1>

          <p className="mt-6 text-lg md:text-xl font-medium leading-snug text-neutral-800">
            Framing a fintech business so it can be evaluated clearly under
            uncertainty
          </p>

          <p className="mt-4 text-base md:text-lg body-font text-neutral-600 max-w-3xl">
            Pitch deck designed alongside the business itself, focused on
            legibility, market logic, and assumption transparency rather than
            persuasion.
          </p>

          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-6 text-sm">
            <div>
              <dt className="text-neutral-500">Industry</dt>
              <dd className="mt-1 font-medium">Fintech & payments</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Stage</dt>
              <dd className="mt-1 font-medium">Pre-seed</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Scope</dt>
              <dd className="mt-1 font-medium">
                Pitch Design, Market Framing, Financial Narrative
              </dd>
            </div>
            <div>
              <dt className="text-neutral-500">Role</dt>
              <dd className="mt-1 font-medium">
                Narrative & Pitch Strategy Partner
              </dd>
            </div>
          </dl>
        </header>

        {/* COVER IMAGE */}
        <div className="mt-16 px-4 md:px-10 lg:px-30 relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-neutral-200 bg-white">
          <Image
            src="/cases/rf-pitch-cover.png"
            alt="RupeeFlow pitch deck overview"
            fill
            priority
            className="object-contain"
          />
        </div>
      </section>

      {/* CONTEXT */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-8 border-t border-neutral-200">
        <h2 className="text-2xl font-medium tracking-tight">Context</h2>

        <div className="mt-6 max-w-3xl space-y-4 body-font text-neutral-700 leading-relaxed">
          <p>
            Early-stage fintech fundraising is inherently assumption-driven.
            Revenue models, adoption curves, and unit economics are constructed
            with incomplete information.
          </p>
          <p>
            Investor trust depends less on certainty and more on the clarity of
            reasoning. This pitch was designed to make the business
            interpretable under scrutiny, not impressive at first glance.
          </p>
        </div>
      </section>

      {/* REAL PROBLEM */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-t border-neutral-200">
        <h2 className="text-2xl font-medium tracking-tight">
          The Real Problem
        </h2>

        <div className="mt-6 max-w-3xl body-font text-neutral-700 leading-relaxed">
          <p>
            Most pitch decks fail not because they lack information, but because
            reasoning is compressed into conclusions.
          </p>

          <ul className="mt-6 space-y-3 list-disc list-inside">
            <li>Numbers shown without defensible logic</li>
            <li>Market sizing disconnected from regulation</li>
            <li>Implicit assumptions hidden in narratives</li>
            <li>Investor confusion leading to repeated questions</li>
          </ul>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-t border-neutral-200">
        <h2 className="text-2xl font-medium tracking-tight">
          Design Philosophy
        </h2>

        <div className="mt-6 max-w-3xl body-font space-y-4 text-neutral-700 leading-relaxed">
          <p>
            The pitch deck was treated as a decision tool, not a sales document.
            Every slide exists to answer a specific evaluation question.
          </p>
          <p>
            The objective was to reduce cognitive load while preserving
            analytical depth.
          </p>
        </div>

        <blockquote className="mt-10 max-w-3xl border-l-2 border-neutral-300 pl-6 italic text-neutral-800">
          “Clarity builds trust faster than confidence.”
        </blockquote>
      </section>

      {/* MARKET & ASSUMPTIONS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-4 border-t border-neutral-200">
        <div className="grid w-full grid-cols-1 gap-16">
          <div>
            <MarketImageSlider slides={images} />
          </div>

          <div className="flex flex-col ">
            <h2 className="text-2xl font-medium tracking-tight">
              Market & Assumption Framing
            </h2>

            <div className="mt-6 max-w-3xl space-y-4 text-neutral-700 leading-relaxed">
              <p>
                Market sizing was constructed top-down and then constrained to
                reflect regulatory and operational reality.
              </p>

              <ul className="mt-6 space-y-3 body-font list-disc list-inside text-sm">
                <li>
                  <strong>TAM:</strong> All cross-border flows touching India
                </li>
                <li>
                  <strong>SAM:</strong> Retail and SMB flows permissible under
                  RBI / FEMA
                </li>
                <li>
                  <strong>High-friction SAM:</strong> Service exports and NRI
                  maintenance flows
                </li>
              </ul>
            </div>
          </div>
        </div>

        <aside className="mt-12 max-w-3xl bg-neutral-100 border border-neutral-200 p-6 text-neutral-800">
          Early-stage numbers are not predictions.
          <br />
          They are reasoning frameworks.
        </aside>
      </section>

      {/* OUTCOME */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-10 border-t border-neutral-200">
        <h2 className="text-2xl font-medium tracking-tight">Outcome</h2>

        <ul className="mt-6 max-w-3xl space-y-3 list-disc list-inside text-neutral-700">
          <li>Investors could evaluate the business without narration</li>
          <li>Assumptions were questioned rather than dismissed</li>
          <li>Conversations became more specific and analytical</li>
          <li>Reduced back-and-forth clarification</li>
        </ul>
      </section>

      {/* INSIGHT */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-t border-neutral-200">
        <h2 className="text-2xl font-medium tracking-tight">Insight</h2>

        <blockquote className="mt-8 max-w-4xl text-3xl md:text-4xl font-medium tracking-tight">
          Investors don’t fund certainty.
          <br />
          They fund coherent reasoning.
        </blockquote>

        <p className="mt-6 body-font max-w-3xl text-neutral-700 leading-relaxed">
          In fintech, early narrative discipline compounds. Legibility sets the
          trust ceiling for every conversation that follows.
        </p>
      </section>

      {/* FOOTER CTA */}
      <footer className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-16 border-t border-neutral-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-neutral-800">
            If clarity is the bottleneck, Let me help you.
          </p>
          <a
            href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20have%20a%20quick%20conversation."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
          >
            Start a conversation
          </a>
        </div>
      </footer>
    </main>
  );
}
