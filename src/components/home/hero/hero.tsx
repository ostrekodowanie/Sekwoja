import CalendarIcon from "@/assets/icons/calendar";
import Button from "../../ui/button";
import PhoneIcon from "@/assets/icons/phone";
import ImageSlider from "./image-slider";

export default function Hero() {
  return (
    <section className="bg-background-dark min-h-[85vh] lg:min-h-[70vh] lg:px-[12vw] 2xl:px-[16vw] flex flex-col lg:grid grid-cols-2 lg:items-center relative">
      <ImageSlider>
        <div className="flex flex-col gap-4 relative z-10 py-12 lg:py-0 px-[8vw] md:px-[12vw] lg:px-0 order-first">
          <h1 className="text-3xl xl:text-4xl 2xl:text-[40px] 2xl:leading-[46px] text-white">
            Stwórz swoją wymarzoną przestrzeń z naszymi meblami
          </h1>
          <p className="text-[#ECECEC]">
            Projektujemy i dostarczamy wyjątkowe meble, które nadadzą Twojemu
            wnętrzu niepowtarzalny charakter.
          </p>
          <div className="flex items-center gap-2 mt-6 flex-wrap">
            <Button className="fill-secondary w-max" variant="secondary">
              <PhoneIcon /> Zamów rozmowę
            </Button>
            <Button className="fill-secondary w-max">
              <CalendarIcon /> Zamów pomiar
            </Button>
          </div>
        </div>
      </ImageSlider>
    </section>
  );
}
