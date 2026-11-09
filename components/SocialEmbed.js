import React, { useEffect, useRef, useState } from "react";
import { collection, orderBy, query, getDocs, limit } from "@firebase/firestore";
import { db } from "../firebase";
import useInstagramEmbeds from "../lib/useInstagramEmbeds";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { containerClass } from "./Container";

export default function SocialEmbed() {
  const gridRef = useRef(null);
  const [links, setLinks] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;
    const fetchData = async () => {
      try {
        const q = query(collection(db, "link"), orderBy("timestamp", "desc"), limit(3));
        const data = await getDocs(q);
        if (cancelled) return;
        setLinks(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })).filter((d) => d.link));
        setStatus("ready");
      } catch (e) {
        console.error("Failed to load Instagram links:", e);
        if (!cancelled) setStatus("error");
      }
    };
    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);

  useInstagramEmbeds(gridRef, [links]);

  // Nothing to show: hide the whole section instead of an empty heading.
  if (status === "error" || (status === "ready" && links.length === 0)) return null;

  return (
    <section data-aos="fade-up" className={`${containerClass} py-12 lg:pt-20`}>
      <SectionHeading id="whats-new">What&apos;s new</SectionHeading>

      <div ref={gridRef} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {status === "loading"
          ? [0, 1, 2].map((i) => (
              <div
                key={i}
                aria-hidden="true"
                className={`h-[480px] animate-pulse rounded-lg bg-gray-100 ${["", "hidden md:block", "hidden lg:block"][i]}`}
              />
            ))
          : links.map((d) => (
              <div key={d.id} className="flex justify-center">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={d.link}
                  data-instgrm-version="14"
                  style={{ width: "100%", maxWidth: 540, minWidth: 0, margin: 0 }}
                >
                  {/* Fallback if the embed script is blocked */}
                  <a href={d.link} target="_blank" rel="noopener noreferrer">
                    View this post on Instagram
                  </a>
                </blockquote>
              </div>
            ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button href="/Updates">View More</Button>
      </div>
    </section>
  );
}
