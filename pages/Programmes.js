import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Programmes() {
  return (
    <div className="">
      <Navbar />

      <div className="programmes pb-32" style={{scrollBehavior:'smooth'}}>
        <div className="programmes__main">
          <div className="about__main__head">
            <h1>Programmes</h1>
          </div>
        </div>

        <div className="programmes__content">
          {/* <div className="do__sub">
            <h2>Our Programmes</h2>
          </div> */}
          <div className="programmes__row grid gap-6 lg:grid-cols-3">
            <a href="https://www.bolstercampus.in/">
              <div className="programmes__item__one rounded shadow-md cursor-pointer hover:-translate-y-1 transition ease-linear duration-200 hover:scale-105">
                <div className="programmes__caption">
                  <h3 className="ml-2">Bolster Girls Campus</h3>
                </div>
              </div>
            </a>

            <Link href="/Buddy">
              <div className="programmes__item__two rounded shadow-md cursor-pointer hover:-translate-y-1 transition ease-linear duration-200 hover:scale-105">
                <div className="programmes__caption">
                  <h3 className="ml-2">Bolster Buddy</h3>
                </div>
              </div>
            </Link>
            <Link href="/Career">
              <div className="programmes__item__three rounded shadow-md cursor-pointer hover:-translate-y-1 transition ease-linear duration-200 hover:scale-105">
                <div className="programmes__caption">
                  <h3 className="ml-2">Bolster Career Solutions</h3>
                </div>
              </div>
            </Link>
          
            <Link href="/MeTime">
              <div className="programmes__item__four rounded shadow-md cursor-pointer hover:-translate-y-1 transition ease-linear duration-200 hover:scale-105">
                <div className="programmes__caption">
                  <h3 className="ml-2">Me Time</h3>
                </div>
              </div>
            </Link>

            <Link href="/Skilling">
              <div className="programmes__item__five rounded shadow-md cursor-pointer hover:-translate-y-1 transition ease-linear duration-200 hover:scale-105">
                <div className="programmes__caption">
                  <h3 className="ml-2">Bolster Skilling</h3>
                </div>
              </div>
            </Link>

           
          
            <Link href="/Cariculum">
              <div className="programmes__item__seven">
                <div className="programmes__caption">
                  <h3 className="ml-2">Bolster Summer Camp</h3>
                </div>
              </div>
            </Link>  

            {/* <div className='programmes__item__eight'>
         <div className='programmes__caption'>
         <h3>Bolster Girls Campus</h3>
         </div>
         </div>  */}
            {/* <div className='programmes__item__six'>
         <div className='programmes__caption'>
         <h3>Madrassa Development</h3>
         </div>
         </div>  */}
            {/* <div className='programmes__item__seven'>
         <div className='programmes__caption'>
         <h3>Curriculum Development Assistance</h3>
         </div>
         </div>  */}
            {/* <div className='programmes__item__eight'>
         <div className='programmes__caption'>
         <h3>Bolster Girls Campus</h3>
         </div>
         </div>  */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
