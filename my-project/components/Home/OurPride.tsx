import React from "react";
import ButtonIcon from "../ui/buttons";
import Link from "next/link";

const OurPride = () => {
  return (
    <div className="text-black flex flex-col md:flex-row gap-5 p-5 m-2 shadow-lg border border-2 border-gray-100">
      <div className="flex flex-col items-center align-center ">
        <img
          src="https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2020/01/2020010359.png"
          alt=""
          className="h-[71px] w-[100px]"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="text-lg text-gray-700">OUR PRIDE</h4>
        <p className="text-sm font-light">
          A few amongst us created their mark on the world stage by acheiving
          the uncommon. Meet these inspiring men and women.
        </p>
        <Link href={"/alumni"}>
          <ButtonIcon
            title={"Read More"}
            classname={
              "text-blue-400 border border-1 border-blue-400 w-[110px] hover:text-white hover:bg-blue-400"
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default OurPride;
