import React from "react";
import HailIcon from "@mui/icons-material/Hail";
import WorkIcon from "@mui/icons-material/Work";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Link from "next/link";
export default function Involve() {
  return (
    <div className="hm__involve">
      <div className="hm__involve__contetn">
        <div className="hm__involve__head">
          <h3>Get involved</h3>
        </div>
        <div className="hm__involve__row gap-10 grid lg:grid-cols-4">
          <Link href="/Contact">
            <div className="hm__involve__box">
              <HailIcon id="involve__icon" />
              <div className="involve__icon__caption">
                <h4>Partner with us</h4>
              </div>
            </div>
          </Link>

          <Link href="/Contact">
            <div className="hm__involve__box">
              <VolunteerActivismIcon id="involve__icon" />
              <div className="involve__icon__caption">
                <h4>Volunteering</h4>
              </div>
            </div>
          </Link>

          <Link href="/Contact">
            <div className="hm__involve__box">
              <WorkIcon id="involve__icon" />
              <div className="involve__icon__caption">
                <h4>Oppenings</h4>
              </div>
            </div>
          </Link>

          <Link href="/Contact">
            <div className="hm__involve__box">
              <AccountTreeIcon id="involve__icon" />
              <div className="involve__icon__caption">
                <h4>Internship</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
