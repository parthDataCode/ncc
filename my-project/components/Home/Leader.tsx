import React from "react";
import ButtonIcon from "../ui/buttons";
const Leader = () => {
  return (
    <div className="flex font-semibold flex-row text-white gap-7 bg-blue-900 px-3 md:px-5 py-10">
      <div className="flex flex-col gap-6 ">
        <h2 className="text-md md:text-xl">ANO</h2>
        <div className="bg-white h-[200px] w-[200px]"></div>
      </div>
      <div className="flex flex-col gap-6 h-full align-center mt-12">
        <h2 className="text-md md:text-xl font-normal">Lt Dr Vasim Khan</h2>
        <p className="text-sm md:text-md w-[80%] font-light md:w-full">
          Lieutenant Doctor Vasim Khan, has completed is PHD in Economics and
          currently serving as professor in School of Economics.
        </p>
        <ButtonIcon
          title={"Read More"}
          classname={
            "text-white border border-1 border-solid-white w-[110px] hover:text-blue-900 hover:bg-white"
          }
        />
      </div>
    </div>
  );
};

export default Leader;
