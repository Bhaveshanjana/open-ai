"use client";

import React from "react";
import { FlickeringGrid } from "./ui/bg";
import Hiw from "./ui/Hiw";
import { roboto } from "@/utils/fonts";
import { motion } from "framer-motion";

const HowitWorks = () => {
  return (
    <div>
      <div className="relative mt-2 border-t-[1px] border-b-[1px] border-[#202020]">
        <FlickeringGrid
          className=" overflow-x-hidden inset-0 size-full "
          squareSize={3}
          gridGap={6}
          color="#6c4ceb"
          maxOpacity={0.2}
          flickerChance={0.1}
          height={180}
          width={1540}
        />
        <div className="h-full w-56 md:w-3xl bg-black blur-2xl rounded-full absolute flex  justify-center items-center inset-0 mx-auto"></div>

        <h1
          className={`text-white text-2xl md:text-4xl z-10 absolute inset-0 flex gap-3 justify-center items-center ${roboto}`}
        >
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}
          >
            How
          </motion.span>
          it
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}
          >
            Works
          </motion.span>
        </h1>
      </div>
      <Hiw />
    </div>
  );
};

export default HowitWorks;
