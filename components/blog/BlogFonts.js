import Head from "next/head";

// Heading weights for Poppins plus Malayalam support, since students may write in Malayalam.
export default function BlogFonts() {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* Intentionally page-level: these fonts are only needed on blog pages. */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Malayalam:wght@400;600;700&family=Poppins:wght@500;600;700&display=swap"
      />
    </Head>
  );
}
