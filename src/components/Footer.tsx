import { edu, roboto } from "@/utils/fonts";
import React from "react";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className=" border-t border-[#202020] relative h-[40vh]">
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
        <div className="flex justify-between mx-16">
          <div className="p-5">
            <h1 className={`text-6xl ${edu} tracking-wider`}>Open-Ai</h1>
            <p className={`text-2xl font-light text-gray-400 ${roboto}`}>
              Search. Find. Contribute
            </p>
          </div>
          <div className="flex gap-3 mt-8 p-4">
            <RiTwitterXFill className="text-2xl hover:text-[#1646bd] cursor-pointer transition-colors duration-300" />
            <MdOutlineMail className="text-2xl hover:text-[#1646bd] cursor-pointer transition-colors duration-300" />
            <LuGithub className="text-2xl hover:text-[#1646bd] cursor-pointer transition-colors duration-300" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-24 space-y-1 text-gray-400">
          <h3>© 2025 Opensox AI. All rights reserved.</h3>
          <h4 className="text-sm">
            Building 21st century open-source infrastructure
          </h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
