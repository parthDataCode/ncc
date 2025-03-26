/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface GalleryCardProps {
  imgSrc: string;
  twitter: string;
  insta: string;
  whatsapp: string;
  description: string;
}

interface ImageData {
  src: string;
  alt: string;
  height: number;
  width: number;
  route: string;
  category: string;
  title: string;
  data: string[];
}

const GalleryCard = ({
  imgSrc,
  twitter,
  insta,
  whatsapp,
  description,
}: GalleryCardProps) => {
  // Array of images for the gallery
  const images: ImageData[] = [
    {
      src: imgSrc,
      alt: "Gallery Image",
      height: 300,
      width: 400,
      route: "/image-route",
      category: "Category Name",
      title: "Image Title",
      data: [description, twitter, insta, whatsapp],
    },
  ];

  // State for tracking text visibility for each image
  const [isTextVisible, setIsTextVisible] = useState<boolean[]>(
    Array(images.length).fill(false)
  );

  // Toggle text visibility for the given index
  const revealText = (index: number) => {
    setIsTextVisible((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const overlayOpacity = 0.1;

  return (
    <div className="columns-1 md:columns-2 gap-8">
      {images.length > 0 &&
        images.map((item, index) => (
          <div key={index} className="mb-8 break-inside-avoid">
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => revealText(index)}
              onMouseLeave={() => revealText(index)}
            >
              <div
                className={`absolute bottom-0 left-0 bg-white text-white py-2 h-4/5 w-full transform transition-transform duration-1000 ease-in-out ${
                  isTextVisible[index]
                    ? "translate-y-0 text-opacity-100 bg-opacity-15"
                    : "translate-y-full text-opacity-0 bg-opacity-0"
                }`}
              >
                <div className="flex flex-col justify-evenly items-start gap-4 p-6">
                  {item.data.length > 0 &&
                    item.data.map((str, dataIndex) => (
                      <p
                        key={dataIndex}
                        className={`${
                          dataIndex % 2 === 0 ? "text-xl" : "text-lg"
                        }`}
                      >
                        {str}
                      </p>
                    ))}
                </div>
              </div>
              <Link className="relative w-full h-full" href={item.route}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  height={item.height}
                  width={item.width}
                  style={{ objectFit: "cover" }}
                  className="rounded"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }} // Replace opacity with background RGBA
                ></div>
              </Link>
            </div>
            <div className="flex flex-col justify-around pt-6 m-3">
              <p className="text-gray-500">{item.category}</p>
              <Link href={item.route}>
                <h2 className="text-2xl my-3">{item.title}</h2>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default GalleryCard;
