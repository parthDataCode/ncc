"use client";

import React, { useState } from "react";
// import Image from "next/image";
import Link from "next/link";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type RouteObject = {
  src: string;
  name: string;
};

type NavbarProps = {
  routing: boolean;
  routingLink: Array<RouteObject>;
};

const Nav: React.FC<NavbarProps> = ({ routing, routingLink }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative z-10 text-black bg-gray-100">
      <div className="relative flex justify-between items-center bg-white">
        <div className="flex flex-col md:flex-row justify-between md:items-center w-screen static z-60">
          <div
            className={`w-3/4 md:w-auto h-full md:mx-24 md:h-auto transition-transform transform ${
              menuOpen ? "translate-x-0 w-full" : "-translate-x-full"
            } md:translate-x-0 z-40 md:static flex gap-8 flex-row md:justify-center md:items-center md:opacity-100 md:gap-8 px-16 md:px-3 ease-in duration-500`}
          >
            <ul
              className={`flex flex-col gap-8 md:flex-row md:justify-center md:items-center px-4 md:px-3 ease-in duration-500`}
            >
              {routing
                ? routingLink && routingLink.length
                  ? routingLink.map((link, index) => (
                      <li key={index} className="hover:text-theme-text-100">
                        <Link
                          href={link.src}
                          onClick={() => {
                            toggleMenu();
                          }}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))
                  : null
                : null}
            </ul>
            {/* <div className="absolute right-10 top-10 md:top-auto md:right-auto">
              <XMarkIcon
                className={`${
                  menuOpen ? "" : "hidden"
                } -mr-2 h-8 w-8 cursor-pointer md:hidden`}
                aria-hidden="true"
                onClick={toggleMenu}
              />
            </div> */}
          </div>
        </div>
        {/* <div className="absolute right-10 top-25 md:top-auto md:right-auto">
          <Bars3Icon
            className={`${
              menuOpen ? "hidden" : ""
            } -mr-2 h-8 w-8 cursor-pointer md:hidden`}
            aria-hidden="true"
            onClick={toggleMenu}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Nav;
