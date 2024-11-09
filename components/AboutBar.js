import React from "react";
import Link from "next/link";
export default function AboutBar() {
  return (
    <div className="about__bar">
      <Link href="/About" passHref>
        <div className="about__bar__row">
          <h6>About Bolster</h6>
        </div>
      </Link>

      <Link href="/Vision" passHref>
        <div className="about__bar__row">
          <h6>Vision, Mission and Values</h6>
        </div>
      </Link>

      <Link href="/We" passHref>
        <div className="about__bar__row">
          <h6>Who we are</h6>
        </div>
      </Link>

      <div className="about__bar__row">
        <h6>Milestones</h6>
      </div>
      <div className="about__bar__row">
        <h6>Testimonial</h6>
      </div>
      <div className="about__bar__row">
        <h6>Award & Recognitions</h6>
      </div>
      <div className="about__bar__row" id="last__row">
        <h6>Our Partners</h6>
      </div>
    </div>
  );
}
