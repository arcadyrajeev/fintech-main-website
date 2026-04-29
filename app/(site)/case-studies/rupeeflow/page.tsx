// app/case-studies/rupeeflow/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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
    siteName: "Rajeev",
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
    <main className="bg-neutral-50 text-neutral-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] pt-24 lg:pt-32 pb-20">
        <Link
          href="/case-studies"
          className="flex items-center py-2 px-4 font-bold gap-2 text-md border border-neutral-300 w-fit rounded-full hover:bg-neutral-100 mb-6"
        >
          <ArrowLeft /> Go back
        </Link>

        <header className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl heading font-medium tracking-[.9]">
            RupeeFlow - Website UX, Product Direction, and KYC Onboarding
          </h1>

          <p className="mt-6 text-lg md:text-xl text-neutral-800">
            Improving onboarding clarity, reducing hesitation, and building
            trust in a regulated fintech environment.
          </p>

          <p className="mt-4 text-base text-neutral-600">
            Focused on how users interpret the product before committing
            financial data.
          </p>

          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <dt className="text-neutral-500">Industry</dt>
              <dd className="mt-1 font-medium">Fintech</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Scope</dt>
              <dd className="mt-1 font-medium">
                UX, Product Direction, Onboarding
              </dd>
            </div>
            <div>
              <dt className="text-neutral-500">Focus</dt>
              <dd className="mt-1 font-medium">Trust, Clarity, Conversion</dd>
            </div>
          </dl>
        </header>

        <div className="mt-16 relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-neutral-200 bg-white">
          <Image
            src="/cases/rf-product-cover.png"
            alt="RupeeFlow product"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* CONTEXT */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-gray-300 border-t">
        <h2 className="text-2xl font-medium">Context</h2>

        <div className="mt-6 max-w-3xl space-y-4 text-neutral-700">
          <p>
            RupeeFlow operates in a space where users are required to submit
            sensitive financial and business information early in the journey.
          </p>

          <p>
            At this stage, the product itself was functional. The challenge was
            not capability, but interpretation.
          </p>

          <p>
            Users hesitated before committing. That hesitation directly impacts
            onboarding completion and downstream growth.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-gray-300  border-t">
        <h2 className="text-2xl font-medium">The core problem</h2>

        <div className="mt-6 max-w-3xl text-neutral-700">
          <p>
            The product worked. But users did not move forward with confidence.
          </p>

          <p className="mt-4">
            In fintech onboarding, hesitation is not a UX issue. It is a trust
            issue.
          </p>

          <ul className="mt-6 space-y-3 list-disc list-inside">
            <li>KYC steps appeared before users understood the system</li>
            <li>No clear sense of progress during onboarding</li>
            <li>Each step felt isolated instead of cumulative</li>
            <li>Lack of context around why information was required</li>
          </ul>
        </div>
      </section>

      {/* WHAT MATTERED */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-gray-300  border-t">
        <h2 className="text-2xl font-medium">What actually mattered</h2>

        <div className="mt-6 max-w-3xl space-y-4 text-neutral-700">
          <p>
            The goal was not to make onboarding shorter. It was to make it feel
            safer.
          </p>

          <p>In fintech, users optimize for certainty, not speed.</p>

          <ul className="mt-6 space-y-3 list-disc list-inside">
            <li>Clarity over persuasion</li>
            <li>Progress over completeness</li>
            <li>Trust over speed</li>
            <li>Structure over feature exposure</li>
          </ul>
        </div>
      </section>

      {/* UX DECISIONS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-gray-300  border-t">
        <h2 className="text-2xl font-medium">Product UX direction</h2>

        <div className="mt-6 max-w-3xl space-y-4 text-neutral-700">
          <p>
            The onboarding flow was redesigned as a progressive system instead
            of a linear form sequence.
          </p>

          <ul className="mt-6 space-y-3 list-disc list-inside">
            <li>Step-based onboarding with visible progress</li>
            <li>Context before input to explain requirements</li>
            <li>Logical grouping of related data</li>
            <li>Reduced cognitive load per step</li>
          </ul>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/cases/rf-onboard1.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/cases/rf-onboard2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/cases/rf-onboard3.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* WEBSITE */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-gray-300  border-t">
        <h2 className="text-2xl font-medium">Website UX direction</h2>

        <div className="mt-6 max-w-3xl space-y-4 text-neutral-700">
          <p>
            The website was treated as a clarity layer, not a marketing layer.
          </p>

          <ul className="mt-6 space-y-3 list-disc list-inside">
            <li>Clear articulation of what the product does</li>
            <li>Reduced ambiguity in positioning</li>
            <li>Aligned messaging with product behavior</li>
            <li>Focused on trust signals over visual noise</li>
          </ul>
        </div>

        <div className="mt-12 relative aspect-[16/9] rounded-lg overflow-hidden">
          <Image
            src="/cases/rf-product1.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* OUTCOME */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-gray-300  border-t">
        <h2 className="text-2xl font-medium">Outcome</h2>

        <ul className="mt-6 max-w-3xl space-y-3 list-disc list-inside text-neutral-700">
          <li>Improved onboarding clarity and flow</li>
          <li>Reduced hesitation during KYC stages</li>
          <li>Stronger perceived trust in the product</li>
          <li>Better alignment between product and user expectations</li>
          <li>Reduced need for explanation during demos</li>
        </ul>
      </section>

      {/* INSIGHT */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-gray-300  border-t">
        <h2 className="text-2xl font-medium">Insight</h2>

        <blockquote className="mt-8 text-3xl md:text-5xl heading leading-[1.2]">
          “In fintech, onboarding is where trust is either built or lost.”
        </blockquote>

        <p className="mt-6 max-w-3xl text-neutral-700">
          Improving structure and clarity at this stage directly impacts
          conversion, perception, and long-term growth.
        </p>
      </section>

      {/* CTA */}
      <footer className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-16 border-gray-300 border-t">
        <div className="flex justify-between items-center">
          <p>If onboarding friction is slowing growth, a conversation helps.</p>
          <a
            href="https://wa.me/919523638369"
            target="_blank"
            className="underline"
          >
            Start a conversation
          </a>
        </div>
      </footer>
    </main>
  );
}
