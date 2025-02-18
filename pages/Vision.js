import React from "react";
import Navbar from "../components/Navbar";

import AboutBar from "../components/AboutBar";

import Footer from "../components/Footer";
import Image from "next/image";
export default function Vision() {
  return (
    <div>
      <Navbar />
      <div className="vision " style={{ scrollBehavior: "smooth" }}>
        <div className="about__main">
          <div className="about__main__head">
            <h1>Vison & Mission</h1>
          </div>
          {/* We bolster you! */}
        </div>

        <div  className="vision__content grid grid-cols-1  lg:grid-cols-3 pt-10 pb-32">
          <div className="lg:col-span-2 gap-10 grid grid-cols-1">
            {/* <div className="vision__img">
              <div className="vision__sub">
                <h2>Vision</h2>
              </div>
              <div className="vision__row">
                <p>
                  To develop the most effective method to spread education among
                  deprived groups.{" "}
                </p>
              </div>
            </div> */}
            <div data-aos="flip-up"  className="relative h-[350px] w-full   shadow-2xl rounded-lg cursor-pointer">
              <Image
                src={"/assets/images/vision.jpg"}
                className="object-cover rounded-"
                layout="fill"
                alt=""
              />
              <div className="vision__sub top-0 absolute py-2 px-6 ">
                <h2>Vision</h2>
              </div>
              <div className="vision__row">
                <p>
                  To develop the most effective method to spread education among
                  deprived groups.{" "}
                </p>
              </div>
            </div>

            <div data-aos="flip-up"  className="relative h-[350px] w-full   shadow-2xl rounded-lg cursor-pointer">
              <Image
                src={"/assets/images/mision.jpg"}
                className="object-cover rounded-"
                layout="fill"
                alt=""
              />
              <div className="vision__sub top-0 absolute py-2 px-6 ">
                <h2>Mission</h2>
              </div>
              <div className="vision__row">
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
