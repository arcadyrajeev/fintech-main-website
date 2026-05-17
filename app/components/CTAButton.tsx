"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
  href: string;
  subtext?: string;
}

export default function CTAButton({ text, href, subtext }: CTAButtonProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {" "}
      <Link
        href={href}
        className="
                  relative
                  group
                  overflow-hidden
                  rounded-full
                  border-2 border-blue-900/50
                  bg-white
                  px-8 sm:px-9
                  py-6
                  transition-all duration-500
                  hover:-translate-y-[2px]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
      >
        {" "}
        <div className=" absolute -bottom-[2vh] left-1/2 w-3 h-2 origin-bottom rounded-full origin-center duration-1200 group-hover:scale-[110] transition-all ease-in-out bg-accent z-0 "></div>{" "}
        {/* The Text */}{" "}
        <span className="relative flex items-center gap-2 text-xl heading font-medium z-10 transition-colors duration-1200 group-hover:text-white">
          {" "}
          {text}
          <ArrowUpRight size={24} className="ml-2" />{" "}
        </span>{" "}
      </Link>{" "}
      <p className="text-sm text-neutral-500 mt-4">{subtext}</p>
    </div>
  );
}
