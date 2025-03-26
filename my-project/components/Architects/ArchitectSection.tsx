/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import ProfileCard from "../ui/ProfileCard";
import Header from "../Header/HeaderSection";
import Nav from "../Navbar/Nav";
import { useRouter } from "next/router";

const data = [
  {
    name: "COL AMARJEET SINGH RANA",
    post: "COMMANDING OFFICER",
    description: "2MP ARMD SQN NCC DAVV INDORE",
    imageSrc: "/assets/images/logo.jpg",
    headingLink: "/",
    cardClass: "",
    batch: "2022",
  },
  {
    name: "VC RAKESH SINGHAI",
    post: "VICE CHANCELLOR",
    description: "DAVV INDORE",
    imageSrc: "/assets/images/logo.jpg",
    headingLink: "/",
    cardClass: "",
    batch: "2022",
  },
  {
    name: "FR. VC RENU JAIN",
    post: "FORMER VICE CHANCELLOR",
    description: "DAVV INDORE",
    imageSrc: "/assets/images/logo.jpg",
    headingLink: "/",
    cardClass: "",
    batch: "2022",
  },
  {
    name: "Lt. Dr. VASIM KHAN",
    post: "ASSITANT NCC OFFICER",
    description: "NCC DAVV INDORE",
    imageSrc: "/assets/images/logo.jpg",
    headingLink: "/",
    cardClass: "",
    batch: "2022",
  },
];

const ArchitectSection: React.FC = () => {
  // const router = useRouter();
  // const url = `${window.location.origin}${router.asPath}`;
  const url = 1;
  return (
    <div className="bg-white md:px-24 px-2 py-4">
      <span className="text-black">
        <span className="text-blue-400">Home</span> &gt; {url}
      </span>
      <h3 className="text-2xl md:text-3xl text-black font-w py-5 text-center md:text-left mx-2">
        ARCHITECTS
      </h3>
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

export default ArchitectSection;
