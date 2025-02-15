import React from "react";
import HailIcon from "@mui/icons-material/Hail";
import WorkIcon from "@mui/icons-material/Work";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Link from "next/link";
export default function Involve() {
  return (
    <div className="hm__involve mt-24 pb-24">
      <div className="hm__involve__contetn">
        <div className="hm__involve__head">
          <h3>Get involved</h3>
        </div>
        <div className="hm__involve__row gap-10 grid lg:grid-cols-4">
          <Link href="/Contact" passHref>
            <div className="hm__involve__box  shadow-xl hover:-translate-y-1 hover:scale-105 transition ease-linear duration-200 ">
              <HailIcon id="involve__icon" />
              <div className="involve__icon__caption rounded-b">
                <h4>Partner with us</h4>
              </div>
            </div>
          </Link>

          <Link href="/Contact" passHref>
            <div className="hm__involve__box shadow-xl hover:-translate-y-1 hover:scale-105 transition ease-linear duration-200">
              <VolunteerActivismIcon id="involve__icon" />
              <div className="involve__icon__caption rounded-b">
                <h4>Volunteering</h4>
              </div>
            </div>
          </Link>

          <Link href="/Contact" passHref>
            <div className="hm__involve__box shadow-xl hover:-translate-y-1 hover:scale-105 transition ease-linear duration-200">
              <WorkIcon id="involve__icon" />
              <div className="involve__icon__caption rounded-b">
                <h4>Openings</h4>
              </div>
            </div>
          </Link>

          <Link href="/Contact" passHref>
            <div className="hm__involve__box shadow-xl hover:-translate-y-1 hover:scale-105 transition ease-linear duration-200">
              <AccountTreeIcon id="involve__icon" />
              <div className="involve__icon__caption rounded-b">
                <h4>Internship</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
