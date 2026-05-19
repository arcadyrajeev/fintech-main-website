import type { Metadata } from "next";

import { ArrowUpRight, Mail, MessageCircle, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Rajeev | Fintech Product & Narrative Strategy",

  description:
    "Speak with Rajeev about fintech product clarity, onboarding friction, trust gaps, and narrative alignment.",

  alternates: {
    canonical: "https://arcadydesign.com/contact",
  },
};

const contactOptions = [
  {
    title: "WhatsApp",

    desc: "Fastest way to start a conversation around product clarity, onboarding friction, trust perception, or UX systems.",

    value: "+91 95236 38369",

    href: "https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20talk.",

    icon: MessageCircle,
  },

  {
    title: "Email",

    desc: "Best if you want to share product context, screenshots, investor decks, or operational problems in advance.",

    value: "rajeev@arcadydesign.com",

    href: "mailto:rajeev@arcadydesign.com",

    icon: Mail,
  },

  {
    title: "LinkedIn",

    desc: "For asynchronous conversations, background context, and industry discussions around fintech and operational systems.",

    value: "linkedin.com/in/arcadyrajeev",

    href: "https://www.linkedin.com/in/arcadyrajeev/",

    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[#f6f8fb] text-[#111827]">
      {/* GRID */}
      <div
        className="
          absolute inset-0 opacity-[0.4]
          [background-image:linear-gradient(to_right,#dbe4f022_1px,transparent_1px),linear-gradient(to_bottom,#dbe4f022_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* GLOW */}
      <div className="pointer-events-none absolute top-0 right-0 w-[45vw] h-[45vw] bg-blue-200/20 blur-[120px] rounded-full" />

      <div className="relative z-10">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 pt-32 md:pt-40 pb-24 md:pb-32">
          <div className="max-w-5xl">
            <p className="text-sm font-bold tracking-[.1em] uppercase text-[#315efb]">
              Contact
            </p>

            <h1
              className="
                mt-8
                heading
                text-[#111827]
                text-4xl
                md:text-6xl
                leading-[0.92]
                tracking-[-0.06em]
                font-light
                max-w-5xl
              "
            >
              Conversations around product clarity, trust, and operational UX.
            </h1>

            <p
              className="
                mt-10
                max-w-3xl
                text-lg md:text-2xl
                leading-relaxed
                text-neutral-600
                bodyfont
              "
            >
              Most founders reach out when something feels operationally off.
              Users hesitate during onboarding. Product positioning feels vague.
              Trust does not translate through the interface. Internal teams
              explain the product differently than the website.
            </p>

            <p
              className="
                mt-6
                max-w-2xl
                text-base md:text-lg
                leading-relaxed
                text-neutral-500
                bodyfont
              "
            >
              The conversation usually starts around UX or branding, but the
              real issue is often product interpretation, narrative clarity, and
              operational trust.
            </p>
          </div>
        </section>

        {/* CONTACT GRID */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 pb-24 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {contactOptions.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border border-[#dbe4f0]
                    bg-white/70
                    backdrop-blur-xl
                    p-8 md:p-10
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-[#c9d8ee]
                    hover:shadow-[0_20px_80px_rgba(0,0,0,0.06)]
                  "
                >
                  {/* glow */}
                  <div className="pointer-events-none absolute top-0 right-0 w-32 h-32 bg-blue-200/20 blur-3xl rounded-full" />

                  <div className="relative z-10">
                    {/* icon */}
                    <div
                      className="
                        w-14 h-14
                        rounded-2xl
                        bg-[#f4f8ff]
                        border border-[#dbe4f0]
                        flex items-center justify-center
                      "
                    >
                      <Icon className="w-6 h-6 text-[#315efb]" />
                    </div>

                    {/* title */}
                    <h2
                      className="
                        mt-8
                        heading
                        text-3xl
                        leading-none
                        tracking-[-0.04em]
                        text-[#111827]
                      "
                    >
                      {item.title}
                    </h2>

                    {/* desc */}
                    <p
                      className="
                        mt-6
                        text-neutral-600
                        leading-relaxed
                        text-base
                        bodyfont
                      "
                    >
                      {item.desc}
                    </p>

                    {/* value */}
                    <div className="mt-10 flex items-center justify-between">
                      <span
                        className="
                          text-sm
                          md:text-base
                          font-medium
                          text-[#111827]
                          bodyfont
                        "
                      >
                        {item.value}
                      </span>

                      <ArrowUpRight
                        className="
                          w-5 h-5
                          text-[#315efb]
                          transition-transform duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* STRATEGIC CTA */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 pb-32">
          <div
            className="
              relative overflow-hidden
              rounded-[2.5rem]
              border border-[#dbe4f0]
              bg-white/60
              backdrop-blur-xl
              p-10 md:p-16
            "
          >
            {/* glow */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-[20vw] bg-blue-200/20 blur-[120px] rounded-full" />

            <div
              className="
                relative z-10
                grid grid-cols-1 lg:grid-cols-[1.4fr_0.7fr]
                gap-16 items-center
              "
            >
              {/* left */}
              <div>
                <p className="text-xs tracking-[0.28em] uppercase text-neutral-500 font-semibold">
                  Strategic conversations
                </p>

                <h2
                  className="
                    mt-6
                    heading
                    text-3xl md:text-5xl
                    leading-[0.95]
                    tracking-[-0.05em]
                    text-[#111827]
                    font-light
                    max-w-4xl
                  "
                >
                  Most product trust problems appear long before metrics expose
                  them.
                </h2>

                <p
                  className="
                    mt-8
                    max-w-3xl
                    text-base md:text-lg
                    leading-relaxed
                    text-neutral-600
                    bodyfont
                  "
                >
                  Founders usually notice the symptoms first. Users hesitate.
                  Sales cycles slow down. Onboarding completion drops. Investor
                  conversations feel harder than expected. Teams over-explain
                  what the product does.
                </p>

                <p
                  className="
                    mt-6
                    max-w-3xl
                    text-base md:text-lg
                    leading-relaxed
                    text-neutral-600
                    bodyfont
                  "
                >
                  Those are often perception and operational clarity problems,
                  not just interface problems.
                </p>
              </div>

              {/* right */}
              <div
                className="
                  rounded-2xl
                  border border-[#dbe4f0]
                  bg-[#f8fbff]
                  p-8
                "
              >
                <p className="text-sm uppercase tracking-[0.24em] text-neutral-500 font-semibold">
                  Best fit
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    "Fintech and operational platforms",
                    "Products preparing for scale",
                    "Founders refining positioning",
                    "Complex onboarding systems",
                    "Trust-sensitive workflows",
                    "Infrastructure and B2B tools",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#315efb] mt-2" />

                      <p className="text-neutral-700 text-sm leading-relaxed bodyfont">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
