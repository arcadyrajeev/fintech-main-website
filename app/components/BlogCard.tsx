import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  date: string;
  category: string;
}

export default function BlogCard({
  title,
  excerpt,
  image,
  slug,
  date,
  category,
}: BlogCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

  return (
    <article className="group min-w-0">
      {/* IMAGE */}
      <Link
        href={`/blog/${slug}`}
        className="relative block aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100"
        aria-label={`Read ${title}`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black/10 transition-colors duration-500 group-hover:bg-black/30" />

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={10}
          unoptimized
          loading="lazy"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Hover CTA */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="flex items-center gap-3 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            <span className="heading text-2xl md:text-3xl">View Post</span>
            <ArrowUpRight className="h-7 w-7" />
          </div>
        </div>
      </Link>

      {/* META */}
      <div className="mt-5 flex items-center gap-3 text-neutral-500">
        <Calendar className="h-4 w-4" />

        <span className="text-sm">{formattedDate}</span>
      </div>

      {/* CATEGORY */}
      <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700">
        {category}
      </p>

      {/* TITLE */}
      <h3 className="mt-3 heading text-2xl leading-[1.1] tracking-tight text-[#111827]">
        <Link
          href={`/blog/${slug}`}
          className="transition-colors hover:text-[#1769B2]"
        >
          {title}
        </Link>
      </h3>

      {/* EXCERPT */}
      <p className="mt-4 line-clamp-2 text-base leading-relaxed text-neutral-600">
        {excerpt}
      </p>

      {/* CTA */}
      <Link
        href={`/blog/${slug}`}
        className="mt-7 inline-flex items-center gap-2 text-base font-medium text-[#111827] transition-all hover:gap-3"
      >
        Read More
        <ArrowUpRight className="h-5 w-5" />
      </Link>
    </article>
  );
}
