import TriangleIcon from "@/assets/icons/triangle";
import Button from "../ui/button";

export default function Sofa() {
  return (
    <section className="px-[8vw] md:px-[12vw] 2xl:px-[16vw] py-[0.8in] lg:py-[2in] md:grid grid-cols-2 items-center bg-[#F7F3E5]/75 relative">
      <div className="flex flex-col gap-4 relative z-10">
        <h2 className="font-medium text-2xl xl:text-3xl mb-4 select-none max-w-[6in]">
          Odkryj naszą kolekcję{" "}
          <div className="inline-block after:block after:h-[3px] after:bg-primary after:w-full after:max-w-[75%] after:transition-all hover:after:max-w-[50%]">
            <span>nowoczesnych sof</span>
          </div>{" "}
          z nutą retro
        </h2>
        <p className="text-sm text-[#0C1611]/80">
          Nasza najnowsza kolekcja sof to połączenie świeżości nowoczesnego
          designu z urokiem retro. Ciepłe odcienie i wyrafinowane kształty mebli
          tworzą harmonijną kompozycję, która nie tylko przyciąga uwagę, ale
          także przyczynia się do stworzenia przytulnego i stylowego wnętrza.
        </p>
        <p className="text-sm text-[#0C1611]/80">
          Dzięki precyzyjnemu wykonaniu i zastosowaniu wysokiej jakości
          materiałów, nasze sofy nie tylko wyglądają doskonale, ale również
          zapewniają niezrównany komfort użytkowania. To idealne rozwiązanie dla
          tych, którzy cenią sobie elegancję i wygodę w jednym.
        </p>
        <Button className="mt-4 w-max" variant="secondary">
          Pokaż więcej zdjęć
        </Button>
      </div>
      <div className="absolute -left-8 top-0 bottom-0 w-full max-w-[45vw]">
        <TriangleIcon />
      </div>
    </section>
  );
}
