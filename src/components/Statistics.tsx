"use client";

import React from "react";
import { FlickeringGrid } from "./ui/bg";
import { bricolage, roboto } from "@/utils/fonts";
import { motion } from "framer-motion";

const Statistics = () => {
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
        <div className="h-full w-52 md:w-3xl bg-black blur-2xl rounded-full absolute flex  justify-center items-center inset-0 mx-auto"></div>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.5 }}
          className={`text-2xl md:text-4xl absolute flex justify-center items-center inset-0 ${roboto}`}
        >
          Statistics
        </motion.h1>
      </div>
      <div className="border border-l-[1px] border-r-[1px] border-[#202020] grid grid-cols-2 bg-[#0a213710]">
        {/* Box 1 */}
        <div className="border-b md:border-b-0 border-r border-[#202020] p-10 flex justify-center items-center flex-col">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium bg-gradient-to-t from-[#9159E2] to-[#341e7b] bg-clip-text text-transparent font-mono">
            6500+
          </h1>
          <p
            className={`text-2xl sm:text-3xl md:text-4xl font-medium bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent ${bricolage}`}
          >
            Queries
          </p>
        </div>

        {/* Box 2 */}
        <div className="p-10 flex justify-center items-center flex-col">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium bg-gradient-to-t from-[#9159E2] to-[#341e7b] bg-clip-text text-transparent font-mono">
            1900+
          </h1>
          <p
            className={`text-2xl sm:text-3xl md:text-4xl font-medium bg-gradient-to-b from-purple-400 to-purple-800 bg-clip-text text-transparent ${bricolage}`}
          >
            Users
          </p>
        </div>
      </div>
    </>
  );
};

export default Statistics;
