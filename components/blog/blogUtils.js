import moment from "moment";

// Keep in sync with the category list in studio/schemaTypes/post.js
export const CATEGORIES = [
  { value: "campus-life", label: "Campus Life", emoji: "🏫", chip: "bg-amber-100 text-amber-800", tint: "from-amber-200 to-orange-200" },
  { value: "stories", label: "Stories", emoji: "📖", chip: "bg-rose-100 text-rose-800", tint: "from-rose-200 to-pink-200" },
  { value: "poetry", label: "Poetry", emoji: "✒️", chip: "bg-violet-100 text-violet-800", tint: "from-violet-200 to-fuchsia-200" },
  { value: "opinion", label: "Opinion", emoji: "💬", chip: "bg-sky-100 text-sky-800", tint: "from-sky-200 to-cyan-200" },
  { value: "science-tech", label: "Science & Tech", emoji: "🔬", chip: "bg-emerald-100 text-emerald-800", tint: "from-emerald-200 to-teal-200" },
  { value: "art-photos", label: "Art & Photos", emoji: "🎨", chip: "bg-orange-100 text-orange-800", tint: "from-orange-200 to-yellow-200" },
  { value: "reflections", label: "Reflections", emoji: "🌙", chip: "bg-lime-100 text-lime-800", tint: "from-lime-200 to-green-200" },
];

const FALLBACK = { value: "", label: "Student Post", emoji: "✨", chip: "bg-stone-100 text-stone-700", tint: "from-stone-200 to-amber-100" };

export function getCategory(value) {
  return CATEGORIES.find((c) => c.value === value) || FALLBACK;
}

export function formatDate(date) {
  return date ? moment(date).format("D MMM YYYY") : "";
}

export function readingTime(wordCount) {
  const mins = Math.max(1, Math.round((wordCount || 0) / 200));
  return `${mins} min read`;
}

const AVATAR_COLORS = [
  "bg-orange-500", "bg-rose-500", "bg-violet-500", "bg-sky-500",
  "bg-emerald-500", "bg-amber-500", "bg-fuchsia-500", "bg-teal-500",
];

export function avatarFor(name = "") {
  const trimmed = name.trim();
  const initials = trimmed
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => [...w][0] || "")
    .join("")
    .toUpperCase() || "?";
  let hash = 0;
  for (const ch of trimmed) hash = (hash * 31 + ch.codePointAt(0)) >>> 0;
  return { initials, color: AVATAR_COLORS[hash % AVATAR_COLORS.length] };
}
