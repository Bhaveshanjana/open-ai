import { sans } from "@/utils/fonts";
import React from "react";

const RoataingWheel = () => {
  return (
    <>
      <div className="mt-8 relative w-full text-white overflow-hidden">
        {/* Text content */}
        <div className={`text-start translate-x-7 ${sans}`}>
          <h2 className={`text-3xl`}>Seamless Search</h2>
          <p className="text-gray-400">
            Search thousands of open-source repos instantly.
          </p>
        </div>

        {/* Wheel wrapper */}
        <div className="translate-y-24 relative w-[400px] aspect-square mx-auto">
          {/* Outer rings */}
          <div className="absolute inset-0 rounded-full border border-white/5 bg-neutral-900/5 backdrop-blur-xl [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"></div>
          <div className="absolute inset-[45px] rounded-full border border-white/5 backdrop-blur-xl [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"></div>
          <div className="absolute inset-[90px] rounded-full border border-white/5 backdrop-blur-xl [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"></div>

          {/* Center text */}
          <div className="absolute inset-[90px] flex items-center justify-center text-lg font-bold">
            Open- AI
          </div>

          {/* Orbiting icons layer 1 */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute w-10 h-10 -top-4 left-1/2 -translate-x-1/2 p-1 animate-spin-slow-reverse bg-white rounded-xl flex items-center justify-center">
              {/* Icon here */}
            </div>
            <div className="absolute w-10 h-10 right-[20px] bottom-[60px] animate-spin-slow-reverse bg-[#101010] p-1 rounded-xl"></div>
            <div className="absolute w-10 h-10 left-0 bottom-[100px] animate-spin-slow-reverse bg-white rounded-xl flex items-center justify-center">
              {/* Icon here */}
            </div>
          </div>

          {/* Orbiting icons layer 2 */}
          <div className="absolute inset-0 animate-spin-slow-reverse">
            <div className="absolute w-10 h-10 top-[100px] left-[50px] animate-spin-slow bg-[#101010] rounded-xl flex items-center justify-center">
              {/* Icon here */}
            </div>
            <div className="absolute w-10 h-10 bottom-[100px] right-[50px] animate-spin-slow bg-white p-1.5 rounded-xl flex items-center justify-center">
              {/* Icon here */}
            </div>
          </div>

          {/* Orbiting icons layer 3 */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute w-10 h-10 top-[120px] right-[90px] animate-spin-slow-reverse bg-white rounded-xl"></div>
            <div className="absolute w-10 h-10 bottom-[120px] left-[90px] animate-spin-slow-reverse bg-[#101010] p-2 rounded-xl flex items-center justify-center">
              {/* Icon here */}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[20%] w-full -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-t from-[#000000ee] to-transparent blur-"></div>
    </>
  );
};

export default RoataingWheel;
