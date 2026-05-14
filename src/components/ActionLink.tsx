type ActionLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
};

const isExternalHref = (href: string) =>
  href.startsWith("http") || href.startsWith("mailto:");

export function ActionLink({
  href,
  label,
  variant = "primary",
  download = false,
}: ActionLinkProps) {
  const isExternal = isExternalHref(href);

  return (
    <a
      className={`action-link action-link--${variant}`}
      href={href}
      download={download}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <span>{label}</span>
    </a>
  );
}
