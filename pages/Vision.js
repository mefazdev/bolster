import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import AboutBar from "../components/AboutBar";
import mision from "../assets/images/mision.jpg";
import vison from "../assets/images/vision.jpg";
import Footer from "../components/Footer";
export default function Vision() {
  return (
    <div>
      <Navbar />
      <div className="vision" style={{scrollBehavior:'smooth'}}>
        <div className="about__main">
          <div className="about__main__head">
            <h1>Vison & Mission</h1>
          </div>
          {/* We bolster you! */}
        </div>

        <div className="vision__content grid grid-cols-1  lg:grid-cols-3">
          <div className="lg:col-span-2 grid grid-cols-1">
            <div className="vision__img">
              <div className="vision__sub">
                <h2>Vision</h2>
              </div>
              <div className="vision__row">
                <p>
                  To develop the most effective method to spread education among
                  deprived groups.{" "}
                </p>
              </div>
            </div>
            <div className="mision__img">
              <div className="vision__sub">
                <h2>Mission</h2>
              </div>
              <div className="vision__row" id="mission__row">
                <p>
                  To facilitate a platform for all like-minded people to work on
                  innovative projects for educating the minority community.
                </p>
              </div>
            </div>
          </div>
          <div>
            <AboutBar />
          </div>
        </div>
        <div></div>
      </div>

      <Footer />
    </div>
  );
}
