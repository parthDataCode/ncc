// components/ImageViewer.tsx
import React from "react";
import Image from "next/image";

interface ImageViewerProps {
  selectedImage: string;
  onNext: () => void;
  onPrev: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  selectedImage,
  onNext,
  onPrev,
}) => {
  return (
    <div className="flex justify-center">
      <div className="relative ">
        <div className="w-[900px] h-[600px] overflow-hidden flex items-center justify-center">
          <Image
            src={selectedImage}
            alt={selectedImage}
            width={700} // Set the desired width
            height={300} // Set the desired height
            className="py-2"
          />
        </div>

        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-0 text-blue-400 py-14 px-4 md:py-28 md:px-5 text-3xl md:text-5xl"
          onClick={onPrev}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-0 text-blue-400 py-14 px-4 md:py-28 md:px-5 text-3xl md:text-5xl"
          onClick={onNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
