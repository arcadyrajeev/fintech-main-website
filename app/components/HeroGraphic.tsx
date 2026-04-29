import React from "react";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const HeroGraphic = () => {
  const cards = [
    { title: "Leaks", desc: "Revenue loss" },
    { title: "Trust", desc: "Investor confidence" },
    { title: "Friction", desc: "Decision drag" },
    { title: "Traction", desc: "Market proof" },
  ];

  return (
    <div className="flex flex-col overflow-hidden w-full landscape:h-[46vh] bg-[#0B1220] rounded-2xl px-3 lg:px-8">
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 w-full py-3 lg:py-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden hover:scale-[1.03] transition duration-300 cursor-pointer p-4 flex flex-col rounded-xl 
  bg-gradient-to-tl from-[#262B60] to-slate-900 
  border border-white/20 hover:border-white/90"
          >
            {/* Glow Effect */}
            {/* Glow Effect */}
            <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-gray-500/30 rounded-full blur-[60px] pointer-events-none z-0"></div>

            {/* subtle top indicator */}
            <div className="w-[30%] rounded-full bg-white/20 h-2 mb-4"></div>

            {/* title + arrow */}
            <div className="w-full flex justify-between items-center">
              <h2 className="text-lg md:text-2xl lg:text-4xl heading text-white mb-2">
                {card.title}
              </h2>

              {idx % 2 === 0 ? (
                <ArrowDownLeft
                  size={40}
                  className="text-slate-400 group-hover:text-white transition duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"
                />
              ) : (
                <ArrowUpRight
                  size={40}
                  className="text-slate-400 group-hover:text-white transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              )}
            </div>

            {/* description */}
            <p className="text-white/50 text-xs font-medium mt-2">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* bottom system block */}
      <div className="w-full relative  hidden landscape:flex bg-[#232C55] h-[30vh] rounded-t-2xl mt-6 p-8">
        <div className="w-[60%] h-[80%] rounded-full bg-white/10"></div>
      </div>
    </div>
  );
};

export default HeroGraphic;
