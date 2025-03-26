/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import React from "react";

const Tag = () => {
  const data = [
    { name: "HONOURS AND AWARDS", route: "/honours-awards" },
    { name: "NCC ENROLMENT", route: "/ncc-enrolment" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-64">
      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <>
            <div key={index} className="flex flex-col items-center gap-5 my-4">
              <Link href={item.route || ""}>
                <div className="h-[150px] w-[150px] rounded-full text-center shadow-md border border-2 border-white-100 bg-gray-100 flex items-center justify-center hover:bg-gray-300 active:bg-blue-300 transform transition duration-500 ease-in-out">
                  <img
                    src="https://cdnbbsr.s3waas.gov.in/s307811dc6c422334ce36a09ff5cd6fe71/uploads/2021/09/2021091624.png"
                    alt=""
                  />
                </div>
              </Link>
              <span className="text-xl text-blue-300">{item.name}</span>
            </div>
          </>
        ))}
    </div>
  );
};

const AccessMenu = () => {
  return (
    <div className="bg-white py-10 text-black px-8">
      <Tag />
    </div>
  );
};

export default AccessMenu;
