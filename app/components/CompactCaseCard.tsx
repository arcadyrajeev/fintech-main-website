import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CompactCaseCardProps {
  category: string;
  title: string;
  imageUrl: string;
  caseStudyLink: string;
  accent?: string;
}

const CompactCaseCard = ({
  category,
  title,
  imageUrl,
  caseStudyLink,
  accent = "#1d4ed8",
}: CompactCaseCardProps) => {
  return (
    <Link
      href={caseStudyLink}
      className="
        group
        block
        overflow-hidden
        rounded-2xl
        border border-black/20
        bg-white
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]
      "
    >
      {/* Image */}
      <div
        className="
          relative
          overflow-hidden
          bg-[#f4f6fb]
          aspect-[4/3]
        "
      >
        <img
          src={imageUrl}
          alt={title}
          className="
            h-full w-full
            object-contain object-top
            transition-transform duration-700
            group-hover:scale-[1.03]
          "
        />

        {/* Arrow */}
        <div
          className="
            absolute top-5 right-5
            h-11 w-11
            rounded-full
            bg-white/90
            backdrop-blur-sm
            border border-black/10
            flex items-center justify-center
            shadow-sm
            transition-transform duration-500
            group-hover:rotate-45
          "
        >
          <ArrowUpRight size={18} className="text-primary-text/70" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        {/* Category */}
        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.22em]
            font-medium
            mb-4
          "
          style={{ color: accent }}
        >
          {category}
        </p>

        {/* Title */}
        <h3
          className="
            heading
            text-2xl sm:text-[2rem]
            leading-[1]
            tracking-[-0.04em]
            text-primary-text
            max-w-4xl
            transition-opacity duration-300
            group-hover:opacity-80
          "
        >
          {title}
        </h3>

        {/* Link */}
        <div className="mt-8 flex items-center gap-2">
          <span
            className="
              text-sm
              font-medium
              text-primary-text/70
              transition-colors duration-300
              group-hover:text-primary-text
            "
          >
            View Case Study
          </span>

          <ArrowUpRight
            size={16}
            className="
              text-primary-text/60
              transition-transform duration-300
              group-hover:translate-x-[2px]
              group-hover:-translate-y-[2px]
            "
          />
        </div>
      </div>
    </Link>
  );
};

export default CompactCaseCard;
