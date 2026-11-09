import BlogCard from "./BlogCard";
import BlogFonts from "./blog/BlogFonts";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { containerClass } from "./Container";

// Home page section: latest student blog posts (data comes from getStaticProps in pages/index.js).
export default function Blogs({ posts = [] }) {
  if (posts.length === 0) return null;

  return (
    <section data-aos="fade-up" className={`blog-ui ${containerClass} py-12 lg:pt-20`}>
      <BlogFonts />
      <SectionHeading id="student-voices" description="Stories, poems and ideas written by our students.">
        Student Blogs
      </SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button href="/Blogs">Read More</Button>
      </div>
    </section>
  );
}
