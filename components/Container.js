// Shared page-width wrapper: every home section, the nav bar and the footer use this,
// so their left/right edges line up. Section backgrounds stay full-bleed outside it.
export const containerClass = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

export default function Container({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag className={`${containerClass} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
