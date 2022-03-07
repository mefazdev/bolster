import React from "react";
import logo from "../assets/images/logo-2.png";
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
          <Link href="/">
            <h2>Home</h2>
          </Link>
          <Link href="/About">
            <h2>About</h2>
          </Link>
          <Link href="/">
            <h2>Media</h2>
          </Link>
          <Link href="/Contact">
            <h2>Contact us</h2>
          </Link>
          <Link href="/WeDo">
            <h2>What we do</h2>
          </Link>
        </div>

        <div className="footer__item">
          <Link href="/">
            <h2>Impact</h2>
          </Link>
          <Link href="/">
            <h2>Get involved</h2>
          </Link>
          <Link href="/Vision">
            <h2>Vission</h2>
          </Link>
          <Link href="/Mision">
            <h2>Mission</h2>
          </Link>
          <Link href="/We">
            <h2>Who we are</h2>
          </Link>
        </div>
        <div className="footer__item">
          <Link href="/">
            <h2>Milestones</h2>
          </Link>
          <Link href="/">
            <h2>Award & Recogniton</h2>
          </Link>
          <Link href="/">
            <h2>Our Partners</h2>
          </Link>
        </div>
        <div id="footer__adress" className="footer__item">
          <div className="footer__logo">
            <Image src={logo} />
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
    </div>
  );
}
