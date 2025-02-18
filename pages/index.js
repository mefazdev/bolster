import Programmes from "../components/Programmes";

import Involve from "../components/Involve";

import Footer from "../components/Footer";
import Slider from "../components/Slider";
import SocialEmbed from "../components/SocialEmbed";

import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Status from "../components/Status";
import Testimonial from "../components/Testimonial";

import HomeNav from "../components/HomeNav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bolster Foundation</title>
        <meta
          name="description"
          content="Bolster foundation is a non-profiteering organization founded by a group of modern educated youngsters from the traditional Madrasa background to help disadvantaged minority students in India by designing and supporting programmes for their quality education, skill development and career endeavor. Our goal is to empower the deprived sections of the society by developing young leaders from them."
        />
        <meta property="og:title" content="Home" key="title" />
        <link rel="canonical" href="https://www.bolsterfoundation.in" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeNav />

      <main className="home pb-24" style={{ scrollBehavior: "smooth" }}>
        <Hero />
        <Status />
        <About />
 
        <Programmes />
        <Testimonial />
        <Involve />

        <Slider />

        <SocialEmbed />
      </main>

      <Footer />
    </div>
  );
}
