import Image from "next/image";
import Programmes from "../components/Programmes";
import Navbar from "../components/Navbar";
import MainBanner from "../components/MainBanner";
import CloseIcon from "@mui/icons-material/Close";
import Involve from "../components/Involve";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Blogs from "../components/Blogs";
import Link from "next/link";
import Slider from "../components/Slider";
import SocialEmbed from "../components/SocialEmbed";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import Head from "next/head";
export default function Home() {
  const [open, setOpen] = useState(false);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const controlOpen = async () => {
    await timeout(2000);
    setOpen(true);
  };
  useEffect(() => {
    // controlOpen();
  }, []);
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
      <Navbar />

      <main className="home " style={{scrollBehavior:'smooth'}}>
        <MainBanner />
        <div className="home__social">
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
        <div className="home__about">
          <div className="home__about__head">
            <div className="home__subhead">
              <h3>About us</h3>
            </div>
          </div>
          <div className="home__about__content grid grid-cols-1 gap-5 lg:gap-10 lg:grid-cols-3">
            <div className="home__about__img"></div>
            <div className="home__about__content__right lg:col-span-2">
              <p>
              Bolster Foundation is a non-profiteering organization founded by modern educated youngsters
from the traditional Madrasa background. We help disadvantaged minority students in India
design and support programs for their quality education, skill development, and career
endeavors. We show them the world of opportunities by providing career mentoring, counseling,
motivation, training in modern languages, and information and communication technology. In
addition, the bolster foundation collaborates with local Madrasas and educational institutions to
reform their curriculum, method of teaching, and infrastructure settings. 
{/* We work to enable
students from backward sections to have the skill to do higher studies, start a business, engage
with the modern world and lead their community. Our goal is to empower the deprived sections
of society by developing young leaders. */}
              </p>
              <Link href="/About">
                <button>Read More</button>
              </Link>
            </div>
          </div>
        </div>

        <Programmes />

        <Involve />

        {/* <Partners /> */}
        <Slider />

        {/* <Blogs /> */}
        <SocialEmbed />
      </main>

      <Footer />
      <Modal
        id="modal"
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal">
          <div className="modal__head">
            <CloseIcon id="close__icon" onClick={() => setOpen(false)} />
          </div>
          <div className="modal__footer">
            <h3>Bolster Summer Camp</h3>
            <div className="modal__footer__div">
              <a href="https://docs.google.com/forms/d/1pozjGK8Nc8l3mpCdsFkN8SlvL6LcVm6FaOi4jkba-ws/edit?pli=1">
                <button>REGISTER NOW</button>
                
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
