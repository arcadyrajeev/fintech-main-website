import { section } from "framer-motion/client";
import React from "react";

const BridgeAccent = () => {
  return (
    <section className="w-full  ">
      <div
        className=" max-w-7xl mx-auto
          px-6 
          py-8 sm:py-20 lg:py-16
          text-left"
      >
        <p
          className="
             text-3xl  md:text-4xl lg:text-[56px]
            heading
            font-regular md:font-light
            tracking-tight
            text-primary-text
            mx-auto  ml-10
            leading-[1]
          "
        >
          We turn complex products into clear, credible experiences for{" "}
          <span className="text-accent italic font-medium">
            fintech and operational platforms
          </span>{" "}
          <br />
          making them easier to understand, use, and scale.
        </p>
      </div>
    </section>
  );
};

export default BridgeAccent;
