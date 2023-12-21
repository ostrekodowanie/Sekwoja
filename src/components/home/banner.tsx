import CalendarIcon from "@/assets/icons/calendar";
import Button from "../ui/button";

export default function Banner() {
  return (
    <section className="bg-background-dark/90 px-4 sm:px-[8vw] md:px-[12vw] 2xl:px-[16vw] flex items-center flex-wrap gap-8 justify-center min-h-[1.6in]">
      <h2 className="text-2xl xl:text-3xl text-white">
        Skontaktuj się z naszym specjalistą
      </h2>
      <Button className="fill-secondary">
        <CalendarIcon /> Zamów pomiar
      </Button>
    </section>
  );
}
