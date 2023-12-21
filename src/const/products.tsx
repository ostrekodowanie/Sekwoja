import BathroomIcon from "@/assets/icons/furniture/bathroom";
import BedIcon from "@/assets/icons/furniture/bed";
import BedroomIcon from "@/assets/icons/furniture/bedroom";
import KitchenIcon from "@/assets/icons/furniture/kitchen";
import LivingRoomIcon from "@/assets/icons/furniture/living-room";
import OfficeIcon from "@/assets/icons/furniture/office";
import ShopIcon from "@/assets/icons/furniture/shop";
import WardrobeIcon from "@/assets/icons/furniture/wardrobe";

export const CATEGORIES: Category[] = [
  {
    title: "Szafy",
    link: "/",
    icon: <WardrobeIcon />,
  },
  {
    title: "Sypialnie",
    link: "/",
    icon: <BedroomIcon />,
  },
  {
    title: "Łóżka tapicerowane",
    link: "/",
    icon: <BedIcon />,
  },
  {
    title: "Biurowe",
    link: "/",
    icon: <OfficeIcon />,
  },
  {
    title: "Kuchenne",
    link: "/",
    icon: <KitchenIcon />,
  },
  {
    title: "Łazienkowe",
    link: "/",
    icon: <BathroomIcon />,
  },
  {
    title: "Pokojowe",
    link: "/",
    icon: <LivingRoomIcon />,
  },
  {
    title: "Sklepowe",
    link: "/",
    icon: <ShopIcon />,
  },
];
