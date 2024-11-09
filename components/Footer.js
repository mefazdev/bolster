import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content lg:gap-10 grid lg:grid-cols-4">
        <div className="footer__item">
          <Link href="/" passHref>
            <h2>Home</h2>
          </Link>
          <Link href="/About" passHref>
            <h2>About</h2>
          </Link>
          <Link href="/" passHref>
            <h2>Media</h2>
          </Link>
          <Link href="/Contact" passHref>
            <h2>Contact us</h2>
          </Link>
          <Link href="/WeDo" passHref>
            <h2>What we do</h2>
          </Link>
        </div>

        <div className="footer__item">
          <Link href="/" passHref>
            <h2>Impact</h2>
          </Link>
          <Link href="/" passHref>
            <h2>Get involved</h2>
          </Link>
          <Link href="/Vision" passHref>
            <h2>Vission</h2>
          </Link>
          <Link href="/Mision" passHref> 
            <h2>Mission</h2>
          </Link>
          <Link href="/We" passHref>
            <h2>Who we are</h2>
          </Link>
        </div>
        <div className="footer__item">
          <Link href="/" passHref>
            <h2>Milestones</h2>
          </Link>
          <Link href="/" passHref>
            <h2>Award & Recogniton</h2>
          </Link>
          <Link href="/" passHref>
            <h2>Our Partners</h2>
          </Link>
        </div>
        <div id="footer__adress" className="footer__item">
          <div className="footer__logo">
            <Image src='/asset/images/logo-2.png' height={14} width={20} alt=""/>
          </div>
          <div className="flex footer__name">
            <ApartmentIcon id="footer__icon" />
            <div>
              <h2>Bolster foundation</h2>
              <h3>Bolster Girls Campus</h3>

              <h3>Veenalukkal,Parappur Kottakkal</h3>
              <h3> Malappuram Kerala</h3>
              <h3>India 676503</h3>
            </div>
          </div>
          <div className="flex footer__phone">
            <CallIcon id="footer__icon" />
            <p>+91 345 234 8675</p>
          </div>
          <div className="flex footer__phone">
            <EmailIcon id="footer__icon" />
            <p>bolsterfoundation@gmail.com </p>
          </div>
          <div className="footer__input flex">
            <input placeholder="Subscribe our newsletter" />
            <div className="footer__arrow__div rounded-full">
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
         <h4>All rights reserved. Developed by <a href="whatsapp://send?phone=+918606256402" data-action="share/whatsapp/share"   >
              {/* <p style={{textDecoration:'underline',cursor:'pointer'}} className="ml-2"> */}
                
               <span style={{textDecoration:'underline',color:"#fff"}}>Booreact</span>
                 
               
             {/* </p> */}
  </a>
         </h4>
      </div>
    </div>
  );
}
