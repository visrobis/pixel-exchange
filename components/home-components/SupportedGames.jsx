import Image from "next/image";
import React from "react";

const SupportedGames = () => {
  return (
    <div
      className=" shadow-top-dark fire-background relative rounded-3xl flex justify-center items-center h-screen mx-5 
  media-350:mx-8 media-996:mx-20 media-1096:mx-24 media-1276:mx-32"
    >
      {/* Flipped Background Image */}
      <div className="absolute inset-0 bg-[url('/images/fire.gif')] bg-cover bg-no-repeat bg-center transform scale-y-[-1] rounded-3xl"></div>

      {/* Gradient Overlay and Content */}
      <div className="relative shadow-bottom-dark rounded-3xl flex justify-center items-center bg-gradient-to-b from-[rgba(152,41,163,0.8)] via-[rgba(61,18,65,0.8)] to- h-full w-full">
        <div className="flex justify-center space-y-5 items-center flex-col z-10 p-3 media-240:flex-wrap-reverse media-676:gap-5">
          <div className=" shadow-bottom-dark">
            <pre className="text-center text-color-100 font-pixel shadow-colorful rounded-xl">
              <h2 className=" text-sizeTitle font-pixel  tracking-[.2em]">
                Supported
              </h2>
              <h2 className=" text-sizeTitle   tracking-[.2em]">Games</h2>
            </pre>
          </div>
          <div className=" flex justify-center items-center flex-wrap w-full ">
            {/* Card */}
            <div className=" w-64 h-64  flex justify-center items-center bg-[url('/images/ran.png')] bg-cover bg-no-repeat"></div>
            <div className=" w-64 h-64  flex justify-center items-center bg-[url('/images/albion.png')] bg-cover bg-no-repeat"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportedGames;
