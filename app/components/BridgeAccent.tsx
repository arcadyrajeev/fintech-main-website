import { section } from "framer-motion/client";
import React from "react";

const BridgeAccent = () => {
  return (
    <section className="w-full  ">
      <div
        className=" max-w-6xl mx-auto
          px-6 sm:px-18 md:px-18 lg:px-24
          py-8 sm:py-20 lg:py-16
          text-left"
      >
        <p className="text-base md:text-lg bodyfont mb-10">
          <span className="text-accent font-semibold md:text-2xl">
            Arcady Design{" "}
          </span>{" "}
          is a fintech-focused product strategy and UX systems studio helping
          fintech companies improve onboarding conversion, financial dashboard
          clarity, KYC UX, trust systems, product positioning, and user
          decision-making across regulated financial products.
        </p>
        <p
          className="
             text-3xl  md:text-4xl lg:text-6xl
            heading
            font-medium md:font-normal
            tracking-tight
            text-primary-text
            mx-auto lg:mx-0
            leading-[1.2]
          "
        >
          We help <span className="text-accent italic">fintech</span> founders
          align product, brand, and narrative so users, teams, and investors
          understand the business instantly.
        </p>
      </div>
    </section>
  );
};

export default BridgeAccent;
