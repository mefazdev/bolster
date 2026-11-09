import React, { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { collection, orderBy, query, getDocs, limit } from "@firebase/firestore";
import { db } from "../firebase";

// Turns the <blockquote class="instagram-media"> placeholders into embeds.
// Safe to call repeatedly; does nothing until Instagram's script has loaded.
function processEmbeds() {
  if (typeof window !== "undefined" && window.instgrm) {
    window.instgrm.Embeds.process();
  }
}

export default function SocialEmbed() {
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

  // Covers the case where the script was already loaded (e.g. navigating back to the home page).
  useEffect(() => {
    if (links.length) processEmbeds();
  }, [links]);

  // Nothing to show: hide the whole section instead of an empty heading.
  if (status === "error" || (status === "ready" && links.length === 0)) return null;

  return (
    <section data-aos="fade-up" className="embed lg:pt-20 px-4 lg:px-0">
      <div className="hm__blogs__head">
        <h3>What&apos;s new</h3>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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

      <div className="flex">
        <Link href="/Updates">
          <a className="m-auto mt-8 bg-[#c9ca76] p-1 px-5 text-black transition hover:brightness-95">View More</a>
        </Link>
      </div>

      {/* next/script loads once per app and also works on client-side navigation */}
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" onLoad={processEmbeds} />
    </section>
  );
}
