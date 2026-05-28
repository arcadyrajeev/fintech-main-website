"use client";

import { MoveRightIcon } from "lucide-react";

const pillars = [
  {
    title: "Trust",
    outcome: "Activation",
  },

  {
    title: "Structure",
    outcome: "Decisions",
  },

  {
    title: "Perception",
    outcome: "Growth",
  },
];

export default function FinalSection() {
  return (
    <section className="w-full py-20 md:py-24 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-18">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            bg-[#081125]
          "
        >
          {/* Grid */}
          <div
            className="
              absolute inset-0 opacity-[0.05]
              [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
              [background-size:48px_48px]
            "
          />

          {/* Curves */}
          <svg
            className="absolute inset-0 w-full h-[400px] opacity-[0.5]"
            viewBox="0 0 1600 700"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M-40 620C240 520 300 240 650 240C980 240 1050 580 1640 420"
              stroke="#21E0EA"
              strokeWidth="1"
            />

            <path
              d="M-120 500C220 420 340 140 710 140C1100 140 1220 520 1720 260"
              stroke="#21E0EA"
              strokeWidth="1"
            />

            <path
              d="M40 700C300 620 420 340 760 340C1120 340 1280 700 1680 520"
              stroke="#21E0EA"
              strokeWidth="1"
            />
          </svg>

          {/* Glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[140px] rounded-full" />

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <h2 className="mt-5 heading text-4xl md:text-6xl leading-[0.95] text-white max-w-4xl">
              Clarity changes behavior.
            </h2>

            {/* Relationship Cards */}
            <div className="mt-10 grid md:grid-cols-3 gap-4">
              {pillars.map((item) => (
                <div
                  key={item.title}
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-sm
                  "
                >
                  <p className="heading text-xl text-white">{item.title}</p>

                  <p className="mt-2 text-sky-400 text-lg">affects</p>

                  <p className="mt-2 text-neutral-300">{item.outcome}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-18 flex flex-col items-center lg:flex-row lg:items-end lg:justify-between gap-10">
              <div className="max-w-3xl">
                <p className="text-sm uppercase  md:text-left text-center tracking-[0.20em] text-neutral-400 mb-4">
                  START A CONVERSATION
                </p>

                <h3 className="heading text-3xl md:text-left text-center md:text-5xl leading-[0.95] text-white">
                  If these problems feel familiar,
                  <br />a conversation usually helps.
                </h3>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <a
                  href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20have%20a%20quick%20conversation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border border-white/20
                    bg-white
                    overflow-hidden
                    px-8
                    py-5
                    text-[#081125]
                  
                  "
                >
                  <div className=" absolute -bottom-[2vh] left-1/2 w-3 h-2 origin-bottom rounded-full origin-center duration-1200 group-hover:scale-[110] transition-all ease-in-out bg-accent z-0 "></div>{" "}
                  <span className="heading text-lg font-semibold group-hover:text-white duration-500 ease-in-out z-10">
                    Start a conversation
                  </span>
                  <MoveRightIcon
                    size={20}
                    className="transition-transform group-hover:text-white duration-500 ease-in-out duration-300 group-hover:translate-x-1"
                  />
                </a>

                <p className="mt-3 text-sm text-center  md:ml-6  text-neutral-400">
                  Usually replies within a few hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
