import React from "react";
import part from "../assets/images/s.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
export default function Partners() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
    <div className="partners ">
      <div className="partners__content">
        <h2>Our Partners</h2>
        <div className="partners__row">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            transitionDuration={1000}
            customTransition={"ease 2000ms"}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            <div className="partner__item">
              <div className="partner__img">
                <Image src={part} alt=""/>
              </div>
            </div>
            <div className="partner__item">
              <div className="partner__img">
                <Image src={part} alt=""/>
              </div>
            </div>
            <div className="partner__item">
              <div className="partner__img">
                <Image src={part} alt=""/>
              </div>
            </div>
            <div className="partner__item">
              <div className="partner__img">
                <Image src={part} alt=""/>
              </div>
            </div>
            <div className="partner__item">
              <div className="partner__img">
                <Image src={part} alt=""/>
              </div>
            </div>
            <div className="partner__item">
              <div className="partner__img">
                <Image src={part} alt=""/>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
