import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Programmes() {
  const docs = [
    
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
        <div className="mt-6 lg:mt-20 gap-5 grid lg:grid-cols-3">
         
         
        {docs.map((d) =>
             
                <Link key={d.name} href={d.link} passHref className='cursor-pointer h-[250px] w-full'>
                  <div
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
              
            )}
          

          
        </div>
      
      </div>
    </div>
  );
}
