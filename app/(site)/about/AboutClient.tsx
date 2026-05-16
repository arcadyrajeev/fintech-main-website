"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useParallax = (scrollYProgress: any, distance: number) => {
  return useTransform(scrollYProgress, [0, 1], [0, distance]);
};

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useParallax(scrollYProgress, 50);
  const yImage = useParallax(scrollYProgress, 180);
  const yContent = useParallax(scrollYProgress, -80);

  return (
    <main
      ref={containerRef}
      className="relative w-full px-4 md:px-10 lg:px-24 text-neutral-900 overflow-hidden"
    >
      {/* HERO */}
      <section className="relative z-10 flex px-4 md:px-12 lg:px-[6vw] mx-auto pt-36 lg:pt-16">
        <motion.div
          style={{ y: yText }}
          className="flex flex-col pt-[32vw] md:pt-[20vh] px-2 lg:pt-[15rem]"
        >
          <p className="text-sm md:text-lg bodyfont font-medium text-secondary-text tracking-[0.2em] uppercase">
            Rajeev Das
          </p>

          <h1 className="mt-4 text-[6vw] portrait:md:text-5xl landscape:md:text-7xl portrait:max-w-2xl landscape:max-w-4xl text-primary-text heading tracking-tight">
            Product & Narrative Strategist for{" "}
            <span className="text-accent">Fintech</span>.
          </h1>

          <p className="mt-6 text-sm md:text-xl portrait:max-w-xl landscape:max-w-2xl font-medium text-secondary-text">
            Product, narrative, onboarding, and trust clarity for complex
            financial systems where decisions need to hold up under scrutiny.
          </p>
        </motion.div>
      </section>

      {/* IMAGE */}
      <motion.section
        style={{ y: yImage }}
        className="absolute z-5 top-14 right-0"
      >
        <div className="relative rounded-lg max-w-2xl overflow-hidden">
          <img
            src="/images/imagerkd2.png"
            alt="Rajeev portrait"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.section>

      {/* INTRO */}
      <motion.section
        style={{ y: yContent }}
        className="relative px-4 md:px-12 lg:px-[6vw] z-20 w-full mx-auto mt-[8vw] md:mt-8"
      >
        <div className="relative mx-auto flex flex-col gap-8 backdrop-blur-md border border-neutral-300 rounded-2xl px-5 lg:px-16 py-10">
          <p className="text-neutral-700 leading-relaxed text-sm md:text-2xl">
            I work with fintech teams when products become harder to interpret,
            onboarding starts leaking conviction, and trust signals no longer
            feel obvious to users, investors, or internal teams.
          </p>

          <p className="text-neutral-700 leading-relaxed text-sm md:text-xl">
            My work focuses on aligning product structure, financial logic,
            onboarding systems, and narrative so the business can explain itself
            clearly without relying on constant clarification.
          </p>

          <p className="text-neutral-700 leading-relaxed text-sm md:text-lg">
            This usually becomes important before fundraising, after early
            traction, during product expansion, or when financial workflows grow
            more operationally complex.
          </p>
        </div>
      </motion.section>

      {/* WHEN THIS WORK MATTERS */}
      <section className="relative z-20 w-full mx-auto py-10 px-[4vw] md:px-12 lg:px-[8vw] mt-[4vw]">
        <div className="relative mx-auto lg:max-w-5xl flex flex-col gap-5">
          <p className="text-sm tracking-[0.18em] uppercase text-neutral-500">
            When this work becomes necessary
          </p>

          <h2 className="text-2xl md:text-5xl heading tracking-tight text-primary-text max-w-3xl">
            Clarity problems rarely appear as obvious UX problems.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              "Users hesitate during onboarding despite strong intent",
              "The product works, but explanations keep changing",
              "Teams interpret metrics differently across functions",
              "Investor conversations lose momentum during scrutiny",
              "Financial workflows become harder to trust quickly",
              "Dashboards show data but not operational confidence",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-neutral-200 rounded-lg px-5 py-5 bg-white/60 backdrop-blur-sm"
              >
                <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I FOCUS ON */}
      <section className="relative z-20 w-full mx-auto py-10 px-[4vw] md:px-12 lg:px-[8vw]">
        <div className="relative mx-auto lg:max-w-5xl flex flex-col gap-5">
          <p className="text-sm tracking-[0.18em] uppercase text-neutral-500">
            Focus Areas
          </p>

          <h2 className="text-2xl md:text-5xl heading tracking-tight text-primary-text max-w-3xl">
            Systems where trust, product logic, and financial decisions
            intersect.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              {
                title: "Onboarding & KYC UX",
                desc: "Reducing hesitation across verification, activation, and financial onboarding systems.",
              },
              {
                title: "Financial Dashboard Clarity",
                desc: "Making operational risk, transaction visibility, and financial state easier to interpret.",
              },
              {
                title: "Product Narrative",
                desc: "Aligning product explanation across website, pitch, onboarding, and internal communication.",
              },
              {
                title: "Trust Systems",
                desc: "Structuring interfaces so credibility becomes visible through interaction design.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-neutral-200 bg-white/50 backdrop-blur-sm p-6"
              >
                <h3 className="text-lg md:text-xl heading text-primary-text">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm md:text-base text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative z-20 w-full mx-auto py-10 px-[4vw] md:px-12 lg:px-[8vw]">
        <div className="relative mx-auto lg:max-w-5xl flex flex-col gap-5">
          <p className="text-sm tracking-[0.18em] uppercase text-neutral-500">
            Process
          </p>

          <h2 className="text-2xl md:text-5xl heading tracking-tight text-primary-text max-w-3xl">
            The work usually starts with identifying where clarity breaks first.
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                number: "01",
                title: "Discovery",
                desc: "Understanding the product, workflows, positioning, and trust gaps.",
              },
              {
                number: "02",
                title: "Friction Mapping",
                desc: "Identifying hesitation points, confusion patterns, and narrative inconsistencies.",
              },
              {
                number: "03",
                title: "System Restructuring",
                desc: "Aligning onboarding, dashboards, flows, and communication systems.",
              },
              {
                number: "04",
                title: "Iteration",
                desc: "Refining clarity through usage patterns, discussion, and operational feedback.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-neutral-200 bg-white px-6 py-6"
              >
                <p className="text-xs tracking-[0.18em] uppercase text-neutral-400">
                  {item.number}
                </p>

                <h3 className="mt-3 text-xl heading text-primary-text">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm md:text-base text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative z-20 w-full mx-auto py-14 px-[4vw] md:px-12 lg:px-[8vw]">
        <div className="relative mx-auto lg:max-w-5xl border border-neutral-200 rounded-2xl bg-white/60 backdrop-blur-sm p-6 md:p-10">
          <p className="text-sm tracking-[0.18em] uppercase text-neutral-500">
            Start a Conversation
          </p>

          <h2 className="mt-4 text-2xl md:text-5xl heading tracking-tight text-primary-text max-w-3xl">
            If the problem feels familiar, a conversation usually helps.
          </h2>

          <p className="mt-6 text-sm md:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Most conversations start around onboarding friction, trust gaps,
            unclear positioning, financial UX complexity, or investor-facing
            product clarity.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* WhatsApp */}
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                WhatsApp
              </p>

              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                Fastest way to start a discussion.
              </p>

              <a
                href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-sm font-medium text-primary-text underline underline-offset-4"
              >
                +91 95236 38369
              </a>
            </div>

            {/* Email */}
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                Email
              </p>

              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                Better for detailed context and material.
              </p>

              <a
                href="mailto:rajeevdas@arcadydesign.com"
                className="inline-block mt-5 text-sm font-medium text-primary-text underline underline-offset-4"
              >
                rajeevdas@arcadydesign.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                LinkedIn
              </p>

              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                Background, context, and async conversations.
              </p>

              <a
                href="https://www.linkedin.com/in/arcadyrajeev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-sm font-medium text-primary-text underline underline-offset-4"
              >
                linkedin.com/in/arcadyrajeev
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
