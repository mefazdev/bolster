import React from "react";
import Navbar from "../components/Navbar";
import AboutBar from "../components/AboutBar";
import Footer from "../components/Footer";
export default function weDo() {
  return (
    <div>
      <Navbar />

      <div className="do">
        <div className="do__main">
          <div className="about__main__head">
            <h1>What we do</h1>
          </div>
        </div>

        <div className="do__content grid lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="do__box">
              <div className="do__sub">
                <h2>Our Programmes</h2>
              </div>

              <div className="do__caption">
                <p>Educational empowerment of girls enrolled in Madrasa</p>
              </div>
              <div></div>
            </div>

            <div className="do__box__two">
              <div className="do__sub">
                <h2>Our Projects</h2>
              </div>

              <div className="do__caption">
                <p>Bolster Girls Campus</p>
              </div>
              <div></div>
            </div>
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
