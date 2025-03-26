/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProfileCard = ({
  name,
  description,
  imageSrc,
  headingLink,
  cardClass,
  batch,
  post,
}: Readonly<{
  name: string;
  description: string;
  imageSrc: string;
  headingLink: string;
  cardClass: string;
  batch: string;
  post: string;
}>) => {
  return (
    <>
      <div
        className={`flex flex-col items-center p-4 bg-white rounded max-w-[300px] overflow-x-hidden shadow-lg border border-1 border-gray-300 m-2 ${cardClass}`}
      >
        <div className="relative h-[200px] w-[250px] flex justify-center items-center rounded">
          <Image
            src={imageSrc}
            alt="postImage"
            fill={true}
            objectFit="cover"
            className="flex justify-center items-center rounded border border-1"
          />
        </div>
        <div className="flex flex-col p-4 min-w-[200px]">
          <Link href={headingLink || ""} target="_blank">
            <h3 className="text-lg lg:text-xl text-center text-black">
              {name}
            </h3>
            <h3 className="text-sm lg:text-xl text-center text-black">
              {post}
            </h3>
            <h3 className="text-sm lg:text-xl min-h-[60px] text-center text-black">
              {description}
            </h3>
            <h3 className="text-sm lg:text-xl  text-center text-black">
              {batch}
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
