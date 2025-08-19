"use client";

import React, { useEffect, useState } from "react";
import { FlickeringGrid } from "./ui/bg";
import { manrope, roboto, sans } from "@/utils/fonts";
import RoataingWheel from "./ui/RoataingWheel";
import AnimatedCards from "./ui/Cards";
import { AnimatePresence, motion } from "framer-motion";

const Journey = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => (prev >= boxes.length ? 0 : prev + 1));
    }, 1000); // 1s delay per box

    return () => clearInterval(interval);
  });
  const boxes = [
    {
      title: "OSS Google Docs!",
      subtitle: "Lucid",
      svg: (
        <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            className="w-6"
          >
            <path
              d="M15.1363 14L11.1569 14L11.1567 7.26634L10.3911 7.26634C9.69203 7.26634 9.02162 7.68357 8.52734 8.42625L5.14605 12.8401C4.65177 13.5828 3.98136 14 3.28232 14L0.00027733 14L0 6.73366H1.46289C2.1619 6.73366 2.83228 6.31647 3.32655 5.57387L6.70824 1.15984C7.20251 0.41725 7.87288 6.14688e-05 8.57188 5.05757e-05L11.8536 0L11.8539 6.73366L17 6.73366V11.6754C17 12.4361 16.8315 13.2586 16.1707 13.6822C15.8468 13.8899 15.4953 14 15.1363 14Z"
              fill="black"
            ></path>
          </svg>
        </div>
      ),
    },
    {
      title: "AI Research Hub",
      subtitle: "OpenAI",
      svg: (
        <div className=" w-9 h-9 bg-black rounded-xl flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 191 191"
            fill="none"
            className="w-6"
          >
            <path
              d="M38.125 190.625V152.5H0V38.125H38.125V0H152.5V38.125H190.625V152.5H152.5V190.625H38.125ZM38.125 114.375H76.25V150.975H152.5V76.25H114.375V114.375H76.25V76.25H114.375V39.65H38.125V114.375Z"
              fill="white"
            ></path>
          </svg>
        </div>
      ),
    },
    {
      title: "Next.js Starter Kit",
      subtitle: "Vercel",
      svg: (
        <div className=" w-9 h-9 bg-black rounded-xl flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 206 168"
            fill="none"
            className="w-6"
          >
            <path
              d="M205.864 66.263h-76.401V0h-24.684v71.897c0 7.636 3.021 14.97 8.391 20.373l62.383 62.777 17.454-17.564-46.076-46.365h58.948v-24.84l-.015-.015ZM12.872 30.517l46.075 46.365H0v24.84h76.4v66.264h24.685V96.089c0-7.637-3.021-14.97-8.39-20.374l-62.37-62.762-17.453 17.564Z"
              fill="#EFEFEF"
            ></path>
          </svg>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="relative ">
        <FlickeringGrid
          className="z-0 overflow-x-hidden inset-0 size-full"
          squareSize={3}
          gridGap={6}
          color="#6c4ceb"
          maxOpacity={0.2}
          flickerChance={0.1}
          height={180}
          width={1540}
        />
        <div className="md:h-full h-44 w-52 md:w-5xl bg-black blur-2xl rounded-full absolute flex  justify-center items-center inset-0 mx-auto"></div>
        <div className="flex justify-center text-center items-center inset-0 absolute mx-16">
          <span className={`${roboto} text-white text-2xl md:text-5xl `}>
            Supercharge Your Open Source Journey
          </span>
        </div>
      </div>
      {/* 3 box's */}
      <div className="border-b-[1px] border-t-[1px] border-[#202020] mb-6 ">
        <div className="relative flex flex-col md:flex-row w-full mx-auto px-1  md:h-[70vh]">
          {/* 1st box */}
          <div className="w-full md:w-1/3 border-b-[1px] md:border-b-0 md:border-r-[1px] border-[#202020] p-2">
            <div className="relative border border-dashed border-[#202020] h-[68vh] p-7">
              {/* Grid effect */}
              <FlickeringGrid
                color="#584545"
                squareSize={2}
                gridGap={8}
                maxOpacity={0.2}
                className="absolute inset-1.5"
              />
              {/* Text */}
              <div>
                <p
                  className={`text-2xl md:text-3xl tracking-[-0.07em] ${sans}`}
                >
                  Personalized Recommendations
                </p>
                <p className={`text-gray-400 text-xs md:text-base ${manrope}`}>
                  Get personalized repos you can contribute to.
                </p>
              </div>

              {/* Animated cards */}
              <div className="mt-6 p-2">
                <AnimatePresence>
                  {boxes.slice(0, visibleCount).map((box) => (
                    <motion.div
                      key={box.title}
                      className="flex justify-start items-center bg-gradient-to-t from-[#212121f1] to-[#2e2c2c24] rounded-2xl p-4 mt-4 backdrop-blur-md border border-[#3d3a3a5c]"
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 50, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      <div className="flex gap-5">
                        {/* Icon's */}
                        <div className="flex items-center">
                          <span>{box.svg}</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm md:text-base">
                            {box.title}
                          </p>
                          <span className="text-xs md:text-sm text-gray-400">
                            {box.subtitle}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* 2nd box */}
          <div className="relative w-full md:w-1/3 border-b-[1px] md:border-b-0 md:border-r-[1px] border-[#202020] p-2  overflow-hidden">
            <div className="border border-dashed border-[#202020] md:h-[68vh] ">
              <div className="absolute inset-2">
                <FlickeringGrid
                  color="#584545"
                  squareSize={2}
                  gridGap={6}
                  maxOpacity={0.2}
                  className=""
                />
              </div>

              {/* Wheel wrapper */}
              <div className="flex items-center justify-center overflow-hidden">
                <div className="w-full aspect-square relative">
                  <RoataingWheel />
                </div>
              </div>
            </div>
          </div>

          {/* 3rd box */}
          <div className="relative w-full md:w-1/3 p-2 ">
            <div className="border border-dashed border-[#202020] h-[50vh] md:h-full">
              <div className="absolute inset-2">
                <FlickeringGrid
                  color="#584545"
                  squareSize={2}
                  gridGap={6}
                  maxOpacity={0.2}
                  className=""
                />
              </div>
              <div className="p-7">
                <p className={`text-2xl md:text-3xl tracking-tight ${sans}`}>
                  Precision Filters
                </p>
                <p className={`text-gray-400 text-xs md:text-base ${manrope}`}>
                  Zero in on projects by language, stack and activity level.
                </p>
              </div>
              <div className="mx-4 ">
                <AnimatedCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
