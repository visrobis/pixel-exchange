import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="fire-background rounded-3xl bg-[url('/images/fire.gif')] bg-cover bg-no-repeat bg-center flex justify-center items-center h-screen mx-5 @@@@ media-350:mx-8 media-996:mx-20 media-1096:mx-24 media-1276:mx-32">
      <div className="shadow-bottom-dark  rounded-3xl flex justify-center items-center bg-gradient-to-b from-[rgba(64,16,64,0.8)] via-[rgba(61,18,65,0.8)] to-[rgba(152,41,163,0.8)] h-full w-full">
        <div className=" flex justify-center items-center gap-2 z-10 p-3">
          <div className="flex justify-center items-center @@@@ media-240:flex-wrap-reverse media-576:gap-5 media-576:justify-center">
            <div className="">
              <Image
                className="rounded-3xl w-52 @@@@ media-776:w-72 shadow-bottom-dark media-576:w-64"
                src={"/images/alien.gif"}
                width={200}
                height={200}
                alt=""
                priority
              />
            </div>
            <div className=" space-y-5 text-color-100 @@@@ media-776:space-y-4">
              <div className="flex justify-center w-64 p-3 @@@@ media-776:w-auto media-676:px-0">
                <pre className="flex">
                  <h1 className="text-sizeHero leading-[4rem] font-extrabold font-pixel tracking-[.2em] w-fit ">
                    Pixel
                  </h1>
                  <h1 className="text-sizeHero leading-[4rem] font-extrabold font-pixel tracking-[.2em]  w-fit underline underline-offset-8 shadow-bottom-dark">
                    Exhange
                  </h1>
                </pre>
              </div>

              <div className=" bg-color-400/50 text-color-golden-rod p-3 rounded-2xl text-sizeSubtitle w-fit shadow-bottom-dark">
                <h2>Fuel Your Game, Trade with Trust</h2>
                <h2>Silver Deals Made Simple!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
