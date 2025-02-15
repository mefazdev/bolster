import React from "react";
import Carousel from "react-material-ui-carousel";
export default function Slider() {
  return (
    <div className="slider ">
      <Carousel
        autoPlay={true}
        interval={3000}
        //   duration={2000}
        swipe={true}
        indicators={false}
        animation="slide"
        stopAutoPlayOnHover={false}
      >
        <div className="slider__item__one">
        <h5>Our approach</h5>
          <div className="slider__content">
            
            <div className="slider__main">
              <h3>EDUCATE</h3>
            </div>
          </div>
        </div>
        <div className="slider__item__two ">
        <h5>Our approach</h5>
          <div className="slider__content">
            
            <div className="slider__main">
              {" "}
              <h3>EMPOWER</h3>
            </div>
          </div>
        </div>
        <div className="slider__item__three">
        <h5>Our approach</h5>
          <div className="slider__content">
            
            <div className="slider__main">
              <h3>Change</h3>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
