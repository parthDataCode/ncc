/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";

const data = [
  {
    year: "2019-2020",
    awards: [
      {
        sno: 1,
        name: "rdc pm rally",
        img: "/assets/dfc.jpg",
        date: "01/01/20XX",
      },
      {
        sno: 2,
        name: "rdc pm rally",
        img: "/assets/dfc.jpg",
        date: "01/01/20XX",
      },
      {
        sno: 3,
        name: "rdc pm rally",
        img: "/assets/dfc.jpg",
        date: "01/01/20XX",
      },
    ],
  },
  {
    year: "2020-2021",
    awards: [
      {
        sno: 1,
        name: "alc best cadet",
        img: "/assets/dfc.jpg",
        date: "01/01/20XX",
      },
      {
        sno: 2,
        name: "alc best cadet",
        img: "/assets/dfc.jpg",
        date: "01/01/20XX",
      },
      {
        sno: 3,
        name: "alc best cadet",
        img: "/assets/dfc.jpg",
        date: "01/01/20XX",
      },
    ],
  },
  {
    year: "2021-2022",
    awards: [
      {
        sno: 1,
        name: "ima selection",
        img: "/assets/dfc.jpg",
        date: "01/01/20XX",
      },
      {
        sno: 2,
        name: "ima selection",
        img: "/assets/dfc.jpg",
        date: "01/01/20XX",
      },
      {
        sno: 3,
        name: "ima selection",
        img: "/assets/dfc.jpg",
        date: "01/01/20XX",
      },
    ],
  },
  {
    year: "2022-2023",
    awards: [
      {
        sno: 1,
        name: "atc squad drill",
        img: "/assets/dfc.jpg",
        date: "01/01/20XX",
      },
      {
        sno: 2,
        name: "atc squad drill",
        img: "/assets/dfc.jpg",
        date: "01/01/20XX",
      },
      {
        sno: 3,
        name: "atc squad drill",
        img: "/assets/dfc.jpg",
        date: "01/01/20XX",
      },
    ],
  },
  {
    year: "2023-2024",
    awards: [
      {
        sno: 1,
        name: "abcabcabccc",
        img: "/assets/dfc.jpg",
        date: "01/01/20XX",
      },
      {
        sno: 2,
        name: "abcabcabccc",
        img: "/assets/dfc.jpg",
        date: "01/01/20XX",
      },
      {
        sno: 3,
        name: "abcabcabccc",
        img: "/assets/dfc.jpg",
        date: "01/01/20XX",
      },
    ],
  },
];

const HonoursAndAwards: React.FC = () => {
  // const router = useRouter();
  // const url = `${window.location.origin}${router.asPath}`;
  const url = 1;
  return (
    <div className="bg-white md:px-24 px-2 py-4">
      <span className="text-black">
        <span className="text-blue-400">Home</span> &gt; {url}
      </span>
      <h3 className="text-2xl md:text-3xl text-black font-w py-5 text-center md:text-left mx-2">
        HONOURS & AWARDS
      </h3>
      <div className="items-center grid grid-cols-1 gap-6 ">
        {data &&
          data.length &&
          data.map((item, index) => {
            return (
              <div key={index} className="border border-1 border-gray-100">
                <div className="p-3 text-white bg-black font-semiboold">
                  {item.year}
                </div>
                <div className="text-black">
                  {item.awards && item.awards.length
                    ? item.awards.map((awa, iindex) => {
                        return (
                          <>
                            <div
                              key={iindex}
                              className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 px-4"
                            >
                              <span className="flex gap-4 my-2 font-semibold">
                                S no.:{" "}
                                <span className="font-normal">{awa.sno}</span>
                              </span>
                              <span className="flex gap-4 my-2 font-semibold">
                                Name:{" "}
                                <span className="font-normal">{awa.name}</span>
                              </span>
                              <span className="flex gap-4 my-2 font-semibold">
                                Awards:{" "}
                                <img src={awa.img || ""} alt={"awardtype"} />
                              </span>
                              <span className="flex gap-4 my-2 font-semibold">
                                Date:{" "}
                                <span className="font-normal">{awa.date}</span>
                              </span>
                            </div>
                            <p className="bg-gray-200 w-full h-[1px] "></p>
                          </>
                        );
                      })
                    : "No data"}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HonoursAndAwards;
