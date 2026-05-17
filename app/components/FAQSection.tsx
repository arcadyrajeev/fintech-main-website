"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What kind of products do you usually work on?",
    answer:
      "We work on fintech platforms, operational software, dashboards, onboarding systems, analytics tools, infrastructure products, and trust-heavy digital experiences where clarity directly affects user decisions.",
  },

  {
    question: "How do you improve onboarding and product clarity?",
    answer:
      "We identify where users hesitate, lose confidence, or misunderstand the system. Then we restructure onboarding flows, hierarchy, messaging, and interaction patterns to reduce friction and improve comprehension.",
  },

  {
    question: "What problems are you usually solving?",
    answer:
      "Most engagements involve onboarding friction, weak trust perception, unclear product positioning, overloaded dashboards, confusing workflows, or operational systems that feel difficult to navigate under pressure.",
  },

  {
    question: "Do you help with product positioning and narrative strategy?",
    answer:
      "Yes. We align product behavior, interface systems, messaging, and narrative structure so users, stakeholders, and investors understand the product consistently.",
  },

  {
    question: "How long does a typical engagement take?",
    answer:
      "Smaller audits and clarity-focused UX engagements usually take 1 to 3 weeks. Larger restructuring projects involving onboarding systems, dashboards, or product narrative can extend across multiple phases.",
  },

  {
    question: "What does your process usually look like?",
    answer:
      "Most projects begin with workflow analysis, onboarding review, hierarchy evaluation, trust diagnostics, and product interpretation mapping before moving into restructuring and interface direction.",
  },

  {
    question:
      "Can you improve existing products without rebuilding everything?",
    answer:
      "Yes. Most operational products already have functional infrastructure. The problem is usually interpretation, hierarchy, onboarding friction, or trust communication rather than core functionality.",
  },

  {
    question: "Do you work with early-stage or scaling teams?",
    answer:
      "Both. We work with products before traction, during growth, and during scale phases where onboarding, operational clarity, and system understanding begin to break down.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full px-6 md:px-12 py-20 md:py-28">
      {/* SEO FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-14 lg:gap-28  ">
          {/* LEFT */}

          <div className="sticky top-28">
            <h2 className="heading font-medium text-4xl  leading-[0.95] tracking-tight text-primary-text">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h2>

            <p className="mt-6 text-neutral-500 text-sm md:text-base leading-relaxed max-w-xs">
              Questions teams usually ask around onboarding, trust systems,
              product clarity, dashboards, and operational UX.
            </p>
          </div>

          {/* RIGHT */}

          <div className="border-t border-neutral-300">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div key={index} className="border-b border-neutral-300">
                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 md:py-4 flex items-center justify-between gap-6 text-left"
                  >
                    <div className="flex items-start gap-4">
                      {/* Q */}
                      <span className="text-accent text-sm md:text-xl heading font-medium shrink-0 mt-1">
                        Q
                      </span>

                      {/* TEXT */}
                      <h3 className="bodyfont text-base  md:text-lg text-primary-text leading-[1.25]">
                        {faq.question}
                      </h3>
                    </div>

                    {/* ICON */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={20} className="text-primary-text" />
                    </motion.div>
                  </button>

                  {/* ANSWER */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-6 md:pl-8 pr-2 md:pr-6 max-w-2xl">
                          <p className="text-neutral-600 text-sm md:text-base leading-relaxed ">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
