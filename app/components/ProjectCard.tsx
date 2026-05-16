import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description?: string;
  imageUrl: string;
  caseStudyLink: string;
  points: string[];
  tags: string[];
}

const ProjectCard = ({
  title,
  category,
  description,
  imageUrl,
  caseStudyLink,
  points,
  tags,
}: ProjectCardProps) => {
  return (
    <div
      className="
        flex flex-col lg:flex-row
        w-full
        border border-neutral-300/80
        rounded-[24px]
        overflow-hidden
        bg-[#F7F7F6]
      "
    >
      {/* LEFT CONTENT */}
      <div
        className="
          w-full lg:w-1/2
          px-6 py-10
          sm:px-10 sm:py-14
          lg:px-14 lg:py-16
          flex flex-col justify-center
        "
      >
        {/* CATEGORY */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="text-[11px] tracking-[0.18em] uppercase text-accent font-medium">
            {category}
          </span>
        </div>

        {/* TITLE */}
        <h2 className="heading text-primary-text/95 text-2xl sm:text-3xl lg:text-[2.6rem] leading-[1.05] max-w-xl">
          {title}
        </h2>

        {/* DESCRIPTION */}
        {description && (
          <p className="text-secondary-text/90 text-sm sm:text-base mt-5 leading-relaxed max-w-xl">
            {description}
          </p>
        )}

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="
                px-3 py-1.5
                rounded-full
                border border-neutral-300
                bg-white/70
                text-[11px] sm:text-xs
                text-primary-text/70
              "
            >
              {tag}
            </div>
          ))}
        </div>

        {/* OUTCOMES */}
        <div className="mt-8 flex flex-col gap-3">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm text-primary-text/75"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={caseStudyLink}
          className="
            mt-10
            relative
            flex
            w-fit
            group
            px-5 md:px-8 py-3
            text-sm sm:text-base
            bg-primary-text text-white
            rounded-full
            overflow-hidden
          "
        >
          <div
            className="
              absolute -bottom-[2vh] left-0
              w-3 h-2
              rounded-full
              duration-1000
              group-hover:scale-[120]
              transition-all ease-in-out
              bg-accent
              z-0
            "
          />

          <span className="z-10 flex items-center justify-center gap-3">
            Explore Case Study
            <ArrowUpRight
              size={20}
              className="duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </span>
        </Link>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="
          relative
          w-full lg:w-1/2
          bg-[#ECECEC]
          flex items-center justify-center
          px-4 py-6 lg:py-16
          overflow-hidden
        "
      >
        {/* subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-blue-100/30" />

        {/* floating overlays */}
        <div
          className="
            absolute top-6 left-6
            px-4 py-2
            rounded-xl
            bg-white/90
            border border-neutral-200
            shadow-sm
            backdrop-blur
          "
        >
          <p className="text-[10px] uppercase tracking-wider text-neutral-500">
            Outcome
          </p>

          <p className="text-sm text-primary-text font-medium mt-1">
            Reduced onboarding friction
          </p>
        </div>

        <div
          className="
            absolute bottom-8 right-8
            px-4 py-2
            rounded-xl
            bg-[#0F172E]
            text-white
            shadow-lg
          "
        >
          <p className="text-[10px] uppercase tracking-wider text-white/60">
            Focus
          </p>

          <p className="text-sm mt-1">Trust + product clarity</p>
        </div>

        {/* IMAGE */}
        <div className="relative w-full aspect-[16/10] z-10">
          <Image
            src={imageUrl}
            alt={`${title} case study preview`}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
