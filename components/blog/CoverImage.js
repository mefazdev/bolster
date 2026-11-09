/* eslint-disable @next/next/no-img-element */
import { imageUrl } from "../../lib/sanity";
import { getCategory } from "./blogUtils";

// Cropped cover with a colourful category placeholder when a post has no image.
export default function CoverImage({ cover, category, width, height, alt, className = "", eager = false }) {
  if (cover?.url) {
    return (
      <img
        src={imageUrl(cover, { width, height })}
        srcSet={`${imageUrl(cover, { width, height })} 1x, ${imageUrl(cover, { width: width * 2, height: height * 2 })} 2x`}
        alt={cover.alt || alt || ""}
        loading={eager ? "eager" : "lazy"}
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }
  const cat = getCategory(category);
  return (
    <div className={`w-full h-full bg-gradient-to-br ${cat.tint} flex items-center justify-center ${className}`}>
      <span className="text-5xl opacity-80" aria-hidden="true">{cat.emoji}</span>
    </div>
  );
}
