// app/case-studies/crypto-risk-platform/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clarity & Data hierarchy | Crypto trade risk analysis",
  description:
    "Designing a crypto trading system where execution risk is visible, differentiated, and legible before action.",
};

export default function CryptoRiskCaseStudy() {
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
            Clarity & Data hierarchy | Crypto trade risk analysis
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-snug text-neutral-800">
            Making execution risk visible before a trade is placed.
          </p>
          <p className="mt-4 text-base md:text-md text-neutral-600 max-w-2xl">
            A crypto trading intelligence platform restructured to surface
            hidden fees, liquidity risk, and market integrity signals without
            overwhelming traders with noise.
          </p>

          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <dt className="text-neutral-500">Industry</dt>
              <dd className="mt-1 font-medium">Crypto / Trading</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Scope</dt>
              <dd className="mt-1 font-medium">
                Product Structure, Risk Narrative, Data Hierarchy
              </dd>
            </div>
            <div>
              <dt className="text-neutral-500">Role</dt>
              <dd className="mt-1 font-medium">Product & Narrative Partner</dd>
            </div>
          </dl>
        </header>

        {/* COVER IMAGE */}
        <div className="mt-16 px-4 md:px-10 lg:px-30 relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200">
          <Image
            src="/cases/bq-product1.png"
            alt="Crypto trade risk analysis overview"
            fill
            priority
            className="object-contain"
          />
        </div>
      </section>

      {/* Risk Context */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-10 lg:py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Risk context
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-neutral-700 leading-relaxed">
          <p>
            In crypto markets, data abundance creates an illusion of control.
            Traders are rarely under-informed, they are misled by fragmented
            risk signals.
          </p>
          <p>
            The real danger is not volatility, but false confidence caused by
            hidden fees, shallow liquidity, and manipulation signals that only
            appear after execution.
          </p>
          <p>
            The platform&apos;s challenge was not access to information, but
            making risk legible under time pressure.
          </p>
        </div>
      </section>

      {/* Legibility Problem */}
      <section className="relative  max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-10 lg:py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          The legibility problem
        </h2>
        <div className="mt-6 max-w-3xl text-neutral-700 leading-relaxed">
          <p>
            The platform already surfaced spreads, liquidity, volatility, and
            fees. But at the moment of execution, risk signals competed instead
            of guiding.
          </p>
          <p className="mt-4">
            The challenge was not reducing data, but ordering it so the most
            dangerous signals could not be ignored.
          </p>
          <ul className="mt-6 space-y-3 list-disc list-inside">
            <li>
              <span className="font-medium text-neutral-900">
                Risk dilution:
              </span>{" "}
              Critical alerts looked similar to informational updates.
            </li>
            <li>
              <span className="font-medium text-neutral-900">
                Cost abstraction:
              </span>{" "}
              Execution impact was visible, but not felt.
            </li>
            <li>
              <span className="font-medium text-neutral-900">
                Color overload:
              </span>{" "}
              Visual emphasis did not reflect urgency or severity.
            </li>
            <li>
              <span className="font-medium text-neutral-900">
                False opportunity:
              </span>{" "}
              Apparent arbitrage ignored execution reality.
            </li>
          </ul>
        </div>
      </section>

      {/* Structural Decisions */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-10 lg:py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Structural decisions
        </h2>

        {/* Risk Visibility */}
        <div className="mt-10 max-w-3xl">
          <h3 className="text-lg heading text-primary-text font-medium">
            Risk visibility as a first-class signal
          </h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Risk was elevated from background context to an explicit decision
            layer. Integrity alerts, volatility warnings, and fee changes were
            separated from performance metrics.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Severity, recency, and impact were made instantly scannable.
          </p>
        </div>

        {/* Data Hierarchy */}
        <div className="mt-12 max-w-3xl">
          <h3 className="text-lg heading text-primary-text font-medium">
            Data hierarchy over data volume
          </h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Instead of compressing information, the system was restructured to
            lead with consequence.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Execution cost, depth impact, and volatility context now frame
            opportunity, not the other way around.
          </p>
        </div>

        {/* Color Discipline */}
        <div className="mt-12 max-w-3xl">
          <h3 className="text-lg heading text-primary-text font-medium">
            Color as meaning, not decoration
          </h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Color usage was deliberately reduced and reassigned to signal risk
            severity rather than fluctuation.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            This reduced cognitive load while increasing decisiveness under
            pressure.
          </p>
        </div>

        {/* Product Images */}
        <div className="mt-16  flex relative grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative w-[90vw] md:w-[60vw] rounded-lg overflow-hidden aspect-[16/9]">
            <Image
              alt="Crypto arbitrage execution overview"
              src="/cases/bq-product2.png"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-10 lg:py-20border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Outcome
        </h2>
        <ul className="mt-6 max-w-3xl space-y-3 list-disc list-inside text-neutral-700">
          <li>Risk surfaced before execution, not after loss</li>
          <li>Clear differentiation between signal and noise</li>
          <li>More defensible, slower-but-safer trade decisions</li>
          <li>Reduced false confidence from misleading spreads</li>
          <li>Platform perceived as execution-aware, not analytics-heavy</li>
        </ul>
      </section>

      {/* Insight */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Insight
        </h2>
        <blockquote className="mt-8 max-w-4xl text-3xl md:text-4xl heading font-medium tracking-tight">
          “In trading, clarity is a risk control mechanism.”
        </blockquote>
        <p className="mt-6 max-w-3xl text-neutral-700 leading-relaxed">
          When risk is structured and visible, traders don&apos;t need
          persuasion. They self-regulate.
        </p>
      </section>

      {/* Footer CTA */}
      <footer className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-10 lg:py-20 border-t border-neutral-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-neutral-800">
            If execution risk is invisible, performance metrics are misleading.
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
