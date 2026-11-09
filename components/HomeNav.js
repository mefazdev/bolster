import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "@mui/material/Modal";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from '@mui/icons-material/Close';
import { containerClass } from "./Container";
export default function HomeNav() {
  const [open, setOpen] = useState(false);
  const [subMenu, setSubMenu] = useState("");
  // Wraps the whole menu list; a tap outside it closes any open submenu.
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSubMenu("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setSubMenu("");
  };

  // Tap toggles a submenu (works on touch); on desktop hover still opens it too.
  const toggleSubMenu = (name) =>
    setSubMenu((current) => (current === name ? "" : name));

  // On phones the submenu expands inline under its item; on lg it's a hover dropdown.
  const subMenuClass = (name) =>
    `${subMenu === name ? "grid lg:hidden" : "hidden"} lg:group-hover:grid mt-2 lg:mt-0 static lg:absolute lg:top-12 lg:left-20 bg-gray-100 z-50 text-black py-2 lg:py-4 rounded gap-1 lg:gap-2`;

  const arrowClass = (name) =>
    `transition-transform duration-200 ${subMenu === name ? "rotate-90" : ""}`;

  return (
    <div className="absolute w-full z-50">
      <div className={`${containerClass} flex items-center justify-between pt-8`}>
        <Link href="/" passHref>
          <div className="relative     h-[70px] w-[160px] lg:h-[70px] lg:w-[250px]">
            <Image
              src={"/assets/images/log-text.png"}
              priority={true}
              className="object-cover"
              layout="fill"
              alt=""
            />
          </div>
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="bg-white hover:bg-gray-400 shadow-md h-12 w-12 lg:h-16 lg:w-16 rounded-full flex items-center justify-center"
        >
          <MenuIcon className=" text-3xl lg:text-4xl text-black" />
        </button>
      </div>
      <Modal
        id="modal"
        open={open}
        onClose={closeMenu}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div  className="mx-auto  outline-none bg-gray-800 h-screen w-full pt-32 relative">
       
          <div className="lg:w-8/12 mx-auto lg:text-lg relative px-4 lg:px-0">
          <CloseIcon className="absolute   right-6 lg:right-0 -top-10 text-white cursor-pointer text-3xl " onClick={closeMenu}/>

         <div ref={menuRef} className="grid gap-2 mx-auto ">
         <Link href={"/"} passHref >
              <div className="   bg-gray-600 rounded cursor-pointer   text-cente p-2 text-white hover:bg-white hover:text-gray-800 ">
                Home
              </div>
            </Link>
            <div
             
              className="relative group bg-gray-600 rounded cursor-pointer  text-cente p-2 text-white hover:bg-white hover:text-gray-800 "
            >
              <button
                type="button"
                onClick={() => toggleSubMenu("about")}
                aria-expanded={subMenu === "about"}
                className="flex items-center w-full text-left"
              >
                About
                <KeyboardArrowRightIcon className={arrowClass("about")} />
              </button>

                <div className={subMenuClass("about")}>
                  <Link href={"/About"} passHref>
                    <div 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white"
                    >
                      Bolster Foundation
                    </div>
                  </Link>
                  <Link href={"/Vision"} passHref>
                    <div className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white">
                      Vision, Mission & Values
                    </div>
                  </Link>
                  <Link href="/We" passHref>
                    <div className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white">
                      Who we are
                    </div>
                  </Link>{" "}
                  <Link href="/Milestones" passHref>
                    <div className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white">
                      Milestones
                    </div>
                  </Link>{" "}
                  <Link href="/Testimonial" passHref>
                    <div className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white">
                      Testimonials
                    </div>
                  </Link>
                  <div className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white">
                    Awards & Recognitions
                  </div>
                  <div className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white">
                    Our Partners
                  </div>
                </div>
          
            </div>
            <div
          
              className="relative group bg-gray-600 rounded cursor-pointer  text-cente p-2 text-white hover:bg-white hover:text-gray-800 "
            >
              <button
                type="button"
                onClick={() => toggleSubMenu("weDo")}
                aria-expanded={subMenu === "weDo"}
                className="flex items-center w-full text-left"
              >
                What we do
                <KeyboardArrowRightIcon className={arrowClass("weDo")} />
              </button>

                <div className={subMenuClass("weDo")}>
                  <Link href="/Programmes" passHref>
                    <div className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white">
                      Programmes
                    </div>
                  </Link>
                  <Link href="/HybridSchool" passHref>
                    <div className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white">
                      Bolster Hybrid School
                    </div>
                  </Link>
                  <Link href="/Impact" passHref>
                    <div className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white">
                      Impact
                    </div>
                  </Link>
                </div>
   
            </div>
            <div
              className="relative group bg-gray-600 rounded cursor-pointer  text-cente p-2 text-white hover:bg-white hover:text-gray-800 "
            >
              <button
                type="button"
                onClick={() => toggleSubMenu("resources")}
                aria-expanded={subMenu === "resources"}
                className="flex items-center w-full text-left"
              >
                Resources
                <KeyboardArrowRightIcon className={arrowClass("resources")} />
              </button>

                <div className={subMenuClass("resources")}>
                  <a href="https://www.youtube.com/c/BolsterFoundation">
                    <div className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white">
                      Youtube
                    </div>
                  </a>
                  <Link href="/Photos" passHref>
                    <div className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white">
                      Photo Gallery
                    </div>
                  </Link>
                  <Link href="/Video" passHref>
                    <div className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white">
                      Video Gallery
                    </div>
                  </Link>
                </div>
           
            </div>
            <Link href={"/Contact"} passHref>
              <div className=" bg-gray-600 rounded cursor-pointer   text-cente p-2 text-white hover:bg-white hover:text-gray-800  ">
                Get Involved
              </div>
            </Link>
            <Link href={"/Updates"} passHref>
              <div className="bg-gray-600 rounded cursor-pointer   text-cente p-2 text-white hover:bg-white hover:text-gray-800 ">
           Updates
              </div>
            </Link>{" "}
            <Link href={"/Blogs"} passHref>
              <div className="bg-gray-600 rounded cursor-pointer   text-cente p-2 text-white hover:bg-white hover:text-gray-800 ">
                Blog
              </div>
            </Link>
            <Link href={"/Contact"} passHref>
              <div className="  bg-gray-600 rounded cursor-pointer   text-cente p-2 text-white hover:bg-white hover:text-gray-800 ">
                Contact us
              </div>
            </Link>
            <a
              href="https://wa.me/919605407078"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className=" border-b border-gray-600 cursor-pointer hover:scale-105 ease-linear duration-200 transition   text-center bg-white p-2 text-gray-800 rounded-full hover:bg-white hover:text-gray-800 ">
                DONATE
              </div>
              </a>
            
         </div>
           
            
          </div>
        </div>
      </Modal>
    </div>
  );
}
