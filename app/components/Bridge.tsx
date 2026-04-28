import { section } from "framer-motion/client";
import React from "react";

interface BridgeProps {
  text: string;
}

const Bridge = ({ text }: BridgeProps) => {
  return (
    <section className="w-full bg-neutral-50">
      <div
        className=" max-w-5xl mx-auto
          px-6 sm:px-18 md:px-18 lg:px-24
          py-8 sm:py-20 lg:py-16
          text-left"
      >
        <p
          className="
             text-2xl  md:text-3xl lg:text-5xl
            heading
            font-medium md:font-normal
            tracking-tight
            text-primary-text
            max-w-3xl
            mx-auto lg:mx-0
            leading-tight
          "
        >
          {text}
        </p>
      </div>
    </section>
  );
};

export default Bridge;
