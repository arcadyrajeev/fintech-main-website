// app/case-studies/rupeeflow/MarketImageSlider.tsx

"use client";

import Image from "next/image";
import { useState } from "react";
import { slideData } from "@/app/type/types";

interface ImageSliderProps {
  slides: slideData[];
}

export default function MarketImageSlider({ slides }: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  return (
    <div className="mt-16 relative">
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-neutral-200 bg-white">
        <Image
          src={slides[index].src}
          alt={slides[index].alt}
          fill
          className="object-contain"
        />
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
      >
        ←
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
      >
        →
      </button>
    </div>
  );
}
