import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative ">
      {/* Hero Image */}
      <div>
        <Image
          src="/bgmain.svg"
          alt="bgimage"
          height="200"
          width="200"
          className="w-full h-[70vh] object-cover"
        />
      </div>
      {/* Hero Text */}
      <div className="z-10 bottom-28 md:bottom-0 flex flex-col text-center justify-center absolute inset-0 md:w-4xl mx-auto">
        <h1 className="text-4xl md:text-8xl font-semibold">
          Find your perfect Open-Source Repo
        </h1>
        <h2 className="text-xs md:text-xl w-xs md:w-xl mx-auto">
          Find top open-source repos in seconds. Filter by your language,
          framework, or niche. Start contributing in seconds, not hours.
        </h2>
        <div>
          <button className="mt-7 bg-blue-700 px-5 p-2 rounded-lg">
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
