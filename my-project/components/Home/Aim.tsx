import React from "react";
// import ButtonIcon from "../ui/buttons";

const Aim = () => {
  return (
    <div className="flex flex-col font-semibold gap-5 px-2 md:px-10 text-black">
      <h4 className="text-xl md:text-2xl">AIM OF NCC</h4>
      <p className="text-md w-[80%] md:w-[90%]">
        The ‘Aims’ of the NCC laid out in 1988 have stood the test of time and
        continue to meet the requirements expected of it in the current
        socio–economic scenario of the country. The NCC aims at developing
        character, comradeship, discipline, a secular outlook, the spirit.
      </p>
      {/* <ButtonIcon
        title={"Read More"}
        classname={
          "text-blue-400 border border-1 border-blue-400 w-[110px] hover:text-white hover:bg-blue-400"
        }
      /> */}
    </div>
  );
};

export default Aim;
