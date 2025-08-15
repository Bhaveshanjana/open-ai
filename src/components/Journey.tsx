"use client";

import React from "react";
import { FlickeringGrid } from "./ui/bg";
import { edu, michorma, roboto, sans } from "@/utils/fonts";
import RoataingWheel from "./ui/RoataingWheel";
import AnimatedCards from "./ui/Cards";
import { motion } from "framer-motion";

const Journey = () => {
  const boxes = [
    { title: "OSS Google Docs!", subtitle: "Lucid" },
    { title: "AI Research Hub", subtitle: "OpenAI" },
    { title: "Next.js Starter Kit", subtitle: "Vercel" },
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
        <div className="flex justify-center text-center items-center inset-0 absolute text-2xl md:text-5xl">
          <span className={`${roboto} `}>
            Supercharge Your Open Source Journey
          </span>
        </div>
      </div>
      {/* 3 box's */}
      <div className="border-b-[1px] border-t-[1px] border-gray-900 mb-6 ">
        <div className="relative flex w-full mx-auto px-4 h-full">
          {/* 1st box */}
          <div className="w-full border-r-[1px] border-gray-900 p-2">
            <div className="relative border border-dashed border-gray-900 h-full p-7">
              {/* Grid effect */}
              <FlickeringGrid
                color="#8bcb31"
                squareSize={2}
                gridGap={8}
                maxOpacity={0.1}
                className="absolute inset-1.5"
              />

              {/* Text */}
              <div className={`${sans}`}>
                <p className="text-3xl tracking-[-0.07em]">
                  Personalized Recommendations
                </p>
                <p className="text-gray-400">
                  Get personalized repos you can contribute to.
                </p>
              </div>

              {/* Animated cards */}
              <div className="mt-6 p-2">
                {boxes.map((box, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-start items-center bg-gradient-to-t from-[#212121f1] to-[#2e2c2c24] rounded-2xl p-4 mt-4 backdrop-blur-md border border-[#3d3a3a5c]"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.3, // each one appears after the previous
                      ease: "easeOut",
                    }}
                  >
                    <div>
                      <p className="font-medium">{box.title}</p>
                      <span className="text-sm text-gray-400">
                        {box.subtitle}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* 2nd box */}
          <div className="relative  w-full border-r-[1px] border-gray-900 p-2 overflow-hidden ">
            <div className="border border-dashed border-gray-900 ">
              <div className="absolute inset-2">
                <FlickeringGrid
                  color="#8bcb31"
                  squareSize={2}
                  gridGap={6}
                  maxOpacity={0.1}
                  className=""
                />
              </div>

              {/* Wheel wrapper */}
              <div className=" flex items-center justify-center overflow-hidden">
                <div className="w-full aspect-square relative">
                  <RoataingWheel />
                </div>
              </div>
            </div>
          </div>
          {/* 3rd box */}
          <div className="relative w-full p-2 ">
            <div className="border border-dashed border-gray-900 h-full">
              <div className="absolute inset-2">
                <FlickeringGrid
                  color="#8bcb31"
                  squareSize={2}
                  gridGap={6}
                  maxOpacity={0.1}
                  className=""
                />
              </div>
              <div className={`p-9 ${sans}`}>
                <p className="text-3xl">Precision Filters</p>
                <p className="text-gray-400">
                  Zero in on projects by language, stack and activity level.
                </p>
              </div>
              <div className="mx-12">
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
