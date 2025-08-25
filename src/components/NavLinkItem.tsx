import { NavLink } from "react-router-dom";

interface NavLinkItemProps {
  title: string;
  url: string;
}

export function NavLinkItem({ title, url }: NavLinkItemProps) {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          `block font-bold transition-colors text-lg px-4 duration-300 ${
            isActive ? "text-indigo-500" : "text-black hover:text-indigo-500"
          }`
        }
        to={url}
      >
        {title}
      </NavLink>
    </>
  );
}
