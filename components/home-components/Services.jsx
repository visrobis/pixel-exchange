import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className=" rounded-full flex justify-center items-center bg-color-slideshow-background @@@@ media-350:mx-8 media-996:mx-20 media-1096:mx-24 media-1276:mx-32">
      <div className=" wrapper flex justify-center items-center text-color-golden-rod/70 font-extrabold text-sizeCarousel font-jersey tracking-[.2em] text-center">
        <div className="item item1 flex items-center justify-center">
          <Image
            className="w-20 h-20 media-676:w-24 media-676:h-24 animate-[bounce_2s_ease-in-out_infinite]"
            src={"/images/silver.png"}
            width={100}
            height={100}
            alt=""
          />
        </div>

        <div className="item item2 flex justify-center items-center">
          <h3 className="shadow-bottom-dark-light p-3 rounded-xl">MIDDLEMAN</h3>
        </div>
        <div className="item item3 flex items-center justify-center">
          <Image
            className="w-20 h-20 media-676:w-24 media-676:h-24 animate-[bounce_2s_ease-in-out_infinite]"
            src={"/images/gold.png"}
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div className="item item4 flex justify-center items-center">
          <h3 className="shadow-bottom-dark-light p-3 rounded-xl">BUYER</h3>
        </div>
        <div className="item item5 flex items-center justify-center">
          <Image
            className="w-20 h-20 media-676:w-24 media-676:h-24 animate-[bounce_2s_ease-in-out_infinite]"
            src={"/images/silver.png"}
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div className="item item6 flex justify-center items-center">
          <h3 className="shadow-bottom-dark-light p-3 rounded-xl">SELLER</h3>
        </div>
        <div className="item item7 flex items-center justify-center">
          <Image
            className="w-20 h-20 media-676:w-24 media-676:h-24 animate-[bounce_4s_ease-in-out_infinite]"
            src={"/images/gold.png"}
            width={100}
            height={100}
            alt=""
          />
        </div>

        <div className="item item8 flex justify-center items-center">
          <h3 className="shadow-bottom-dark-light p-3 rounded-xl">SERVICES</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
