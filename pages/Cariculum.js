import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Cariculum() {
  return (
    <div>
      <Navbar />
      <div className="cariculum" style={{scrollBehavior:'smooth'}}>
        <div className="cariculum__main">
          <div className="about__main__head">
            <h1>Bolster Summer Camps </h1>
          </div>
        </div>

        <div className="cariculum__content">
          <p>
            Bolster foundation conducts public residential camps every year for
            adolescent Muslim girls. Last year, we held a 6 day long virtual
            monsoon camp (delayed from summer to monsoon due to uncertainties of
            the pandemic) with the participation of 50 students, primarily from
            a very traditional Muslim background. The program was packed with
            events attractive and beneficial, to teenagers. Along with fun and
            entertainment, we provided extensive guidance on how to plan their
            career amid the number of uncertainties they face.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScZUOZOCWbbri_8Kd_xfTZizVPJAUG1soCbouvUhJSP4fX85Q/viewform?usp=pp_url">
            <button>REGISTER NOW</button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
