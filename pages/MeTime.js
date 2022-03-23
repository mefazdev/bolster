import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from 'next/head'
export default function MeTime() {
  return (
    <div>
       <Head>
        <title>Bolster Me Time</title>

        <meta
          name="description"
          content="   &apos;Me Time&apos; is the conscious effort of taking (much needed)
          time-out to recharge your batteries. &apos;Me time&apos; can be spent in
          various ways and vary from person to person. It can be achieved in
          different ways. Essentially, as long as you&apos;e alone with your
          thoughts and undertaking mindfulness during any activity, you&apos;re
          successfully spending some quality ME time. With the help of experts
          from different fields, Bolster foundation facilitates &apos;Me time&apos; in
          Bolster Girls Campus.
          "
        />
        <meta property="og:title" content="Home" key="title" />
        <link rel="canonical" href="https://www.bolsterfoundation.in/MeTime" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="me" style={{ scrollBehavior: "smooth" }}>
        <div className="me__main">
          <div className="about__main__head">
            <h1>Me time</h1>
          </div>
        </div>

        <div className="me__content">
          <p>
            {" "}
            &apos;Me Time&apos; is the conscious effort of taking (much needed)
            time-out to recharge your batteries. &apos;Me time&apos; can be spent in
            various ways and vary from person to person. It can be achieved in
            different ways. Essentially, as long as you&apos;e alone with your
            thoughts and undertaking mindfulness during any activity, you&apos;re
            successfully spending some quality ME time. With the help of experts
            from different fields, Bolster foundation facilitates &apos;Me time&apos; in
            Bolster Girls Campus.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
