import { avatarFor } from "./blogUtils";

export default function AuthorBadge({ name, grade, size = "sm", light = false }) {
  if (!name) return null;
  const { initials, color } = avatarFor(name);
  const big = size === "lg";
  return (
    <div className="flex items-center gap-3 min-w-0">
      <span
        aria-hidden="true"
        className={`${color} ${big ? "w-12 h-12 text-base" : "w-8 h-8 text-xs"} shrink-0 rounded-full text-white font-semibold flex items-center justify-center ring-2 ring-white`}
      >
        {initials}
      </span>
      <span className="min-w-0 leading-tight">
        <span className={`block truncate font-semibold ${big ? "text-base" : "text-sm"} ${light ? "text-white" : "text-stone-900"}`}>
          {name}
        </span>
        {grade && (
          <span className={`block truncate text-xs ${light ? "text-white/80" : "text-stone-500"}`}>{grade}</span>
        )}
      </span>
    </div>
  );
}
