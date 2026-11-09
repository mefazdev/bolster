// Minimal Sanity client for the site.
// Calls Sanity's HTTP query API directly so it works with Next 12 / React 17
// (the official @sanity/client now requires newer Node/React versions).

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2024-01-01";

export const isSanityConfigured = Boolean(projectId);
export const studioUrl =
  process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "https://bolster-blog.sanity.studio";

export async function sanityFetch(query, params = {}) {
  if (!isSanityConfigured) {
    console.warn("NEXT_PUBLIC_SANITY_PROJECT_ID is not set; returning no data.");
    return null;
  }

  const search = new URLSearchParams({ query });
  Object.entries(params).forEach(([key, value]) => {
    search.set(`$${key}`, JSON.stringify(value));
  });

  // apicdn = cached and fast; fine for published content.
  const url = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}?${search}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Sanity query failed (${res.status}): ${await res.text()}`);
  }
  const json = await res.json();
  return json.result;
}

/**
 * Builds a sized CDN URL for an image object returned by the `image` projection below
 * ({ url, dims, crop, hotspot }). Honours the crop and hotspot set in the Studio, so
 * a tall poster used as a cover still frames the important part.
 * Also accepts a plain URL string.
 */
export function imageUrl(image, { width, height } = {}) {
  if (!image) return "";
  if (typeof image === "string") image = { url: image };
  if (!image.url) return "";

  const params = new URLSearchParams({ auto: "format" });
  const { dims, crop, hotspot } = image;

  if (dims && crop) {
    const left = Math.round(crop.left * dims.width);
    const top = Math.round(crop.top * dims.height);
    const w = Math.round(dims.width - crop.left * dims.width - crop.right * dims.width);
    const h = Math.round(dims.height - crop.top * dims.height - crop.bottom * dims.height);
    params.set("rect", `${left},${top},${w},${h}`);
  }

  if (width) params.set("w", width);
  if (height) {
    params.set("h", height);
    params.set("fit", "crop");
    if (hotspot && dims) {
      const c = crop || { left: 0, top: 0, right: 0, bottom: 0 };
      const cw = 1 - c.left - c.right;
      const ch = 1 - c.top - c.bottom;
      const fx = Math.min(1, Math.max(0, (hotspot.x - c.left) / cw));
      const fy = Math.min(1, Math.max(0, (hotspot.y - c.top) / ch));
      params.set("crop", "focalpoint");
      params.set("fp-x", fx.toFixed(3));
      params.set("fp-y", fy.toFixed(3));
    } else {
      params.set("crop", "entropy");
    }
  } else {
    params.set("fit", "max");
  }
  return `${image.url}?${params}`;
}

const published = `defined(slug.current) && !(_id in path("drafts.**"))`;

const image = `{ hotspot, crop, alt, "url": asset->url, "dims": asset->metadata.dimensions{ width, height } }`;

const postFields = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  author,
  grade,
  category,
  excerpt,
  "cover": coverImage${image},
  "wordCount": length(string::split(coalesce(pt::text(body), ""), " "))
`;

export const allPostsQuery = `
  *[_type == "post" && ${published}] | order(publishedAt desc) { ${postFields} }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug && ${published}][0] {
    ${postFields},
    body[]{
      ...,
      _type == "image" => ${image.replace("{", "{ caption, _key, _type,")}
    }
  }
`;

export const latestPostsQuery = `
  *[_type == "post" && ${published}] | order(publishedAt desc)[0...3] { ${postFields} }
`;

export const postSlugsQuery = `
  *[_type == "post" && ${published}].slug.current
`;

// Prefer posts from the same category, then fill with the newest others.
export const relatedPostsQuery = `
  *[_type == "post" && slug.current != $slug && ${published}]
  | order(select(category == $category => 1, 0) desc, publishedAt desc)[0...3] { ${postFields} }
`;
