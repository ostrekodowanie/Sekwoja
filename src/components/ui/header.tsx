import CalendarIcon from "@/assets/icons/calendar";
import Button from "./button";
import PhoneIcon from "@/assets/icons/phone";
import NavLink from "./nav-link";
import { LINKS } from "@/const/general";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white border-[#E2E2E2] border-b-[1px] flex items-center justify-between px-[8vw] md:px-[12vw] 2xl:px-[16vw] py-4">
      <div></div>
      <nav className="flex items-center gap-[calc(2rem+1vw)]">
        {LINKS.map((link) => (
          <NavLink title={link} key={link}>
            {link}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <Button className="fill-secondary" variant="secondary">
          <PhoneIcon /> Zamów rozmowę
        </Button>
        <Button className="fill-secondary">
          <CalendarIcon /> Zamów pomiar
        </Button>
      </div>
    </header>
  );
}
