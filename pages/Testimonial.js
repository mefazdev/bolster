import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
export default function Testimonial() {
  return (
    <div>
      <Head>
        <title>Bolster Foundation</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="testi">
        <div className="about__main">
          <div className="about__main__head">
            <h1>Testimonials</h1>
          </div>
        </div>
        <div className="testi__content">
          <div class="message received">
            <span id="random">
              <p>
                It was a pleasant experience to participate in the Bolster
                Monsoon Camp, a memoir to cherish for life. When all physical
                gatherings were closed during the pandemic, the virtual camping
                with the Bolster bolstered my confidence and ambitions. Being a
                camp with participants from multiple areas allowed me to
                interact with many people.{" "}
              </p>
            </span>
            <span class="metadata">
              <span class="times">
                <h6>Hanna on Camp</h6>
              </span>
            </span>
          </div>

          <div id="right__chat" class="message received">
            <span id="random">
              <p>
                I am lucky enough to join the Bolster Buddy program by the
                Bolster Foundation. I got chances to share my ambitions with
                mentors who are currently guiding me to nurture my dreams.
                Interactions with the mentor gave me a picture of how I should
                plan my career.
              </p>
            </span>
            <span class="metadata">
              <span class="times">
                <h6>Fidha on Bolster Buddy </h6>
              </span>
            </span>
          </div>

          <div class="message received">
            <span id="random">
              <p>
                I wanted to explore the world beyond the limits of classrooms
                and family spaces. The Bolster Monsoon Camp was rich with many
                pleasant memories when I talked with people from faraway places.
                Their experience enriched my knowledge in any respect. The
                noteworthy moment was the game section, where we played old
                games in virtual mode. Thanks to Bolster, I got all those
                memories.{" "}
              </p>
            </span>
            <span class="metadata">
              <span class="times">
                <h6>Zenha, on Camp</h6>
              </span>
            </span>
          </div>

          <div id="right__chat" class="message received">
            <span id="random">
              <p>
                After high school, I was looking for someone who could tell me
                about my planning career. A friend of mine from my school
                connected with me the Bolster team, who guide girl students on
                panning career. As they suggested, I appeared for a test and
                interaction with the psychologist to identify the area of
                strength and weakness. It was a novel experience, and I felt
                empowered to decide on my future.{" "}
              </p>
            </span>
            <span class="metadata">
              <span class="times">
                <h6>Ahmed, on career solutions </h6>
              </span>
            </span>
          </div>

          </div>
      </div>
      <Footer/>
    </div>
  );
}

{
  /* <div class="message sent">
                  What happened last night?
                  <span class="metadata">
                      <span class="time"></span><span class="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
                  </span>
                </div> */
}
{
  /* <div class="message received">
                  You were drunk.
                  <span class="metadata"><span class="time"></span></span>
                </div> */
}
{
  /* <div class="message sent">
                  No I wasn't.
                  <span class="metadata">
                      <span class="time"></span><span class="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
                  </span>
                </div> */
}
