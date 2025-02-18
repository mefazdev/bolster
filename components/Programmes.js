import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Programmes() {
  // const docs = [
  //   {
  //     name: "Bolster Buddy",
  //     image: "/assets/images/buddy.jpg",
  //     link: "/Buddy",
  //   },
  //   {
  //     name: "Bolster Career Solutions",
  //     image: "/assets/images/career.jpg",
  //     link: "/Career",
  //   },
  //   { name: "Me Time", image: "/assets/images/me-time.jpg", link: "/MeTime" },
  //   {
  //     name: "Bolster Skilling",
  //     image: "/assets/images/skill.jpg",
  //     link: "/Skilling",
  //   },
  //   {
  //     name: "Bolster Summer Camp",
  //     image: "/assets/images/camp.jpeg",
  //     link: "/Cariculum",
  //   },
  // ];
  const data = [
    {
      name: "Bolster Buddy",

      description:
        "The foundation's bolster Buddy System (BBS) initiative enables students from deprived backgrounds to grab admissions to premier educational institutions in India and abroad.",
      image: "/assets/images/buddy.jpg",
      link: "/Buddy",
    },
    {
      name: "Bolster Career Solutions",
      image: "/assets/images/career.jpg",
      link: "/Career",
      description:
        "Since 2018 Bolster Career Solutions supported over 100 talented, motivated students to define motivating career paths and goals. ",
    },
    {
      name: "Me Time",
      image: "/assets/images/me-time.jpg",
      link: "/MeTime",
      description:
        "Me Time' is the conscious effort of taking (much needed) time-out to recharge your batteries. 'Me time' can be spent in various ways and vary from person to person.",
    },
    {
      name: "Bolster Skilling",
      image: "/assets/images/skill.jpg",
      link: "/Skilling",
      description:
        "Bolster Foundation understands that we need an approach characterized by big picture thinking, fostering imagination and inquiry, and building grit through social-emotional learning and cultivating resilience.",
    },
    {
      name: "Bolster Summer Camp",
      image: "/assets/images/camp.jpeg",
      link: "/Camp",
      description:
        "The program was packed with events attractive and beneficial to teenagers. Along with fun and entertainment, we provided extensive guidance on how to plan their career amid the number of uncertainties they face.",
    },
  ];
  return (
    <div className="h__prgm py-20">
      <div className="h__prgm__content mx-auto">
        <div className="h__prgm__content__subhead">
          <h3>Our programmes</h3>
        </div>

        <div data-aos="zoom-in"  className="prgm__content__main gap-3 lg:gap-5 grid lg:grid-cols-2">
          <div className="prgm__content__main__left">
            <div className="prgm__content__main__left__caption">
              <h3> Bolster Girls Campus </h3>
            </div>
          </div>
          <div className="prgm__content__main__right">
            <h4> Bolster Girls Campus </h4>
            <p className="hidden lg:grid">
              Bolster Girls Campus (BGC) is the flagship initiative of Bolster
              Foundation, dedicated to empowering young women through quality
              education and holistic personal development. This residential
              higher secondary program is designed exclusively for girls,
              providing them with a nurturing and academically rigorous
              environment to excel in their studies and prepare for future
              careers.
              <br />
              BGC offers Higher Secondary education in science, equipping
              students with a strong academic foundation and practical skills
              essential for higher education and professional success. The
              program is led by a team of highly educated young mentors, many of
              whom have pursued advanced studies at premier institutions,
              ensuring high-quality guidance and inspiration for the students.
              <br />
              With a personalized learning approach, BGC helps students identify
              their passions, develop critical skills, and recognize their
              strengths and areas for growth. Beyond academics, the program
              focuses on career mentorship, leadership development, and exposure
              to modern educational tools and opportunities, enabling students
              to pursue higher education, thrive in competitive fields, and
              become future leaders in their communities.
            </p>
            <p className="lg:hidden">
              Bolster Girls Campus (BGC) is the flagship initiative of Bolster
              Foundation, dedicated to empowering young women through quality
              education and holistic personal development. This residential
              higher secondary program is designed exclusively for girls,
              providing them with a nurturing and academically rigorous
              environment to excel in their studies and prepare for future
              careers.
             
            </p>
            <a href="https://www.bolstercampus.in/">
              <button>Learn More</button>
            </a>
          </div>
        </div>
        <div className="mt-6 lg:mt-20 gap-5 grid lg:grid-cols-3">
          {/* {docs.map((d) => (
            <Link
              key={d.name}
              href={d.link}
              passHref
              className="cursor-pointer shadow-md h-[250px] w-full"
            >
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
          ))} */}

          {data?.map((d, i) => {
            return (
              <div data-aos="fade-up" 
                key={i}
                className="p-3 lg:p-4 bg-white   m-auto lg:w-11/12   shadow-lg rounded-md group"
              >
                <div
                  className="w-full h-60 rounded-md relative"
                  style={{
                    backgroundImage: `url(${d.image})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div
                    style={{ background: "rgba(0, 0, 0, 0.68)" }}
                    className="h-full flex items-center invisible group-hover:visible rounded-md px-4 text-md  "
                  >
                    <div className="">
                      <p className="text-white  -ml-3 transition ease-in  duration-300   group-hover:translate-x-2  ">
                        {d.description}{" "}
                      </p>

                      <Link href={d.link} passHref>
                        <button className="   bg-[#C9CA76] p-1 px-3 rounded   text-sm w-fit mt-8 transition ease-in  duration-300   group-hover:-translate-y-6">
                          More Info
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex justify-between">
                  <h4 className="text-lg font-semibold">{d.name} </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
