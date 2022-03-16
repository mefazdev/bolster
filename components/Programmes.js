import Link from "next/link";
import React from "react";

export default function Programmes() {
  return (
    <div className="h__prgm">
      <div className="h__prgm__content">
        <div className="h__prgm__content__subhead">
          <h3>Our programmes</h3>
        </div>

        <div className="prgm__content__main gap-3 lg:gap-5 grid lg:grid-cols-2">
          <div className="prgm__content__main__left">
            <div className="prgm__content__main__left__caption">
              <h3> Bolster Girls Campus </h3>
            </div>
          </div>
          <div className="prgm__content__main__right">
            <h4> Bolster Girls Campus </h4>
            <p>
              
              
               Bolster Girls Campus
              (BGC) is a residential program for girls by Bolster Foundation.
              The project is by educated youngsters bestowed to do courses in
              reputed institutions like the Indian Institute of Technology
              Kanpur, Jawaharlal Nehru University, University of Delhi, and Azim
              Premji University. BGCoffers Higher Secondary schooling in
              science, commerce, and humanities streams, regress coaching for
              different medical entrance exams, Foundation for CA/CMA,
              foundation course for UPSC, and entrance examination training for
              various universities and premier institutes. BGC does not limit
              its students to boxes of limited choices. BGC encourages them to
              seek opportunities beyond conventions. BGC&apos;s personalized learning
              approach and effective career solutions help students to
              understand their passions, skills, and areas of strengths and
              weaknesses. It is BG&apos;s promise: You will do what you love!
            </p>
            <a href="https://www.bolstercampus.in/">
              <button>Learn More</button>
            </a>
          </div>
        </div>
        <div className="prgm__content__row gap-5 grid lg:grid-cols-3">
          <Link href="/Buddy">
            <div className="prgm__content__row__box">
              <div className="prgm__row__caption">
                <h3> Bolster Buddy </h3>
              </div>
            </div>
          </Link>

          <Link href="/Career">
            <div className="prgm__content__row__box__two">
              <div className="prgm__row__caption">
                <h3>Bolster Career Solutions</h3>
              </div>
            </div>
          </Link>

          <Link href="/MeTime">
            <div className="prgm__content__row__box__three">
              <div className="prgm__row__caption">
                <h3> Me Time </h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="prgm__content__row gap-5 grid lg:grid-cols-3">
          <Link href="/Skilling">
            <div className="prgm__content__row__box__four">
              <div className="prgm__row__caption">
                <h3>Bolster Skilling</h3>
              </div>
            </div>
          </Link>

          <Link href="/Madrasa">
            <div className="prgm__content__row__box__five">
              <div className="prgm__row__caption">
                <h3>Madrassa Development</h3>
              </div>
            </div>
          </Link>

          <Link href="/Cariculum">
            <div className="prgm__content__row__box__six">
              <div className="prgm__row__caption">
                <h3> Bolster Summer Camps</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
