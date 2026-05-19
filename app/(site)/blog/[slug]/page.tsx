import Link from "next/link";
import { ArrowLeft, Calendar, Clock3 } from "lucide-react";

import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#f8fbff]">
        <div className="text-center">
          <h1 className="heading text-5xl text-[#111827]">Post not found</h1>

          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-3 text-lg text-neutral-700"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#f8fbff]">
      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.35]
          [background-image:linear-gradient(to_right,#dbe4f015_1px,transparent_1px),linear-gradient(to_bottom,#dbe4f015_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-200/20 blur-[140px] rounded-full" />

      <div className="relative z-10">
        {/* Hero */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-24 md:pt-32">
          {/* Category */}
          <p className="text-[11px] tracking-[0.3em] uppercase text-blue-700 font-semibold">
            {post.category}
          </p>

          {/* Title */}
          <h1
            className="
              mt-8
              heading
              font-light
              text-[#111827]
              text-5xl
              md:text-7xl
              leading-[0.92]
              tracking-[-0.06em]
              max-w-5xl
            "
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p
            className="
              mt-10
              text-xl
              md:text-2xl
              leading-relaxed
              text-neutral-600
              max-w-3xl
            "
          >
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-neutral-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />

              <span className="text-sm">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock3 className="w-5 h-5" />

              <span className="text-sm">8 min read</span>
            </div>
          </div>

          {/* Cover */}
          <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#dbe4f0] bg-white shadow-[0_20px_80px_rgba(15,23,42,0.06)]">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Editorial Body */}
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-24">
          <article
            className="prose prose-neutral max-w-none"
            dangerouslySetInnerHTML={{
              __html: post.contentHtml,
            }}
          />
        </div>
        {/* Bottom CTA */}
        <div className="my-32 max-w-6xl mx-auto pt-12 border-t border-[#dbe4f0]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
                Continue Reading
              </p>

              <h3 className="mt-4 heading text-3xl text-[#111827]">
                More insights on operational systems and product trust.
              </h3>
            </div>

            <Link
              href="/blog"
              className="
                  inline-flex items-center gap-3
                  rounded-full
                  border border-[#cfd9e8]
                  bg-white
                  px-8 py-4
                  text-lg
                  text-[#111827]
                  hover:bg-[#f3f8ff]
                  transition-colors
                "
            >
              <ArrowLeft className="w-5 h-5" />
              Back to blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
