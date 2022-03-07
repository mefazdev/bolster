import React from "react";
import Navbar from "../components/Navbar";

export default function Buddy() {
  return (
    <div>
      <Navbar />
      <div className="buddy" style={{scrollBehavior:'smooth'}}>
        <div className="buddy__main">
          <div className="buddy__main__head">
            <h1>Bolster foundation</h1>
          </div>
        </div>

        <div className="buddy__content">
          <p>
            The foundation&apos;s bolster Buddy System (BBS) initiative enables
            students from deprived backgrounds to grab admissions to premier
            educational institutions in India and abroad. In collaborations with
            various non-governmental organizations, student collectives, and
            like-minded educationists, the program builds bondage between
            students and voluntary mentors in eminent universities and
            companies. <br />
            The program intends to build an ecosystem under which the
            marginalized students get free educational mentorship from eminent
            personalities and accomplished individuals. The program undertakes
            three steps. <br />
          </p>
          <h6>
            1. Invite professionals, academicians, and accomplished people to
            become part of the Buddy system voluntarily. They are called Big
            Buddies (bBuddy).
          </h6>
          <h6>
            2. Invite students between 15 and 20 to apply for the program. The
            girl students have a special weightage.
          </h6>
          <h6>
            3. Connect students individually to mentors according to the course
            preference of the former. For instance, a student at the higher
            secondary level who aspires to go for BTech is connected with an
            engineer or an existing student of BTech from a premier institution.
            We ensure that the student get minimum four hour mentorship in a
            month through virtual or physical sittings.
          </h6>
          <h6>
            4. Convene an annual meeting of Bolster Buddies to discuss the
            program&apos;s status.
          </h6>
        </div>
      </div>
    </div>
  );
}
