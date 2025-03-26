/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { usePathname } from 'next/navigation'
import data from "../../../data.json"
import React from 'react'
const page = () => {
  const Url = usePathname();
  const faqNo1 = Number(`${Url[5]}`);
  const faqNo2 = Number(`${Url[6]}`);
  return (
    <div className="bg-white md:px-24 px-2 py-4 mb-64">
      <span className="text-black">
        <span className="text-blue-400">Home</span> &gt; {Url}
      </span>
      <h3 className="text-2xl md:text-3xl text-black font-w py-5 text-center mx-2">
        {data[faqNo1].name}
      </h3>
      <h3 className="text-lg text-black py-5 text-left mx-2">
        {faqNo1}{faqNo2}{". "}{data[faqNo1].items[faqNo2].name}
      </h3>
      <h3 className="text-md text-black text-left mx-2">
        {" "}{data[faqNo1].items[faqNo2].description}
      </h3>
    </div>
  )
}

export default page
