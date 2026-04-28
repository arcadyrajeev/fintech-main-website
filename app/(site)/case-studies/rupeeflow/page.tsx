// app/case-studies/rupeeflow/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product & narrative architecture | Rupeeflow",
  description:
    "Designing a fintech system that could be correctly understood by users, investors, and the market.",
};

export default function RupeeFlowCaseStudy() {
  return (
    <main className="bg-neutral-50 text-neutral-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] pt-24 lg:pt-32 pb-20">
        <Link
          href="/case-studies"
          className="flex items-center py-2 px-4 body-font font-bold gap-2 text-md border border-neutral-300 w-fit rounded-full hover:bg-neutral-100 cursor-pointer mb-6"
        >
          <ArrowLeft /> Go back
        </Link>
        <header className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl heading text-primary-text font-medium tracking-tight">
            Product & narrative architecture | Rupeeflow
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-snug text-neutral-800">
            Designing a fintech system that could be correctly understood -
            without explanation.
          </p>
          <p className="mt-4 text-base md:text-md text-neutral-600 max-w-2xl">
            Built from zero with product structure, brand, and narrative treated
            as a single system, not separate deliverables.
          </p>

          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <dt className="text-neutral-500">Industry</dt>
              <dd className="mt-1 font-medium">Fintech - Payments</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Scope</dt>
              <dd className="mt-1 font-medium">
                Product Structure, Narrative & Branding
              </dd>
            </div>
            <div>
              <dt className="text-neutral-500">Role</dt>
              <dd className="mt-1 font-medium">Product & Narrative Partner</dd>
            </div>
          </dl>
        </header>

        {/* COVER IMAGE */}
        <div className="mt-16 px-4 md:px-10 lg:px-30 relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-neutral-200 bg-white">
          <Image
            src="/cases/rf-product-cover.png"
            alt="RupeeFlow system overview"
            fill
            priority
            className="object-contain"
          />
        </div>
      </section>

      {/* Risk Context */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Risk context
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-neutral-700 leading-relaxed">
          <p>
            RupeeFlow operates in a domain where ambiguity is not neutral. In
            fintech, unclear structure doesn’t slow progress, it erodes trust.
          </p>
          <p>
            At this stage, the primary risk was not technical feasibility. The
            risk was misinterpretation - by users assessing safety, investors
            assessing viability, and partners assessing seriousness.
          </p>
          <p>
            Early legibility matters disproportionately in regulated or
            trust-sensitive systems. Ambiguity compounds faster than progress.
          </p>
        </div>
      </section>

      {/* Legibility Problem */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          The legibility problem
        </h2>
        <div className="mt-6 max-w-3xl text-neutral-700 leading-relaxed">
          <p>
            Early-stage fintechs are judged less on polish and more on whether
            the business can be clearly understood and responsibly trusted.
            Execution was not the bottleneck.
          </p>
          <p className="mt-4">
            The challenge was making the business legible from day one.
          </p>
          <ul className="mt-6 space-y-3 list-disc list-inside">
            <li>
              <span className="font-medium text-neutral-900">
                Trust signaling:
              </span>{" "}
              Establishing financial credibility without over-assertion.
            </li>
            <li>
              <span className="font-medium text-neutral-900">
                Market clarity:
              </span>{" "}
              Making it immediately clear what kind of fintech this is, and what
              it is not.
            </li>
            <li>
              <span className="font-medium text-neutral-900">
                Investor interpretation:
              </span>{" "}
              Making assumptions visible and structurally defensible.
            </li>
            <li>
              <span className="font-medium text-neutral-900">
                Product logic:
              </span>{" "}
              Showing how money moves, why it moves, and what outcomes result.
            </li>
          </ul>
        </div>
      </section>

      {/* Structural Decisions */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Structural decisions
        </h2>

        {/* Positioning */}
        <div className="mt-10 max-w-3xl">
          <h3 className="text-lg heading text-primary-text font-medium">
            Positioning & trust framing
          </h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            The brand was anchored in operational credibility rather than
            aspirational language. The positioning focused on what the system
            enables today and how reliably it does so.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Every visual and verbal decision was filtered through one question:
            does this increase perceived legitimacy in a regulated context?
          </p>
        </div>

        {/* External Narrative */}
        <div className="mt-12 max-w-3xl">
          <h3 className="text-lg heading text-primary-text font-medium">
            External narrative control
          </h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            The website was treated as a clarity interface, not a marketing
            surface. Its role was to reduce explanation overhead in investor,
            partner, and user conversations.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Structure, messaging, and flow were aligned so external
            interpretation matched internal intent across audiences.
          </p>
        </div>

        {/* Product Legibility */}
        <div className="mt-12 max-w-3xl">
          <h3 className="text-lg heading text-primary-text font-medium">
            Product legibility
          </h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            The product was structured around financial decisions rather than
            feature discovery. Interfaces prioritized flows, causality, and
            outcomes over secondary controls.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            The goal was to make state and consequence understandable without
            active interpretation.
          </p>
        </div>

        {/* Product Images */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative rounded-lg overflow-hidden aspect-[16/9]">
            <Image
              alt="RupeeFlow product structure"
              src="/cases/rf-product1.png"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden aspect-[16/9]">
            <Image
              alt="RupeeFlow financial flows"
              src="/cases/rf-product2.png"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Onboarding Flow Clarity */}
        <div className="mt-16 max-w-3xl">
          <h3 className="text-lg heading text-primary-text font-medium">
            Onboarding flow clarity
          </h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            In regulated fintech, onboarding is not a form-filling exercise. It
            is the first moment where trust is either established or quietly
            lost.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            The onboarding flow was designed as a progressive trust-building
            system - revealing intent, structure, and seriousness before asking
            for full commitment.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Information was collected in deliberate stages that mirror how
            regulators, banks, and investors evaluate risk, not how consumer
            signups optimize for speed.
          </p>
        </div>

        {/* Onboarding Images */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3  gap-6 md:gap-2">
          <div className="relative rounded-lg overflow-hidden aspect-[16/9]">
            <Image
              src="/cases/rf-onboard1.png"
              alt="RupeeFlow KYC onboarding step"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden aspect-[16/9]">
            <Image
              src="/cases/rf-onboard2.png"
              alt="RupeeFlow business structure onboarding"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden aspect-[16/9]">
            <Image
              src="/cases/rf-onboard3.png"
              alt="RupeeFlow KYB verification step"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Outcome
        </h2>
        <ul className="mt-6 max-w-3xl space-y-3 list-disc list-inside text-neutral-700">
          <li>Brand, product, and narrative aligned from day one</li>
          <li>Reduced explanation during demos and strategic conversations</li>
          <li>Stronger trust signals in a regulated fintech context</li>
          <li>Business perceived as intentional rather than experimental</li>
          <li>Product could be correctly understood without persuasion</li>
        </ul>
      </section>

      {/* Insight */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Insight
        </h2>
        <blockquote className="mt-8 max-w-4xl text-3xl md:text-4xl heading font-medium tracking-tight">
          “In fintech, the first version sets the trust ceiling.”
        </blockquote>
        <p className="mt-6 max-w-3xl text-neutral-700 leading-relaxed">
          Early alignment between product structure and narrative compounds over
          time. Clarity reduces friction, accelerates decision-making, and
          becomes a durable financial advantage.
        </p>
      </section>

      {/* Footer CTA */}
      <footer className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-16 border-t border-neutral-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-neutral-800">
            If interpretation risk is slowing decisions, a conversation usually
            helps.
          </p>
          <a
            href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20have%20a%20quick%20conversation."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
          >
            Start a conversation
          </a>
        </div>
      </footer>
    </main>
  );
}
