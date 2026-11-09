import Link from "next/link";

// Shared olive call-to-action button (Read More, Learn More, View More, More Info, ...).
// With `href` it renders a link (Next <Link> for internal paths, plain <a> for http(s) URLs);
// without it, a real <button>. Extra classes (margins, animation) go in `className`.
const base =
  "inline-flex w-fit items-center justify-center rounded bg-[#C9CA76] px-5 py-1.5 font-['Poppins',sans-serif] text-sm leading-normal text-stone-900 transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2";

export default function Button({ href, children, className = "", ...rest }) {
  const classes = `${base} ${className}`;

  if (!href) {
    return (
      <button type="button" className={classes} {...rest}>
        {children}
      </button>
    );
  }

  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={classes} {...rest}>
        {children}
      </a>
    </Link>
  );
}
