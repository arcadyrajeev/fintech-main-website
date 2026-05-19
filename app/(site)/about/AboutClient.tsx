"use client";

import CTAButton from "@/app/components/CTAButton";
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
            <span className="text-accent">Fintech & Operational Platforms</span>
            .
          </h1>

          <p className="mt-6 text-sm md:text-xl portrait:max-w-xl landscape:max-w-2xl font-medium text-secondary-text">
            Product systems, onboarding, trust, and operational UX for platforms
            where clarity directly affects user decisions and product
            confidence.
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
            I work with fintech and operational platform teams when products
            become harder to interpret, onboarding starts leaking confidence,
            and trust signals no longer feel obvious to users, stakeholders, or
            internal teams.
          </p>

          <p className="text-neutral-700 leading-relaxed text-sm md:text-xl">
            My work focuses on aligning product structure, financial logic,
            onboarding systems, and narrative so the business can explain itself
            clearly without relying on constant clarification.
          </p>

          <p className="text-neutral-700 leading-relaxed text-sm md:text-lg">
            This usually becomes important before fundraising, after early
            traction, during product expansion, or when operational systems
            become harder to scale and explain clearly.
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
            Systems where trust, product clarity, and operational
            decision-making intersect.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              {
                title: "Onboarding & KYC UX",
                desc: "Reducing hesitation across verification, activation, and financial onboarding systems.",
              },
              {
                title: "Product Design Systems",
                desc: "Structuring dashboards, workflows, operational hierarchy, and decision-oriented interfaces into clearer product systems.",
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

          <h2 className="mt-4 text-2xl md:text-5xl heading tracking-tight text-primary-text ">
            If the problem feels familiar, a conversation usually helps.
          </h2>

          <p className="mt-6 mb-8 text-sm md:text-lg text-neutral-600  leading-relaxed">
            Most conversations start around onboarding friction, operational UX
            complexity, unclear positioning, trust gaps, workflow confusion, or
            product systems that become harder to interpret as they scale.
          </p>

          <CTAButton
            text="Start a Conversation"
            href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20have%20a%20quick%20conversation."
            subtext="Let's explore how we can help."
          />
        </div>
      </section>
    </main>
  );
}
