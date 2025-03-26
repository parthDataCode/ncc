/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Abc from "@/components/Home/HomeSection";
import Aim from "@/components/Home/Aim";
import Description from "@/components/Home/Description";
import ImpPeople from "@/components/Home/ImpPeople";
import AccessMenu from "@/components/Home/AccessMenu";
import Gallery from "@/components/Home/Gallery";
import Resources from "@/components/Home/Resources";
import Header from "@/components/Header/HeaderSection";
import HomeSlider from "@/components/Home/HomeSlider";
import Nav from "@/components/Navbar/Nav";
export default function HomeSection() {
  return (
    <div className="bg-white flex gap-4 flex-col overflow-x-hidden">
      <HomeSlider />\
      <Description />
      <ImpPeople />
      <AccessMenu />
      <Gallery />
      <Resources />
    </div>
  );
}
