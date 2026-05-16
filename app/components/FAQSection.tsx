"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "How do you help fintech companies improve onboarding conversion?",
    answer:
      "We identify friction across onboarding, KYC, activation, and trust signaling. The goal is to reduce hesitation and improve meaningful user activation.",
  },
  {
    question: "What kind of fintech products do you work on?",
    answer:
      "We work on payments, lending, wealthtech, internal financial systems, cross-border products, fintech dashboards, and regulated onboarding experiences.",
  },
  {
    question: "How do you approach fintech UX and product clarity?",
    answer:
      "We analyze how users understand financial actions, risk, trust, and decision-making across the product experience. Then we restructure flows, hierarchy, and interaction systems for clarity.",
  },
  {
    question: "Do you help with fintech product positioning and narrative?",
    answer:
      "Yes. We align product behavior, interface systems, and communication so users, teams, and investors understand the business consistently.",
  },
  {
    question: "How long does a fintech product engagement usually take?",
    answer:
      "Smaller audits and onboarding optimization projects usually take 1 to 3 weeks. Larger product clarity and system restructuring engagements can extend across multiple phases.",
  },
  {
    question: "What does your fintech product process look like?",
    answer:
      "Most projects begin with system analysis, onboarding review, trust and conversion diagnostics, and product narrative evaluation before moving into UX restructuring and interface design.",
  },
  {
    question:
      "Can you redesign existing fintech products without rebuilding everything?",
    answer:
      "Yes. Most fintech products already have functional infrastructure. The problem is usually clarity, hierarchy, onboarding friction, or trust communication.",
  },
  {
    question: "Do you work with early-stage or scaling fintech companies?",
    answer:
      "Both. We work with fintech teams before traction, during growth, and during scale phases where onboarding, communication, and product understanding begin to break down.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full px-6 py-20 md:py-28">
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
              Questions fintech teams usually ask around onboarding, trust
              systems, product clarity, and financial UX.
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
