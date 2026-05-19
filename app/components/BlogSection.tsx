import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import BlogCard from "./BlogCard";

import { getAllPosts } from "@/lib/blog";

export default async function BlogSection() {
  const posts = await getAllPosts();

  const latestPosts = posts.slice(0, 3);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.35]
          [background-image:linear-gradient(to_right,#dbe4f022_1px,transparent_1px),linear-gradient(to_bottom,#dbe4f022_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-200/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-24 md:py-32">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm bodyfont font-semibold uppercase text-neutral-500 mb-3">
            Blog Posts
          </p>

          <h2 className="mt-6 heading text-[#111827] text-4xl md:text-6xl leading-[0.95] tracking-tight">
            Insights on operational systems.
          </h2>

          <p className="mt-8 text-neutral-600 text-sm md:text-lg leading-relaxed max-w-3xl">
            Essays and observations around fintech UX, operational clarity,
            onboarding systems, AI visibility, and decision-oriented products.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {latestPosts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              image={post.coverImage}
              slug={post.slug}
              date={post.date}
              category={post.category}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <Link href="/blog" className="group inline-flex items-center gap-3">
            <span className="heading text-2xl text-blue-800">
              View all Posts
            </span>

            <ArrowUpRight className="w-6 h-6 text-blue-800 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
