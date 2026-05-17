// app/case-studies/rupeeflow/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import FinalCTASection from "@/app/components/FinalCTASection";

export const metadata: Metadata = {
  title: "RupeeFlow Case Study | Fintech Onboarding, UX & Product Direction",

  description:
    "How RupeeFlow improved onboarding clarity, reduced hesitation, and built trust in a regulated fintech environment through product structure, UX direction, and narrative alignment.",

  keywords: [
    "fintech onboarding UX",
    "KYC onboarding design",
    "fintech product strategy case study",
    "startup onboarding friction",
    "product narrative fintech",
    "trust building fintech UX",
    "fintech case study India",
  ],

  openGraph: {
    title: "RupeeFlow Case Study | Onboarding, Trust & Product Clarity",
    description:
      "A fintech case study on reducing onboarding friction and building trust through structured UX and product direction.",
    url: "https://arcadydesign.com/case-studies/rupeeflow",
    siteName: "Arcady Design",
    images: [
      {
        url: "/cases/rf-product-cover.png",
        width: 1200,
        height: 630,
        alt: "RupeeFlow onboarding and product system",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fintech UX Case Study | RupeeFlow",
    description:
      "Improving onboarding clarity and trust in a fintech product through structured UX and product direction.",
    images: ["/cases/rf-product-cover.png"],
  },

  alternates: {
    canonical: "https://arcadydesign.com/case-studies/rupeeflow",
  },
};

export default function RupeeFlowCaseStudy() {
  return (
    <main className="w-full overflow-hidden text-primary-text">
      {/* HERO */}
      <section className="relative w-full pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          {/* Back */}
          <Link
            href="/case-studies"
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              border border-neutral-300
              text-sm font-medium
              hover:bg-neutral-100
              transition-colors
            "
          >
            <ArrowLeft size={16} />
            Go back
          </Link>

          {/* Top Meta */}
          <div className="mt-12 flex flex-col justify-between gap-10">
            {/* Left */}
            <div className="max-w-4xl">
              <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-emerald-600">
                Payments · Fintech · Product Systems
              </p>

              <h1 className="mt-4 heading text-4xl md:text-6xl leading-[0.95] tracking-tight max-w-5xl">
                RupeeFlow, Website UX, Product Direction, and KYC Onboarding
              </h1>

              <p className="mt-6 text-base md:text-xl text-secondary-text max-w-3xl leading-relaxed">
                Improving onboarding clarity, reducing hesitation, and building
                trust in a regulated fintech environment.
              </p>

              <p className="mt-4 text-sm md:text-base text-neutral-500 max-w-2xl">
                Focused on how users interpret the product before committing
                financial data.
              </p>
            </div>

            {/* Right */}
            <div className="grid grid-cols-3 gap-10 text-sm min-w-[320px]">
              <div>
                <p className="text-slate-400 uppercase font-bold tracking-[0.2em] text-[10px]">
                  Industry
                </p>

                <p className="mt-3 font-medium">Fintech - Payments, UPI</p>
              </div>

              <div>
                <p className="text-slate-400 uppercase font-bold tracking-[0.2em] text-[10px]">
                  Scope
                </p>

                <p className="mt-3 font-medium leading-relaxed">
                  UX, Product Direction, Onboarding
                </p>
              </div>

              <div>
                <p className="text-slate-400 uppercase font-bold tracking-[0.2em] text-[10px]">
                  Focus
                </p>

                <p className="mt-3 font-medium">Trust, Clarity, Conversion</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="
              relative mt-16
              rounded-[2rem]
              overflow-hidden
              border border-slate-400
             
            "
          >
            {/* Grid */}
            <div
              className="
                absolute inset-0 opacity-[0.03]
              
              "
            />

            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/cases/rf-hero.png"
                alt="RupeeFlow product system"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div
            className="
              rounded-[2rem]
              border border-blue-800/50
              
              bg-[#f7f9ff]
              p-8 md:p-10
            "
          >
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-12">
              <div className="lg:col-span-4">
                <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-emerald-600">
                  Context
                </p>

                <h2 className="mt-4 heading text-3xl md:text-5xl border-b-10 border-emerald-500 pb-10">
                  The product worked.
                  <br />
                  But Trust was missing.
                </h2>
              </div>

              <div className="space-y-6 lg:col-span-4 p-4 text-neutral-700 bodyfont text-justify leading-relaxed">
                <p>
                  RupeeFlow operates in a category where users are required to
                  submit sensitive business and financial information early in
                  the onboarding journey.
                </p>

                <p>
                  The challenge was not capability. The challenge was
                  interpretation.
                </p>

                <p>
                  Users hesitated before committing. That hesitation slowed
                  onboarding completion, weakened confidence, and increased
                  downstream friction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="w-full py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-emerald-600">
              Friction Mapping
            </p>

            <h2 className="mt-4 heading   text-3xl md:text-6xl leading-[1]">
              Clarity problems rarely appear as obvious UX problems.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "KYC appeared before users understood the system",
              "No clear sense of progress during onboarding",
              "Each step felt isolated instead of cumulative",
              "Lack of context around why information was required",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded-xl
                  border border-neutral-200
                  bg-white
                  p-6 md:p-8
                "
              >
                <div className="w-2 h-2 rounded-full bg-emerald-600 mb-5" />

                <p className="text-md md:text-lg bodyfont leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT UX */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-emerald-600">
              Product UX Direction
            </p>

            <h2 className="mt-4 heading text-3xl md:text-6xl leading-[1]">
              Onboarding was restructured as a trust-building system.
            </h2>

            <p className="mt-8 text-neutral-700 text-lg leading-relaxed">
              The onboarding flow was redesigned as a progressive system instead
              of a linear form sequence.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Large Image */}
            <div
              className="
          relative rounded-xl
          overflow-hidden
          border border-neutral-200
          bg-gradient-to-br from-[#101828] to-[#0b1220]
          lg:col-span-8
        "
            >
              <div
                className="
            absolute inset-0 opacity-[0.05]
          "
              />

              <div className="relative aspect-[16/10]">
                <Image
                  src="/cases/rf-onboard1.png"
                  alt=""
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Secondary Images */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {["/cases/rf-onboard2.png", "/cases/rf-onboard3.png"].map(
                (image, index) => (
                  <div
                    key={index}
                    className="
                relative rounded-xl
                overflow-hidden
                border border-neutral-200
                bg-gradient-to-br from-[#101828] to-[#0b1220]
              "
                  >
                    <div
                      className="
                  absolute inset-0 opacity-[0.05]
                "
                    />

                    <div className="relative aspect-[16/10]">
                      <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WEBSITE UX */}
      <section className="w-full py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-emerald-600">
              Website UX Direction
            </p>

            <h2 className="mt-4 heading text-3xl md:text-6xl leading-[1]">
              The website became a clarity layer, not a marketing layer.
            </h2>

            <ul className="mt-10 space-y-4 text-neutral-700 text-lg">
              <li>• Clear articulation of what the product does</li>
              <li>• Reduced ambiguity in positioning</li>
              <li>• Aligned messaging with product behavior</li>
              <li>• Trust signals over visual noise</li>
            </ul>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Large Image */}
            <div
              className="
          relative rounded-2xl
          overflow-hidden
          border border-neutral-200
          bg-gradient-to-br from-[#eef2ff] to-white
          lg:col-span-8
        "
            >
              <div
                className="
            absolute inset-0 opacity-[0.03]
          "
              />

              <div className="relative aspect-[16/10]">
                <Image
                  src="/cases/home.png"
                  alt=""
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Secondary Images */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {["/cases/pricing.png", "/cases/rupeeflow-1.png"].map(
                (image, index) => (
                  <div
                    key={index}
                    className="
                relative rounded-2xl
                overflow-hidden
                border border-neutral-200
                bg-gradient-to-br from-[#eef2ff] to-white
              "
                  >
                    <div
                      className="
                  absolute inset-0 opacity-[0.03]
                "
                    />

                    <div className="relative aspect-[16/10]">
                      <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* Bottom Wide Image */}
            <div
              className="
          relative rounded-2xl
          overflow-hidden
          border border-neutral-200
          bg-gradient-to-br from-[#eef2ff] to-white
          lg:col-span-12
        "
            >
              <div
                className="
            absolute inset-0 opacity-[0.03]
          "
              />

              <div className="relative aspect-[16/14]">
                <Image
                  src="/cases/pg.png"
                  alt=""
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div
            className="
              rounded-[2rem]
              overflow-hidden
              border border-neutral-200
              bg-gradient-to-br from-[#081120] to-[#0d1729]
              relative
            "
          >
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30vw] h-[30vw] bg-emerald-400/10 blur-[120px]" />

            {/* Grid */}
            <div
              className="
                absolute inset-0 opacity-[0.06]
                [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
                [background-size:40px_40px]
              "
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-14">
              <div className="flex flex-col justify-center">
                <p className="text-[10px] tracking-[0.25em] uppercase text-emerald-300">
                  Dashboard UX Direction
                </p>

                <h2 className="mt-4 heading text-white text-3xl md:text-5xl leading-[1]">
                  Financial visibility was designed to feel operationally safe.
                </h2>

                <ul className="mt-10 space-y-4 text-neutral-300 text-lg">
                  <li>• Reduced cognitive load in financial monitoring</li>
                  <li>• Clear transaction hierarchy and visibility</li>
                  <li>• Improved operational confidence</li>
                  <li>• Faster interpretation during decision-making</li>
                </ul>
              </div>

              <div className="relative aspect-[16/10]">
                <Image
                  src="/cases/rf-product1.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="w-full py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-emerald-600">
              Outcome
            </p>

            <h2 className="mt-4 heading text-3xl md:text-6xl leading-[1]">
              Reduced hesitation.
              <br />
              Increased clarity.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {[
              "Improved onboarding clarity and flow",
              "Reduced hesitation during KYC stages",
              "Stronger perceived trust in the product",
              "Better alignment between product and user expectations",
              "Reduced need for explanation during demos",
              "Improved narrative consistency across product touchpoints",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded-xl
                  border border-neutral-200
                  bg-white
                  p-4 md:p-6 
                "
              >
                <p className="text-sm bodyfont md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHT */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div
            className="
              rounded-[2rem]
              border border-[#dfe5ff]
              bg-[#f7f9ff]
              p-8 md:p-16
            "
          >
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-emerald-600">
              Insight
            </p>

            <blockquote className="mt-6 heading text-4xl  leading-[1] max-w-5xl">
              “In fintech, onboarding is where trust is either built or lost.”
            </blockquote>

            <p className="mt-5 bodyfont  text-slate-500 text-lg leading-relaxed">
              Improving structure and clarity at this stage directly impacts
              conversion, perception, and long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full pt-10 pb-28">
        <FinalCTASection
          text1="If onboarding friction is slowing  "
          text2="growth, clarity usually helps."
        />
      </section>
    </main>
  );
}
