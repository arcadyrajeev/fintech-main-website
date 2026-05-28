"use client";

import {
  ArrowRightLeft,
  TrendingDown,
  ShieldAlert,
  Workflow,
  Landmark,
} from "lucide-react";

import Image from "next/image";

const signals = [
  {
    title: "Conversion drops after onboarding",
    icon: ArrowRightLeft,
  },

  {
    title: "Trust signals stop scaling consistently",
    icon: ShieldAlert,
  },

  {
    title: "Metrics improve but decisions slow",
    icon: TrendingDown,
  },

  {
    title: "Operational workflows become fragmented",
    icon: Workflow,
  },

  {
    title: "Product perception lags behind business growth",
    icon: Landmark,
  },
];

export default function Timeline() {
  return (
    <section className="w-full py-24 md:py-32 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ">
          {/* LEFT CONTENT */}
          <div className="pb-2 ">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
              SIGNALS
            </p>

            <h2 className="mt-6 heading text-4xl md:text-6xl leading-[0.95] text-primary-text">
              Companies usually reach out when :
            </h2>

            <div className="mt-10 space-y-5">
              {signals.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-center gap-4">
                    <div
                      className="
                        w-8 h-8
                        rounded-lg
                        bg-white
                        border border-neutral-200
                        flex items-center justify-center
                        shadow-sm
                      "
                    >
                      <Icon
                        size={18}
                        strokeWidth={2}
                        className="text-accent/70"
                      />
                    </div>

                    <span className="text-base md:text-lg text-primary-text">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative  w-full h-[40vh]  md:h-full mt-0 md:mt-20">
            {/* BACK CARD */}

            <Image
              src={"/images/signal-cover.png"}
              fill
              alt="Signal Image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
