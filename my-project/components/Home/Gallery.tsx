/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import React from "react";

const DynamicPhotoGallery = () => {
  return (
    <div className="border border-4 border-solid-white relative flex items-center justify-center">
      <img
        src="https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2022/01/2022012562-scaled.jpg"
        alt=""
      />
      <div className="absolute top-0 left-0 bg-transparent flex items-stretch">
        <span className="text-xl font-semibold text-white bg-black p-2 px-3 flex items-center justify-center bg-opacity-70">
          PHOTO GALLERY
        </span>
        <Link
          href={"/photo-gallery"}
          className="text-sm text-white bg-red-400 p-2 px-3 flex items-center justify-center bg-opacity-70 hover:bg-opacity-100"
        >
          VIEW ALL
        </Link>
      </div>
    </div>
  );
};

const OurAdventureGalleryWrapper = () => {
  const data = [
    {
      name: "VIDEO GALLERY",
      logo: "https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2020/01/2020010344.png",
      ref: "/video-gallery",
    },
  ];
  return (
    <div className="">
      {data &&
        data.length &&
        data.map((item, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div className="border border-4 border-solid-white">
                <img
                  src="https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2022/01/2022013182-scaled.jpg"
                  alt=""
                />
              </div>
              <Link
                href={item.ref}
                className="flex flex-col items-center gap-3 bg-blue-500 hover:text-blue-500 transition transition-duration-5 hover:bg-white py-4"
              >
                <div className="h-[50px] w-[50px] border border-1 border-blue-400 bg-white flex items-center justify-center rounded-full">
                  <img src={item.logo} alt="" />
                </div>
                <span className="text-xl">{item.name}</span>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="bg-blue-900 gap-12 p-2 sm:p-5 md:px-24 flex flex-col items-center md:flex-row">
      <div className="w-full md:w-[50%]">
        <DynamicPhotoGallery />
      </div>
      <div className="w-full md:w-[50%]">
        <OurAdventureGalleryWrapper />
      </div>
    </div>
  );
};

export default Gallery;
