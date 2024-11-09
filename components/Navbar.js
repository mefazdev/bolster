import Image from "next/image";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Navbar() {
  const router = useRouter();

  const [collapse, setCollapse] = useState(false);
  const [about, setAbout] = useState(false);
  const [media, setMedia] = useState(false);
  const [social, setSocial] = useState(false);
  const [weDo, setWeDo] = useState(false);

  const changeNavBar = () => {
    if (window.scrollY >= 8) {
      setCollapse(false);
    }
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", changeNavBar);
  // });
  const controlAbout = () => {
    setAbout(!about);
  };

  const controlMedia = () => {
    setMedia(!media);
  };
  return (
    <div className="navbar">
      <div className="nav__content ">
        <div className="nav__container flex">
          <div style={{ cursor: "pointer" }}>
            <Link href="/" passHref>
              <div className="relative   h-[40px] w-[110px] lg:h-[70px] lg:w-[170px]">
                <Image
                  src={"/assets/images/log-text.png"}
                  priority={true}
                  className="object-cover"
                  layout="fill"
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div className="nav__item__row flex">
            <span className="flex nav__item__span group cursor-pointer  ">
              <h6>About us</h6>
              <ArrowDropDownIcon id="nav__icon " />
              <ul className="dropdown-menu absolute hidden   group-hover:block  ">
                <span className="development__head cursor-pointer group">
                  <Link href="/About" passHref>
                    <div
                      className={
                        router.pathname == "/About"
                          ? "active__dropdown py-2"
                          : "service__group__span py-2"
                      }
                    >
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        <p
                          className={
                            router.pathname == "/About"
                              ? "active__dropdown"
                              : ""
                          }
                        >
                          {" "}
                          Bolster Foundation{" "}
                        </p>
                      </li>
                    </div>
                  </Link>
                  <Link href="/Vision" passHref>
                    <div
                      className={
                        router.pathname == "/Vision"
                          ? "active__dropdown py-2"
                          : "service__group__span py-2"
                      }
                    >
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        Vision, Mission & Values
                      </li>
                    </div>
                  </Link>

                  <Link href="/We" passHref>
                    <div
                      className={
                        router.pathname == "/We"
                          ? "active__dropdown py-2"
                          : "service__group__span py-2"
                      }
                    >
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        Who we are
                      </li>
                    </div>
                  </Link>

                  <div
                    className={
                      router.pathname == "/Milestone"
                        ? "active__dropdown py-2"
                        : "service__group__span py-2"
                    }
                  >
                    <Link href="/Milestones" passHref>
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        Milestones
                      </li>
                    </Link>
                  </div>

                  <div
                    className={
                      router.pathname == "/Testimonial"
                        ? "active__dropdown py-2"
                        : "service__group__span py-2"
                    }
                  >
                    <Link href="/Testimonial" passHref>
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        Testimonials
                      </li>
                    </Link>
                  </div>

                  <div
                    className={
                      router.pathname == "/F"
                        ? "active__dropdown py-2"
                        : "service__group__span py-2"
                    }
                  >
                    <li className=" px-4 block whitespace-no-wrap text-sm ">
                      Awards & Recognitions
                    </li>
                  </div>

                  <div
                    className={
                      router.pathname == "/Faculty"
                        ? "active__dropdown py-2"
                        : "service__group__span py-2"
                    }
                  >
                    <li className=" px-4 block whitespace-no-wrap text-sm ">
                      Our Partners
                    </li>
                  </div>
                </span>
              </ul>
            </span>

            <span className="flex nav__item__span group cursor-pointer">
              <h6>What we do</h6>
              <ArrowDropDownIcon id="nav__icon" />
              <ul className="dropdown-menu absolute hidden   group-hover:block  ">
                <span className="development__head cursor-pointer group">
                  <Link href="/Programmes" passHref>
                    <div
                      className={
                        router.pathname == "/Programmes"
                          ? "active__dropdown py-2"
                          : "service__group__span py-2"
                      }
                    >
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        Programmes
                      </li>
                    </div>
                  </Link>
                  <Link href="/Impact" passHref>
                    <div
                      className={
                        router.pathname == "/Impact"
                          ? "active__dropdown py-2"
                          : "service__group__span py-2"
                      }
                    >
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        Impact
                      </li>
                    </div>
                  </Link>
                </span>
              </ul>
            </span>

            <span className="flex nav__item__span group cursor-pointer">
              <h6>Resources</h6>
              <ArrowDropDownIcon id="nav__icon" />
              <ul className="dropdown-menu absolute hidden   group-hover:block  ">
                <span className="development__head cursor-pointer group">
                  <a href="https://www.youtube.com/c/BolsterFoundation">
                    <div className="pt-2">
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        Youtube
                      </li>
                    </div>
                  </a>

                  <Link href="/Photos" passHref>
                    <div
                      className={
                        router.pathname == "/Photos"
                          ? "active__dropdown py-2"
                          : "service__group__span py-2"
                      }
                    >
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        Photo Gallery
                      </li>
                    </div>
                  </Link>
                  <Link href="/Video" passHref>
                    <div
                      className={
                        router.pathname == "/Video"
                          ? "active__dropdown py-2"
                          : "service__group__span py-2"
                      }
                    >
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        Video Gallery
                      </li>
                    </div>
                  </Link>
                </span>
              </ul>
            </span>
            <span className="flex">
              <Link href="/Contact" passHref>
                <h6>Get Involved</h6>
              </Link>
            </span>
            <span className="flex nav__item__span">
              <Link href="/Blogs" passHref>
                <h6 className="blog__h6">Blog</h6>
              </Link>
            </span>

            <Link href="/Contact" passHref>
              <h6>Contact us</h6>
            </Link>
            <a
              href="whatsapp://send?phone=+919605407078"
              data-action="share/whatsapp/share"
            >
              <button>DONATE</button>
            </a>
          </div>
          <div className="nav__icons">
            <ShareIcon onClick={() => setSocial(!social)} id="share__icon" />
            {social ? (
              <div className="share__div">
                <a href="https://www.facebook.com/bolsterfoundation/">
                  <FacebookIcon id="share__social" />
                </a>

                <TwitterIcon id="share__social" />
                <InstagramIcon id="share__social" />
                <a href="https://www.youtube.com/c/BolsterFoundation">
                  <YouTubeIcon id="share__social" />
                </a>
              </div>
            ) : (
              ""
            )}

            <MenuIcon onClick={() => setCollapse(!collapse)} id="menu__icon" />
          </div>
        </div>
      </div>

      {/* <<<<<<<<< COLLAPSE>>>>>>>>>>>>>> */}

      {collapse ? (
        <div className="nav__collapse">
          <Link href="/" passHref>
            <div className="collapse_row">
              <p>Home</p>
            </div>
          </Link>

          <div className="collapse_row flex">
            <div className="flex" onClick={() => controlAbout()}>
              <p>About</p>
              <ArrowRightIcon id="collapse__arrow" />
            </div>

            {about ? (
              <div className="collapse__collapse">
                <Link href="/About" passHref>
                  <div className="collapse_collapse__row">
                    <p> About Bolster Foundation </p>
                  </div>
                </Link>
                <Link href="/Vision" passHref>
                  <div className="collapse_collapse__row">
                    <p>Vision, Mission & Values</p>
                  </div>
                </Link>
                <Link href="/We" passHref>
                  <div className="collapse_collapse__row">
                    <p> Who we are</p>
                  </div>
                </Link>
                <Link href="/" passHref>
                  <div className="collapse_collapse__row">
                    <p>Milestones</p>
                  </div>
                </Link>
                <Link href="/" passHref>
                  <div className="collapse_collapse__row">
                    <p>Testimonials</p>
                  </div>
                </Link>
                <Link href="/" passHref>
                  <div className="collapse_collapse__row">
                    <p>Awards & Recognitions</p>
                  </div>
                </Link>
                <Link href="/" passHref>
                  <div className="collapse_collapse__row">
                    <p>Our Partners </p>
                  </div>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="collapse_row flex">
            <div className="flex" onClick={() => setWeDo(!weDo)}>
              <p>What we do</p>
              <ArrowRightIcon id="collapse__arrow" />
            </div>
            {weDo ? (
              <div className="collapse__collapse__weDo">
                <Link href="/Programmes" passHref>
                  <div className="collapse_collapse__row">
                    <p>Programmes</p>
                  </div>
                </Link>
                <Link href="/Impact" passHref>
                  <div className="collapse_collapse__row">
                    <p>Impact</p>
                  </div>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="collapse_row flex">
            <div className="flex">
              <Link href="/Contact" passHref>
                <p>Get Involved</p>
              </Link>
            </div>
          </div>

          <div className="collapse_row flex">
            <div className="flex" onClick={() => controlMedia()}>
              <p>Resources</p>
              <ArrowRightIcon id="collapse__arrow" />
            </div>

            {media ? (
              <div className="collapse__collapse">
                <a href="https://www.youtube.com/c/BolsterFoundation">
                  <div className="collapse_collapse__row">
                    <p>Youtube</p>
                  </div>
                </a>

                <Link href="/Photos" passHref>
                  <div className="collapse_collapse__row">
                    <p>Photo Gallery</p>
                  </div>
                </Link>

                <Link href="/Video" passHref>
                  <div className="collapse_collapse__row">
                    <p>Video Gallery</p>
                  </div>
                </Link>

                <div className="collapse_collapse__row">
                  <p>FAQs</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <Link href="/Blog" passHref>
            <div className="collapse_row flex">
              <div className="flex">
                <p>Blog</p>
              </div>
            </div>
          </Link>
          <Link href="/Contact" passHref>
            <div className="collapse_row">
              <p>Contact us</p>
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
