import Image from "next/image";
import Link from "next/link";
import Carousel from "react-material-ui-carousel";
import MenuIcon from "@mui/icons-material/Menu";
export default function MainBanner() {
  return (
    <div>
 <Carousel
        autoPlay={true}
        interval={4000}
        //   duration={2000}
        swipe={true}
        indicators={false}
        animation="slide"
        stopAutoPlayOnHover={false}
      >
        <div className="main__banner__four">
          <div className="main__banner__div">
            <svg id="main__svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="name"
                  />
                  <feColorMatrix
                    in="name"
                    mode="matrix"
                    values="1 0 0 0 0
                                                       0 1 0 0 0
                                                       0 0 1 0 0
                                                       0 0 0 15 -10"
                    result="b"
                  />

                  <feBlend in="SourceGraphic" in2="b" />
                </filter>
              </defs>
            </svg>
            <div className="drop  "></div>

            <div className="main__head__div">
              <span>
                <h1>We bolster you!</h1>
              </span>
            </div>
          </div>
        </div>
        <div className="main__banner">
          <div className="main__banner__div">
            <svg id="main__svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="name"
                  />
                  <feColorMatrix
                    in="name"
                    mode="matrix"
                    values="1 0 0 0 0
                                                       0 1 0 0 0
                                                       0 0 1 0 0
                                                       0 0 0 15 -10"
                    result="b"
                  />

                  <feBlend in="SourceGraphic" in2="b" />
                </filter>
              </defs>
            </svg>
            <div className="drop  "></div>

            <div className="main__head__div">
              <span>
                <h1>We bolster you!</h1>
              </span>
            </div>
          </div>
          <div className="camp__ad">
            <h3>Bolster Summer Camp</h3>
            <div className="ad__button__div">
              <a href="https://docs.google.com/forms/d/1pozjGK8Nc8l3mpCdsFkN8SlvL6LcVm6FaOi4jkba-ws/edit?pli=1">
                <button>REGISTER NOW</button>
              </a>
            </div>
          </div>
        </div>

        <div className="main__banner__three">
          <div className="main__banner__div">
            <svg id="main__svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="name"
                  />
                  <feColorMatrix
                    in="name"
                    mode="matrix"
                    values="1 0 0 0 0
                                                       0 1 0 0 0
                                                       0 0 1 0 0
                                                       0 0 0 15 -10"
                    result="b"
                  />

                  <feBlend in="SourceGraphic" in2="b" />
                </filter>
              </defs>
            </svg>
            <div className="drop  "></div>

            <div className="main__head__div">
              <span>
                <h1>We bolster you!</h1>
              </span>
            </div>
          </div>
        </div>
      </Carousel>  
   
    </div>
  );
}
