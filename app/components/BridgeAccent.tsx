import { section } from "framer-motion/client";
import React from "react";

const BridgeAccent = () => {
  return (
    <section className="w-full  ">
      <div
        className=" max-w-6xl mx-auto
          px-6 
          py-8 sm:py-20 lg:py-16
          text-left"
      >
        <p
          className="
             text-3xl  md:text-4xl lg:text-6xl
            heading
            font-regular md:font-light
            tracking-tight
            text-primary-text
            mx-auto lg:mx-0
            leading-[1.2]
          "
        >
          We help align product, brand, and narrative for{" "}
          <span className="text-accent italic font-medium">
            fintech and operational platforms
          </span>{" "}
          <br />
          so users, teams, and investors understand the business instantly.
        </p>
      </div>
    </section>
  );
};

export default BridgeAccent;
