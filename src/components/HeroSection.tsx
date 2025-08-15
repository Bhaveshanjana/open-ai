import { quick, sans } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import Journey from "./Journey";
import HowitWorks from "./HowitWorks";
import Preview from "./Preview";

const HeroSection = () => {
  return (
    <>
      <div className="relative ">
        {/* Hero Image */}
        <div>
          <Image
            src="/bgmain.svg"
            alt="bgimage"
            height="200"
            width="200"
            className="w-full h-[50vh] md:h-[70vh] object-cover"
          />
        </div>
        {/* Hero Text */}
        <div className="z-10 bottom-5 md:bottom-0 flex flex-col text-center justify-center absolute inset-0 md:w-4xl mx-auto">
          <h1
            className={`text-4xl md:text-8xl font-medium tracking-tight ${sans}`}
          >
            Find your perfect Open-Source Repo
          </h1>
          <h2 className={`text-xs md:text-xl w-xs md:w-2xl mx-auto ${quick}`}>
            Find top open-source repos in seconds. Filter by your language,
            framework, or niche. Start contributing in seconds, not hours.
          </h2>
          {/* Get start Button */}
          <div className=" w-max mx-auto z-10 cursor-pointer bg-gradient-to-b from-[#5335FF] to-[#3C00FF] p-1 rounded-xl shadow-sm shadow-[#4d54a1] mt-7 group">
            <button className="flex gap-2 items-center justify-center hover:inset-shadow-sm hover:inset-shadow-blue-400 hover:border-blue-500 px-6 py-2 rounded-[10px] transition-all duration-200 text-white cursor-pointer">
              <span className="">Get Start</span>
            </button>
          </div>
        </div>
        {/* Black bg effect */}
        <div className="absolute h-[50%] w-full bg-gradient-to-t from-[#101010] via-transparent to-transparent bottom-0 left-1/2 -translate-x-1/2"></div>
      </div>
      {/* Journey section */}
      <Journey />
      {/* Preivew section */}
      <Preview />
      {/* How it works section */}
      <HowitWorks />
    </>
  );
};

export default HeroSection;
