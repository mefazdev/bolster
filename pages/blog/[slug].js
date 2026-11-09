/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkIcon from "@mui/icons-material/Link";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";
import BlogFonts from "../../components/blog/BlogFonts";
import CategoryChip from "../../components/blog/CategoryChip";
import AuthorBadge from "../../components/blog/AuthorBadge";
import { avatarFor, formatDate, readingTime } from "../../components/blog/blogUtils";
import {
  sanityFetch,
  imageUrl,
  postBySlugQuery,
  postSlugsQuery,
  relatedPostsQuery,
  studioUrl,
} from "../../lib/sanity";

// Only allow web, email, phone and same-site links from post content. Anything else
// (e.g. "javascript:" or "data:") is dropped so a post can't run code in a reader's browser.
function safeHref(href) {
  if (typeof href !== "string") return null;
  const trimmed = href.trim();
  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) return trimmed; // same-site path
  if (trimmed.startsWith("#")) return trimmed;
  try {
    const { protocol } = new URL(trimmed);
    return ["http:", "https:", "mailto:", "tel:"].includes(protocol) ? trimmed : null;
  } catch {
    return null;
  }
}

const ptComponents = {
  types: {
    image: ({ value }) =>
      value?.url ? (
        <figure>
          <img src={imageUrl(value, { width: 1200 })} alt={value.alt || ""} loading="lazy" />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      ) : null,
  },
  marks: {
    link: ({ value, children }) => {
      const href = safeHref(value?.href);
      if (!href) return <>{children}</>; // keep the text, drop the unsafe link
      const external = /^https?:/i.test(href);
      return (
        <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
          {children}
        </a>
      );
    },
  },
};

// Portrait-ish image with no focus point chosen in the Studio.
function isPoster(cover) {
  const d = cover?.dims;
  if (!d || cover.hotspot) return false;
  const c = cover.crop || { left: 0, right: 0, top: 0, bottom: 0 };
  const w = d.width * (1 - c.left - c.right);
  const h = d.height * (1 - c.top - c.bottom);
  return h / w > 0.9;
}

