/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
// import Carousel from "@/components/ui/Carousel.jsx";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "400px",
};

const newEventdata = [
  {
    link: "/",
    content: "NCC PUBLIC NOTICE: AUCTION New",
  },
  {
    link: "/",
    content: "Draft amendment to the recruitment rules of jsa and ssa",
  },
  {
    link: "/",
    content: "NCC ENROLMENT NOTICE: Batch 2025",
  },
  {
    link: "/",
    content: "NCC ENROLMENT NOTICE: Batch 2025",
  },
];

function WhatsNew() {
  const zoomInProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinity: true,
    indicators: false,
    arrows: false,
    prevArrow: (
      <div className="ml-10 hover:bg-blue-300 rounded-full p-2 ">
        <ChevronLeftIcon className="h-8 w-8 font-bold text-gray-600 cursor-pointer " />
      </div>
    ),
    nextArrow: (
      <div className="mr-10 hover:bg-blue-300 rounded-full p-2 ">
        <ChevronRightIcon className="h-8 w-8 font-bold text-gray-600 cursor-pointer " />
      </div>
    ),
  };
  return (
    <div className="flex flex-col sm:flex-row items-center p-4 py-10 md:px-32 bg-blue-400">
      <span className="font-semibold text-xl">Latest Updates</span>
      <div className="w-screen relative">
        <Slide {...zoomInProperties}>
          {newEventdata.map((data, index) => (
            <a
              key={index}
              className="mx-24 hover:text-red-700 w-full"
              href={data.link}
            >
              {data.content}
            </a>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default WhatsNew;
