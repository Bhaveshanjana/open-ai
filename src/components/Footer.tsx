"use client";

import { edu, roboto } from "@/utils/fonts";
import React from "react";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className="border-t border-[#202020] relative min-h-[40vh] flex flex-col">
        {/* Background patterns */}
        <div>
          {/* Left dashed pattern */}
          <div
            className="absolute w-[45px] h-full border-r border-dashed border-[#202020]
        [background-image:repeating-linear-gradient(315deg,_#202020_0,_#202020_1px,_transparent_0,_transparent_50%)]
        [background-size:10px_10px] bg-fixed left-0 z-20"
          ></div>

          {/* Right dashed pattern */}
          <div
            className="absolute w-[45px] h-full border-l border-dashed border-[#202020]
        [background-image:repeating-linear-gradient(315deg,_#202020_0,_#202020_1px,_transparent_0,_transparent_50%)]
        [background-size:10px_10px] bg-fixed right-0 z-20"
          ></div>
        </div>

        {/* text content */}
        <div className="flex-grow flex flex-col">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}
            className="flex justify-between mx-16"
          >
            <div className="md:p-5">
              <h1 className={`text-3xl md:text-6xl ${edu} tracking-wider`}>
                Open-Ai
              </h1>
              <p className={`md:text-2xl font-light text-gray-400 ${roboto}`}>
                Search. Find. Contribute
              </p>
            </div>
            <div className="flex gap-3 p-3 md:p-4">
              <RiTwitterXFill className="text-xl md:text-2xl hover:text-[#1646bd] cursor-pointer transition-colors duration-300" />
              <MdOutlineMail className="text-xl md:text-2xl hover:text-[#1646bd] cursor-pointer transition-colors duration-300" />
              <LuGithub className="text-xl md:text-2xl hover:text-[#1646bd] cursor-pointer transition-colors duration-300" />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.5 }}
          className="flex flex-col items-center justify-center -space-y-0.5 text-gray-400"
        >
          <h3 className="md:text-lg">{"© 2025 Open AI, an clone project."}</h3>
          <h4 className="text-[11px] md:text-sm">
            {"Building 21st century website's"}
          </h4>
          <span className="text-[8px]">Made by bhavesh</span>
        </motion.div>
      </div>
    </>
  );
};
export default Footer;