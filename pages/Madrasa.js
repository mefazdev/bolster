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
          Madrasas are a traditional educational system in Muslim societies across the world. They were instrumental in educating a large number of people at minimum expenditure. They would provide learning in all essential fields, including geography, mathematics, science, astronomy, and theology. However, they failed to rise to the requirement of the time. They lagged behind the modern educational system in imparting new forms of learning. Whereas an insane number of Muslims still resort to Madrasas as the sole educational mean, their level of teaching is below standard. Govt. sources, including the Sachar Commission, have again called for the reformation of Madrasa systems to empower the minority religion in India. Bolster was involved in reforming the Madrasa curriculum.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
