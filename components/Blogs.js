import Link from "next/link";
import BlogCard from "./BlogCard";
import BlogFonts from "./blog/BlogFonts";

// Home page section: latest student blog posts (data comes from getStaticProps in pages/index.js).
export default function Blogs({ posts = [] }) {
  if (posts.length === 0) return null;

  return (
    <section data-aos="fade-up" className="blog-ui embed lg:pt-20 px-4 lg:px-0">
      <BlogFonts />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="hm__blogs__head">
            <h3>Student Voices</h3>
          </div>
          <p className="mt-3 max-w-xl text-stone-600">
            Stories, poems and ideas written by our students.
          </p>
        </div>

      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>

      <div className="mt-8 flex">
        <Link href="/Blogs">
          <a className="m-auto bg-[#c9ca76] p-1 px-5 text-stone-900 transition hover:brightness-95">
            Read More
          </a>
        </Link>
      </div>
    </section>
  );
}
