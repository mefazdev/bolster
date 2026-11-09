import Link from "next/link";
import CoverImage from "./blog/CoverImage";
import CategoryChip from "./blog/CategoryChip";
import AuthorBadge from "./blog/AuthorBadge";
import { formatDate, readingTime } from "./blog/blogUtils";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-stone-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300">
        <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
          <CoverImage
            cover={post.cover}
            category={post.category}
            alt={post.title}
            width={640}
            height={400}
            className="transition duration-500 group-hover:scale-105"
          />
          {/* <CategoryChip value={post.category} className="absolute left-3 top-3 shadow-sm" /> */}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs font-medium text-stone-500">
            {formatDate(post.publishedAt)} · {readingTime(post.wordCount)}
          </p>
          <h3 className="blog-heading mt-2 text-lg font-bold leading-snug text-stone-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="mt-2 text-sm leading-relaxed text-stone-600 line-clamp-3">{post.excerpt}</p>
          )}
          <div className="mt-auto pt-5">
            <AuthorBadge name={post.author} grade={post.grade} />
          </div>
        </div>
      </a>
    </Link>
  );
}
