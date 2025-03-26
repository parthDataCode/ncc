/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import ProfileCard from "../ui/ProfileCard";
import Header from "../Header/HeaderSection";
import Nav from "../Navbar/Nav";
import { useRouter } from "next/router";

const data = [
  {
    name: "SGT SAKSHI LAAD",
    description: "RDC 24 KP",
    imageSrc: "/assets/images/logo.jpg",
    headingLink: "/",
    cardClass: "",
    batch: "2021",
    post: "",
  },
  {
    name: "UO ASMI SHRIVASTAVA",
    description: "TSC ALL INDIA SHOOTING GOLD",
    imageSrc: "/assets/images/logo.jpg",
    headingLink: "/",
    cardClass: "",
    batch: "2021",
    post: "",
  },
  {
    name: "SUO JEET MODI",
    description: "RDC 24 PMR YEP KRYGS",
    imageSrc: "/assets/images/logo.jpg",
    headingLink: "/",
    cardClass: "",
    batch: "2022",
    post: "",
  },
  {
    name: "SUO TANISH",
    description: "RDC 25 GOH",
    imageSrc: "/assets/images/logo.jpg",
    headingLink: "/",
    cardClass: "",
    batch: "2022",
    post: "",
  },

  {
    name: "CDT PARTH SHARMA",
    description: "RDC 25 KP",
    imageSrc: "/assets/images/logo.jpg",
    headingLink: "/",
    cardClass: "",
    batch: "2023",
    post: "",
  },
  {
    name: "SUO ARYA MISHRA",
    description: "RDC 25 PMR",
    imageSrc: "/assets/images/logo.jpg",
    headingLink: "/",
    cardClass: "",
    batch: "2023",
    post: "",
  },

  // {
  //   name: "JEET MODI",
  //   description: "RDC 24 YEP KRYGS",
  //   imageSrc: "/assets/images/logo.jpg",
  //   headingLink: "/",
  //   cardClass: "",
  //   batch: "2022",
  //   post: "",
  // },
  // {
  //   name: "JEET MODI",
  //   description: "RDC 24 YEP KRYGS",
  //   imageSrc: "/assets/images/logo.jpg",
  //   headingLink: "/",
  //   cardClass: "",
  //   batch: "2022",
  //   post: "",
  // },
  // {
  //   name: "JEET MODI",
  //   description: "RDC 24 YEP KRYGS",
  //   imageSrc: "/assets/images/logo.jpg",
  //   headingLink: "/",
  //   cardClass: "",
  //   batch: "2022",
  //   post: "",
  // },
];

const AluminiSection: React.FC = () => {
  // const router = useRouter();
  // const url = `${window.location.origin}${router.asPath}`;
  const url = 1;
  return (
    <div className="bg-white md:px-24 px-2 py-4">
      <span className="text-black">
        <span className="text-blue-400">Home</span> &gt; {url}
      </span>
      <h3 className="text-2xl md:text-3xl text-black font-w py-5 text-center md:text-left mx-2">
        PROMINENT ALUMNI
      </h3>
      <div className="bg-blue-500 w-full text-black text-lg p-2 md:mx-2 mb-3">
        Leaders
      </div>
      <div className="items-center grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 ">
        {data &&
          data.length &&
          data.map((item, index) => {
            return (
              <>
                <ProfileCard
                  name={item.name || "JEET MODI"}
                  description={item.description || "RDC 24 YEP KRYGS"}
                  imageSrc={item.imageSrc || "/assets/images/logo.jpg"}
                  headingLink={item.headingLink || "/"}
                  cardClass={item.cardClass || ""}
                  batch={item.batch || "2022"}
                  post={item.post || ""}
                />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default AluminiSection;
