import Link from "next/link";
import { ArrowLeft, Calendar, Clock3 } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/blog";
import FinalCTASection from "@/app/components/FinalCTASection";

import JsonLd from "@/app/components/seo/JsonLd";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SITE_URL = "https://arcadydesign.com";

export async function generateStaticParams() {
  const posts = getAllPostSlugs();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  category: string;

  seoTitle?: string;
  seoDescription?: string;

  keywords?: string[];
  tags?: string[];

  canonical?: string;

  thumbnail: string;
  coverImage: string;

  case1?: string;
  case2?: string;
  service?: string;

  featured?: boolean;

  contentHtml: string;
}

/* -------------------------------- */
/* SEO METADATA */
/* -------------------------------- */

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post: Post | null = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const url = post.canonical || `${SITE_URL}/blog/${slug}`;

  return {
    title: post.seoTitle || `${post.title} | Arcady`,

    description: post.seoDescription || post.excerpt,

    keywords: post.keywords || [],

    authors: [
      {
        name: "Arcady",
      },
    ],

    creator: "Arcady",
    publisher: "Arcady",

    metadataBase: new URL(SITE_URL),

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: post.seoTitle || post.title,

      description: post.seoDescription || post.excerpt,

      url,

      siteName: "Arcady",

      locale: "en_US",

      type: "article",

      publishedTime: post.date,

      tags: post.tags || [],

      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: post.seoTitle || post.title,

      description: post.seoDescription || post.excerpt,

      creator: "@yourhandle",

      images: [post.coverImage],
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    category: post.category,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  const allPosts = await getAllPosts();

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

  /* -------------------------------- */
  /* ARTICLE SCHEMA */
  /* -------------------------------- */

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.coverImage}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Arcady",
    },
    publisher: {
      "@type": "Organization",
      name: "Arcady",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: SITE_URL,
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Blog",

        item: `${SITE_URL}/blog`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: post.title,

        item: `${SITE_URL}/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON LD */}
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbSchema} />

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
            <p className="text-[11px] tracking-[0.3em] uppercase text-blue-700 font-semibold">
              {post.category}
            </p>

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

            <div className="relative mt-16 h-[500px] overflow-hidden rounded-[2rem] border border-[#dbe4f0] bg-white shadow-[0_20px_80px_rgba(15,23,42,0.06)]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                unoptimized
                className="object-cover"
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
          {/* Internal Links */}
          {(post.case1 || post.case2 || post.service) && (
            <div className="max-w-6xl mx-auto px-6 sm:px-10 pb-24">
              <div className="rounded-[2rem] border border-[#dbe4f0] bg-white p-10 shadow-[0_10px_60px_rgba(15,23,42,0.04)]">
                <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
                  Related Insights
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[post.case1, post.case2]
                    .filter(Boolean)
                    .map((link, index) => {
                      const slug = link!.split("/").pop() || "";

                      const title = slug
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (char) => char.toUpperCase());

                      return (
                        <Link
                          key={link}
                          href={link!}
                          className="
                  group
                  rounded-[1.75rem]
                  border border-[#dbe4f0]
                  bg-[#f8fbff]
                  p-8
                  transition-all
                  hover:bg-white
                  hover:shadow-[0_10px_40px_rgba(15,23,42,0.06)]
                "
                        >
                          <p className="text-xs uppercase tracking-[0.2em] text-blue-700 font-medium">
                            CASE STUDY 0{index + 1}
                          </p>

                          <h3 className="mt-5 heading text-3xl leading-tight text-[#111827]">
                            {title}
                          </h3>

                          <p className="mt-4 text-neutral-600 leading-relaxed">
                            Explore operational trust, behavioral friction, and
                            product clarity breakdowns.
                          </p>
                        </Link>
                      );
                    })}
                </div>

                {post.service && (
                  <div className="mt-8">
                    <Link
                      href={`/services/${post.service}`}
                      className="
              inline-flex items-center justify-center
              rounded-full
              bg-[#111827]
              px-8 py-4
              text-sm text-white
              hover:opacity-90
              transition-opacity
            "
                    >
                      Learn more about {post.service}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {/* Related Blog Posts */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 pb-32">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
                More Insights
              </p>

              <h2 className="mt-3 heading text-4xl text-[#111827] max-w-3xl">
                Related thinking on operational trust and product behavior
              </h2>
            </div>

            <Link
              href="/blog"
              className="items-center hidden md:inline-block relative rounded-full border border-[#dbe4f0] bg-white cursor-pointer px-6 py-3 text-sm text-[#111827] hover:bg-[#f8fbff] transition-colors
      "
            >
              View All Blogs
            </Link>
          </div>

          <div className="mt-12 flex flex-col gap-6">
            {allPosts
              .filter((relatedPost) => relatedPost.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <div
                  key={relatedPost.slug}
                  className="
            group 
            flex flex-col md:flex-row
            overflow-hidden
            rounded-[2rem]
            border border-[#dbe4f0]
            bg-white
            transition-all
            hover:shadow-[0_15px_50px_rgba(15,23,42,0.06)]
          "
                >
                  {/* Image */}
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="relative h-[260px] md:h-auto md:w-[320px] flex-shrink-0 overflow-hidden"
                  >
                    <Image
                      src={relatedPost.thumbnail}
                      alt={relatedPost.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-8">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-blue-700 font-medium">
                        {relatedPost.category}
                      </p>

                      <h3 className="mt-5 heading text-3xl leading-tight text-[#111827]">
                        {relatedPost.title}
                      </h3>

                      <p className="mt-5 text-lg leading-relaxed text-neutral-600">
                        {relatedPost.excerpt}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-6 text-sm text-neutral-500">
                      <span>
                        {new Date(relatedPost.date).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </span>

                      <span>8 min read</span>
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="items-center relative rounded-full border border-[#dbe4f0] bg-white cursor-pointer px-6 py-3 text-sm text-[#111827] hover:bg-[#f8fbff] transition-colors
      "
                      >
                        Read full Article
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 md:hidden">
            <Link
              href="/blog"
              className="
        inline-flex items-center justify-center
        rounded-full relative
        border border-[#dbe4f0]
        bg-white
        px-6 py-3
        text-sm text-[#111827]
        hover:bg-[#f8fbff]
        transition-colors
      "
            >
              View All Blogs
            </Link>
          </div>
        </div>
        <FinalCTASection
          text1="If the problem feels familiar,"
          text2="a conversation usually helps."
        />
      </section>
    </>
  );
}
