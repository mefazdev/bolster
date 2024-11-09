import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
 
import Footer from "../components/Footer";
export default function Photos() {

  const docs =[
   "/assets/images/photos/img-1.jpg",
 "/assets/images/photos/img-2.jpg",
  "/assets/images/photos/img-3.jpg",
  "/assets/images/photos/img-4.jpg",
 "/assets/images/photos/img-5.jpg",
  "/assets/images/photos/img-6.jpg"
  ]
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
           
           {docs.map((img)=>(
             <div key={img} className="photo__item">
             <div className="photo__img">
               <Image src={img} alt="" />
             </div>
            
           </div>
           ))}
           
          </div>
         
        </div>
      </div>
      <Footer />
    </div>
  );
}
