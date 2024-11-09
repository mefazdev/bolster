import React  from "react";
 
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
 
export default function We() {
 

  const thinkDocs =[
    {name:'Drew Kerr',
      position:'University of Chicago',
      image:'/assets/images/team/drewKer.jpg'
    }, {name:'Rohit Revi',
      position:"Queen's University, Kingston",
      image:'/assets/images/team/rohit.jpg'
    }, {name:'Rohini Menon',
      position:'Jamia Millia, New Delhi',
      image:'/assets/images/team/rohini.jpeg'
    }, {name:'Sephora Jose',
      position:'IIT Kanpur',
      image:'/assets/images/team/sephora.jpg'
    },
    {name:'Dr Ibrahim Kuppalath',
      position:'Professor, Govt Arts and Science Colllage for Women, Malappuram',
      image:'/assets/images/team/ibrahim.jpeg'
    },
  ]
  return (
    <div>
      <Navbar />
      <div className="we" style={{ scrollBehavior: "smooth" }}>
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
             {thinkDocs.map((d)=>(
               <div key={d.name} className="we__item p-4 h-fit bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 ">
               <div
                 className="we__im h-44 w-full rounded  "
                 style={{
                   backgroundImage: `url(${d.image})`,
                   backgroundSize: "cover",
                 }}
               ></div>
               <h6 className="text-center ">{d.name}</h6>
               <h5 className="text-center  text-gray-600 text-sm">
                {d.position}
               </h5>
               <p></p>
             </div>
             ))}
           
            </div>
          </div>

           <div className="mt-20">
            <div className="we__sub ">
              <h2>Our team</h2>
            </div>
            <div className="mt-10 grid gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
              <div className="we__item h-fit p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 ">
                <div
                  className="we__im h-44 w-full rounded  "
                  style={{
                    backgroundImage: `url(/assets/images/team/mujeeb.jpeg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h6 className="">Mujeeburahman KC</h6>
                <h5> IIT Kanpur</h5>
                <div className="we__text"> </div>
              </div>
              <div className="we__item h-fit p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 ">
                <div
                  className="we__im h-44 w-full rounded  "
                  style={{
                    backgroundImage: `url(/assets/images/team/jalal.jpeg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h6>Jalal Albakri</h6>
                <h5>Azim Premji University</h5>
                <div className="we__text"> </div>
              </div>
              <div className="we__item h-fit p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 ">
                <div
                  className="we__im h-44 w-full rounded  "
                  style={{
                    backgroundImage: `url(/assets/images/team/shahul.jpeg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "cente",
                  }}
                ></div>
                <h6>Shahul Hameed</h6>
                <h5>Jawaharlal Nehru University Delhi</h5>
                <div className="we__text"> </div>
              </div>

              <div className="we__item h-fit p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 ">
                <div
                  className="we__im h-44 w-full rounded  "
                  style={{
                    backgroundImage: `url(/assets/images/team/abdu.jpeg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "cente",
                  }}
                ></div>
                <h6>Abdu Rahman</h6>
                <h5>University of Wales</h5>
                <div className="we__text"> </div>
              </div>
              <div className="we__item h-fit p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 ">
                <div
                  className="we__im h-44 w-full rounded  "
                  style={{
                    backgroundImage: `url(/assets/images/team/shafeeq.jpeg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h6>Muhammad Shafeeq</h6>
                <h5>Jamia Millia Islamia</h5>
                <div className="we__text"></div>
              </div>
              <div className="we__item h-fit p-4 bg-white rounded-md shadow-md   hover:-translate-y-1 transition ease-linear duration-100 ">
                <div
                  className="we__im h-44 w-full rounded  "
                  style={{
                    backgroundImage: `url(/assets/images/team/vajid.jpeg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h6>Vajid</h6>
                <h5>Azim Premji University</h5>
                <div className="we__text"> </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
      <Footer />
    </div>
  );
}

// {
//  <div className="lg:col-span-2">
// <div className="we__sub">
//   <h2>Our Team</h2>
// </div>

// <div className="we__box grid  lg:grid-cols-4">
//   <div>
//     <img src="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg" />{" "}
//   </div>

//   <div className="lg:col-span-3  ">
//     <h4>Mujeebu Rahman K.C.</h4>
//     <p>
//       {readMore1 ? mujeeb.slice(0, 190) : mujeeb}...
      
//     </p>
//   <h6 onClick={()=>setReadMore1(!readMore1)}
//         style={{ color: "#46CE04", cursor: "pointer" }}> {readMore1 ? "Read more" : " Show less"}</h6>
//   </div>
// </div>
// <div className="we__box grid  lg:grid-cols-4">
//   <div>
//     <img src="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg" />{" "}
//   </div>

//   <div className="lg:col-span-3">
//     <h4>Jalal Rahman</h4>
//     <p>
//       {readMore2 ? jalal.slice(0, 190) : jalal}...
      
//     </p>
//   <h6 onClick={()=>setReadMore2(!readMore2)}
//         style={{ color: "#46CE04", cursor: "pointer" }}> {readMore2 ? "Read more" : " Show less"}</h6>
//   </div>
// </div>
// <div className="we__box grid  lg:grid-cols-4">
//   <div>
//     <img src="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg" />{" "}
//   </div>

//   <div className="lg:col-span-3">
//     <h4>Shahul Hameed</h4>
//     <p>
//       {readMore3 ? shahul.slice(0, 190) : shahul}...
      
//     </p>
//   <h6 onClick={()=>setReadMore3(!readMore3)}
//         style={{ color: "#46CE04", cursor: "pointer" }}> {readMore3 ? "Read more" : " Show less"}</h6>
//   </div>
// </div>

// </div> 
// }

// 1280
// 960
