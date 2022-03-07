import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Image from "next/image";
import AboutBar from "../components/AboutBar";
import Head from "next/head";
export default function About() {
  return (
    <div>
      <Head>
        <title>Bolster Foundation</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="about" style={{scrollBehavior:'smooth'}}>
        <div className="about__main">
          <div className="about__main__head">
            <h1>Bolster foundation</h1>
          </div>
        </div>

        <div className="about__content gap-10 grid lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2>We bolster you!</h2>

            <p>
              Bolster foundation is a non-profiteering organization found by
              three modern educated youngsters from the traditional Madrasa
              background to help disadvantaged minority students in India by
              designing and supporting programmes for their quality education,
              skill development and career endeavor. By providing career
              mentoring, counselling, motivation, and training in modern
              languages, and information and communication technology, we show
              them the world of opportunities. In addition, bolster foundation
              collaborates with local Madrasas and educational institutions in
              reforming their curriculum, method of teaching and infrastructure
              settings so that the students from backward sections have the
              skill to do higher studies, start a business, engage with the
              modern world and lead their community. Our goal is to empower the
              deprived sections of the society by developing young leaders from
              them.
            </p>
          </div>
          <div>
            <AboutBar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
