import React from "react";
import { FlickeringGrid } from "./ui/bg";
import { roboto } from "@/utils/fonts";

const testimonials = [
  { name: "John Doe", text: "This service changed my life!" },
  { name: "Sarah Lee", text: "Absolutely amazing experience." },
  { name: "Mike Ross", text: "Highly recommended for everyone." },
  { name: "Emily Clark", text: "The best decision I've made this year." },
  { name: "Chris Paul", text: "A seamless and enjoyable process." },
];

const TestimonialCard = ({ name, text }: { name: string; text: string }) => (
  <div className="bg-[#1b1b1b4c] text-white rounded-xl shadow-md w-full h-full flex flex-col justify-start border border-[#202020]">
    <div className="p-6 sm:p-8 md:p-12 -ml-2 sm:-ml-3 md:-ml-5 -mt-2 sm:-mt-3 md:-mt-5">
      <p className="text-base sm:text-lg font-medium mb-1">{name}</p>
      <p className="text-xs sm:text-sm md:text-base text-gray-300">{text}</p>
    </div>
  </div>
);

export default function Testimonials() {
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
        <h1
          className={`text-2xl md:text-4xl absolute flex justify-center items-center inset-0 ${roboto}`}
        >
          Testimonials
        </h1>
      </div>
      <div className="relative w-full h-[80vh] bg-[#0c0a0a] flex justify-center overflow-hidden border-t border-b border-[#202020]">
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

        {/* Inner content area for columns */}
        {/* Top Blur */}
        <div className="absolute top-0 blur-xl w-full h-44 bg-gradient-to-b from-black via-black/70 to-transparent z-10 pointer-events-none"></div>

        {/* Bottom Blur */}
        <div className="absolute bottom-0  blur-xl w-full h-44 bg-gradient-to-t from-black via-black/70 to-transparent z-10 pointer-events-none"></div>
        <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 max-w-7xl mx-auto overflow-hidden">
          {/* Left column - hidden on mobile */}
          <div className="hidden md:flex flex-col gap-6 animate-scroll-up">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`left-${i}`} {...t} />
            ))}
          </div>

          {/* Center column - always visible */}
          <div className="flex flex-col gap-6 animate-scroll-down ">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`center-${i}`} {...t} />
            ))}
          </div>

          {/* Right column - hidden on mobile */}
          <div className="hidden md:flex flex-col gap-6 animate-scroll-up">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`right-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
