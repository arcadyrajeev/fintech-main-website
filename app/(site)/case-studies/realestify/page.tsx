import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Layers3,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

import FinalCTASection from "@/app/components/FinalCTASection";

export const metadata: Metadata = {
  title:
    "Realestify Case Study | Real Estate Marketplace & Product System | Arcady Design",

  description:
    "How Arcady Design restructured a complex real estate marketplace around discovery, trust, multiple user roles, and operational workflows.",

  openGraph: {
    title: "Realestify Case Study | Real Estate Marketplace & Product System",

    description:
      "Restructuring a complex real estate ecosystem around clearer discovery, stronger trust, and scalable product workflows.",

    url: "https://arcadydesign.com/case-studies/realestify",

    siteName: "Arcady Design",

    images: [
      {
        url: "/cases/realestify-cover.png",
        width: 1200,
        height: 630,
        alt: "Realestify real estate platform",
      },
    ],

    type: "article",
  },

  alternates: {
    canonical: "https://arcadydesign.com/case-studies/realestify",
  },
};

const problems = [
  {
    title: "Discovery",
    description:
      "Property discovery needed a clearer hierarchy so users could understand what mattered without fighting through information.",
    icon: Search,
  },
  {
    title: "Trust",
    description:
      "Verification, property information, and credibility signals needed to become part of the experience rather than separate layers.",
    icon: ShieldCheck,
  },
  {
    title: "Multiple roles",
    description:
      "Buyers, agents, property owners, and administrators needed different workflows without fragmenting the platform.",
    icon: Users,
  },
  {
    title: "Operations",
    description:
      "Listing management, moderation, permissions, and platform administration needed a more structured system.",
    icon: Layers3,
  },
];

const systemPrinciples = [
  "Discovery should lead users toward decisions, not simply expose inventory.",
  "Trust signals should appear where users make decisions.",
  "Different roles should share one product system without sharing identical workflows.",
  "Operational complexity should remain inside the platform instead of leaking into the user experience.",
];

const outcomes = [
  {
    value: "+30%",
    label: "Conversion improvement",
    description: "The redesigned experience improved conversion by 30%.",
  },
  {
    value: "New users",
    label: "Property listings",
    description:
      "New users began listing properties through the redesigned platform.",
  },
  {
    value: "1 system",
    label: "Across multiple roles",
    description:
      "Discovery, listing, administration, and operational workflows were brought into one connected product ecosystem.",
  },
];

