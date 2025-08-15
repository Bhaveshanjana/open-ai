import React from "react";

const Preview = () => {
  return (
    <div className="-mt-4 relative">
      <div className="border-b-[1px] border-t-[1px] border-[#202020] border-dashed ">
        <div className="absolute w-[45px] h-full border-r border-dashed border-[#202020]  [--pattern-fg:#202020] [background-image:repeating-linear-gradient(315deg,_#202020_0,_#202020_1px,_transparent_0,_transparent_50%)] [background-size:10px_10px] bg-fixed"></div>
        <div className="absolute w-[45px] h-full border-l border-dashed border-[#202020]  [--pattern-fg:#202020] [background-image:repeating-linear-gradient(315deg,_#202020_0,_#202020_1px,_transparent_0,_transparent_50%)] [background-size:10px_10px] bg-fixed right-0"></div>
        <div className="mx-16 p-8">
          <video
            src="/os-demo.mp4"
            muted
            autoPlay
            className="h-full w-5xl mx-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Preview;
