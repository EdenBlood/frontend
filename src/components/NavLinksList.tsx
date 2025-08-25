import { links } from "@/utils/links";
import { NavLinkItem } from "./NavLinkItem";

export function NavLinksList() {
  return (
    <>
      <nav className="absolute inset-0 py-2 flex items-end justify-center gap-2">
        {links.map((link) => (
          <>
            <NavLinkItem key={link.title} title={link.title} url={link.url} />
          </>
        ))}
      </nav>
    </>
  );
}
