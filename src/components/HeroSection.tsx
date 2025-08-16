import { quick, sans } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import Journey from "./Journey";
import HowitWorks from "./HowitWorks";
import Preview from "./Preview";
import Statistics from "./Statistics";
import Testimonials from "./Testimonial";
import Start from "./Cta";
import Footer from "./Footer";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="23"
                width="24"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                className="lucide lucide-terminal"
              >
                <polyline points="4 17 10 11 4 5"></polyline>
                <line y2="19" y1="19" x2="20" x1="12"></line>
              </svg>
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
      {/* Statistics section */}
      <Statistics />
      {/* Testimonial section */}
      <Testimonials />
      {/* Get Start section */}
      <Start />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default HeroSection;
