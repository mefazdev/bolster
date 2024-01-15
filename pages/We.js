import React, { useState } from "react";
import AboutBar from "../components/AboutBar";
import Navbar from "../components/Navbar";
import { jalal, mujeeb, shahul } from "../assets/images/data/data";
import Footer from "../components/Footer";

 
import drewKer from "../assets/images/team/drewKer.jpg";
 
 
import sephora from "../assets/images/team/sephora.jpg";
import shahuls from "../assets/images/team/shahul.jpeg";
import rohini from "../assets/images/team/rohini.jpeg";
import rohit from "../assets/images/team/rohit1.jpg";
import mujeebs from "../assets/images/team/mujeeb.jpeg";
 
import jalals from "../assets/images/team/jalal.jpeg";
import ibrahim from "../assets/images/team/ibrahim.jpeg";
import abdu from "../assets/images/team/abdu.jpeg";
import vajid from "../assets/images/team/vajid.jpeg";
import shafeeq from "../assets/images/team/shafeeq.jpeg";
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
      <div className="we" style={{scrollBehavior:'smooth'}}>
        <div className="we__main">
          <div className="about__main__head">
            <h1>Who we are</h1>
          </div>
        </div>

        <div className="we__content ">
          <div>
            <div className="we__sub mt-20">
              <h2>Think tank</h2>
            </div>
            <div className="mt-10 grid gap-6 grid-cols-2   lg:grid-cols-5">
              <div
                 
                className="we__item p-4 h-fit bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 "
              >
                <div className="we__im h-44 w-full rounded  " 
                style={{ backgroundImage: `url(${drewKer.src})`,
                backgroundSize: "cover",}}
                >
   
                </div>
                <h6 className="text-center ">Drew Kerr</h6>
                <h5 className="text-center  text-gray-600 text-sm">University of Chicago</h5>
                <p></p>
              </div>
               <div
                 
                className="we__item h-fit p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 "
              >
                <div className="we__im h-44 w-full rounded  " 
                style={{ backgroundImage: `url(${rohit.src})`,
                backgroundSize: "cover", backgroundPosition:'center'}}
                >
               
                </div>
                <h6>Rohit Revi</h6>
                <h5>Queen&apos;s University, Kingston</h5>
                <p></p>
              </div>

              <div
                 
                 className="we__item h-fit p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 "
               >
                 <div className="we__im h-44 w-full rounded  " 
                 style={{ backgroundImage: `url(${rohini.src})`,
                 backgroundSize: "cover", backgroundPosition:'center'}}
                 >
                
                 </div>
                <h6>Rohini Menon</h6>
                <h5>Jamia Millia, New Delhi</h5>
                <p></p>
              </div>
              <div
                 
                className="we__item h-fit p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 "
              >
                <div className="we__im h-44 w-full rounded  " 
                style={{ backgroundImage: `url(${sephora.src})`,
                backgroundSize: "cover", backgroundPosition:'center'}}
                >
               
                </div>
                <h6>Sephora Jose</h6>
                <h5>IIT Kanpur</h5>
                <p></p>
              </div>
              <div
                 
                 className="we__item p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 "
               >
                 <div className="we__im h-44 w-full rounded  " 
                 style={{ backgroundImage: `url(${ibrahim.src})`,
                 backgroundSize: "cover", backgroundPosition:'center'}}
                 >
                
                 </div>
                <h6>Dr Ibrahim Kuppalath</h6>
                <h5>
                  Professor, Govt Arts and Science Colllage for Women, Malappuram
                </h5>
                <p></p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="we__sub ">
              <h2>Our team</h2>
            </div>
            <div className="mt-10 grid gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
            <div
                 
                 className="we__item h-fit p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 "
               >
                 <div className="we__im h-44 w-full rounded  " 
                 style={{ backgroundImage: `url(${mujeebs.src})`,
                 backgroundSize: "cover", backgroundPosition:'center'}}
                 >
                
                 </div>
                <h6 className="">Mujeeburahman KC</h6>
                <h5> IIT Kanpur</h5>
                <div className="we__text">{/* <p>{mujeeb}</p> */}</div>
              </div>
              <div
                 
                 className="we__item h-fit p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 "
               >
                 <div className="we__im h-44 w-full rounded  " 
                 style={{ backgroundImage: `url(${jalals.src})`,
                 backgroundSize: "cover", backgroundPosition:'center'}}
                 >
                
                 </div>
                <h6>Jalal Albakri</h6>
                <h5>Azim Premji University</h5>
                <div className="we__text">{/* <p>{jalal}</p> */}</div>
              </div>
              <div
                 
                 className="we__item h-fit p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 "
               >
                 <div className="we__im h-44 w-full rounded  " 
                 style={{ backgroundImage: `url(${shahuls.src})`,
                 backgroundSize: "cover", backgroundPosition:'cente'}}
                 >
                
                 </div>
                <h6>Shahul Hameed</h6>
                <h5 >Jawaharlal Nehru University Delhi</h5>
                <div className="we__text">{/* <p>{shahul}</p> */}</div>
              </div>

              <div
                 
                 className="we__item h-fit p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 "
               >
                 <div className="we__im h-44 w-full rounded  " 
                 style={{ backgroundImage: `url(${abdu.src})`,
                 backgroundSize: "cover", backgroundPosition:'cente'}}
                 >
                
                 </div>
                <h6>Abdu Rahman</h6>
                <h5>University of Wales</h5>
                <div className="we__text">{/* <p>{shahul}</p> */}</div>
              </div>
              <div
                 
                 className="we__item h-fit p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 "
               >
                 <div className="we__im h-44 w-full rounded  " 
                 style={{ backgroundImage: `url(${shafeeq.src})`,
                 backgroundSize: "cover", backgroundPosition:'center'}}
                 >
                
                 </div>
                <h6>Muhammad Shafeeq</h6>
                <h5>Jamia Millia Islamia</h5>
                <div className="we__text">{/* <p>{shahul}</p> */}</div>
              </div>
              <div
                 
                 className="we__item h-fit p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 "
               >
                 <div className="we__im h-44 w-full rounded  " 
                 style={{ backgroundImage: `url(${vajid.src})`,
                 backgroundSize: "cover", backgroundPosition:'center'}}
                 >
                
                 </div>
                <h6>Vajid</h6>
                <h5>Azim Premji University</h5>
                <div className="we__text">{/* <p>{shahul}</p> */}</div>
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
