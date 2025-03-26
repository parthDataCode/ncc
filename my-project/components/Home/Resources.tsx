import React from "react";

import data from "../../data.json";

const Resources = () => {
  return (
    <div className="bg-gray-100 p-2 md:p-4 my-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:px-24">
      {data.map((item, index) =>
        item.name ? (
          <div key={index} className="bg-inherit mt-3">
            <h3 className="p-3 text-xl text-black font-semibold mb-4 bg-blue-400">
              {item.name}
            </h3>
            <ul className="list-disc ml-5 space-y-2 p-4">
              {item.items?.map((obj) => (
                <li key={obj.index} className="text-gray-700 text-sm font-thin">
                  <a
                    href={`/faq/${index}${obj.index}`}
                    className="hover:text-blue-300"
                  >
                    {obj.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Resources;
