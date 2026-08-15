"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, Import } from "lucide-react";

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
  return (
    <article className="group">
      {/* Image */}
      <Link
        href={`/blog/${slug}`}
        className="relative block overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500 z-10" />

        <Image
          src={image}
          alt={title}
          height={400}
          width={640}
          unoptimized
          className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="flex items-center gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="heading text-3xl md:text-4xl">View Post</span>

            <ArrowUpRight className="w-8 h-8" />
          </div>
        </div>
      </Link>

      {/* Meta */}
      <div className="mt-6 flex items-center gap-3 text-neutral-500">
        <Calendar className="w-5 h-5" />

        <span className="text-sm">
          {new Date(date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>

      {/* Category */}
      <p className="mt-5 text-[11px] tracking-[0.22em] uppercase text-blue-700 font-bold">
        {category}
      </p>

      {/* Title */}
      <h3 className="mt-4 heading text-2xl  leading-[1.05] tracking-tight text-[#111827]">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="mt-5 text-neutral-600 text-base leading-relaxed line-clamp-2">
        {excerpt}
      </p>

      {/* CTA */}
      <Link
        href={`/blog/${slug}`}
        className="mt-10 inline-flex items-center gap-2 text-lg text-[#111827] hover:gap-3 transition-all"
      >
        Read More
        <ArrowUpRight className="w-5 h-5" />
      </Link>
    </article>
  );
}
