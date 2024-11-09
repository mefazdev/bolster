import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Video() {
  return (
    <div>
      <Navbar />

      <div className="vidoe" style={{scrollBehavior:'smooth'}}>
        <div className="blogs__main">
          <div className="about__main__head">
            <h1>Video Gallery</h1>
          </div>
        </div>

        <div className="photo__content">
          <div className="video__row  gap-5 grid lg:grid-cols-3">
            <iframe
              src="https://www.youtube.com/embed/870oiV_Mzy0"
              title="YouTube video player"
             
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/0tT-KlHZ-6c"
              title="YouTube video player"
            
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/Iu6RV8foYjM"
              title="YouTube video player"
           
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video__row gap-5 grid lg:grid-cols-3">
            <iframe
              src="https://www.youtube.com/embed/0tT-KlHZ-6c"
              title="YouTube video player"
             
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/Iu6RV8foYjM"
              title="YouTube video player"
            
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/870oiV_Mzy0"
              title="YouTube video player"
           
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video__row gap-5 grid lg:grid-cols-3">
            <iframe
              src="https://www.youtube.com/embed/Iu6RV8foYjM"
              title="YouTube video player"
           
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/870oiV_Mzy0"
              title="YouTube video player"
           
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/0tT-KlHZ-6c"
              title="YouTube video player"
              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
