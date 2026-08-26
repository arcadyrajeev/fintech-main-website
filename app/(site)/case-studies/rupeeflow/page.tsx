// app/case-studies/rupeeflow/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import FinalCTASection from "@/app/components/FinalCTASection";

export const metadata: Metadata = {
  title: "RupeeFlow Case Study | Fintech Product Systems",

  description:
    "How RupeeFlow improved onboarding clarity, reduced hesitation, and built trust through product systems, onboarding UX, authentication flows, and brand direction.",

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
    title: "RupeeFlow Case Study | Trust, UX & Product Systems",
    description:
      "A fintech case study on building trust through onboarding systems, authentication UX, and product clarity.",
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
      "Improving onboarding clarity and trust in a fintech product through structured UX and product systems.",
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
              href="https://rupeeflow.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-700 text-white text-sm hover:opacity-90 transition-opacity"
            >
              Visit Live Site
            </Link>
          </div>

          {/* Heading */}
          <div className="mt-12 flex flex-col gap-10">
            <div className="max-w-5xl">
              <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-emerald-600">
                Payments · Fintech · Product Systems
              </p>

              <h1 className="mt-4 heading text-4xl md:text-6xl leading-[0.95] tracking-tight">
                Designing trust into a fintech onboarding system.
              </h1>

              <p className="mt-6 text-base md:text-xl text-secondary-text max-w-3xl leading-relaxed">
                Improving onboarding clarity, reducing hesitation, and building
                trust through structured UX systems, authentication flows, and
                operational product direction.
              </p>

              <p className="mt-4 text-sm md:text-base text-neutral-500 max-w-2xl">
                Focused on how users interpret the product before committing
                financial information.
              </p>
            </div>

            {/* Meta */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm max-w-3xl">
              <div>
                <p className="text-slate-400 uppercase font-bold tracking-[0.2em] text-[10px]">
                  Industry
                </p>

                <p className="mt-3 font-medium">Fintech · Payments · UPI</p>
              </div>

              <div>
                <p className="text-slate-400 uppercase font-bold tracking-[0.2em] text-[10px]">
                  Scope
                </p>

                <p className="mt-3 font-medium leading-relaxed">
                  Branding, UX, Product Direction
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
              border border-slate-200
            "
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/cases/rf-hero.png"
                alt="RupeeFlow product system"
                fill
                unoptimized
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
              border border-blue-800/10
              bg-[#f7f9ff]
              p-8 md:p-10
            "
          >
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-12">
              <div className="lg:col-span-4">
                <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-emerald-600">
                  Context
                </p>

                <h2 className="mt-4 heading text-3xl md:text-5xl leading-[1] border-b-10 border-emerald-600 pb-8">
                  The product worked.
                  <br />
                  But trust was missing.
                </h2>
              </div>

              <div className="space-y-6 lg:col-span-4 text-neutral-700 bodyfont leading-relaxed">
                <p>
                  RupeeFlow operates in a category where users submit sensitive
                  business and financial information early in the onboarding
                  process.
                </p>

                <p>
                  The challenge was not functionality. The challenge was
                  interpretation.
                </p>

                <p>
                  Users hesitated before committing. That hesitation weakened
                  onboarding confidence and increased friction throughout the
                  product journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND SYSTEM */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-emerald-600">
              Brand Identity System
            </p>

            <h2 className="mt-4 heading text-3xl md:text-6xl leading-[1]">
              Trust perception was designed before onboarding even began.
            </h2>

            <p className="mt-8 text-neutral-700 text-lg leading-relaxed max-w-3xl">
              The visual identity system was structured to feel operationally
              modern, financially reliable, and frictionless across product
              touchpoints.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main */}
            <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-neutral-200">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/cases/rf-brand1.png"
                  alt="RupeeFlow branding"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>

            {/* Side */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {["/cases/rf-brand5.png", "/cases/rf-brand4.png"].map(
                (image, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl overflow-hidden border border-neutral-200"
                  >
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={image}
                        alt=""
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Bottom Wide */}
            <div className="lg:col-span-12 relative rounded-2xl overflow-hidden border border-neutral-200">
              <div className="relative aspect-[16/8]">
                <Image
                  src="/cases/rf-brand2.webp"
                  alt=""
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
            {/* Bottom Wide */}
            <div className="lg:col-span-12 relative rounded-2xl overflow-hidden border border-neutral-200">
              <div className="relative aspect-[16/8]">
                <Image
                  src="/cases/rf-brand3.png"
                  alt=""
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-3xl text-neutral-600 leading-relaxed">
            <p>
              The brand system established perception. The authentication layer
              reinforced credibility. The onboarding system then carried users
              through operational verification with greater clarity and reduced
              hesitation.
            </p>
          </div>
        </div>
      </section>

      {/* AUTH EXPERIENCE */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-emerald-600">
              Authentication Experience
            </p>

            <h2 className="mt-4 heading text-3xl md:text-6xl leading-[1]">
              The first interaction was designed to feel simple, safe, and
              familiar.
            </h2>

            <p className="mt-8 text-neutral-700 text-lg leading-relaxed max-w-3xl">
              Authentication flows were structured to reduce intimidation while
              maintaining financial credibility and operational clarity.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {["/cases/rf-login.png", "/cases/rf-signup.png"].map(
              (image, index) => (
                <div
                  key={index}
                  className="
                    relative rounded-2xl
                    overflow-hidden
                    border border-neutral-200
                    bg-[#081120]
                  "
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={image}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FRICTION */}
      <section className="w-full py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-emerald-600">
              Friction Mapping
            </p>

            <h2 className="mt-4 heading text-3xl md:text-6xl leading-[1]">
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

      {/* ONBOARDING */}
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
              of a disconnected form sequence.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 lg:col-span-8">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/cases/rf-onboarding01.png"
                  alt=""
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              {["/cases/rf-onboarding02.png", "/cases/rf-onboarding03.png"].map(
                (image, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl overflow-hidden border border-neutral-200"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WEBSITE */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-emerald-600">
              Website UX Direction
            </p>

            <h2 className="mt-4 heading text-3xl md:text-6xl leading-[1]">
              The website became a clarity layer, not a marketing layer.
            </h2>

            <ul className="mt-10 space-y-4 text-neutral-700 text-lg">
              <li>• Clear articulation of product capability</li>
              <li>• Reduced ambiguity in positioning</li>
              <li>• Messaging aligned with product behavior</li>
              <li>• Trust signals over visual noise</li>
            </ul>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 lg:col-span-8">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/cases/home.png"
                  alt=""
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              {["/cases/pricing.png", "/cases/rupeeflow-1.png"].map(
                (image, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl overflow-hidden border border-neutral-200"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 lg:col-span-12">
              <div className="relative aspect-[16/8]">
                <Image
                  src="/cases/pg.png"
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
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="rounded-[2rem] overflow-hidden border border-neutral-200 bg-[#081120]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-14">
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
                  unoptimized
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

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Improved onboarding clarity and progression",
              "Reduced hesitation during KYC stages",
              "Stronger perceived trust in the product",
              "Better alignment between product and user expectations",
              "Reduced need for explanation during demos",
              "Improved narrative consistency across touchpoints",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-neutral-200 bg-white p-5"
              >
                <p className="bodyfont text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHT */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="rounded-[2rem] border border-[#dfe5ff] bg-[#f7f9ff] p-8 md:p-16">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-emerald-600">
              Insight
            </p>

            <blockquote className="mt-6 heading text-4xl leading-[1] max-w-5xl">
              “In fintech, onboarding is where trust is either built or lost.”
            </blockquote>

            <p className="mt-5 bodyfont text-slate-500 text-lg leading-relaxed">
              Improving structure and clarity at this stage directly impacts
              conversion, perception, and long-term product confidence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full pt-10 pb-28">
        <FinalCTASection
          text1="If onboarding friction is slowing"
          text2="growth, clarity usually helps."
        />
      </section>
    </main>
  );
}
