import CalendarIcon from "@/assets/icons/calendar";
import Button from "../../ui/button";
import PhoneIcon from "@/assets/icons/phone";
import ImageSlider from "./image-slider";

export default function Hero() {
  return (
    <section className="bg-background-dark min-h-[75vh] px-[8vw] md:px-[12vw] 2xl:px-[16vw] md:grid grid-cols-2 items-center relative">
      <ImageSlider>
        <div className="flex flex-col gap-4 relative z-10">
          <h1 className="text-3xl xl:text-4xl 2xl:text-[40px] 2xl:leading-[46px] text-white">
            Stwórz swoją wymarzoną przestrzeń z naszymi meblami
          </h1>
          <p className="text-[#ECECEC]">
            Projektujemy i dostarczamy wyjątkowe meble, które nadadzą Twojemu
            wnętrzu niepowtarzalny charakter.
          </p>
          <div className="flex items-center gap-2 mt-6">
            <Button className="fill-secondary" variant="secondary">
              <PhoneIcon /> Zamów rozmowę
            </Button>
            <Button className="fill-secondary">
              <CalendarIcon /> Zamów pomiar
            </Button>
          </div>
        </div>
      </ImageSlider>
    </section>
  );
}
