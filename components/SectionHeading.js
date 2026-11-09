// Shared home-page section label: the olive "chip" heading (About us, Our programmes, ...).
// Owns the spacing below itself, so sections should not add their own top margin to the content.
// `description` renders an optional one-line intro under the chip.
// `id` makes the section linkable (e.g. /#programmes); scroll-mt keeps it clear of the top edge.
export default function SectionHeading({ children, description, id, as: Tag = "h2", className = "" }) {
  return (
    <div id={id} className={`mb-6 scroll-mt-8 md:mb-8 ${className}`}>
      <Tag className="inline-block w-fit bg-[#C9CA76] px-3 py-1 font-['Poppins',sans-serif] text-sm font-normal leading-normal text-stone-900 md:text-base">
        {children}
      </Tag>
      {description && (
        <p className="mt-3 max-w-xl text-stone-600">{description}</p>
      )}
    </div>
  );
}
