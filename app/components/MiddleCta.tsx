import React from "react";

const MiddleCta = () => {
  return (
    <section className="w-full flex justify-center bg-neutral-50 py-8 md:py-0">
      <div className="flex flex-col justify-center items-center gap-2">
        <a
          href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20have%20a%20quick%20conversation."
          target="_blank"
          rel="noopener noreferrer"
          className="
                text-sm sm:text-base
                font-medium
                border border-neutral-700
                p-4 rounded-full
                text-neutral-900
                hover:border-accent
                hover:text-accent
                transition-colors
              "
        >
          Start a conversation
        </a>
        <h3 className="text-secondary-text text-xs"> Chat on Whatsapp</h3>
      </div>
    </section>
  );
};

export default MiddleCta;
