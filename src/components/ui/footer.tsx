import { LINKS } from "@/const/general";
import NavLink from "./nav-link";

export default function Footer() {
  return (
    <footer className="bg-background-dark flex items-center justify-between px-[8vw] md:px-[12vw] 2xl:px-[16vw] py-8">
      <div></div>
      <nav className="flex items-center gap-[calc(2rem+1vw)]">
        {LINKS.map((link) => (
          <NavLink className="text-white" title={link} key={link}>
            {link}
          </NavLink>
        ))}
      </nav>
      <button className="transition-colors rounded-md px-5 py-2.5 flex items-center gap-2 text-sm border-[#464646] border-[1px] hover:border-white hover:bg-white hover:text-background-dark text-white">
        Do góry
      </button>
    </footer>
  );
}
