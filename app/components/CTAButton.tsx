"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
  href: string;
}

export default function CTAButton({ text, href }: CTAButtonProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <Link
        href={href}
        className="
          group
          relative
          inline-flex
          items-center
          gap-4
          overflow-hidden
          rounded-full
          border border-white/10
          bg-blue-900
          px-7 sm:px-8
          py-4
          transition-all duration-500
          hover:-translate-y-[2px]
          hover:border-white/20
          hover:shadow-[0_20px_80px_rgba(11,35,80,0.35)]
        "
      >
        {/* Glow */}
        <div
          className="
            absolute inset-0
            opacity-0
            transition-opacity duration-500
            group-hover:opacity-100
          "
        >
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_45%)]
            "
          />

          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.18),transparent_40%)]
            "
          />
        </div>

        {/* Text */}
        <span
          className="
            relative z-10
            heading
            text-sm sm:text-base
            tracking-[-0.02em]
            text-white
          "
        >
          {text}
        </span>

        {/* Icon */}
        <div
          className="
            relative z-10
            flex
            h-10 w-10
            items-center
            justify-center
            rounded-full
            border border-white/10
            bg-white/[0.05]
            transition-transform duration-500
            group-hover:rotate-45
          "
        >
          <ArrowUpRight size={18} className="text-white/90" />
        </div>

        {/* Shine */}
        <div
          className="
            absolute inset-0
            -translate-x-[120%]
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            transition-transform duration-1000
            group-hover:translate-x-[120%]
          "
        />
      </Link>
    </div>
  );
}
