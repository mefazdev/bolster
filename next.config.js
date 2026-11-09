/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    // Serve images as-is instead of through Next's /_next/image optimizer, which has
    // critical unpatched vulnerabilities on Next 12 (fixed only in 15.5+/16).
    // Revisit after upgrading Next.
    unoptimized: true,
    // With a non-default loader, Next 12.3 answers /_next/image with a 404, so the
    // vulnerable optimizer can't be reached directly either.
    loader: "custom",
  },

  async redirects() {
    return [
      // Old single-post page (used Strapi + cookies); posts now live at /blog/[slug].
      { source: "/Blog", destination: "/Blogs", permanent: true },
    ];
  },
};
