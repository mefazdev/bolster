import Image from "next/image";
import React, { useState } from "react";
import CountUp from "react-countup";
import Carousel from "react-multi-carousel";
import VisibilitySensor from "react-visibility-sensor";
import "react-multi-carousel/lib/styles.css";
export default function Status() {
  const [didViewCountUp, setState] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setState({ didViewCountUp: true });
    }
  };

  const numbers = [
    {
      item: "International \n Admissions",
      count: 17,
      mesearment: "",
    },
    {
      item: "International Scholarships",
      count: 9,
      mesearment: "",
    },
    {
      item: "Distinction",
      count: 90,
      mesearment: "%",
    },
    {
      item: "Success",
      count: 100,
      mesearment: "%",
    },
    {
      item: "National University Admissions",
      count: 8,
      mesearment: "",
    },
    {
      item: "National & International Awards",
      count: 2,
      mesearment: "",
    },
  ];

  const logos = [
    {
      src: "/assets/images/logos/1.png",
      height: 70,
      width: 70,
    },
    {
      src: "/assets/images/logos/2.jpeg",
      height: 75,
      width: 70,
    },
    {
      src: "/assets/images/logos/3.png",
      height: 40,
      width: 140,
    },
    {
      src: "/assets/images/logos/4.png",
      height: 60,
      width: 130,
    },
    {
      src: "/assets/images/logos/5.png",
      height: 70,
      width: 70,
    },
    {
      src: "/assets/images/logos/7.jpg",
      height: 40,
      width: 130,
    },
    {
      src: "/assets/images/logos/8.png",
      height: 90,
      width: 130,
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div>
      <div 
        className="relative w-full  overflow-auto bg-cover bg-center  py-10 lg:py-16 "
        style={{
          backgroundImage: 'url("/assets/images/scroll-2.jpg")',

          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="status-bg absolute inset-0 z-10  bg-opacity-90"></div>
<div data-aos="fade-up" className="relative z-50"><div  className="px-4 lg:px-0 lg:w-11/12   mx-auto  relative opacity-100 z-20 ">
          <h5 className="text-xl md:text-4xl font-semibold text-white text-center shadow shadow-gray-200 rounded-full w-fit mx-auto p-2 md:p-4 px-3 lg:px-6">
            Bolster Impact: Dreams to Destinations
          </h5>
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 mt-10 md:mt-16 lg:gap-0 gap-10">
            {numbers.map((number) => (
              <div
                key={number.item}
                className="text-white z-50 text-center borde"
              >
                <VisibilitySensor
                  scrollCheck={true}
                  onChange={onVisibilityChange}
                  delayedCall
                >
                  <h3 className="text-4xl md:text-5xl font-semibold">
                    <CountUp
                      start={0}
                      end={didViewCountUp ? number.count : 0}
                      duration={3}
                    />
                    {number.mesearment}
                  </h3>
                </VisibilitySensor>

                <p className="md:text-xl mt-2 whitespace-pre-line">
                  {number.item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div   className="mt-20 z-20 relative lg:w-11/12 mx-auto px-4 lg:px-0">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            transitionDuration={2000}
            customTransition={"ease 2000ms"}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            {logos.map((logo) => (
              <div
                key={logo.src}
                className="bg-white h-24 flex justify-center items-center m-1 md:m-2 rounded-md"
              >
                <div className="">
                  <Image
                    src={logo.src}
                    alt=""
                    height={logo.height}
                    width={logo.width}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div></div>
        
      </div>{" "}
    </div>
  );
}
