import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Madrasa() {
  return (
    <div>
      <Navbar />
      <div className="madrasa" style={{scrollBehavior:'smooth'}}>
        <div className="madrasa__main">
          <div className="about__main__head">
            <h1>Madrasa development</h1>
          </div>
        </div>

        <div className="madrasa__content">
          <p>
            Madrasas are traditional educational system in Muslim societies
            across the world. They were instrumental in educating a large number
            of people at minimum expenditure. They would provide learning in all
            essential fields including geography, mathematics, science,
            astronomy and theology. However, they failed to raise to the
            requirement of the time and lagged behind the modern educational
            system in imparting new forms of learning. Whereas insane number of
            Muslims still resort to Madrasas as the sole educational mean, their
            level teaching are below standard. Govt. sources including the
            Sachar Commission has time again called for reformation of Madrasa
            systems to empower the minority religious in India. Bolster involves
            in reforming the Madrasa curriculum.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
