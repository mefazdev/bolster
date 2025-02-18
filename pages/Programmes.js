import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Programmes() {
  const docs = [
    {
      name: "Bolster Girls Campus",
      image: "/assets/images/campus.jpg",
      link: "https://www.bolstercampus.in/",
      linkType: "a",
    },
    {
      name: "Bolster Buddy",
      image: "/assets/images/buddy.jpg",
      link: "/Buddy",
    },
    {
      name: "Bolster Career Solutions",
      image: "/assets/images/career.jpg",
      link: "/Career",
    },
    { name: "Me Time", image: "/assets/images/me-time.jpg", link: "/MeTime" },
    {
      name: "Bolster Skilling",
      image: "/assets/images/skill.jpg",
      link: "/Skilling",
    },
    {
      name: "Bolster Summer Camp",
      image: "/assets/images/camp.jpeg",
      link: "/Cariculum",
    },
  ];
  return (
    <div className="">
      <Navbar />

      <div className="pb-32 pt-20 lg:pt-0" style={{ scrollBehavior: "smooth" }}>
        <div className="programmes__main ">
          <div className="about__main__head rounded">
            <h1>Programmes</h1>
          </div>
        </div>
       {/* <div className="pt-32">
       <div className="relative h-[500px]  ">
                    <Image
                      src={'/assets/images/pg-bg.jpg'}
                      className="object-cover object-top"
                      layout="fill"
                      alt=""
                    />
                  
                  <div className=" w-full pb-14  bottom-0 absolute flex justify-center">
                  <h1 className="text-3xl font-semibold text-white">Programmes</h1>
                  </div>
                  </div>
       </div> */}


        <div className="programmes__content">
          {/* <div className="do__sub">
            <h2>Our Programmes</h2>
          </div> */}
          <div className="programmes__row grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {docs.map((d) =>
              d.linkType == "a" ? (
                <a
                data-aos="flip-up" 
                  href={d.link}
                  key={d.name}
                  className="relative h-[250px] "
                >
                  <div className="shadow-lg rounded-lg">
                    <Image
                      src={d.image}
                      className="object-cover rounded-lg"
                      layout="fill"
                      alt=""
                    />
                    <div className="programmes__caption rounded-b-lg">
                      <h3 className="ml-2">{d.name}</h3>
                    </div>
                  </div>
                </a>
              ) : (
                <Link key={d.name} href={d.link} passHref className='cursor-pointer h-[250px] w-full'>
                  <div
                  data-aos="flip-up" 
                    key={d.name}
                    className="relative h-[250px] w-full   shadow-2xl rounded-lg cursor-pointer"
                  >
                    <Image
                      src={d.image}
                      className="object-cover rounded-lg"
                      layout="fill"
                      alt=""
                    />
                    <div className="programmes__caption rounded-b-lg">
                      <h3 className="ml-2">{d.name}</h3>
                    </div>
                  </div>
                </Link>
              )
            )}

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
