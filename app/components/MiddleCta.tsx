import React from "react";

const MiddleCta = () => {
  return (
    <section className="w-full flex justify-center bg-neutral-50 py-8 md:py-0">
      <div className="flex flex-col overflow-hidden justify-center items-center gap-2">
        <a
          href="https://wa.me/919523638369?text=Hi!%20I%20came%20across%20your%20work%20and%20wanted%20to%20have%20a%20quick%20conversation."
          target="_blank"
          rel="noopener noreferrer"
          className="
                text-sm sm:text-xl
                relative 
                group
                overflow-hidden
                font-medium
                border border-neutral-700
                 px-8 py-4 rounded-full
                text-neutral-900
                
                hover:border-accent
                hover:text-accent
                transition-colors
                duration-1200 ease-in-out
              "
        >
          <div
            className="
    absolute -bottom-[2vh] left-1/2
    w-3 h-2 
    origin-bottom
    rounded-full
    origin-center
    duration-1200
    group-hover:scale-[110]
    transition-all ease-in-out 
    bg-accent 
    z-0
  "
          ></div>

          {/* The Text */}
          <span className="relative z-10 transition-colors duration-1200 group-hover:text-white">
            Start a conversation
          </span>
        </a>
        <h3 className="text-secondary-text text-md"> Chat on Whatsapp</h3>
      </div>
    </section>
  );
};

export default MiddleCta;
