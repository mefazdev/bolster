import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import img1 from "../assets/images/photos/img-1.jpg";
import img2 from "../assets/images/photos/img-2.jpg";
import img3 from "../assets/images/photos/img-3.jpg";
import img4 from "../assets/images/photos/img-4.jpg";
import img5 from "../assets/images/photos/img-5.jpg";
import img6 from "../assets/images/photos/img-6.jpg";
import Footer from "../components/Footer";
export default function Photos() {
  return (
    <div>
      <Navbar />

      <div className="photos" style={{scrollBehavior:'smooth'}}>
        <div className="blogs__main">
          <div className="about__main__head">
            <h1>Photo Gallery</h1>
          </div>
        </div>

        <div className="photo__content">
          <div className="photo__row gap-5 grid md:grid-cols-2 lg:grid-cols-4">
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img1} />
              </div>
              <div className="photo__item__capt"></div>
            </div>
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img4} />
              </div>
            </div>
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img2} />
              </div>
            </div>
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img3} />
              </div>
            </div>
          </div>
          <div className="photo__row gap-5 grid md:grid-cols-2 lg:grid-cols-4">
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img5} />
              </div>
              <div className="photo__item__capt"></div>
            </div>
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img6} />
              </div>
            </div>
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img5} />
              </div>
            </div>
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img6} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
