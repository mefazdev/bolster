import React, { useEffect, useState } from "react";
import { collection, orderBy, query, getDocs, limit } from "@firebase/firestore";
import { db } from "../firebase";
import Link from "next/link";
export default function Social() {

  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "link"), orderBy("timestamp", "desc"),limit(3));
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
    <div className="embed lg:pt-20">
      <div className="hm__blogs__head">
        <h3>What&apos;s new</h3>
      </div>
      <div className="mt-10">
        


 

    <div className="grid lg:grid-cols-3 gap-5">
      {links.length > 0 && (
        links.map((d,  ) => (
          <div key={d.link}  >
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
<div className="flex">    <Link href={'/Updates'}><button className="bg-[#c9ca76]  p-1 px-5 m-auto mt-8">View More</button></Link></div>
    </div>
  );
}
