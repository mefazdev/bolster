import Head from "next/head";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import BlogFonts from "../components/blog/BlogFonts";
import CoverImage from "../components/blog/CoverImage";
import CategoryChip from "../components/blog/CategoryChip";
import AuthorBadge from "../components/blog/AuthorBadge";
import { CATEGORIES, formatDate, readingTime } from "../components/blog/blogUtils";
import { sanityFetch, allPostsQuery, studioUrl } from "../lib/sanity";

const PAGE_SIZE = 9;

function FeaturedPost({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="group grid overflow-hidden rounded-3xl bg-white ring-1 ring-stone-200 shadow-sm transition duration-300 hover:shadow-xl lg:grid-cols-5 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300">
        <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 lg:col-span-3 lg:aspect-auto lg:min-h-[380px]">
          <CoverImage
            cover={post.cover}
            category={post.category}
            alt={post.title}
            width={960}
            height={600}
            eager
            className="absolute inset-0 transition duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow">
            Latest
          </span>
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 lg:col-span-2 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <CategoryChip value={post.category} />
            <span className="text-xs font-medium text-stone-500">
              {formatDate(post.publishedAt)} · {readingTime(post.wordCount)}
            </span>
          </div>
          <h2 className="blog-heading text-2xl font-bold leading-tight text-stone-900 group-hover:text-orange-600 transition-colors lg:text-3xl">
            {post.title}
          </h2>
          {post.excerpt && <p className="leading-relaxed text-stone-600 line-clamp-4">{post.excerpt}</p>}
          <div className="flex items-center justify-between gap-4 pt-2">
            <AuthorBadge name={post.author} grade={post.grade} size="lg" />
            <span className="hidden shrink-0 text-sm font-semibold text-orange-600 sm:inline">
              Read story →
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default function Blogs({ posts }) {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(PAGE_SIZE);

  // Only show category filters that actually have posts.
  const usedCategories = useMemo(
    () => CATEGORIES.filter((c) => posts.some((p) => p.category === c.value)),
    [posts]
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return posts.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (!q) return true;
      return [p.title, p.excerpt, p.author, p.grade].some((f) => f && f.toLowerCase().includes(q));
    });
  }, [posts, category, search]);

  const isDefaultView = category === "all" && !search.trim();
  const featured = isDefaultView ? filtered[0] : null;
  const rest = featured ? filtered.slice(1) : filtered;
  const visible = rest.slice(0, limit);
  const writers = new Set(posts.map((p) => p.author).filter(Boolean)).size;

  return (
    <div className="blog-ui bg-[#fbfaf5] min-h-screen">
      <Head>
        <title>Student Voices | Bolster Foundation Blog</title>
        <meta
          name="description"
          content="Stories, poems, ideas and art written by the students of Bolster Foundation."
        />
        <meta property="og:title" content="Student Voices – Bolster Foundation Blog" key="title" />
      </Head>
      <BlogFonts />
      <Navbar />

      {/* Hero */}
      <header className="relative overflow-hidden pt-[90px]">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(#e7e2c8_1px,transparent_1px)] [background-size:18px_18px] opacity-70" />
        <div aria-hidden="true" className="absolute -right-24 -top-10 h-72 w-72 rounded-full bg-[rgb(201,202,118)] opacity-40 blur-3xl" />
        <div aria-hidden="true" className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-orange-300 opacity-30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-14 text-center sm:py-20">

          <h1 className="blog-heading mt-5 text-4xl font-bold tracking-tight text-stone-900 sm:text-6xl">
            Student{" "}
            <span className="relative whitespace-nowrap text-orange-600">
              Voices
              <svg aria-hidden="true" viewBox="0 0 200 12" className="absolute -bottom-2 left-0 h-3 w-full text-[rgb(201,202,118)]" preserveAspectRatio="none">
                <path d="M2 9 Q 50 2 100 7 T 198 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
            Stories, poems, ideas and art from the young minds of the Bolster campus.
          </p>

          {posts.length > 0 && (
            <p className="mt-6 text-sm font-medium text-stone-500">
              <span className="font-bold text-stone-900">{posts.length}</span> {posts.length === 1 ? "post" : "posts"} ·{" "}
              <span className="font-bold text-stone-900">{writers}</span> {writers === 1 ? "writer" : "writers"}
            </p>
          )}
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-4 pb-24">
        {/* Search + filters */}
        {posts.length > 0 && (
          <div className="sticky top-[70px] z-10 -mx-4 mb-10 bg-[#fbfaf5]/90 px-4 py-4 backdrop-blur">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]" role="tablist" aria-label="Filter by category">
                {[{ value: "all", label: "All", emoji: "" }, ...usedCategories].map((c) => {
                  const active = category === c.value;
                  return (
                    <button
                      key={c.value}
                      role="tab"
                      aria-selected={active}
                      onClick={() => {
                        setCategory(c.value);
                        setLimit(PAGE_SIZE);
                      }}
                      className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${active
                        ? "bg-stone-900 text-white shadow"
                        : "bg-white text-stone-700 ring-1 ring-stone-200 hover:ring-stone-400"
                        }`}
                    >
                      <span aria-hidden="true">{c.emoji}</span> {c.label}
                    </button>
                  );
                })}
              </div>
              <label className="relative block w-full lg:w-72">
                <span className="sr-only">Search posts</span>
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" fontSize="small" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setLimit(PAGE_SIZE);
                  }}
                  placeholder="Search posts or writers…"
                  className="w-full rounded-full bg-white py-2.5 pl-10 pr-4 text-sm text-stone-800 ring-1 ring-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </label>
            </div>
          </div>
        )}

        {featured && (
          <section className="mb-12">
            <FeaturedPost post={featured} />
          </section>
        )}

        {visible.length > 0 && (
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </section>
        )}

        {rest.length > limit && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setLimit((l) => l + PAGE_SIZE)}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-800 ring-1 ring-stone-300 transition hover:bg-stone-900 hover:text-white"
            >
              Load more posts
            </button>
          </div>
        )}

        {/* Empty states */}
        {posts.length === 0 && (
          <div className="mx-auto max-w-md rounded-3xl bg-white p-10 text-center ring-1 ring-stone-200">
            <p className="text-5xl" aria-hidden="true">📝</p>
            <h2 className="blog-heading mt-4 text-xl font-bold text-stone-900">No posts yet</h2>
            <p className="mt-2 text-stone-600">The first student stories are on their way. Check back soon!</p>
          </div>
        )}
        {posts.length > 0 && filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-4xl" aria-hidden="true">🔍</p>
            <p className="mt-3 font-semibold text-stone-800">No posts match your search.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("all");
              }}
              className="mt-3 text-sm font-semibold text-orange-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await sanityFetch(allPostsQuery)) || [];
  return {
    props: { posts },
    // Rebuild in the background at most once a minute so new posts appear without a redeploy.
    revalidate: 60,
  };
}
