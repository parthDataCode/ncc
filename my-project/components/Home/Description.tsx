import React from "react";
import Aim from "./Aim";
import Pledge from "./Pledge";
import Leader from "./Leader";

const Description = () => {
  return (
    <div className="flex flex-col md:flex-row align-center space-evenly py-5 bg-white gap-4 md:pl-16">
      <div className="flex flex-col gap-8 w-full md:w-[50%] ">
        <Aim />
        <Pledge />
      </div>
      <div className="w-full md:w-[50%]">
        <Leader />
      </div>
    </div>
  );
};

export default Description;
