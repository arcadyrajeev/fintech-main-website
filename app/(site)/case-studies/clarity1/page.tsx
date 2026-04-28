// app/case-studies/financial-dashboard-clarity/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clarity & Data Hierarchy | Financial Dashboard",
  description:
    "Restructuring a financial dashboard to reduce cognitive load, surface risk, and accelerate decision-making.",
};

export default function FinancialDashboardCaseStudy() {
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
            Clarity & Data Hierarchy | Financial Dashboard
          </h1>

          <p className="mt-6 text-lg md:text-xl leading-snug text-neutral-800">
            Reducing cognitive load in everyday financial decision-making.
          </p>

          <p className="mt-4 text-base md:text-md text-neutral-600 max-w-2xl">
            A business finance dashboard restructured to make cashflow health,
            overdue risk, and financial priorities immediately legible — without
            removing data.
          </p>

          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <dt className="text-neutral-500">Industry</dt>
              <dd className="mt-1 font-medium">SMB Finance / Accounting</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Scope</dt>
              <dd className="mt-1 font-medium">
                Product Structure, Data Hierarchy, Decision Flow
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
            src="/cases/clarity-cover.png"
            alt="Financial dashboard after clarity redesign"
            fill
            priority
            className="object-contain"
          />
        </div>
      </section>

      {/* Context */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-10 lg:py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Context
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-neutral-700 leading-relaxed">
          <p>
            The dashboard already contained all essential financial data —
            revenue, expenses, payables, receivables, invoices, and trends.
          </p>
          <p>
            Yet users struggled to answer simple questions quickly: what needs
            attention now, where money is stuck, and whether the business is
            actually healthy.
          </p>
          <p>
            The problem was not access to information, but interpretation under
            everyday time pressure.
          </p>
        </div>
      </section>

      {/* The Legibility Problem */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-10 lg:py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          The legibility problem
        </h2>

        <div className="mt-6 max-w-3xl text-neutral-700 leading-relaxed">
          <p>
            Financial signals competed for attention instead of guiding it.
            Charts, summaries, and status indicators carried equal visual
            weight, regardless of urgency or consequence.
          </p>

          <ul className="mt-6 space-y-3 list-disc list-inside">
            <li>
              <span className="font-medium text-neutral-900">
                Equal-weight data:
              </span>{" "}
              Critical overdue risk looked similar to stable metrics.
            </li>
            <li>
              <span className="font-medium text-neutral-900">
                Color overload:
              </span>{" "}
              Saturation increased visual noise without directional meaning.
            </li>
            <li>
              <span className="font-medium text-neutral-900">
                Fragmented insight:
              </span>{" "}
              Users stitched meaning across multiple widgets.
            </li>
            <li>
              <span className="font-medium text-neutral-900">
                High cognitive load:
              </span>{" "}
              Decision-making required memorizing and comparing values.
            </li>
          </ul>
        </div>
      </section>

      {/* Structural Decisions */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-10 lg:py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Structural decisions
        </h2>

        <div className="mt-10 max-w-3xl">
          <h3 className="text-lg heading font-medium text-primary-text">
            Hierarchy before density
          </h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Information was reorganized around decision priority. Summary came
            first, diagnosis second, and detail last.
          </p>
        </div>

        <div className="mt-12 max-w-3xl">
          <h3 className="text-lg heading font-medium text-primary-text">
            Visibility of consequence
          </h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Overdue amounts, time delays, and blocked cash were surfaced as
            primary signals, not buried states.
          </p>
        </div>

        <div className="mt-12 max-w-3xl">
          <h3 className="text-lg heading font-medium text-primary-text">
            Color as meaning
          </h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Color usage was reduced and reassigned to indicate urgency and risk,
            not decoration or volume.
          </p>
        </div>

        {/* Before / After Images */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-neutral-200 bg-neutral-200">
              <Image
                src="/cases/clarity1.png"
                alt="Dashboard before clarity redesign"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="body-font my-4">Before</h1>
          </div>
          <div className="text-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-neutral-200 bg-neutral-200">
              <Image
                src="/cases/clarity2.png"
                alt="Dashboard after clarity redesign"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="body-font my-4">After</h1>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-10 lg:py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Outcome
        </h2>

        <ul className="mt-6 max-w-3xl space-y-3 list-disc list-inside text-neutral-700">
          <li>Faster understanding of financial position</li>
          <li>Reduced cognitive load during repeat usage</li>
          <li>Clearer visibility into overdue and at-risk items</li>
          <li>More confident day-to-day financial decisions</li>
          <li>Dashboard perceived as decision-support, not data-heavy</li>
        </ul>
      </section>

      {/* Insight */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Insight
        </h2>

        <blockquote className="mt-8 max-w-4xl text-3xl md:text-4xl heading font-medium tracking-tight">
          “Clarity in finance isn’t about showing more data. It’s about making
          the right data unavoidable.”
        </blockquote>

        <p className="mt-6 max-w-3xl text-neutral-700 leading-relaxed">
          When hierarchy is clear, users stop reading dashboards and start
          acting with confidence.
        </p>
      </section>

      {/* Footer CTA */}
      <footer className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-10 lg:py-20 border-t border-neutral-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-neutral-800">
            When financial signals compete, decisions slow.
          </p>
          <a
            href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20talk%20through%20a%20clarity%20problem."
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
