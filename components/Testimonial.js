import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";

export default function Testimonial() {
  const docs = [
    {
      name: "Diya Fathima MN",
      title: "Türkiye Burslari Scholarship 2023",
      content:
        "My journey from Bolster to receive prestigious Turkey Govt. Scholarship has been nothing short of transformative. It's a testament to the unwavering guidance and support of the Bolster Community.",
      image: "/assets/images/testimonial/diya-1.jpg",

      logos: [
        { src: "/assets/images/logos/6.png", height: 35, width: 90 },

        {
          src: "/assets/images/testimonial/logos/3.png",
          height: 35,
          width: 150,
        },
        {
          src: "/assets/images/testimonial/logos/2.jpg",
          height: 35,
          width: 150,
        },
      ],
    },
    {
      name: "Fathima Afiya",
      title: "Bachelors, University of Birmingham, 2024",
      content: `My admission to the Bachelor's program at the University of
Birmingham in 2024 is a direct result of the incredible support and
education I received at Bolster Girls Campus. It is because of Bolster
that I am equipped with the knowledge and skills to pursue my
dreams and achieve success.`,
      image: "/assets/images/testimonial/afiya.jpg",
      logos: [
        {
          src: "/assets/images/testimonial/logos/3.png",
          height: 35,
          width: 150,
        },
        {
          src: "/assets/images/testimonial/logos/2.jpg",
          height: 35,
          width: 150,
        },
      ],
    },
    {
      name: "Fathima Sanha",
      title: "IIT Palakkad, Science Quest 2023",
      content: `Thanks to Bolster Girls Campus, I've been selected for the Science Quest
2023 workshop by IIT Palakkad. Their support has been invaluable in
helping me reach this mileston`,
      image: "/assets/images/testimonial/sanha.jpg",

      logos: [
        {
          src: "/assets/images/testimonial/logos/4.jpg",
          height: 70,
          width: 70,
        },

        {
          src: "/assets/images/testimonial/logos/3.png",
          height: 35,
          width: 150,
        },
        {
          src: "/assets/images/testimonial/logos/5.png",
          height: 40,
          width: 130,
        },
      ],
    },
    {
      name: "Fida Fathima",
      title: "Bachelors, University of Leicester",
      content: `With immense gratitude to Bolster Girls Campus for their
unparalleled training and support, I've clinched a prestigious spot in
the Bachelor's program at the University of Leicester. Their dedication
has been the cornerstone of my success.`,
      image: "/assets/images/testimonial/fida.jpg",
      logos: [
        {
          src: "/assets/images/testimonial/logos/3.png",
          height: 35,
          width: 150,
        },
        {
          src: "/assets/images/testimonial/logos/5.png",
          height: 40,
          width: 130,
        },
      ],
    },
    {
      name: "Nuha Khadeeja",
      title: "Emirates Aviation University, 2024",
      content: `Securing admission to Emirates Aviation University in 2024 marks a
significant milestone in my journey, and I owe immense gratitude to Bolster
Foundation for their invaluable guidance and support`,
      image: "/assets/images/testimonial/nuha.jpg",

      logos: [
        {
          src: "/assets/images/testimonial/logos/6.png",
          height: 35,
          width: 150,
        },

        {
          src: "/assets/images/testimonial/logos/3.png",
          height: 35,
          width: 150,
        },
        {
          src: "/assets/images/testimonial/logos/7.png",
          height: 30,
          width: 160,
        },
      ],
    },
    {
      name: "Minnah Fathima",
      title: "Miami University, 2024",
      content: `My admission to Miami University in 2024 is a testament to the
invaluable support and guidance provided by Bolster Foundation.
Their dedication to nurturing my potential has prepared me for this
exciting journey ahead.`,
      image: "/assets/images/testimonial/minha.jpg",
      logos: [
        {
          src: "/assets/images/testimonial/logos/3.png",
          height: 35,
          width: 150,
        },
        {
          src: "/assets/images/testimonial/logos/7.png",
          height: 30,
          width: 160,
        },
      ],
    },
    {
      name: "Haya Fathima",
      title: "International Islamic University, 2024",
      content: `Deeply grateful to Bolster for their unwavering support and guidance,
which played a crucial role in securing my admission to the IT program at
the International Islamic University, 2024.`,
      image: "/assets/images/testimonial/haya.jpg",
      logos: [
        {
          src: "/assets/images/testimonial/logos/8.png",
          height: 50,
          width: 50,
        },
        {
          src: "/assets/images/testimonial/logos/3.png",
          height: 35,
          width: 150,
        },
        {
          src: "/assets/images/testimonial/logos/9.png",
          height: 35,
          width: 150,
        },
      ],
    },
    {
      name: "Fiba Febina",
      title: "University of Stirling, 2024",
      content: `Thankful to Bolster for their exceptional support and guidance,
which helped me secure admission to the Data Science program at
the University of Stirling.`,
      image: "/assets/images/testimonial/fiba.jpg",
      logos: [
        {
          src: "/assets/images/testimonial/logos/3.png",
          height: 35,
          width: 150,
        },
        {
          src: "/assets/images/testimonial/logos/9.png",
          height: 35,
          width: 150,
        },
      ],
    },
  ];
  return (
    <div data-aos="fade-up" className="py-10 md:py-16">
      <div className="px-4 lg:px-0 lg:w-9/12 mx-auto">
       <Carousel
              autoPlay={true}
              interval={4000}
              //   duration={2000}
              swipe={true}
              indicators={true}
              animation="fade"
              stopAutoPlayOnHover={true}
             className="ease-linear duration-200 transition-all "
              
            >
              {docs.map((doc) => (
          <div key={doc.name} className="lg:flex gap-10 items-center ">
            <div className="relative h-[150px] w-[150px] md:h-[200px] md:w-[200px] mx-auto lg:min-h-[200px] lg:min-w-[200px] rounded-full overflow-hidden">
              <Image
                src={doc.image}
                layout="fill"
                className="object-cover rounded-full"
              />
            </div>
            <div className="mt-6 lg:mt-0">
              <div>
                <h6 className="font-bold text-xl">{doc.name}</h6>
                <p className=" text-gray-600">{doc.title}</p>
                <p className="mt-3 italic">{doc.content}</p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 ">
                {doc?.logos?.map((logo) => (
                  <div
                    key={logo.src}
                    // className={`relative h-[${logo.height}px] w-[${logo.width}px]`}
                  >
                    <Image
                      src={logo?.src}
                      height={logo.height}
                      width={logo.width}
                      //   layout="fill"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
            </Carousel>  
       
      </div>
    </div>
  );
}
