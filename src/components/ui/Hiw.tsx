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
  }, []);
  return (
    <>
      <div className="relative mb-12 border-[#202020] border-b">
        {/* Left dashed pattern */}
        <div
          className="absolute w-[45px] h-full border-r border-dashed border-[#202020]
                  [background-image:repeating-linear-gradient(315deg,_#202020_0,_#202020_1px,_transparent_0,_transparent_50%)]
                  [background-size:10px_10px] bg-fixed"
        ></div>

        {/* Right dashed pattern */}
        <div
          className="absolute w-[45px] h-full border-l border-dashed border-[#202020]
                  [background-image:repeating-linear-gradient(315deg,_#202020_0,_#202020_1px,_transparent_0,_transparent_50%)]
                  [background-size:10px_10px] bg-fixed right-0"
        ></div>

        {/* Main content + image slot */}
        <div className="w-6xl mx-auto border-[#202020] border-r flex">
          {/* Text containers */}
          <div className="flex-1">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative p-10 border-[#202020] border-r border-b space-y-1"
              >
                {/* Loading border */}
                <div className="absolute left-0 top-0 h-full w-[3px] bg-[#202020] overflow-hidden">
                  {active === index && (
                    <div className="h-full bg-purple-500 animate-fill" />
                  )}
                </div>

                <h2 className={`text-xl ${bricolage}`}>{step.title}</h2>
                <span className={`text-sm text-gray-400 ${quick}`}>
                  {step.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Image slot */}
          <div className="relative flex items-center justify-center w-[45%] ">
            <Image
              alt="Step image"
              src={steps[active].img}
              fill
              className="object-cover transition-opacity duration-500"
              key={steps[active].img}
            />
          </div>

          {/* Tailwind animation */}
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
          `}</style>
        </div>
      </div>
    </>
  );
};

export default Hiw;
