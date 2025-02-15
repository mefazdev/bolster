import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import Link from "next/link";
export default function About() {
  return (
    <div>
      <div className="home__social hidden md:grid">
        <a href="https://www.facebook.com/bolsterfoundation/">
          <div className="social__circle rounded-full">
            <FacebookIcon id="social__ic" />
          </div>
        </a>

        <div className="social__circle rounded-full">
          <TwitterIcon id="social__ic" />
        </div>
        <div className="social__circle rounded-full">
          <InstagramIcon id="social__ic" />
        </div>
        <a href="https://www.youtube.com/c/BolsterFoundation">
          <div className="social__circle rounded-full">
            <YouTubeIcon id="social__ic" />
          </div>
        </a>
      </div>
      <div className="home__about lg:w-11/12 mx-auto py-24">
        <div className="home__about__head">
          <div className="home__subhead">
            <h3>About us</h3>
          </div>
        </div>
        <div className="home__about__content grid grid-cols-1 gap-5 lg:gap-10 lg:grid-cols-3">
          <div className="home__about__img"></div>
          <div className="home__about__content__right lg:col-span-2 lg:mt-4">
            <p>
              Bolster Foundation is a non-profit organization committed to
              empowering disadvantaged students in India by designing and
              supporting programs that enhance their education, skill
              development, and career aspirations.
              <br/>
              We open doors to new opportunities through career mentoring, counseling, motivation, and training in modern languages and information & communication technology. Beyond individual growth, we collaborate with local educational institutions to reform curricula, teaching methods, and infrastructure, ensuring a holistic learning environment.
 
            </p>
            <Link href="/About" passHref>
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
