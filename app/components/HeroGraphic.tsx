import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ArrowDownLeft } from "lucide-react";

const HeroGraphic = () => {
  const cards = [
    { title: "Leaks", desc: "Revenue loss" },
    { title: "Trust", desc: "Invester confidence" },
    { title: "Friction", desc: "Decision drag" },
    { title: "Traction", desc: "Market proof" },
  ];
  return (
    <div className="flex flex-col overflow-hidden w-full  landscape:h-[46vh] bg-secondary-bg rounded-2xl px-3 lg:px-8 ">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 w-full justify-between py-3 lg:py-8 ">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex group hover:scale-105 transition-scale duration-300 cursor-pointer p-4 flex-col rounded-xl  bg-neutral-300 justify-center border-r bg-gradient-to-tl from-gray-700 to-gray-900 border border-white/30"
          >
            <div className="w-[30%] rounded-full bg-gray-500 h-2 mb-4"></div>
            <div className="w-full flex justify-between items-center">
              <h2 className="text-xl md:text-xl lg:text-4xl  heading text-white mb-2">
                {card.title}
              </h2>{" "}
              {idx % 2 === 0 ? (
                <ArrowDownLeft
                  size={36}
                  className="text-gray-300 duration-300  group-hover:-translate-x-2 group-hover:translate-y-2"
                />
              ) : (
                <ArrowUpRight
                  size={36}
                  className="text-gray-300 duration-300  group-hover:translate-x-2 group-hover:-translate-y-2"
                />
              )}
            </div>
            <div className="flex-col w-full relative mt-3 ">
              <p className="text-gray-300 text-xs font-medium  group-hover:scale-[1.05] transition-transform duration-300">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full hidden landscape:flex bg-gray-700 h-[30vh] rounded-t-2xl mt-6 p-8">
        {" "}
        <div className="w-[60%] h-[80%] rounded-full bg-gray-500"> </div>
      </div>
    </div>
  );
};

export default HeroGraphic;
