import Advantages from "@/components/home/advantages";
import Banner from "@/components/home/banner";
import Furniture from "@/components/home/furniture/furniture";
import Hero from "@/components/home/hero/hero";
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
      <Advantages />
      <Sofa />
      <Furniture />
      <Partners />
    </div>
  );
}
