"use client";

import { bricolage, edu, quick } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const NavText = [
    {
      name: "Features",
      href: "#Features",
    },
    {
      name: "Demo",
      href: "#Demo",
    },
    {
      name: "How it Work",
      href: "#How it Work",
    },
    {
      name: "Stats",
      href: "#Stats",
    },
    {
      name: "Contact",
      href: "#Contact",
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="flex justify-center">
      <div
        className={`w-xs py-1 md:w-5xl mx-auto md:gap-7 rounded-2xl mt-7 z-50 fixed transition-all duration-500 transform
    ${
      isScrolled
        ? "opacity-100 translate-y-0 bg-white/5 backdrop-blur-xl border border-[#ffffff1f] shadow-lg shadow-black/20"
        : "opacity-0 -translate-y-10 pointer-events-none"
    }
  `}
      >
        <div className="flex justify-between p-1.5 md:p-3 px-2 items-center md:mx-3">
          {/* Nav logo */}
          <div className="flex items-center gap-2">
            <Image alt="Navlogo" height="40" width="40" src="/navlogo.svg" className="size-7"/>
            <span className={`${edu} text-lg md:text-2xl tracking-wider text-white w-20`}>OpenSphere</span>
          </div>
          {/* Links */}
          <div className="flex list-none gap-6">
            {NavText.map((data, index) => (
              <li key={index} className={`${quick} cursor-pointer`}>
                <Link
                  href={data.href}
                  className={` hover:text-blue-500  transition-all duration-200 hidden md:block text-gray-100 ${quick} `}
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </div>
          {/* Get start Button */}
          <div className="z-10 cursor-pointer bg-gradient-to-b from-[#5335FF] to-[#3C00FF] p-1 rounded-xl shadow-sm shadow-[#4d54a1] group">
            <button className="flex gap-2 items-center justify-center hover:inset-shadow-sm hover:inset-shadow-blue-400 hover:border-blue-500 px-5  md:px-4 md:py-1 rounded-[10px] transition-all duration-200 text-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                className="size-7"
              >
                <polyline points="4 17 10 11 4 5"></polyline>
                <line y2="19" y1="19" x2="20" x1="12"></line>
              </svg>
              <span className={`${bricolage} text-xs md:text-lg`}>Get Start</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
