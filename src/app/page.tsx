import Banner from "@/components/home/banner";
import Hero from "@/components/home/hero";
import Kitchen from "@/components/home/kitchen";
import Opinions from "@/components/home/opinions";
import Partners from "@/components/home/partners";
import Products from "@/components/home/products";
import Sofa from "@/components/home/sofa";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Products />
      <Banner />
      <Opinions />
      <Kitchen />
      <Sofa />
      <Partners />
    </div>
  );
}
