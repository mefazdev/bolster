import React, { useState } from "react";
import AboutBar from "../components/AboutBar";
import Navbar from "../components/Navbar";
import { jalal, mujeeb, shahul } from "../assets/images/data/data";
import Footer from "../components/Footer";

import adhil from "../assets/images/team/adhil.jpg";

import drewKer from "../assets/images/team/drewKer.jpg";
import hussain from "../assets/images/team/hussain.jpg";
import mithlaj from "../assets/images/team/mithilaj.jpg";
import safurabi from "../assets/images/team/safurabi.jpg";
import sephora from "../assets/images/team/sephora.jpg";
import shahuls from "../assets/images/team/shahul.jpeg";
import rohini from "../assets/images/team/rohini.jpeg";
import rohit from "../assets/images/team/rohit.jpeg";
import mujeebs from "../assets/images/team/mujeeb.JPG";
import basim from "../assets/images/team/basim.jpg";
import jalals from "../assets/images/team/jalal.jpg";
import ibrahim from "../assets/images/team/ibrahim.jpeg";
import Image from "next/image";
export default function We() {
  const [readMore1, setReadMore1] = useState(false);
  const [readMore2, setReadMore2] = useState(false);
  const [readMore3, setReadMore3] = useState(false);
  const [readMore4, setReadMore4] = useState(false);
  const [readMore5, setReadMore5] = useState(false);
  const [readMore6, setReadMore6] = useState(false);
  const [readMore7, setReadMore7] = useState(false);
  const [readMore8, setReadMore8] = useState(false);
  const [readMore9, setReadMore9] = useState(false);
  const [readMore10, setReadMore10] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="we">
        <div className="we__main">
          <div className="about__main__head">
            <h1>Who we are</h1>
          </div>
        </div>

        <div className="we__content ">
          <div>
            <div className="we__sub">
              <h2>Think tanks</h2>
            </div>
            <div className="we__row grid gap-6 grid-cols-2   lg:grid-cols-5">
              <div
                onClick={() => setReadMore5(!readMore5)}
                className={readMore5 ? "we__item" : "we__item"}
              >
                <div className="we__img">
                  <Image src={drewKer} />
                </div>
                <h6>Drew Kerr</h6>
                <h5>University of Chicago</h5>
                <p></p>
              </div>
              <div
                onClick={() => setReadMore9(!readMore9)}
                className={readMore9 ? "we__item" : "we__item"}
              >
                <div className="we__img">
                  <Image src={rohit} />
                </div>
                <h6>Rohit Revi</h6>
                <h5>Queen&apos;s University, Kingston</h5>
                <p></p>
              </div>

              <div
                onClick={() => setReadMore7(!readMore7)}
                className={readMore7 ? "we__item" : "we__item"}
              >
                <div className="we__img">
                  <Image src={rohini} />
                </div>
                <h6>Rohini Menon</h6>
                <h5>Jamia Millia, New Delhi</h5>
                <p></p>
              </div>
              <div
                onClick={() => setReadMore8(!readMore8)}
                className={readMore8 ? "we__item" : "we__item"}
              >
                <div className="we__img">
                  <Image src={sephora} />
                </div>
                <h6>Sephora Jose</h6>
                <h5>IIT Kanpur</h5>
                <p></p>
              </div>
              <div
                onClick={() => setReadMore6(!readMore6)}
                className={readMore6 ? "we__item" : "we__item"}
              >
                <div className="we__img">
                  <Image src={ibrahim} />
                </div>
                <h6>Dr Ibrahim Kuppalath</h6>
                <h5>
                  Professor,Govt Arts and Science Colllage for Women, Malappuram
                </h5>
                <p></p>
              </div>
            </div>
          </div>

          <div className="team__row">
            <div className="we__sub">
              <h2>Our team</h2>
            </div>
            <div className="we__row grid gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
              <div
                onClick={() => setReadMore1(!readMore1)}
                className={readMore1 ? "we__item" : "we__item"}
              >
                <div className="we__img">
                  <Image src={mujeebs} />
                </div>
                <h6>Mujeeburahman KC</h6>
                <h5> IIT Gandhinagar</h5>
                <div className="we__text">{/* <p>{mujeeb}</p> */}</div>
              </div>
              <div
                className={readMore2 ? "we__item" : "we__item"}
                onClick={() => setReadMore2(!readMore2)}
              >
                <div className="we__img">
                  <Image src={jalals} />
                </div>
                <h6>Jalal Rahman</h6>
                <h5>Azim Premji University</h5>
                <div className="we__text">{/* <p>{jalal}</p> */}</div>
              </div>
              <div
                className={readMore3 ? "we__item" : "we__item"}
                onClick={() => setReadMore3(!readMore3)}
              >
                <div className="we__img">
                  <Image src={shahuls} />
                </div>
                <h6>Shahul Hameed</h6>
                <h5>Jawaharlal Nehru University Delhi</h5>
                <div className="we__text">{/* <p>{shahul}</p> */}</div>
              </div>
              <div className="we__item">
                <div className="we__img">
                  <Image src={mithlaj} />
                </div>
                <h6>Mithilaj TN</h6>
                <h5>TISS Mumbai</h5>
              </div>
              <div className="we__item">
                <div className="we__img">
                  <Image src={basim} />
                </div>
                <h6>Basim</h6>
                <h5>Delhi University </h5>
              </div>
            </div>

            <div className="we__row grid grid gap-6 grid-cols-2   lg:grid-cols-5 ">
              <div className="we__item">
                <div className="we__img">
                  <Image src={hussain} />
                </div>
                <h6>Hussain</h6>
                <h5>Azim Premji University</h5>
              </div>
              <div className="we__item">
                <div className="we__img">
                  <Image src={safurabi} />
                </div>
                <h6>Safurabi</h6>
                <h5>Kannur University</h5>
              </div>
              <div className="we__item">
                <div className="we__img">
                  <Image src={adhil} />
                </div>
                <h6>Adhil</h6>
                <h5>University of Calicut</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

{
  /* <div className="lg:col-span-2">
<div className="we__sub">
  <h2>Our Team</h2>
</div>

<div className="we__box grid  lg:grid-cols-4">
  <div>
    <img src="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg" />{" "}
  </div>

  <div className="lg:col-span-3  ">
    <h4>Mujeebu Rahman K.C.</h4>
    <p>
      {readMore1 ? mujeeb.slice(0, 190) : mujeeb}...
      
    </p>
  <h6 onClick={()=>setReadMore1(!readMore1)}
        style={{ color: "#46CE04", cursor: "pointer" }}> {readMore1 ? "Read more" : " Show less"}</h6>
  </div>
</div>
<div className="we__box grid  lg:grid-cols-4">
  <div>
    <img src="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg" />{" "}
  </div>

  <div className="lg:col-span-3">
    <h4>Jalal Rahman</h4>
    <p>
      {readMore2 ? jalal.slice(0, 190) : jalal}...
      
    </p>
  <h6 onClick={()=>setReadMore2(!readMore2)}
        style={{ color: "#46CE04", cursor: "pointer" }}> {readMore2 ? "Read more" : " Show less"}</h6>
  </div>
</div>
<div className="we__box grid  lg:grid-cols-4">
  <div>
    <img src="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg" />{" "}
  </div>

  <div className="lg:col-span-3">
    <h4>Shahul Hameed</h4>
    <p>
      {readMore3 ? shahul.slice(0, 190) : shahul}...
      
    </p>
  <h6 onClick={()=>setReadMore3(!readMore3)}
        style={{ color: "#46CE04", cursor: "pointer" }}> {readMore3 ? "Read more" : " Show less"}</h6>
  </div>
</div>

</div> */
}

// 1280
// 960
