// pages/index.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import ImageViewer from "@/components/PhotoGallery/ImageViewer";

type ImageProps = {
  src: string;
  alt: string;
};

export default function PhoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images: ImageProps[] = [
    {
      src: "https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2022/02/2022020182.jpg",
      alt: "Image 1",
    },
    {
      src: "https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2022/01/2022013182-scaled.jpg",
      alt: "Image 2",
    },
    {
      src: "https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2022/02/2022020182.jpg",
      alt: "Image 1",
    },
    {
      src: "https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2022/01/2022013182-scaled.jpg",
      alt: "Image 2",
    },
    {
      src: "https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2022/02/2022020182.jpg",
      alt: "Image 1",
    },
    {
      src: "https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2022/01/2022013182-scaled.jpg",
      alt: "Image 2",
    },
  ];

  const handleImageClick = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setSelectedImage(images[nextIndex].src);
    setCurrentImageIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setSelectedImage(images[prevIndex].src);
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {selectedImage && (
        <ImageViewer
          selectedImage={selectedImage}
          onNext={handleNextImage}
          onPrev={handlePreviousImage}
        />
      )}
      <div className="flex flex-row flex-wrap gap-3 justify-center px-3 md:px-0">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={160} // Set the desired width
            height={160} // Set the desired height
            className="border-4 border-solid border-blue-900 w-40 cursor-pointer hover:border-blue-500"
            onClick={() => handleImageClick(image.src, index)}
          />
        ))}
      </div>
    </div>
  );
}