export default function RealestifyCaseStudy() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#172235]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="w-full">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 sm:px-10 md:pb-28 md:pt-36 lg:px-24">
          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100"
            >
              <ArrowLeft size={16} />
              Go back
            </Link>

            <Link
              href="https://realestify.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#172f4a] px-5 py-2 text-sm text-white transition-opacity hover:opacity-90"
            >
              Visit Live Site
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Hero copy */}
          <div className="mt-14 max-w-6xl">
            <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
              Real Estate • Product Strategy • Platform Design
            </p>

            <h1 className="heading mt-5 max-w-5xl text-5xl leading-[0.94] tracking-[-0.045em] text-[#172235] sm:text-6xl md:text-7xl">
              Structuring a multi-role real estate platform around how people
              actually discover, evaluate, and list property.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-500 md:text-xl">
              Realestify needed more than a better-looking property website. The
              product needed a clearer system for discovery, trust, listings,
              multiple user roles, and operational management.
            </p>

            {/* Meta */}
            <div className="mt-12 grid grid-cols-1 gap-8 border-t border-neutral-200 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                  Industry
                </p>

                <p className="mt-2 text-sm font-medium text-[#172235]">
                  Real Estate
                </p>
              </div>

              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                  Scope
                </p>

                <p className="mt-2 text-sm font-medium text-[#172235]">
                  Brand, Website, Marketplace, Product UX
                </p>
              </div>

              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                  Role
                </p>

                <p className="mt-2 text-sm font-medium text-[#172235]">
                  Product & Platform Strategy
                </p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-16 overflow-hidden rounded-[28px] border border-neutral-200 bg-[#eef3f7]">
            <div className="relative aspect-[16/8]">
              <Image
                src="/cases/realestify-cover.webp"
                alt="Realestify platform"
                fill
                unoptimized
                className="object-contain object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESULTS STRIP
      ========================================================= */}

      <section className="border-y border-neutral-200 bg-[#f6f8fa]">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-24">
          <div className="grid grid-cols-1 divide-y divide-neutral-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            {outcomes.map((outcome) => (
              <div
                key={outcome.label}
                className="px-0 py-6 first:pt-0 last:pb-0 md:px-8 md:py-2 first:md:pl-0 last:md:pr-0"
              >
                <p className="heading text-4xl tracking-[-0.04em] text-[#172235] md:text-5xl">
                  {outcome.value}
                </p>

                <p className="mt-2 text-sm font-semibold text-[#172235]">
                  {outcome.label}
                </p>

                <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-500">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          THE STARTING POINT
      ========================================================= */}

      <section className="w-full py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
                The starting point
              </p>

              <h2 className="heading mt-5 max-w-xl text-4xl leading-[0.98] tracking-[-0.035em] md:text-5xl">
                The business had information.
                <br />
                The experience needed structure.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-7 text-neutral-500 md:text-lg md:leading-8">
              <p>
                The previous experience contained the necessary property,
                service, and trust information, but the journey was fragmented.
                Visitors had to work too hard to understand the offering,
                evaluate properties, and decide what to do next.
              </p>

              <p>
                That became more important as the platform expanded beyond a
                simple property website into a system involving buyers, property
                owners, agents, and administrators.
              </p>

              <p className="font-medium text-[#172235]">
                The opportunity was not to add more features. It was to create a
                clearer relationship between discovery, trust, and action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE PROBLEM
      ========================================================= */}

      <section className="w-full bg-[#07111f] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
          <div className="max-w-4xl">
            <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              The problem
            </p>

            <h2 className="heading mt-5 text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Real estate was not one workflow.
              <br />
              It was several.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-7 text-white/55 md:text-lg md:leading-8">
              Buyers needed discovery. Property owners needed a way to list.
              Agents needed operational visibility. Administrators needed
              control over listings, users, and platform states.
            </p>
          </div>

          {/* Problem cards */}
          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
            {problems.map((problem, index) => {
              const Icon = problem.icon;

              return (
                <div
                  key={problem.title}
                  className="rounded-2xl border border-white/[0.09] bg-white/[0.035] p-7 transition-colors hover:border-white/[0.16]"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                      0{index + 1}
                    </span>

                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-orange-500/80"
                    />
                  </div>

                  <h3 className="heading mt-10 text-2xl text-white">
                    {problem.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/50">
                    {problem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          BEFORE / AFTER
      ========================================================= */}

      <section className="w-full py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
          {/* Heading */}
          <div className="max-w-4xl">
            <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              The transformation
            </p>

            <h2 className="heading mt-5 text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              From a service-heavy property experience
              <br />
              to a connected product system.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-7 text-neutral-500 md:text-lg md:leading-8">
              The redesign connected the brand, marketing experience,
              marketplace, listing flows, user roles, and operational
              infrastructure into one clearer product system.
            </p>
          </div>

          {/* Before / After */}
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* =====================================================
                BEFORE
            ===================================================== */}

            <div className="group">
              <div className="mb-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    Before
                  </p>

                  <h3 className="heading mt-2 text-2xl leading-tight text-[#172235] md:text-3xl">
                    Information without a clear journey.
                  </h3>
                </div>

                <span className="text-xs text-neutral-400">
                  Previous experience
                </span>
              </div>

              <div className="relative overflow-hidden rounded-[24px] border border-neutral-200 bg-[#f2f2f2]">
                <div className="absolute left-5 top-5 z-10 rounded-full border border-neutral-200 bg-white/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-500 backdrop-blur-md">
                  Before
                </div>

                <Image
                  src="/cases/realestify-old.webp"
                  alt="Previous Realestify website experience"
                  width={1600}
                  height={5000}
                  unoptimized
                  className="
                    h-auto
                    w-full
                    object-top
                    transition-transform
                    duration-700
                    group-hover:scale-[1.015]
                  "
                />
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-neutral-200 bg-[#f7f7f7] p-5">
                  <p className="text-xs font-semibold text-[#172235]">
                    Fragmented discovery
                  </p>

                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    Users had to work harder to understand the offering and find
                    the right next action.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-200 bg-[#f7f7f7] p-5">
                  <p className="text-xs font-semibold text-[#172235]">
                    Weak action hierarchy
                  </p>

                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    Property information existed, but the journey from interest
                    to action was not clearly structured.
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                AFTER
            ===================================================== */}

            <div className="group">
              <div className="mb-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                    After
                  </p>

                  <h3 className="heading mt-2 text-2xl leading-tight text-[#172235] md:text-3xl">
                    One system connecting discovery and action.
                  </h3>
                </div>

                <span className="text-xs text-orange-500">
                  Redesigned platform
                </span>
              </div>

              <div className="relative overflow-hidden rounded-[24px] border border-[#17395c] bg-[#0d1726]">
                <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-[#07111f]/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-orange-500 backdrop-blur-md">
                  After
                </div>

                <Image
                  src="/cases/realestify-new.webp"
                  alt="Redesigned Realestify platform experience"
                  width={2000}
                  height={6000}
                  unoptimized
                  className="
                    h-auto
                    w-full
                    object-top
                    transition-transform
                    duration-700
                    group-hover:scale-[1.015]
                  "
                />
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-[#dbe7f2] bg-[#f5f9fc] p-5">
                  <p className="text-xs font-semibold text-[#172235]">
                    Clearer discovery
                  </p>

                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    Property hierarchy, search, content, and actions were
                    structured around user intent.
                  </p>
                </div>

                <div className="rounded-xl border border-[#dbe7f2] bg-[#f5f9fc] p-5">
                  <p className="text-xs font-semibold text-[#172235]">
                    Stronger conversion paths
                  </p>

                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    The redesigned system made it easier for users to move from
                    discovery toward meaningful action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="mt-12 rounded-[24px] border border-neutral-200 bg-[#f7f9fb] p-7 md:p-9">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  Measured result
                </p>

                <p className="heading mt-2 text-2xl text-[#172235] md:text-3xl">
                  The redesigned experience improved conversion by 30%.
                </p>
              </div>

              <div className="shrink-0">
                <span className="heading text-5xl tracking-[-0.05em] text-orange-500 md:text-6xl">
                  +30%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STRATEGIC PRINCIPLES
      ========================================================= */}

      <section className="w-full border-y border-neutral-200 bg-[#f7f9fb] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
                Product strategy
              </p>

              <h2 className="heading mt-5 text-4xl leading-[0.98] tracking-[-0.04em] md:text-5xl">
                The interface followed the system.
              </h2>
            </div>

            <div className="divide-y divide-neutral-200 border-t border-neutral-200">
              {systemPrinciples.map((principle, index) => (
                <div key={principle} className="flex gap-6 py-6">
                  <span className="shrink-0 text-xs font-medium tracking-[0.15em] text-orange-600">
                    0{index + 1}
                  </span>

                  <p className="max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT SYSTEM
      ========================================================= */}

      <section className="w-full py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
          <div className="max-w-4xl">
            <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
              Product system
            </p>

            <h2 className="heading mt-5 text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              One platform.
              <br />
              Multiple ways to use it.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-7 text-neutral-500 md:text-lg md:leading-8">
              Realestify was structured around the relationships between
              properties, users, roles, listings, verification, and
              administration rather than treating each interface as an isolated
              screen.
            </p>
          </div>

          {/* System diagram */}
          <div className="mt-16 overflow-hidden rounded-[28px] bg-[#07111f] p-6 text-white sm:p-10 md:p-14">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:items-center">
              <div className="rounded-2xl border border-white/[0.1] bg-white/[0.04] p-6">
                <p className="text-[10px] uppercase tracking-[0.18em] text-orange-500">
                  01
                </p>

                <h3 className="heading mt-8 text-xl">Discovery</h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Search, browse, compare
                </p>
              </div>

              <div className="hidden justify-center md:flex">
                <ArrowRight className="text-white/25" />
              </div>

              <div className="rounded-2xl border border-white/[0.1] bg-white/[0.04] p-6">
                <p className="text-[10px] uppercase tracking-[0.18em] text-orange-500">
                  02
                </p>

                <h3 className="heading mt-8 text-xl">Property</h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Details, media, location
                </p>
              </div>

              <div className="hidden justify-center md:flex">
                <ArrowRight className="text-white/25" />
              </div>

              <div className="rounded-2xl border border-white/[0.1] bg-white/[0.04] p-6">
                <p className="text-[10px] uppercase tracking-[0.18em] text-orange-500">
                  03
                </p>

                <h3 className="heading mt-8 text-xl">Action</h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Enquiry, listing, follow-up
                </p>
              </div>
            </div>

            <div className="my-5 h-px bg-white/[0.08]" />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                  Operations
                </p>

                <p className="mt-4 text-sm leading-6 text-white/60">
                  Property management, moderation, verification, and platform
                  administration.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                  Roles
                </p>

                <p className="mt-4 text-sm leading-6 text-white/60">
                  Buyers, agents, property owners, investors, and
                  administrators.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                  Trust
                </p>

                <p className="mt-4 text-sm leading-6 text-white/60">
                  Verification, structured information, visibility, and
                  governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
    OPERATIONS
========================================================= */}

      <section className="w-full py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
          {/* Intro */}
          <div className="max-w-4xl">
            <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              Operations
            </p>

            <h2 className="heading mt-5 text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              The complexity moved behind the interface.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-7 text-neutral-500 md:text-lg md:leading-8">
              Realestify was not only a marketplace. It needed infrastructure
              for the people operating it, managing users, reviewing listings,
              verifying agents, and keeping the platform moving.
            </p>
          </div>

          {/* Admin system */}
          <div className="mt-16">
            <div className="mb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Admin system
              </p>

              <h3 className="heading mt-2 text-2xl text-[#172235] md:text-3xl">
                One operational layer for managing the marketplace.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
                Administrators needed visibility across users, listings,
                verification requests, and platform activity without jumping
                between disconnected tools.
              </p>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-neutral-200 bg-[#f4f5f7]">
              <Image
                src="/cases/realestify-admin.png"
                alt="Realestify admin dashboard"
                width={2000}
                height={1200}
                unoptimized
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* Users */}
          <div className="mt-10">
            <div className="mb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                User management
              </p>

              <h3 className="heading mt-2 text-2xl text-[#172235] md:text-3xl">
                Different roles, one connected system.
              </h3>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-neutral-200 bg-[#f4f5f7]">
              <Image
                src="/cases/realestify-users.png"
                alt="Realestify user management dashboard"
                width={2000}
                height={1200}
                unoptimized
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* Operational capabilities */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "User management",
              "Listing review",
              "Agent verification",
              "Platform activity",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-neutral-200 bg-white p-5"
              >
                <span className="text-[10px] font-semibold tracking-[0.18em] text-orange-500">
                  0{index + 1}
                </span>

                <p className="mt-8 text-sm font-medium text-[#172235]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
    LISTING WORKFLOW
========================================================= */}

      <section className="w-full bg-[#07111f] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
          <div className="max-w-4xl">
            <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              Listing workflow
            </p>

            <h2 className="heading mt-5 text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              The marketplace also needed a way to grow itself.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-7 text-white/50 md:text-lg md:leading-8">
              Property owners and agents needed a clear path from entering
              property information to publishing and managing a listing. The
              workflow turned that process into a structured part of the
              product.
            </p>
          </div>

          {/* Create listing */}
          <div className="mt-16">
            <div className="mb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                Create listing
              </p>

              <h3 className="heading mt-2 text-2xl text-white md:text-3xl">
                Turning property information into structured inventory.
              </h3>
            </div>

            <div className="overflow-hidden rounded-2xl  bg-white">
              <Image
                src="/cases/realestify-create-listing.webp"
                alt="Realestify create property listing workflow"
                width={2000}
                height={1200}
                unoptimized
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* My Listings */}
          <div className="mt-12">
            <div className="mb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                Manage listings
              </p>

              <h3 className="heading mt-2 text-2xl text-white md:text-3xl">
                Giving agents control after the listing goes live.
              </h3>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white">
              <Image
                src="/cases/realestify-my-listings.webp"
                alt="Realestify agent listings dashboard"
                width={2000}
                height={1200}
                unoptimized
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                Notifications
              </p>

              <h3 className="heading mt-2 text-2xl text-white md:text-3xl">
                Keeping users informed as the system changes.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50 md:text-base">
                Listings do not exist in isolation. Enquiries, approvals, and
                property status changes create events that users need to know
                about. Notifications brought those changes back into the
                workflow.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white">
              <Image
                src="/cases/realestify-notifications.webp"
                alt="Realestify notifications workflow"
                width={2000}
                height={1200}
                unoptimized
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* Workflow relationship */}
          <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Create",
                text: "Add property details, pricing, location, and media.",
              },
              {
                number: "02",
                title: "Review",
                text: "Listings move through the platform's operational checks.",
              },
              {
                number: "03",
                title: "Manage",
                text: "Agents monitor listings, views, leads, and status.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-white/[0.09] bg-white/[0.035] p-6"
              >
                <span className="text-[10px] font-semibold tracking-[0.18em] text-orange-500">
                  {item.number}
                </span>

                <h4 className="heading mt-8 text-xl text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          DISCOVERY EXPERIENCE
      ========================================================= */}

      <section className="w-full pb-24 md:pb-32 pt-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
                Discovery
              </p>

              <h2 className="heading mt-5 text-4xl leading-[0.98] tracking-[-0.04em] md:text-5xl">
                Helping users find the right property faster.
              </h2>

              <p className="mt-6 text-base leading-7 text-neutral-500">
                Discovery was structured around intent rather than simply
                exposing more listings. Search, categories, property cards, and
                content hierarchy were designed to make evaluation easier.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Clearer property hierarchy",
                  "Structured search and filtering",
                  "Reduced visual noise",
                  "Stronger calls to action",
                  "Decision-focused property information",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-neutral-600"
                  >
                    <Check
                      size={17}
                      className="mt-0.5 shrink-0 text-orange-600"
                    />

                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-[#0d1726]">
              <div
                data-lenis-prevent
                className="
      h-[420px]
      overflow-y-auto
      overscroll-contain
      md:h-[500px]
      lg:h-[560px]
      [&::-webkit-scrollbar]:w-0
      [&::-webkit-scrollbar]:bg-transparent
      [scrollbar-width:none]
    "
              >
                <Image
                  src="/cases/realestify-home.webp"
                  alt="Realestify property discovery experience"
                  width={2000}
                  height={6000}
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROPERTY EVALUATION
      ========================================================= */}

      <section className="w-full bg-[#f7f9fb] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div className="overflow-hidden rounded-[24px] border border-neutral-200 bg-[#0d1726]">
              <Image
                src="/cases/realestify-cover.webp"
                alt="Realestify property platform"
                width={2000}
                height={1200}
                className="h-auto w-full"
              />
            </div>

            <div>
              <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
                Evaluation
              </p>

              <h2 className="heading mt-5 text-4xl leading-[0.98] tracking-[-0.04em] md:text-5xl">
                Trust had to appear where decisions happened.
              </h2>

              <p className="mt-6 text-base leading-7 text-neutral-500">
                Property information, imagery, location, amenities, and
                supporting signals were brought together into a clearer
                evaluation experience.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Information hierarchy",
                  "Property media",
                  "Location context",
                  "Amenities and specifications",
                  "Clear conversion paths",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-b border-neutral-200 py-3 text-sm text-neutral-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ARCHITECTURE
      ========================================================= */}

      <section className="w-full bg-[#07111f] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
                Product architecture
              </p>

              <h2 className="heading mt-5 text-4xl leading-[0.98] tracking-[-0.04em] md:text-5xl">
                The system was designed around relationships, not screens.
              </h2>

              <p className="mt-6 text-base leading-7 text-white/50">
                Properties, users, listings, roles, verification, and
                operational states needed to work together. The underlying
                product architecture supported that relationship.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Role-based product architecture",
                  "Structured property relationships",
                  "Listing states and moderation",
                  "Operational permissions",
                  "Verification-aware workflows",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/[0.08] py-3 text-sm text-white/65"
                  >
                    <Check size={16} className="text-orange-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="overflow-hidden rounded-[24px] border border-white/[0.08] bg-black">
                <Image
                  src="/cases/realestify-db-01.png"
                  alt="Realestify product architecture"
                  width={2000}
                  height={1200}
                  unoptimized
                  className="h-auto w-full"
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="overflow-hidden rounded-[20px] border border-white/[0.08] bg-black">
                  <Image
                    src="/cases/realestify-db-02.png"
                    alt="Realestify database relationships"
                    width={2000}
                    height={1200}
                    unoptimized
                    className="h-auto w-full"
                  />
                </div>

                <div className="overflow-hidden rounded-[20px] border border-white/[0.08] bg-black">
                  <Image
                    src="/cases/realestify-db-03.png"
                    alt="Realestify operational relationships"
                    width={2000}
                    height={1200}
                    unoptimized
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MOBILE
      ========================================================= */}

      <section className="w-full py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-24">
          <div className="text-center">
            <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
              Mobile
            </p>

            <h2 className="heading mx-auto mt-5 max-w-3xl text-4xl leading-[0.98] tracking-[-0.04em] md:text-5xl">
              The same product logic carried into smaller screens.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-500">
              Mobile experiences focused on discoverability, navigation, and the
              actions users need most often.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="overflow-hidden rounded-[24px] border border-neutral-200 bg-[#0d1726]">
              <Image
                src="/cases/realestify-mobile.webp"
                alt="Realestify mobile experience"
                width={1200}
                height={2000}
                unoptimized
                className="h-auto w-full"
              />
            </div>

            <div className="overflow-hidden rounded-[24px] border border-neutral-200 bg-[#0d1726]">
              <Image
                src="/cases/realestify-mobile-nav.webp"
                alt="Realestify mobile navigation"
                width={1200}
                height={2000}
                unoptimized
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BRAND SYSTEM
      ========================================================= */}

      <section className="w-full bg-[#f7f9fb] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
                Brand system
              </p>

              <h2 className="heading mt-5 text-4xl leading-[0.98] tracking-[-0.04em] md:text-5xl">
                The brand needed to make the platform feel credible.
              </h2>

              <p className="mt-6 text-base leading-7 text-neutral-500">
                The identity system was built to support the same qualities as
                the product: clarity, credibility, modernity, and confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="overflow-hidden rounded-[24px] border border-neutral-200 bg-white">
                <Image
                  src="/cases/realestify-brand1.png"
                  alt="Realestify brand identity"
                  width={2000}
                  height={1600}
                  unoptimized
                  className="h-auto w-full"
                />
              </div>

              <div className="grid gap-5">
                <div className="overflow-hidden rounded-[24px] border border-neutral-200 bg-white">
                  <Image
                    src="/cases/realestify-colors1.png"
                    alt="Realestify color system"
                    width={2000}
                    height={1600}
                    unoptimized
                    className="h-auto w-full"
                  />
                </div>

                <div className="overflow-hidden rounded-[24px] border border-neutral-200 bg-white">
                  <Image
                    src="/cases/realestify-typography1.png"
                    alt="Realestify typography system"
                    width={2000}
                    height={1600}
                    unoptimized
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BUSINESS OUTCOME
      ========================================================= */}

      <section className="w-full bg-[#07111f] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
          <div className="max-w-5xl">
            <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              Business outcome
            </p>

            <h2 className="heading mt-5 text-4xl leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              The redesign changed how people moved through the platform.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-7 text-white/50 md:text-lg md:leading-8">
              The work was not only about making Realestify look more credible.
              The new product structure created clearer paths from discovery to
              action, while giving the business a stronger foundation for
              operational growth.
            </p>
          </div>

          {/* Big results */}
          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-[28px] border border-orange-500/20 bg-orange-500/[0.06] p-8 sm:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                Conversion
              </p>

              <p className="heading mt-5 text-6xl tracking-[-0.05em] text-white sm:text-7xl">
                +30%
              </p>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/50">
                Conversion improved after the new experience was introduced.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/[0.1] bg-white/[0.04] p-8 sm:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                Marketplace behavior
              </p>

              <p className="heading mt-5 max-w-md text-4xl leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl">
                New users started listing properties.
              </p>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/50">
                The platform began generating the behavior the business needed,
                not just presenting information more effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT CHANGED
      ========================================================= */}

      <section className="w-full py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
                What changed
              </p>

              <h2 className="heading mt-5 text-4xl leading-[0.98] tracking-[-0.04em] md:text-5xl">
                From website redesign
                <br />
                to product restructuring.
              </h2>
            </div>

            <div className="divide-y divide-neutral-200 border-t border-neutral-200">
              {[
                {
                  before: "Information-heavy experience",
                  after: "Clearer decision paths",
                },
                {
                  before: "Disconnected trust signals",
                  after: "Trust integrated into workflows",
                },
                {
                  before: "Separate user needs",
                  after: "One system with role-specific flows",
                },
                {
                  before: "Service-led presentation",
                  after: "Product-led marketplace experience",
                },
                {
                  before: "Growing operational complexity",
                  after: "Structured operational infrastructure",
                },
              ].map((item) => (
                <div
                  key={item.before}
                  className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-2 sm:gap-8"
                >
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                      Before
                    </p>

                    <p className="mt-2 text-sm text-neutral-500">
                      {item.before}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-orange-600">
                      After
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#172235]">
                      {item.after}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL INSIGHT
      ========================================================= */}

      <section className="w-full pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-24">
          <div className="rounded-[28px] bg-[#07111f] p-8 text-white sm:p-12 md:p-16">
            <p className="bodyfont text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              The takeaway
            </p>

            <blockquote className="heading mt-7 max-w-4xl text-3xl leading-[1] tracking-[-0.035em] sm:text-4xl md:text-5xl">
              A complex real estate platform does not need to feel complex to
              the people using it.
            </blockquote>

            <p className="mt-8 max-w-3xl text-base leading-7 text-white/50">
              The strongest product systems hide complexity behind clear
              hierarchy, understandable workflows, and confident decisions. That
              became the foundation of the Realestify experience.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEXT CASE STUDIES
      ========================================================= */}

      <section className="w-full border-t border-neutral-200 py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 sm:px-10 md:flex-row md:items-center lg:px-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Selected work
            </p>

            <p className="heading mt-2 text-2xl text-[#172235]">
              Explore another complex product system.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-[#172235] transition-colors hover:bg-neutral-100"
          >
            View all case studies
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="w-full pb-28 pt-10">
        <FinalCTASection
          text1="Your product can be complex."
          text2="The experience shouldn't feel complicated."
        />
      </section>
    </main>
  );
}
