/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      // Old single-post page (used Strapi + cookies); posts now live at /blog/[slug].
      { source: "/Blog", destination: "/Blogs", permanent: true },
    ];
  },
};
