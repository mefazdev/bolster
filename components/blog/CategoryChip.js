import { getCategory } from "./blogUtils";

export default function CategoryChip({ value, className = "" }) {
  const cat = getCategory(value);
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${cat.chip} ${className}`}>
      <span aria-hidden="true">{cat.emoji}</span>
      {cat.label}
    </span>
  );
}
