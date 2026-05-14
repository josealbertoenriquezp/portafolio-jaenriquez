import type { ReactNode } from "react";

type NavigationItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  name: string;
  navLabel: string;
  role: string;
  items: NavigationItem[];
  rightSlot?: ReactNode;
};

export function Header({ name, navLabel, role, items, rightSlot }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top">
          <span className="brand__mark">JA</span>
          <span className="brand__copy">
            <strong>{name}</strong>
            <span>{role}</span>
          </span>
        </a>

        <nav aria-label={navLabel} className="site-nav">
          {items.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {rightSlot ? <div className="site-header__controls">{rightSlot}</div> : null}
      </div>
    </header>
  );
}
