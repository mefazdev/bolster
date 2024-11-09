import React, { useEffect, useState } from "react";
import { collection, orderBy, query, getDocs } from "@firebase/firestore";
import { db } from "../firebase";
export default function Social() {

  const [link, setLink] = useState([]);
  const fetchData = async () => {
    const q = await query(collection(db, "link"), orderBy("timestamp", "desc"));
    const data = await getDocs(q);
    setLink(data.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    fetchData();
    
  }, []);
  return (
    <div className="embed lg:pt-16">
      <div className="hm__blogs__head">
        <h3>What&apos;s new</h3>
      </div>
      <div className="embed__row grid gap-5  lg:grid-cols-3">
         {link.map((data, index) => {
          if (index < 3) {
            return (
              <iframe
              key={data.link}
                src={data.link}
                id={index}
              
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                 sandbox="allow-scripts allow-same-origin allow-popups"
              ></iframe>
            );
          }
        })}
      </div>
    </div>
  );
}
