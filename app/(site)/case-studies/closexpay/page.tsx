// app/case-studies/closexpay-brand-product-strategy/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand & Product Strategy | Payments platform",
  description:
    "Reframing brand, pricing, and product narrative to make a payments platform legible to users, partners, and capital.",
};

export default function CloseXPayCaseStudy() {
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
            Brand & product strategy | Payments platform
          </h1>

          <p className="mt-6 text-lg md:text-xl leading-snug text-neutral-800">
            Designing clarity across brand, pricing, and product experience.
          </p>

          <p className="mt-4 text-base md:text-md text-neutral-600 max-w-2xl">
            A payments platform restructured to clearly communicate value,
            trust, and control, across homepage narrative, pricing logic, and
            product framing.
          </p>

          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <dt className="text-neutral-500">Industry</dt>
              <dd className="mt-1 font-medium">Fintech / Payments</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Scope</dt>
              <dd className="mt-1 font-medium">
                Brand Strategy, Product Narrative, Pricing Structure
              </dd>
            </div>
            <div>
              <dt className="text-neutral-500">Role</dt>
              <dd className="mt-1 font-medium">
                Brand & Product Strategy Partner
              </dd>
            </div>
          </dl>
        </header>

        {/* COVER IMAGE */}
        <div className="mt-16 px-4 md:px-10 lg:px-30 relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200">
          <Image
            src="/cases/closex-cover.png"
            alt="Payments platform homepage and product framing"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Context */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Context
        </h2>

        <div className="mt-6 max-w-3xl space-y-4 text-neutral-700 leading-relaxed">
          <p>
            In payments and consumer fintech, trust is rarely built through
            feature lists. It is formed through clarity, how quickly users
            understand what the product does, how it makes money, and what
            control they retain.
          </p>

          <p>
            The challenge here was not functionality. The system worked. The
            issue was interpretation, across the homepage, pricing, and product
            presentation.
          </p>
        </div>
      </section>

      {/* Core Challenge */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          The core challenge
        </h2>

        <div className="mt-6 max-w-3xl text-neutral-700 leading-relaxed">
          <p>
            Users encountered multiple decision points, onboarding, pricing,
            feature comparison, without a single, stable mental model of the
            product.
          </p>

          <p className="mt-4">
            As a result, value was present, but confidence took longer than it
            should.
          </p>

          <ul className="mt-6 space-y-3 list-disc list-inside">
            <li>
              <span className="font-medium text-neutral-900">
                Value fragmentation:
              </span>{" "}
              Benefits were visible but not clearly prioritized.
            </li>
            <li>
              <span className="font-medium text-neutral-900">
                Pricing ambiguity:
              </span>{" "}
              Tiers existed, but the logic behind them wasn&apos;t self-evident.
            </li>
            <li>
              <span className="font-medium text-neutral-900">
                Narrative inconsistency:
              </span>{" "}
              Homepage, features, and pricing told slightly different stories.
            </li>
          </ul>
        </div>
      </section>

      {/* Strategic Decisions */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Strategic decisions
        </h2>

        {/* Brand framing */}
        <div className="mt-10 max-w-3xl">
          <h3 className="text-lg heading text-primary-text font-medium">
            Brand as explanation
          </h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            The brand was positioned to reduce explanation, not add aspiration.
            Language, hierarchy, and layout were aligned around clarity and
            control rather than persuasion.
          </p>
        </div>

        {/* Pricing logic */}
        <div className="mt-12 max-w-3xl">
          <h3 className="text-lg heading text-primary-text font-medium">
            Pricing as a trust signal
          </h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            The three-tier pricing structure was reframed to communicate intent
            , who each tier is for, what changes as you move up, and why.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Pricing became a decision aid, not a comparison exercise.
          </p>
        </div>

        {/* Product narrative */}
        <div className="mt-12 max-w-3xl">
          <h3 className="text-lg heading text-primary-text font-medium">
            Product narrative over feature accumulation
          </h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Instead of listing everything the product can do, the structure
            focused on how users move from first interaction to ongoing use.
          </p>
        </div>

        {/* Images */}
        <div className="mt-16 grid grid-cols-1 gap-6 w-full">
          <div className="relative flex w-full rounded-lg overflow-hidden ">
            <Image
              alt="Homepage narrative and value framing"
              src="/cases/closexpay1.png"
              width={1600}
              height={900}
              priority
              className="object-contain"
            />
          </div>
          <div className="relative flex w-full rounded-lg overflow-hidden ">
            <Image
              alt="Three tier pricing as clarity mechanism"
              src="/cases/closexpay2.png"
              width={1600}
              height={900}
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
          <li>Clearer value perception across homepage and pricing</li>
          <li>Reduced explanation during demos and conversations</li>
          <li>Pricing understood as progression, not upsell</li>
          <li>Brand and product reinforcing the same story</li>
          <li>Platform perceived as intentional rather than promotional</li>
        </ul>
      </section>

      {/* Insight */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Insight
        </h2>

        <blockquote className="mt-8 max-w-4xl text-3xl md:text-4xl heading font-medium tracking-tight">
          “Pricing and brand are not marketing layers. They are product logic.”
        </blockquote>

        <p className="mt-6 max-w-3xl text-neutral-700 leading-relaxed">
          When product and narrative reinforce each other, trust forms without
          explanation.
        </p>
      </section>

      {/* Footer CTA */}
      <footer className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-16 border-t border-neutral-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-neutral-800">
            If pricing or product clarity is slowing decisions, this work helps.
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
