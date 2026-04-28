// app/contact/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Arcady",
  description:
    "Get in touch to discuss clarity, product narrative, and decision-making challenges.",
};

export default function ContactPage() {
  return (
    <main className="bg-neutral-50 text-neutral-900">
      {/* Hero / Intro */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] pt-24 lg:pt-32 pb-8 ">
        <header className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl heading text-primary-text font-medium tracking-tight">
            Let’s talk
          </h1>

          <p className="mt-6 text-lg md:text-xl leading-snug text-neutral-800">
            If something feels off in how your product is understood, a
            conversation usually helps.
          </p>

          <p className="mt-4 text-base md:text-md text-neutral-600 max-w-2xl">
            I work with founders at moments where product, narrative, and trust
            stop reinforcing each other, often before a raise or after early
            traction.
          </p>
        </header>
      </section>

      {/* Contact Methods */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-8 lg:py-16 border-t border-neutral-200">
        <h2 className="text-2xl heading text-primary-text font-medium tracking-tight">
          Reach out
        </h2>

        <div className="mt-10 max-w-3xl grid grid-cols-1 gap-8 md:gap-16 text-neutral-700">
          {/* WhatsApp */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-2">
              WhatsApp
            </h3>
            <p className="leading-relaxed">
              The fastest way to reach me for an initial conversation.
            </p>
            <a
              href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20talk."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
            >
              +91 95236 38369
            </a>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-2">
              Email
            </h3>
            <p className="leading-relaxed">
              Best for longer context or sharing material in advance.
            </p>
            <a
              href="mailto:rajeevdas@arcadydesign.com"
              className="inline-block mt-3 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
            >
              rajeevdas@arcadydesign.com
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-2">
              LinkedIn
            </h3>
            <p className="leading-relaxed">
              If you prefer to reach out there or want to see recent thinking.
            </p>
            <a
              href="https://www.linkedin.com/in/arcadyrajeev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
            >
              linkedin.com/in/arcadyrajeev
            </a>
          </div>
        </div>
      </section>

      {/* Closing Note */}
      <footer className="max-w-6xl mx-auto px-6 md:px-12 lg:px-[7.5rem] py-20 border-t border-neutral-200">
        <p className="max-w-3xl text-neutral-700 leading-relaxed italic">
          A conversation focused on how the product is actually being
          understood.
        </p>
      </footer>
    </main>
  );
}
