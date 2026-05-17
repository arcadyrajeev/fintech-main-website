"use client";

import Image from "next/image";

const logos = [
  "/logos/logo1.svg",
  "/logos/logo2.svg",
  "/logos/logo3.svg",
  "/logos/logo4.svg",
  "/logos/logo5.svg",
  "/logos/logo6.svg",
  "/logos/logo7.svg",
  "/logos/logo8.svg",
  "/logos/logo6.svg",
  "/logos/logo2.svg",
  "/logos/logo6.svg",
];

export default function TrustedBySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f5f5] py-14 md:py-20">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-black/5" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-xs uppercase font-medium tracking-[0.25em] text-primary-text/60">
            Trusted by teams building complex products
          </p>

          <h2 className="heading mt-4 text-2xl sm:text-3xl md:text-4xl text-primary-text">
            Trusted by 20+ companies
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative mt-12 overflow-hidden">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#f5f5f5] to-transparent pointer-events-none" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#f5f5f5] to-transparent pointer-events-none" />

          <div className="flex w-max animate-marquee gap-14 md:gap-20">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-center
                  min-w-[120px] md:min-w-[160px]
                  opacity-60 hover:opacity-100
                  transition-opacity duration-300
                "
              >
                <Image
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  width={140}
                  height={60}
                  className="h-8 md:h-10 w-auto object-contain grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
