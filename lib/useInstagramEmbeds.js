import { useEffect } from "react";

const SCRIPT_SRC = "https://www.instagram.com/embed.js";

// Loads Instagram's embed script once and turns <blockquote class="instagram-media">
// placeholders into embeds. A single instgrm.Embeds.process() call can be missed when the
// script and the data arrive in an unlucky order, so this retries until every placeholder
// inside `containerRef` has been converted (or gives up after ~15 seconds).
export default function useInstagramEmbeds(containerRef, deps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      document.body.appendChild(s);
    }

    let tries = 0;
    const timer = setInterval(() => {
      const root = containerRef.current;
      const pending = root ? root.querySelectorAll("blockquote.instagram-media").length : 0;
      if (!root || pending === 0 || ++tries > 30) {
        clearInterval(timer);
        return;
      }
      if (window.instgrm) window.instgrm.Embeds.process();
    }, 500);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
