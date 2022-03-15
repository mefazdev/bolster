import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MeTime() {
  return (
    <div>
      <Navbar />
      <div className="me" style={{scrollBehavior:'smooth'}}>
        <div className="me__main">
          <div className="about__main__head">
            <h1>Me time</h1>
          </div>
        </div>

        <div className="me__content">
          <p>
            {" "}
            &apos;Me Time&apos; is the conscious effort of taking (much needed) time-out to recharge your batteries. 'Me time' can be spent in various ways and vary from person to person. It can be achieved in different ways. Essentially, as long as you're alone with your thoughts and undertaking mindfulness during any activity, you're successfully spending some quality ME time. With the help of experts from different fields, Bolster foundation facilitates 'Me time' in Bolster Girls Campus.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
