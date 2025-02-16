import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "@mui/material/Modal";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from '@mui/icons-material/Close';
export default function HomeNav() {
  const [open, setOpen] = useState(false);
  const [subMenu, setSubMenu] = useState("");
  //   const { onClose, selectedValue, openAbout } = props;

  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setSubMenu("");
      // Call your function here
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute w-full z-50">
      <div className="flex items-center justify-between px-2 lg:px-0 lg:w-11/12 mx-auto pt-8">
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div  className="mx-auto  outline-none bg-gray-800 h-screen w-full pt-32 relative">
       
          <div className="lg:w-8/12 mx-auto lg:text-lg relative px-4 lg:px-0">
          <CloseIcon className="absolute   right-6 lg:right-0 -top-10 text-white cursor-pointer text-3xl " onClick={()=>setOpen(false)}/>
       
         <div className="grid gap-2 mx-auto ">
         <Link href={"/"} passHref >
              <div className="   bg-gray-600 rounded cursor-pointer   text-cente p-2 text-white hover:bg-white hover:text-gray-800 ">
                Home
              </div>
            </Link>
            <div
             
              className="relative group bg-gray-600 rounded cursor-pointer  text-cente p-2 text-white hover:bg-white hover:text-gray-800 "
            >
              <button
               ref={divRef}
                // onClick={() => setSubMenu("about")}
                className="flex items-center "
              >
                {" "}
                About
                <KeyboardArrowRightIcon />
              </button>
           
                <div className="bg-gray-100 z-50  hidden group-hover:grid   text-black py-4  rounded absolute top-12 left-[10%]  gap-2">
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
                  <Link href="//Testimonial" passHref>
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
                onClick={() => setSubMenu("weDo")}
                className="flex items-center "
              >
                What we do
                <KeyboardArrowRightIcon />
              </button>
           
                <div className="bg-gray-100  hidden group-hover:grid   z-50 text-black py-4  rounded absolute top-9 lg:top-12 left-20  gap-2">
                  <Link href="/Programmes" passHref>
                    <div className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white">
                      Programmes
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
              ref={divRef}
              className="relative group bg-gray-600 rounded cursor-pointer  text-cente p-2 text-white hover:bg-white hover:text-gray-800 "
            >
              <button
                onClick={() => setSubMenu("resources")}
                className="flex items-center "
              >
                Resources
                <KeyboardArrowRightIcon />
              </button>
 
                <div className="bg-gray-10 hidden bg-white group-hover:grid z-50 text-black py-4  rounded absolute top-9 lg:top-12 left-20  gap-2">
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
            <Link href={"/Contact"} passHref>
              <div className="  bg-gray-600 rounded cursor-pointer   text-cente p-2 text-white hover:bg-white hover:text-gray-800 ">
                Contact us
              </div>
            </Link>
            <a
              href="whatsapp://send?phone=+919605407078"
              data-action="share/whatsapp/share"
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
