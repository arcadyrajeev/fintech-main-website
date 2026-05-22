// app/case-studies/realestify/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FinalCTASection from "@/app/components/FinalCTASection";

export const metadata: Metadata = {
  title:
    "Realestify Case Study | Real Estate Platform, Trust Systems & Operational UX",

  description:
    "Designing a scalable real estate operating system around discovery clarity, verification workflows, operational trust, and platform governance.",

  openGraph: {
    title: "Realestify Case Study | Platform Systems & Marketplace UX",

    description:
      "A modern real estate ecosystem structured around operational clarity, trust infrastructure, verification systems, and scalable platform workflows.",

    url: "https://arcadydesign.com/case-studies/realestify",

    siteName: "Arcady Design",

    images: [
      {
        url: "/cases/realestify-cover.png",
        width: 1200,
        height: 630,
        alt: "Realestify Platform System",
      },
    ],

    type: "article",
  },

  alternates: {
    canonical: "https://arcadydesign.com/case-studies/realestify",
  },
};

export default function RealestifyCaseStudy() {
  return (
    <main className="w-full overflow-hidden">
      {/* HERO */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 pt-28 md:pt-36">
          {/* ACTIONS */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 text-sm hover:bg-neutral-100 transition-colors"
            >
              <ArrowLeft size={16} />
              Go back
            </Link>

            <Link
              href="https://realestify.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1f3c5b] text-white text-sm hover:opacity-90 transition-opacity"
            >
              Visit Live Site
            </Link>
          </div>

          {/* HERO CONTENT */}
          <div className="mt-10 max-w-5xl">
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#ff5a36]">
              Real Estate • Platform Systems • Operational UX
            </p>

            <h1 className="mt-4 heading text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-primary-text">
              Building a Real Estate Marketplace Designed for Trust and
              Operational Scale | Realestify
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-secondary-text leading-relaxed">
              Designing a scalable marketplace ecosystem around property
              discovery, verification workflows, operational governance, and
              platform trust.
            </p>

            <p className="mt-5 max-w-3xl text-secondary-text leading-relaxed">
              Realestify was designed as a structured property ecosystem for
              buyers, sellers, agents, and administrators, reducing marketplace
              friction through clearer workflows, operational visibility, and
              trust-focused product systems.
            </p>

            {/* META */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Industry
                </p>

                <p className="mt-2 text-sm text-primary-text font-medium">
                  Real Estate Marketplace
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Scope
                </p>

                <p className="mt-2 text-sm text-primary-text font-medium">
                  Platform UX, Marketplace Systems, Brand Identity
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Role
                </p>

                <p className="mt-2 text-sm text-primary-text font-medium">
                  Product & Platform Strategy
                </p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="mt-16 rounded-2xl overflow-hidden border border-neutral-300 bg-[#eeeeee]">
            <div className="relative aspect-[16/8]  mx-auto">
              <Image
                src="/cases/realestify-cover.png"
                alt="Realestify Platform"
                fill
                className="object-contain object-top h-full w-auto "
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="rounded-[2rem] border border-[#1f3c5b]/20 bg-[#f5f8fb] p-8 md:p-10 grid lg:grid-cols-2 gap-14">
            <div>
              <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#ff5a36]">
                Context
              </p>

              <h2 className="mt-4 heading text-3xl md:text-4xl border-b-8 border-[#ff5a36] pb-10">
                Real estate platforms fail
                <br />
                when trust and operations feel disconnected.
              </h2>
            </div>

            <div className="space-y-6 text-secondary-text leading-relaxed">
              <p>
                Property marketplaces are operationally complex ecosystems with
                multiple user roles, fragmented workflows, and high trust
                sensitivity.
              </p>

              <p>
                Discovery, verification, moderation, onboarding, and listing
                governance often operate in disconnected experiences.
              </p>

              <p>
                The platform needed stronger workflow structure, operational
                hierarchy, and a more scalable trust infrastructure across the
                entire ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURAL PROBLEMS */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#ff5a36]">
            Structural Platform Problems
          </p>

          <h2 className="mt-5 max-w-4xl heading text-4xl leading-[1.05]">
            Marketplace complexity increased operational friction
            <br />
            across discovery, trust, and governance workflows.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              "Property discovery lacked clear intent hierarchy",
              "Trust and verification systems felt visually disconnected",
              "Admin governance workflows lacked operational clarity",
              "Buyers, agents, and admins operated in fragmented flows",
              "Listing moderation systems lacked structured visibility",
              "Marketplace architecture increased cognitive load",
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

      {/* OPERATIONAL ARCHITECTURE */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#ff5a36]">
            Operational Architecture
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            The platform was structured around
            <br />
            operational relationships, not isolated screens.
          </h2>

          <p className="mt-8 max-w-3xl text-secondary-text leading-relaxed">
            The ecosystem was designed around users, listings, verification,
            moderation, saved workflows, operational permissions, and platform
            governance to support scalable marketplace behavior.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6">
            <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-black">
              <Image
                src="/cases/realestify-db-01.png"
                alt="Database Architecture"
                width={2000}
                height={1200}
                className="w-full h-auto"
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-black">
              <Image
                src="/cases/realestify-db-02.png"
                alt="Database Architecture"
                width={2000}
                height={1200}
                className="w-full h-auto"
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-black">
              <Image
                src="/cases/realestify-db-03.png"
                alt="Operational Relationships"
                width={2000}
                height={1200}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              "Role-based operational architecture",
              "Structured listing moderation workflows",
              "Scalable relationship mapping across platform entities",
              "Governance-focused admin infrastructure",
              "Verification-aware operational systems",
              "Workflow consistency across user states",
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

      {/* PLATFORM EXPERIENCE */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#ff5a36]">
            Platform Experience
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            Discovery workflows were designed
            <br />
            around clarity and intent.
          </h2>

          <ul className="mt-8 space-y-4 max-w-3xl">
            {[
              "Clearer property hierarchy and category structure",
              "Reduced discovery noise across listings",
              "Operational trust integrated into browsing flows",
              "Property exploration optimized for decision-making",
              "Marketplace structure focused on usability at scale",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 text-secondary-text">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#ff5a36]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-14 rounded-2xl overflow-hidden border border-neutral-200 bg-[#0d1726]">
            <Image
              src="/cases/realestify-home.webp"
              alt="Realestify Homepage"
              width={2000}
              height={6000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#ff5a36]">
            Trust Infrastructure
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            Governance workflows became
            <br />
            part of the trust system itself.
          </h2>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-[#0d1726]">
              <Image
                src="/cases/realestify-admin.png"
                alt="Admin Dashboard"
                width={2000}
                height={1200}
                className="w-full h-auto"
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-[#0d1726]">
              <Image
                src="/cases/realestify-users.png"
                alt="User Governance"
                width={2000}
                height={1200}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Admin moderation workflows improved platform visibility",
              "Verification systems reinforced operational legitimacy",
              "Role management improved governance clarity",
              "Structured approvals reduced trust ambiguity",
              "Platform states became operationally transparent",
              "Marketplace oversight integrated into daily workflows",
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

      {/* MOBILE */}
      <section className="w-full pb-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#ff5a36]">
            Mobile Layout
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            Hero Search and Navigation systems focused on
            <br />
            discoverability and structured exploration.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mt-14 rounded-2xl overflow-hidden border border-neutral-200 bg-[#0d1726]">
              <Image
                src="/cases/realestify-mobile.webp"
                alt="Mobile Navigation"
                width={1200}
                height={2000}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-14 rounded-2xl overflow-hidden border border-neutral-200 bg-[#0d1726]">
              <Image
                src="/cases/realestify-mobile-nav.webp"
                alt="Mobile Navigation"
                width={1200}
                height={2000}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BRAND SYSTEM */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#ff5a36]">
            Brand System
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            The visual system focused on
            <br />
            operational credibility and clarity.
          </h2>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
              <Image
                src="/cases/realestify-brand1.png"
                alt="Brand System"
                width={2000}
                height={1600}
                className="w-auto h-full"
              />
            </div>

            <div className="grid gap-6">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
                <Image
                  src="/cases/realestify-colors1.png"
                  alt="Color Palette"
                  width={2000}
                  height={1600}
                  className="w-full h-auto"
                />
              </div>

              <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
                <Image
                  src="/cases/realestify-typography1.png"
                  alt="Typography"
                  width={2000}
                  height={1600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
          <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#ff5a36]">
            Outcome
          </p>

          <h2 className="mt-5 heading text-4xl leading-[1]">
            Stronger operational structure.
            <br />
            Clearer marketplace trust.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Improved marketplace workflow clarity",
              "More structured property discovery experience",
              "Stronger governance visibility across the platform",
              "Reduced operational ambiguity between user roles",
              "More scalable trust and moderation systems",
              "Clearer relationship between discovery and verification",
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
            <p className="text-xs tracking-[0.25em] bodyfont font-semibold uppercase text-[#ff5a36]">
              Insight
            </p>

            <blockquote className="mt-6 heading text-3xl leading-[1]">
              “Marketplaces fail when operational systems and trust systems
              evolve separately.”
            </blockquote>

            <p className="mt-6 max-w-3xl text-secondary-text leading-relaxed">
              In complex ecosystems, clarity becomes part of the platform
              infrastructure itself.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full pt-10 pb-28">
        <FinalCTASection
          text1="If the platform feels operational"
          text2="but not trustworthy, the structure is usually breaking."
        />
      </section>
    </main>
  );
}
