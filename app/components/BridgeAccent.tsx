import { section } from "framer-motion/client";
import React from "react";

const BridgeAccent = () => {
  return (
    <section className="w-full bg-neutral-50">
      <div
        className=" max-w-6xl mx-auto
          px-6 sm:px-18 md:px-18 lg:px-24
          py-8 sm:py-20 lg:py-16
          text-left"
      >
        <p
          className="
             text-2xl  md:text-3xl lg:text-6xl
            heading
            font-medium md:font-normal
            tracking-tight
            text-primary-text
            mx-auto lg:mx-0
            leading-[1.2]
          "
        >
          We help <span className="text-accent italic">fintech</span> founders
          align brand, product, and narrative so the business is evaluated
          clearly by users and investors
        </p>
      </div>
    </section>
  );
};

export default BridgeAccent;
