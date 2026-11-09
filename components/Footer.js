import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { containerClass } from "./Container";

// Footer link columns: plain links in lists (not headings), so they don't pollute the page outline.
const linkColumns = [
  [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Media", href: "/" },
    { label: "Contact us", href: "/Contact" },
    { label: "What we do", href: "/WeDo" },
  ],
  [
    { label: "Impact", href: "/" },
    { label: "Get involved", href: "/#get-involved" },
    { label: "Vision", href: "/Vision" },
    { label: "Who we are", href: "/We" },
  ],
  [
    { label: "Milestones", href: "/" },
    { label: "Award & Recognition", href: "/" },
    { label: "Our Partners", href: "/" },
    { label: "Admin", href: "/Login" },
  ],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className={`${containerClass} grid lg:grid-cols-4 lg:gap-10`}>
        <nav aria-label="Footer" className="grid lg:col-span-3 lg:grid-cols-3 lg:gap-10">
          {linkColumns.map((links, i) => (
            <ul key={i} className="footer__item">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <a>{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <div id="footer__adress" className="footer__item">
          <div className="footer__logo">
            <Image src='/assets/images/logo-2.png' height={40} width={40} alt="" />
          </div>
          <address className="flex footer__name not-italic">
            <ApartmentIcon id="footer__icon" aria-hidden="true" />
            <div>
              <p className="footer__org">Bolster foundation</p>
              <p>Bolster Girls Campus</p>
              <p>Veenalukkal, Parappur Kottakkal</p>
              <p>Malappuram, Kerala</p>
              <p>India 676503</p>
            </div>
          </address>
          <div className="flex footer__phone">
            <CallIcon id="footer__icon" aria-hidden="true" />
            <a href="tel:+913452348675">+91 345 234 8675</a>
          </div>
          <div className="flex footer__phone">
            <EmailIcon id="footer__icon" aria-hidden="true" />
            <a href="mailto:bolsterfoundation@gmail.com">bolsterfoundation@gmail.com</a>
          </div>
          <div className="footer__input flex">
            <input placeholder="Subscribe to our newsletter" aria-label="Email address for newsletter" />
            <div className="footer__arrow__div rounded-full">
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="text-gray-300">
          All rights reserved. Powered by{" "}
          <a
            href="https://www.instagram.com/axonvex.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            Axonvex
          </a>
        </p>
      </div>
    </footer>
  );
}
