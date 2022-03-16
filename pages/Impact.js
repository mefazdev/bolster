import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Impact() {
  return (
    <div>
      <Head>
        <title>Bolster Foundation</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="impact">
        <div className="about__main">
          <div className="about__main__head">
            <h1>Impact</h1>
          </div>
        </div>
        <div className="impact__content">
          <p>
            The Bolster is working in the field of empowering minority
            communities in India. We ensure that at least half of the
            beneficiaries are women. Most of our projects focus on educating
            girls students who can multiply the impact by influencing many
            around. So far, 146 people have benefited from various Bolster
            initiatives, of which 112 are women.
          </p>

          {/* <div className="impact__sub">
              <h6>Bolster Monsoon Camp </h6>
          </div>

        <p className="mt-2">The camp was rich with the participation of 72 people: 49 as participants and 23 as delegates. In some sessions, parents of students also participated as per the rule. </p> */}
     
      <div className="impact__row grid gap-10 lg:grid-cols-2">
          <div className="impact__row__left">
           <h6> Bolster Monsoon Camp </h6>
           <p>The camp was rich with the participation of 72 people: 49 as participants and 23 as delegates. In some sessions, parents of students also participated as per the rule. </p>
          </div>
          <div className="impact__row__left">
              <h6>Bolster Buddy Program </h6>
              <p>As a platform connecting aspiring students with voluntary mentors, 18 people got part of it: 12 students and six mentors from foreign universities, IITs, JNU, and other places.</p>

</div>
      </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
