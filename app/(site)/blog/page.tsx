import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import BlogCard from "@/app/components/BlogCard";
import { getAllPosts } from "@/lib/blog";
import FinalCTASection from "@/app/components/FinalCTASection";

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featuredPost = posts[0];

  return (
    <main className="relative overflow-hidden bg-[#f8fafc] min-h-screen">
      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.35]
          [background-image:linear-gradient(to_right,#dbe4f022_1px,transparent_1px),linear-gradient(to_bottom,#dbe4f022_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-[40vw] h-[40vw] bg-cyan-200/20 blur-[140px] rounded-full" />

      <div className="relative z-10">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 pt-36 md:pt-44 pb-20">
          <div className="max-w-5xl">
            <p className="text-xs tracking-[0.28em] uppercase text-blue-700 font-semibold">
              Blog
            </p>

            <h1
              className="
                mt-6
                heading
                text-[#111827]
                text-5xl
                md:text-7xl
                leading-[0.92]
                tracking-[-0.05em]
              "
            >
              Operational systems and product clarity.
            </h1>

            <p className="mt-8 max-w-3xl text-neutral-600 text-base md:text-xl leading-relaxed">
              Essays, observations, and breakdowns around onboarding friction,
              operational UX, trust systems, fintech infrastructure, AI
              visibility, dashboards, and product positioning.
            </p>
          </div>
        </section>

        {/* FEATURED POST */}
        {featuredPost && (
          <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 pb-28">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border border-[#dbe4f0]
                bg-white/70
                backdrop-blur-sm
                block
              "
            >
              {/* Glow */}
              <div className="pointer-events-none absolute top-0 right-0 w-[25vw] h-[25vw] bg-cyan-200/20 blur-[120px] rounded-full" />

              <div className="grid lg:grid-cols-2">
                {/* Content */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] tracking-[0.22em] uppercase text-blue-700 font-semibold">
                      Featured Insight
                    </p>

                    <h2
                      className="
                        mt-6
                        heading
                        text-[#111827]
                        text-4xl
                       
                        leading-[0.95]
                        tracking-tight
                      "
                    >
                      {featuredPost.title}
                    </h2>

                    <p className="mt-6 text-neutral-600 text-base md:text-lg leading-relaxed max-w-2xl">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-12 inline-flex items-center gap-3 text-[#111827]">
                    <span className="heading text-xl">Read Article</span>

                    <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

                {/* Image */}
                <div className="relative min-h-[340px] lg:min-h-full">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* POSTS GRID */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 pb-32">
          <div className="flex items-end justify-between gap-10">
            <div>
              <p className="text-xs tracking-[0.28em] uppercase text-blue-700 font-semibold">
                All Posts
              </p>

              <h2
                className="
                  mt-5
                  heading
                  text-[#111827]
                  text-4xl
                  md:text-6xl
                  leading-[0.95]
                  tracking-tight
                "
              >
                Operational product thinking.
              </h2>
            </div>

            <div className="hidden lg:block max-w-md">
              <p className="text-neutral-600 leading-relaxed">
                Focused on onboarding systems, trust architecture, operational
                dashboards, fintech UX, product clarity, and AI visibility
                infrastructure.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-20">
            {posts.map((post) => (
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
        </section>

        <section className="w-full mx-auto px-6 sm:px-10 lg:px-20 pb-32">
          <FinalCTASection
            text1="If operational friction feels familiar,"
            text2=" clarity usually helps."
          />
        </section>
      </div>
    </main>
  );
}
