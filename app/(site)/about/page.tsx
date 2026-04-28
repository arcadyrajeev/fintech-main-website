"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const useParallax = (scrollYProgress: any, distance: number) => {
  return useTransform(scrollYProgress, [0, 1], [0, distance]);
};

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useParallax(scrollYProgress, 20);
  const yText = useParallax(scrollYProgress, 50);
  const yImage = useParallax(scrollYProgress, 200);
  const yContent = useParallax(scrollYProgress, -100);

  return (
    <main
      ref={containerRef}
      className="relative w-full bg-neutral-50 px-4 md:px-10 lg:px-24 text-neutral-900 overflow-hidden"
    >
      {/* Hero */}
      <section className="relative z-10 flex px-4 md:px-12 lg:px-[6vw] mx-auto pt-36 lg:pt-16">
        <motion.div
          style={{ y: yText }}
          className="flex flex-col pt-[32vw] md:pt-[20vh] px-2 lg:pt-[15rem]"
        >
          <h1 className="text-md md:text-xl font-medium text-secondary-text heading tracking-tight lg:my-8 my-4">
            Rajeev Das
          </h1>

          <h1 className="text-[6vw] portrait:md:text-5xl landscape:md:text-7xl portrait:max-w-2xl landscape:max-w-4xl text-primary-text heading tracking-tight">
            Product & Narrative Strategy for{" "}
            <span className="text-accent">Fintech</span>.
          </h1>

          <h1 className="text-sm md:text-xl portrait:max-w-xl landscape:max-w-2xl font-medium text-secondary-text max-w-2xl heading tracking-tight my-4 lg:my-8">
            Product, narrative, and risk clarity for complex systems, where
            decisions need to hold up under trust, scrutiny, and scale.
          </h1>
        </motion.div>
      </section>

      {/* Image */}
      <motion.section
        style={{ y: yImage }}
        className="absolute z-5 top-14 right-0"
      >
        <div className="relative rounded-xl max-w-2xl overflow-hidden">
          <img
            src="/images/imagerkd2.png"
            alt="Portrait"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.section>

      {/* Intro Content */}
      <motion.section
        style={{ y: yContent }}
        className="relative px-4 md:px-12 lg:px-[6vw] z-20 w-full mx-auto mt-[8vw] md:mt-8"
      >
        <div className="relative mx-auto flex flex-col gap-8 backdrop-blur-md border border-neutral-400 rounded-2xl px-4 lg:px-16 py-10">
          <p className="text-neutral-700 leading-relaxed text-justify text-sm md:text-2xl">
            I work with <span className="text-accent">fintech</span> teams as
            products grow in complexity, when clarity starts to erode, signals
            become harder to interpret, and decisions need to hold up under
            scrutiny.
          </p>

          <p className="text-neutral-700 leading-relaxed text-justify text-sm md:text-2xl">
            My work focuses on aligning product structure, market framing, and
            narrative so the business can be understood clearly by users,
            partners, and external stakeholders, without relying on constant
            explanation.
          </p>

          <p className="text-neutral-600 text-sm md:text-lg leading-relaxed">
            You won&apos;t find a traditional portfolio here by design.
          </p>

          <p className="text-neutral-700 text-sm md:text-lg leading-relaxed">
            Most of the value in this work lives in how problems are framed, how
            assumptions are made visible, and how product and narrative
            decisions hold up under questioning. That kind of work rarely shows
            up cleanly in static screens.
          </p>

          <p className="text-neutral-700 text-sm md:text-lg leading-relaxed">
            It&apos;s usually clearer through a short walkthrough or
            conversation than through polished artifacts alone.
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
      </motion.section>

      {/* When this work becomes necessary */}
      <section className="relative z-20 w-full mx-auto py-6 px-[4vw] md:px-12 lg:px-[8vw] mt-[4vw] md:mt-12">
        <div className="relative mx-auto lg:max-w-4xl flex flex-col gap-3 lg:gap-8">
          <h2 className="text-lg md:text-3xl heading tracking-tight text-primary-text">
            When this work becomes necessary
          </h2>

          <div className="text-neutral-700 leading-relaxed text-sm md:text-xl space-y-4">
            <p>
              This work usually shows up at inflection points, not because
              anything is broken, but because growing complexity makes the
              business harder to interpret with confidence.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                Before fundraising discussions, when the product needs to
                explain itself externally
              </li>
              <li>
                After early traction, when signals start contradicting each
                other
              </li>
              <li>
                When metrics look fine, but conviction weakens across the team
              </li>
              <li>
                When explanations change across product, pitch, and
                conversations
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What I focus on */}
      <section className="relative z-20 w-full mx-auto py-6 px-[4vw] md:px-12 lg:px-[8vw] mt-[2vw] md:mt-8">
        <div className="relative mx-auto lg:max-w-4xl flex flex-col gap-3 lg:gap-8">
          <h2 className="text-lg md:text-3xl heading tracking-tight text-primary-text">
            What I focus on
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-700 text-sm md:text-lg leading-relaxed">
            <div>
              <h3 className="font-medium text-primary-text mb-2">
                Product structure
              </h3>
              <p>
                How decisions surface, how money moves, and how outcomes
                resolve, so users and teams don&apos;t have to infer meaning or
                intent.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-primary-text mb-2">
                Narrative coherence
              </h3>
              <p>
                Ensuring the explanation holds across product, website, pitch,
                and external conversations, without shifting by context.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-primary-text mb-2">
                Trust under scrutiny
              </h3>
              <p>
                Making credibility visible through structure, not persuasion,
                especially in regulated or risk sensitive environments.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-primary-text mb-2">
                Decision clarity
              </h3>
              <p>
                Reducing cognitive load so decisions can be made confidently,
                without extended debate or clarification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="relative z-20 w-full mx-auto py-6 px-[4vw] md:px-12 lg:px-[8vw] mt-[2vw] md:mt-12">
        <div className="relative mx-auto lg:max-w-4xl flex flex-col gap-4">
          <p className="text-neutral-700 text-sm md:text-lg leading-relaxed">
            In high stake conversations, many strong businesses stall not
            because the idea is weak, but because the reasoning does not fully
            resolve. Questions repeat, conviction builds slowly, and
            explanations shift across discussions.
          </p>

          <p className="text-neutral-700 text-sm md:text-lg leading-relaxed">
            When that happens, it&apos;s usually a signal that product logic,
            market framing, and narrative structure are not yet aligned, not
            that the business lacks potential.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="relative z-20 w-full mx-auto py-10 px-[4vw] md:px-12 lg:px-[8vw] mt-[2vw] md:mt-12">
        <div className="relative mx-auto lg:max-w-4xl flex flex-col gap-6">
          <p className="text-neutral-600 italic text-sm md:text-lg leading-relaxed">
            When product and narrative drift apart, trust thins quietly.
            <br />
            My work is to realign them before decisions harden and momentum
            slows.
          </p>

          <a
            href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20have%20a%20quick%20conversation."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700 w-fit"
          >
            Start a conversation
          </a>
        </div>
      </section>
    </main>
  );
}
