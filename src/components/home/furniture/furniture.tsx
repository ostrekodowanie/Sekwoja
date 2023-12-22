import { brushPattern } from "@/assets/images";
import Button from "../../ui/button";
import ImageSlider from "./image-slider";

export default function Furniture() {
  return (
    <section className="bg-background-dark flex flex-col xl:grid grid-cols-[4fr_5fr]">
      <ImageSlider>
        <div
          className="py-[1in] lg:py-[2in] px-[8vw] md:pl-[6vw] md:pr-[12vw] 2xl:pl-[8vw] 2xl:pr-[16vw]"
          style={{
            backgroundImage: `url(${brushPattern.src})`,
          }}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl xl:text-3xl mb-4 select-none text-white">
              Zaaranżujmy twoją przestrzeń razem -{" "}
              <div className="inline-block after:block after:h-[3px] after:bg-primary after:w-full after:max-w-[75%] after:transition-all hover:after:max-w-[50%] after:ml-auto">
                <span>meble najwyższej jakości</span>
              </div>
            </h2>
            <p className="text-sm text-white/80">
              Nasza najnowsza kolekcja stołów i krzeseł to połączenie
              funkcjonalności, elegancji oraz wyjątkowego designu. Niezależnie
              od tego, czy szukasz idealnych mebli do jadalni, czy potrzebujesz
              nowego zestawu do pracy, nasze produkty spełnią Twoje oczekiwania.
            </p>
            <p className="text-sm text-white/80">
              Każdy nasz stół jest starannie wykonany z najwyższej jakości
              materiałów, co gwarantuje trwałość i niepowtarzalny styl. Nasze
              krzesła natomiast zachwycają nie tylko komfortem, ale także
              niebanalnym designem, który doda charakteru Twojemu wnętrzu.
            </p>
            <Button className="mt-4 w-max" variant="secondary">
              Pokaż więcej zdjęć
            </Button>
          </div>
        </div>
      </ImageSlider>
    </section>
  );
}
