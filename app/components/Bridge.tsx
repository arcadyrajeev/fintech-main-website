import React from "react";

interface BridgeProps {
  text: string;
  size: "big" | "med" | "tiny"; // Explicitly define allowed sizes
}

const Bridge = ({ text, size }: BridgeProps) => {
  // 1. Create a mapping object for your sizes
  const sizeClasses = {
    big: "text-5xl md:text-4xl lg:text-6xl",
    med: "text-xl md:text-3xl lg:text-4xl", // Changed 1xl to xl (1xl isn't a standard TW class)
    tiny: "text-lg md:text-xl lg:text-3xl",
  };

  // 2. Select the classes based on the prop, defaulting to 'med' if not found
  const selectedSize = sizeClasses[size] || sizeClasses.med;

  return (
    <section className="w-full bg-neutral-50">
      <div
        className="max-w-6xl mx-auto
          px-6 sm:px-18 md:px-18 lg:px-24
          py-8 sm:py-20 lg:py-16
          text-left"
      >
        <p
          className={`${selectedSize} heading font-medium md:font-normal tracking-tight text-primary-text mx-auto lg:mx-0 leading-[1.2]`}
        >
          {text}
        </p>
      </div>
    </section>
  );
};

export default Bridge;
