import { manrope, roboto } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <div className="mb-12">
      <div className="mx-3 md:mx-12 h-[400px] rounded-3xl relative bg-transparent lg:bg-gradient-to-r from-white via-[#101010] to-white">
        <Image
          alt="bg"
          height="100"
          width="100"
          src="/ctagradient.svg"
          className=" w-full inset-0 h-full  mt-4 object-cover rounded-2xl"
        />
        <div className="absolute flex justify-center flex-col items-center inset-0 w-xs md:w-2xl mx-auto">
          <p className={`text-2xl md:text-7xl text-center  ${roboto}`}>
            Ready to Find Your Perfect Repo?
          </p>
          <span className={`text-gray-400 text-sm  md:text-2xl font-extralight ${manrope}`}>
            Join 6,500+ engineers accelerating in open-source.
          </span>
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
      </div>
    </div>
  );
};

export default Cta;
