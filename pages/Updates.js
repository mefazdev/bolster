import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import moment from "moment";

// import cookies from "js-cookie";
import Image from "next/image";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
export default function Updates() {
 

    const [links, setLinks] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const q = query(collection(db, "link"), orderBy("timestamp", "desc"),limit(2));
        // const data = await getDocs(q);
        // setLinks(data.docs.map((doc) => ({ url: doc.data().url })));
        const data = await getDocs(q);
        setLinks(data.docs.map((doc) => doc.data()));
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      // Run Instagram embed script AFTER component renders
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, [links]); // Run this effect whenever `links` updates
  
   

 

 
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta property="og:title" content="Blog" key="title" />
      </Head>
      <Navbar />

      <div className="blogs">
        <div className="blogs__main">
          <div className="about__main__head">
            <h1>Updates</h1>
          </div>
        </div>

        <div className="py-32 px-4 lg:px-0 w-10/12 mx-auto" style={{scrollBehavior:'smooth'}}>
        <div className="grid lg:grid-cols-3 gap-5">
      {links.length > 0 && (
        links.map((d,  ) => (
          <div key={d.link} data-aos="flip-up"  >
            {d.lin}
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={d.link}
              data-instgrm-version="14"
            ></blockquote>
          </div>
        ))
      ) } 
      {/* Load Instagram embed script once */}
     
    </div>
    <script async src="https://www.instagram.com/embed.js"></script>
   
        </div>
      </div>

      <Footer />
    </div>
  );
}
