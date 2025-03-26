/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import WhatsNew from "./WhatsNew";

const images = [
  "https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2022/07/2022072142.jpg",
  "https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2022/02/2022020148.jpg",
  "https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2022/07/2022072142.jpg",
  "https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2022/02/2022020148.jpg",
];
const HomeSlider = () => {
  const zoomInProperties = {
    scale: 1,
    duration: 3000,
    transitionDuration: 300,
    infinity: true,
    indicators: false,
    prevArrow: (
      <div className="ml-10 top-1/2">
        <ChevronLeftIcon className="h-8 w-8 font-bold text-gray-600 cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="mr-10 top-1/2">
        <ChevronRightIcon className="h-8 w-8 font-bold text-gray-600 cursor-pointer" />
      </div>
    ),
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full items-center">
        <div className="bg-red-200 max-w-screen flex justify-center items-center relative">
          <div className="w-screen relative">
            <Zoom {...zoomInProperties}>
              {images.map((each, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-full"
                >
                  <img
                    src={each}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[300px] rounded-lg"
                  />
                </div>
              ))}
            </Zoom>
          </div>
        </div>
      </div>
      <WhatsNew />
    </div>
  );
};

export default HomeSlider;
