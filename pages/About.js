import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Image from "next/image";
import AboutBar from "../components/AboutBar";
import Head from "next/head";
export default function About() {
  return (
    <div>
      {/* <Head>
        <title>Bolster Foundation</title>
        
        <meta
          name="description"
          content="Bolster foundation is a non-profiteering organization founded by a group of modern educated youngsters from the traditional Madrasa background to help disadvantaged minority students in India by designing and supporting programmes for their quality education, skill development and career endeavor. Our goal is to empower the deprived sections of the society by developing young leaders from them."
        />
        <meta property="og:title" content="Home" key="title" />
        <link rel="canonical" href="https://www.bolsterfoundation.in" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Navbar />
      <div  className="about" style={{ scrollBehavior: "smooth" }}>
        <div className="about__main">
          <div className="about__main__head">
            <h1>Bolster foundation</h1>
          </div>
        </div>

        <div data-aos="flip-up"  className="about__content gap-10 grid lg:grid-cols-3 lg:py-20">
          <div className="lg:col-span-2">
            <h2>We bolster you!</h2>

            <p> 
              Bolster Foundation is a non-profit organization committed to
              empowering disadvantaged students in India by designing and
              supporting programs that enhance their education, skill
              development, and career aspirations.
              <br />
              We open doors to new opportunities through career mentoring,
              counseling, motivation, and training in modern languages and
              information & communication technology. Beyond individual growth,
              we collaborate with local educational institutions to reform
              curricula, teaching methods, and infrastructure, ensuring a
              holistic learning environment.
              <br />
              Our mission is to equip students from marginalized communities
              with the skills to pursue higher education, start businesses,
              engage with the modern world, and lead their communities. At
              Bolster Foundation, we believe that by nurturing young leaders, we
              can transform society and create a future driven by knowledge,
              innovation, and inclusivity.
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
