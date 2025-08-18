"use client";

import { bricolage, quick } from "@/utils/fonts";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Hiw = () => {
  const steps = [
    {
      title: "1. Set Your filters",
      desc: "Choose the languages, stack, activity level, and other preferences that matter to you.",
      img: "/works/filter.png",
    },
    {
      title: "2. Find matching projects",
      desc: "Our system will find the most relevant open source projects for you.",
      img: "/works/search.png",
    },
    {
      title: "3. Contribute and grow",
      desc: "Start contributing and grow your skills in real-world projects.",
      img: "/works/contribute.png",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 3000); // Change step every 3 seconds
    return () => clearInterval(interval);
  }, [steps.length]);
  return (
    <div className="relative border-[#202020] border-b ">
      {/* Left dashed pattern */}
      <div
        className="absolute w-[30px] sm:w-[45px] h-full border-r border-dashed border-[#202020]
        [background-image:repeating-linear-gradient(315deg,_#202020_0,_#202020_1px,_transparent_0,_transparent_50%)]
        [background-size:10px_10px] bg-fixed"
      ></div>

      {/* Right dashed pattern */}
      <div
        className="absolute w-[30px] sm:w-[45px] h-full border-l border-dashed border-[#202020]
        [background-image:repeating-linear-gradient(315deg,_#202020_0,_#202020_1px,_transparent_0,_transparent_50%)]
        [background-size:10px_10px] bg-fixed right-0"
      ></div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto border-[#202020] border-r flex flex-col lg:flex-row">
        {/* Text */}
        <div className="flex-1 order-2 md:order-0">
          {/* Desktop → show all steps */}
          <div className="hidden lg:block">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 sm:p-10 border-[#202020] border-r border-b space-y-1"
              >
                {/* Loading border */}
                <div className="absolute left-0 top-0 h-full w-[3px] bg-[#202020] overflow-hidden">
                  {active === index && (
                    <div className="h-full bg-purple-500 animate-fill" />
                  )}
                </div>

                <h2 className={`text-lg sm:text-xl ${bricolage}`}>
                  {step.title}
                </h2>
                <span className={`text-sm sm:text-base text-gray-400 ${quick}`}>
                  {step.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile → only active step */}
          <div className="block lg:hidden text-center mb-6">
            <h2 className={`text-lg text-white sm:text-xl mb-2 ${bricolage}`}>
              {steps[active].title}
            </h2>
            <p className={`text-xs mx-20 sm:text-base text-gray-300 ${quick}`}>
              {steps[active].desc}
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex flex-col items-center justify-center w-full md:w-[45%]">
          {/* Mobile image*/}
          <div className="relative w-[299px] h-[200px] sm:h-[300px] lg:hidden mb-6">
            <Image
              alt="Step image"
              src={steps[active].img}
              fill
              className="object-cover transition-opacity duration-500 "
              key={steps[active].img}
            />
          </div>

          {/* Mobile Loader */}
          <div className="relative md:hidden w-60 h-[3px] bg-[#202020] overflow-hidden my-4">
            <div
              className="absolute left-0 top-0 h-full bg-purple-500 animate-line "
              key={active}
            />
          </div>
          {/* Desktop image */}
          <div className="hidden lg:block relative w-full h-full">
            <Image
              alt="Step image"
              src={steps[active].img}
              fill
              className="object-cover transition-opacity duration-500"
              key={steps[active].img}
            />
          </div>
        </div>

        {/* Loader animation */}
        <style jsx>{`
          @keyframes fillHeight {
            from {
              transform: scaleY(0);
              transform-origin: top;
            }
            to {
              transform: scaleY(1);
              transform-origin: top;
            }
          }
          .animate-fill {
            animation: fillHeight 3s linear forwards;
          }
          @keyframes lineFill {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }
          .animate-line {
            animation: lineFill 3s linear forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Hiw;
