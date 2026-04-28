import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  caseStudyLink: string;
  points: string[];
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  caseStudyLink,
  points,
}: ProjectCardProps) => {
  return (
    <div
      className="
        flex flex-col lg:flex-row
        w-full
        
        border border-neutral-300/90
        rounded-2xl
        overflow-hidden
       
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
        <h1 className="heading text-primary-text/90 text-2xl sm:text-3xl lg:text-4xl">
          {title}
        </h1>

        {description && (
          <p className="text-secondary-text/90 text-sm sm:text-base mt-4 max-w-xl">
            {description}
          </p>
        )}

        {/* CTA */}
        <Link
          href={caseStudyLink}
          className="
            mt-8
            portrait:w-[80%] landscape:w-[50%]
            inline-flex items-center justify-center gap-3
            w-full sm:w-auto
            px-4 md:px-8 py-3
            text-sm sm:text-base
            bg-primary-text text-white
            rounded-full
            hover:bg-accent
            transition
          "
        >
          View Case Study
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="
          w-full lg:w-1/2
          bg-gray-200/50
          flex items-center justify-center
          px-4 py-6 lg:py-16
          
        "
      >
        <div className="relative w-full aspect-[16/10]">
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