function ShareBar({ title }) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  useEffect(() => setUrl(window.location.href), []);

  const enc = encodeURIComponent;
  const btn =
    "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-700 ring-1 ring-stone-200 transition hover:-translate-y-0.5 hover:shadow-md";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      window.prompt("Copy this link:", url);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 text-sm font-semibold text-stone-500">Share</span>
      <a
        className={`${btn} hover:text-[#25D366]`}
        href={`https://wa.me/?text=${enc(`${title} ${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
      >
        <WhatsAppIcon fontSize="small" />
      </a>
      <a
        className={`${btn} hover:text-[#1877F2]`}
        href={`https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
      >
        <FacebookIcon fontSize="small" />
      </a>
      <button type="button" className={`${btn} hover:text-orange-600`} onClick={copy} aria-label="Copy link">
        {copied ? <CheckIcon fontSize="small" className="text-emerald-600" /> : <LinkIcon fontSize="small" />}
      </button>
      <span className="text-xs font-medium text-emerald-600" aria-live="polite">
        {copied ? "Link copied!" : ""}
      </span>
    </div>
  );
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(100, (el.scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div aria-hidden="true" className="fixed left-0 top-0 z-[1000] h-1 w-full">
      <div className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-lime-500 transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default function BlogPost({ post, related }) {
  const description = post.excerpt || `A post by ${post.author || "a Bolster student"}.`;
  const ogImage = post.cover?.url ? imageUrl(post.cover, { width: 1200, height: 630 }) : null;
  const { initials, color } = avatarFor(post.author || "");

  return (
    <div className="blog-ui min-h-screen bg-[#fbfaf5]">
      <Head>
        <title>{`${post.title} | Student Voices – Bolster Foundation`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={post.title} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta name="twitter:card" content={ogImage ? "summary_large_image" : "summary"} />
      </Head>
      <BlogFonts />
      <ReadingProgress />
      <Navbar />

      <article className="pt-[90px]">
        {/* Header */}
        <header className="mx-auto max-w-3xl px-4 pt-10 sm:pt-14">
          <Link href="/Blogs">
            <a className="inline-flex items-center gap-1 text-sm font-semibold text-stone-500 transition hover:text-orange-600">
              <ArrowBackIcon fontSize="small" /> All posts
            </a>
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">

            <span className="text-sm font-medium text-stone-500">
              {formatDate(post.publishedAt)} · {readingTime(post.wordCount)}
            </span>
          </div>

          <h1 className="blog-heading mt-4 text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl sm:leading-tight">
            {post.title}
          </h1>
          {post.excerpt && <p className="mt-4 text-lg leading-relaxed text-stone-600 sm:text-xl">{post.excerpt}</p>}

          <div className="mt-8 flex flex-col gap-5 border-y border-stone-200 py-5 sm:flex-row sm:items-center sm:justify-between">
            <AuthorBadge name={post.author} grade={post.grade} size="lg" />
            <ShareBar title={post.title} />
          </div>
        </header>

        {/* Cover */}
        {post.cover?.url && (
          <figure className="mx-auto mt-10 max-w-5xl px-4">
            {isPoster(post.cover) ? (
              // Tall images (posters, artwork) are shown whole instead of being cropped to 16:9.
              <div className="relative flex justify-center overflow-hidden rounded-3xl bg-stone-900/5 p-4 shadow-sm ring-1 ring-stone-200 sm:p-8">
                <img
                  aria-hidden="true"
                  src={imageUrl(post.cover, { width: 60 })}
                  alt=""
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl"
                />
                <img
                  src={imageUrl(post.cover, { width: 1200 })}
                  alt={post.cover.alt || post.title}
                  className="relative max-h-[80vh] w-auto rounded-2xl shadow-lg"
                />
              </div>
            ) : (
              <div className="overflow-hidden rounded-3xl bg-stone-100 shadow-sm ring-1 ring-stone-200">
                <img
                  src={imageUrl(post.cover, { width: 1600, height: 900 })}
                  alt={post.cover.alt || post.title}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            )}
          </figure>
        )}

        {/* Body */}
        <div className="post-body mx-auto max-w-3xl px-4 py-12">
          <PortableText value={post.body || []} components={ptComponents} />
        </div>

        {/* Author footer */}
        {post.author && (
          <div className="mx-auto max-w-3xl px-4">
            <div className="flex flex-col items-start gap-5 rounded-3xl bg-white p-6 ring-1 ring-stone-200 sm:flex-row sm:items-center sm:p-8">
              <span aria-hidden="true" className={`${color} flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white`}>
                {initials}
              </span>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">Written by</p>
                <p className="blog-heading mt-1 text-xl font-bold text-stone-900">{post.author}</p>
                {post.grade && <p className="text-sm text-stone-500">{post.grade} · Bolster Foundation</p>}
              </div>
              <ShareBar title={post.title} />
            </div>
          </div>
        )}
      </article>

      {/* Related */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-20">
        {related.length > 0 && (
          <>
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="blog-heading text-2xl font-bold text-stone-900 sm:text-3xl">Keep reading</h2>
              <Link href="/Blogs">
                <a className="shrink-0 text-sm font-semibold text-orange-600 hover:underline">View all →</a>
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p._id} post={p} />
              ))}
            </div>
          </>
        )}

      </section>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const slugs = (await sanityFetch(postSlugsQuery)) || [];
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    // Posts published after the last build are generated on first visit.
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const post = await sanityFetch(postBySlugQuery, { slug: params.slug });
  if (!post) {
    return { notFound: true, revalidate: 60 };
  }
  const related =
    (await sanityFetch(relatedPostsQuery, { slug: params.slug, category: post.category || "" })) || [];
  return { props: { post, related }, revalidate: 60 };
}
