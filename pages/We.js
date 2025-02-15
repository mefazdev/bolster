import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
export default function We() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const thinkDocs = [
    {
      name: "Drew Kerr",
      position: "University of Chicago",
      image: "/assets/images/team/drewKer.jpg",
      bio:'Andrew Kerr is an Anthropology Ph.D. scholar at UC San Diego and a former AIF William J. Clinton Fellow. With a diverse background in physics and religious studies, he has engaged in development work across multiple countries, from building homes in Sri Lanka and Trinidad & Tobago to researching sanitation projects in India. His academic interests lie in marginalized voices, resistance, arts and activism, and everyday life, with a focus on North India. Deeply committed to decolonial theories and ethnographic methods, he actively contributes to Bolster Foundation’s think tank, supporting curriculum development, career mentoring, and student engagement through summer camps and leadership programs.'
    },
    {
      name: "Rohit Revi",
      position: "Queen's University, Kingston",
      image: "/assets/images/team/rohit.jpg",
      bio:'Dr. Rohit Revi is a scholar in Cultural Studies with a strong background in Philosophy of Technology, Contemporary Critical Theory, and the intersections of paranoia and late capitalism. He holds a PhD in Cultural Studies from Queen’s University, Canada. As the Think Tank Lead at Bolster Foundation, Rohit brings intellectual depth, research-driven insights, and a critical approach to social issues, shaping the foundation’s long-term vision and initiatives. His expertise is informed by years of experience working with civil society organizations in both India and Canada, where he has engaged with policy, advocacy, and critical social research.'
    },
     
    {
      name: "Sephora Jose",
      position: "IIT Kanpur",
      image: "/assets/images/team/sephora.jpg",
      bio:'Dr. Sephora Jose is a scholar of Dalit Studies with a PhD from IIT Kanpur. A Bluestone Award winner, she has widely published on issues of caste, gender, and identity politics, contributing to critical debates in academia and beyond.  At Bolster Foundation, she plays a key role in the Think Tank, where she brings her expertise in curriculum development and pedagogy. Her work focuses on inclusive education, intersectional approaches to learning, and innovative pedagogical frameworks that challenge traditional structures of knowledge production.  With a deep commitment to social justice and critical education, Sephora’s work shapes the foundation’s academic direction, ensuring meaningful engagement with marginalized perspectives'
    },
    {
      name: "Dr Darieo Thankachan",
      position: " National Tsing Hua University",
      image: "/assets/images/team/dario.jpeg",
      bio:'Dr. Darieo Thankachan is a postdoctoral research scientist at National Tsing Hua University and holds a PhD from National Taiwan University of Science and Technology. His research focuses on PDT (Photodynamic Therapy), PTTC (Photothermal Therapy), cancer diagnosis and therapy, COF (Covalent Organic Frameworks), and nanomedicine.  At Bolster Foundation, he leads the intellectual and research-driven aspects of our programs, ensuring a cutting-edge, evidence-based approach to education and innovation. His expertise in scientific research and interdisciplinary studies enriches the foundation’s engagement with technology, medicine, and societal impact.'
    },
    
  ];

  const team = [
    { 
      name: "Mujeeburahman KC",
      position: "IIT Kanpur",
      image: "/assets/images/team/mujeeb.jpeg" ,
      bio:"Mujeeb is a researcher, educator, and writer. He holds a PhD in Humanities and Social Sciences from IIT Kanpur. He has published with Routledge, Cambridge University Press, Berghahn, and Campus, along with contributions to platforms like WION and Qrius. Beyond academia, Mujeeb has actively engaged with civil society organizations and NGOs, working on policy and grassroots initiatives. He was the former William J. Clinton Fellow (2017-18). As the co-founder of Bolster Foundation, Mujeeb is committed to fostering research-driven solutions for social and economic development. His work at Bolster focuses on advancing knowledge, policy advocacy, and community engagement, bridging the gap between research and real-world impact."
    }, { 
      name: "Jalal Albakri",
      position: "Azim Premji University",
      image: "/assets/images/team/jalal.jpeg",
      bio:'Muhammed Jalal Albakri is a born entrepreneur with a keen eye for finance and business strategy. He plays a pivotal role in financial management and institutional growth, leveraging his expertise in handling complex financial ecosystems across various organizations.  Currently, he previously serves as the Finance Director for Fustat Edu World, Meem, Dihliz World School, and Hisab World School, overseeing their financial operations and ensuring sustainable growth. He is also in charge of the Markaz Chamber of Commerce, facilitating business networks and economic initiatives. Additionally, he is a board member of the SA Foundation, contributing to impactful business and education projects.  As the co-founder of Bolster Foundation, Jalal is responsible for the financial strategy and sustainability of the organization. His ability to navigate markets, manage risk, and optimize resources ensures that Bolster remains financially robust while driving its research and social initiatives forward.'
    }, { 
      name: "Shahul Hameed",
      position: "Jawaharlal Nehru University Delhi",
      image: "/assets/images/team/shahul.jpeg",
      bio:'Dr. Shahul Hameed Mattumannil is an academic, administrator, and policy consultant with extensive experience in research, governance, and higher education. He holds a PhD from Jawaharlal Nehru University (JNU), New Delhi (2023). Shahul has been actively involved in policy and administration, having worked as the Personal Assistant to the Minister of Ports and Museum, Government of Kerala (2022). His expertise extends to consultancy roles, where he has contributed to different civil society organisations, supporting initiatives in education, policy, and institutional development. As the co-founder of Bolster Foundation, Shahul plays a crucial role in administrative strategy, project management, and institutional collaborations. His work ensures that Bolster operates efficiently, expanding its impact in research-driven social and economic development.'
    }, { 
      name: "Abdu Rahman",
      position: "University of Wales",
      image: "/assets/images/team/abdu.jpeg",
      bio:'Abdu Rahman is an educationist and academic strategist with a strong background in research and institutional development. He holds a Master’s degree from the University of Wales and another Master’s in Education from Azim Premji University. With extensive experience working across various educational institutions, he brings a multidisciplinary approach to pedagogy, policy, and academic research.  As the Academic Head at Bolster Foundation, Abdu Rahman oversees the foundation’s research initiatives, curriculum development, and academic collaborations. His expertise in education policy, curriculum design, and scholarly engagement ensures that Bolster remains a center for critical inquiry and impactful learning.'

    }, { 
      name: "Muhammad Shafeeq",
      position: "Jamia Millia Islamia",
      image: "/assets/images/team/shafeeq.jpeg" ,
      bio:'Abdu Rahman is an educationist and academic strategist with a strong background in research and institutional development. He holds a Master’s degree from the University of Wales and another Master’s in Education from Azim Premji University. With extensive experience working across various educational institutions, he brings a multidisciplinary approach to pedagogy, policy, and academic research.  As the Academic Head at Bolster Foundation, Abdu Rahman oversees the foundation’s research initiatives, curriculum development, and academic collaborations. His expertise in education policy, curriculum design, and scholarly engagement ensures that Bolster remains a center for critical inquiry and impactful learning.'
    }, { 
      name: "Vajid",
      position: "Azim Premji University",
      image: "/assets/images/team/vajid.jpeg" ,
      bio:'Vajid Abdulla is an education enthusiast and thinker, deeply passionate about educational philosophy and student development. He holds a Master’s degree from Azim Premji University and has previously been a key member of the academic team at Jamia Madeenathunnoor.  At Bolster foundation, Vajid leads the Career Development division, focusing on guiding students in their academic and professional journeys. With his strong foundation in education philosophy, mentorship, and institutional training, he works to bridge the gap between learning and real-world opportunities, helping students navigate their career paths with clarity and confidence.'
    }
  ];
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
            <div className="mt-10 grid gap-6 grid-cols-2   lg:grid-cols-3">
              {thinkDocs.map((d) => (
                <div

                  key={d.name}
                  onMouseEnter={() => setHoveredMember(d.name)}
                  onMouseLeave={() => setHoveredMember(null)}
                  className="we__ite p-4 h-fit relative group  cursor-pointer bg-white rounded-md shadow-md     "
                >
                  <div className="relative h-72 w-full " >
                    <Image
                      src={d.image}
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                  <h6 className="text-center mt-3">{d.name}</h6>
                  <h5 className="text-center  text-gray-600 text-sm">
                    {d.position}
                  </h5>
                    {/* Pop-up Profile Card */}
          {hoveredMember === d.name && (
            <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
              className="absolute top-0  bg-white shadow-lg rounded-lg p-4 left-0 z-50"
            >
              {/* <h3 className="text-lg font-bold">{d.name}</h3>
              <p className="text-gray-500">{d.position}</p> */}
              <p className="text-sm text-gray-700 mt-2">{d.bio}</p>
            </motion.div>
          )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <div className="we__sub ">
              <h2>Our team</h2>
            </div>
            <div className="mt-10 grid gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              
              {team.map((d) => (
                <div

                  key={d.name}
                  onMouseEnter={() => setHoveredMember(d.name)}
                  onMouseLeave={() => setHoveredMember(null)}
                  className="we__ite p-4 h-fit relative group  cursor-pointer bg-white rounded-md shadow-md     "
                >
                  <div className="relative h-72 w-full " >
                    <Image
                      src={d.image}
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                  <h6 className="text-center mt-3">{d.name}</h6>
                  <h5 className="text-center  text-gray-600 text-sm">
                    {d.position}
                  </h5>
                    {/* Pop-up Profile Card */}
          {hoveredMember === d.name && (
            <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
              className="absolute top-0  bg-white shadow-lg rounded-lg p-4 left-0 z-50"
            >
               
              <p className="text-sm text-gray-700 mt-2">{d.bio}</p>
            </motion.div>
          )}
                </div>
              ))}
          
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
