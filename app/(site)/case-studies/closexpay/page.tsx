// app/case-studies/closexpay/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FinalCTASection from "@/app/components/FinalCTASection";

export const metadata: Metadata = {
  title: "CloseXPay Case Study | Brand Strategy, Product UX & Utility Payments",

  description:
    "How CloseXPay improved product clarity, operational trust, and fintech positioning through structured brand systems, dashboard UX, and utility payment workflows.",

  openGraph: {
    title: "CloseXPay Case Study | Brand & Product Strategy",
    description:
      "A fintech utility payments platform redesigned around operational clarity, trust, and structured product communication.",
    url: "https://arcadydesign.com/case-studies/closexpay",
    siteName: "Arcady Design",
    images: [
      {
        url: "/cases/cp-cover.png",
        width: 1200,
        height: 630,
        alt: "CloseXPay product and brand system",
      },
    ],
    type: "article",
  },

  alternates: {
    canonical: "https://arcadydesign.com/case-studies/closexpay",
  },
};

export default function CloseXPayCaseStudy() {
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
              href="https://closexpay.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#7c3aed] text-white text-sm hover:opacity-90 transition-opacity"
            >
              Visit Live Site
            </Link>
          </div>

          <div className="mt-10 max-w-5xl">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#7c3aed]">
              Payments • Brand Systems • Product Strategy
            </p>

            <h1 className="mt-4 heading text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-primary-text">
              Brand & Product Strategy
              <br />
              for Utility Payments.
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-secondary-text leading-relaxed">
              Building legitimacy, clarity, and product trust for a modern
              utility payments platform.
            </p>

            <p className="mt-5 max-w-3xl text-secondary-text leading-relaxed">
              CloseXPay was positioned as a utility-focused fintech system
              designed to simplify recurring payments, merchant operations, and
              transaction management through a clearer product and brand
              experience.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Industry
                </p>

                <p className="mt-2 text-sm text-primary-text font-medium">
                  Fintech / Payments
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Scope
                </p>

                <p className="mt-2 text-sm text-primary-text font-medium">
                  Brand Strategy, Product UX, Dashboard UX
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Role
                </p>

                <p className="mt-2 text-sm text-primary-text font-medium">
                  Brand & Product Strategy Partner
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-2xl overflow-hidden border border-neutral-200 bg-[#111]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/cases/cp-cover.webp"
                alt="CloseXPay Hero"
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
          <div className="rounded-[2rem] border border-[#7c3aed]/20 bg-[#faf7ff] p-8 md:p-10 grid lg:grid-cols-2 gap-14">
            <div>
              <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#7c3aed]">
                Context
              </p>

              <h2 className="mt-4 heading text-3xl md:text-4xl border-b-8 border-[#7c3aed] pb-10">
                Utility payments are operational.
                <br />
                But trust still drives adoption.
              </h2>
            </div>

            <div className="space-y-6 text-secondary-text leading-relaxed">
              <p>
                Users rarely emotionally engage with payment systems. They judge
                them through clarity, reliability, and perceived legitimacy.
              </p>

              <p>
                The existing product lacked structure, visual consistency, and a
                strong operational identity.
              </p>

              <p>
                The platform needed clearer positioning, stronger hierarchy, and
                a more coherent relationship between product and brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FRICTION */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#7c3aed]">
            Friction Signals
          </p>

          <h2 className="mt-5 max-w-3xl heading text-4xl leading-[1.05]">
            The platform solved payments.
            <br />
            But the experience lacked product gravity.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              "Weak differentiation from generic payment platforms",
              "Product value hidden behind visual clutter",
              "Inconsistent hierarchy between product and marketing",
              "Brand lacked operational credibility and trust signals",
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
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#7c3aed]">
            Brand System
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            The brand system was designed
            <br />
            to feel operational, not decorative.
          </h2>

          <ul className="mt-8 space-y-4 max-w-3xl">
            {[
              "Utility-first visual language",
              "Strong contrast and transaction visibility",
              "Consistent fintech color hierarchy",
              "Typography optimized for readability and scale",
              "Product visuals aligned with transaction behavior",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 text-secondary-text">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#7c3aed]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.4fr_.8fr] gap-6">
            <div className="relative aspect-[16/12] rounded-2xl overflow-hidden border border-neutral-200 bg-black">
              <Image
                src="/cases/cp-brand1.png"
                alt="CloseXPay Brand"
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>

            <div className="grid grid-rows-2 gap-6">
              <div className="relative rounded-2xl aspect-[16/10] overflow-hidden border border-neutral-200 bg-black">
                <Image
                  src="/cases/cp-brand4.png"
                  alt="Brand colors"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              <div className="relative rounded-2xl aspect-[16/10] overflow-hidden border border-neutral-200 bg-black">
                <Image
                  src="/cases/cp-brand3.png"
                  alt="Typography system"
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

            <div className="relative aspect-[16/10]">
              <Image
                src="/cases/cp-brand2.png"
                alt=""
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#7c3aed]">
            Dashboard UX
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            The dashboard focused on
            <br />
            transaction clarity and control.
          </h2>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.4fr_.8fr] gap-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200 bg-black">
              <Image
                src="/cases/cp-dashboard.png"
                alt="Dashboard"
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>

            <div className="grid grid-rows-2 gap-6">
              <div className="relative rounded-2xl aspect-[16/8] overflow-hidden border border-neutral-200 bg-black">
                <Image
                  src="/cases/cp-loan.webp"
                  alt=""
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              <div className="relative rounded-2xl aspect-[16/8] overflow-hidden border border-neutral-200 bg-black">
                <Image
                  src="/cases/closexpay-cover.webp"
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
              "Faster transaction scanning and visibility",
              "Clearer operational action states",
              "Reduced cognitive overload",
              "Hierarchy optimized for repeated workflows",
              "Better separation between actions and analytics",
              "Designed for operational daily usage",
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

      {/* WEBSITE */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#7c3aed]">
            Website Structure
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            The website became a
            <br />
            structured trust layer.
          </h2>

          <ul className="mt-8 space-y-4 max-w-3xl">
            {[
              "Hero clarified the product category immediately",
              "Benefits reframed around operational simplicity",
              "Pricing reduced decision friction",
              "Messaging aligned with actual product behavior",
              "Feature hierarchy focused on merchant outcomes",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 text-secondary-text">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#7c3aed]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.4fr_.8fr] gap-6">
            <div className="relative aspect-[16/12] rounded-2xl overflow-hidden border border-neutral-200 bg-[#f5f5f5]">
              <Image
                src="/cases/cp-home.png"
                alt="Website"
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>

            <div className="grid grid-rows-2 gap-6">
              <div className="relative rounded-2xl aspect-[16/10] overflow-hidden border border-neutral-200 bg-[#f5f5f5]">
                <Image
                  src="/cases/closexpay-cover.png"
                  alt=""
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              <div className="relative rounded-2xl aspect-[16/10] overflow-hidden border border-neutral-200 bg-[#f5f5f5]">
                <Image
                  src="/cases/cp-pricing.png"
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

      {/* WEBSITE SYSTEM BREAKDOWN */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#7c3aed]">
            Website System Breakdown
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            Positioning, trust communication,
            <br />
            and conversion clarity across key pages.
          </h2>

          <p className="mt-8 max-w-3xl text-secondary-text leading-relaxed">
            The website was structured to improve product understanding,
            strengthen operational trust, reduce ambiguity, and guide users
            through clearer decision-making paths across critical touchpoints.
          </p>

          {/* HOME */}
          <div className="mt-20">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                  Homepage Structure
                </p>

                <h3 className="mt-3 heading text-3xl">
                  Immediate product comprehension.
                </h3>
              </div>

              <div className="max-w-md">
                <ul className="space-y-3">
                  {[
                    "Clear product category communication",
                    "Structured trust messaging across sections",
                    "Reduced hesitation before conversion",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-secondary-text">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#7c3aed]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full rounded-[2rem] overflow-hidden border border-neutral-200 bg-[#111]">
              <Image
                src="/cases/home-breakdown.webp"
                alt="CloseXPay Homepage Breakdown"
                width={2000}
                height={4000}
                unoptimized
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* BILLERS */}
          <div className="mt-24">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                  Billers Experience
                </p>

                <h3 className="mt-3 heading text-3xl">
                  Product adoption through operational trust.
                </h3>
              </div>

              <div className="max-w-md">
                <ul className="space-y-3">
                  {[
                    "Showcased perceived platform scale",
                    "Improved legitimacy through recognizable brands",
                    "Reduced friction around utility payment adoption",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-secondary-text">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#7c3aed]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full rounded-[2rem] overflow-hidden border border-neutral-200 bg-[#111]">
              <Image
                src="/cases/billers-breakdown.webp"
                alt="CloseXPay Billers Breakdown"
                width={2000}
                height={4000}
                unoptimized
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* PRICING */}
          <div className="mt-24">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                  Pricing Structure
                </p>

                <h3 className="mt-3 heading text-3xl">
                  Reduced pricing ambiguity and clearer tier differentiation.
                </h3>
              </div>

              <div className="max-w-md">
                <ul className="space-y-3">
                  {[
                    "Clear segmentation between user types",
                    "Reduced decision fatigue during evaluation",
                    "Conversion-oriented pricing hierarchy",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-secondary-text">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#7c3aed]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full rounded-[2rem] overflow-hidden border border-neutral-200 bg-[#111]">
              <Image
                src="/cases/pricing-breakdown.webp"
                alt="CloseXPay Pricing Breakdown"
                width={2000}
                height={4000}
                unoptimized
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#7c3aed]">
            Outcome
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            Stronger fintech positioning.
            <br />
            Clearer operational trust.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Improved visual consistency across product surfaces",
              "Clearer utility payments positioning",
              "Reduced ambiguity around product value",
              "Stronger operational credibility",
              "More coherent onboarding and product narrative",
              "Better perceived legitimacy and trust",
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
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#7c3aed]">
              Insight
            </p>

            <blockquote className="mt-6 heading text-3xl leading-[1]">
              “Fintech brands fail when product and perception operate
              separately.”
            </blockquote>

            <p className="mt-6 max-w-3xl text-secondary-text leading-relaxed">
              In operational products, clarity becomes part of the trust
              infrastructure itself.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full pt-10 pb-28">
        <FinalCTASection
          text1="If the product feels operational"
          text2="but not trustworthy, clarity is usually missing."
        />
      </section>
    </main>
  );
}
