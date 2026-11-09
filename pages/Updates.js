import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import useInstagramEmbeds from "../lib/useInstagramEmbeds";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import moment from "moment";

// import cookies from "js-cookie";
import Image from "next/image";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
export default function Updates() {
 

    const gridRef = useRef(null);
    const [links, setLinks] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        // "View More" from the home page (which shows 3) lands here, so show more than that.
        const q = query(collection(db, "link"), orderBy("timestamp", "desc"), limit(30));
        const data = await getDocs(q);
        setLinks(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })).filter((d) => d.link));
      };

      fetchData().catch((e) => console.error("Failed to load Instagram links:", e));
    }, []);

    useInstagramEmbeds(gridRef, [links]);
  
   

 

 
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
        <div ref={gridRef} className="grid lg:grid-cols-3 gap-5">
      {links.length > 0 && (
        links.map((d) => (
          <div key={d.id} data-aos="flip-up"  >
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

        </div>
      </div>

      <Footer />
    </div>
  );
}
