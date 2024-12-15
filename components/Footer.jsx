import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center p-5">
      <div className=" flex flex-col justify-center items-center gap-3 h-36">
        <div>
          <h4 className=" font-general text-sizeFooter underline-offset-8 underline font-extrabold">
            Explore Pixel Exchange
          </h4>
        </div>
        <div className=" space-y-1">
          <div>
            <Link
              className="flex justify-center items-center space-x-2 p-2 rounded-xl bg-color-400 shadow-bottom-dark"
              href={"https://discord.gg/tZ379swSJB"}
            >
              <Image
                src={"/images/facebook.png"}
                width={30}
                height={30}
                alt=""
              />{" "}
              <p className="text-sizeParagraphBase font-semibold ">
                <Image
                  className=" rounded"
                  src={"/images/logo.png"}
                  width={100}
                  height={100}
                  alt=""
                />
              </p>
            </Link>
          </div>
          <div>
            <Link
              className="flex justify-center items-center space-x-2 p-2 rounded-xl bg-color-400 shadow-bottom-dark"
              href={"https://discord.gg/tZ379swSJB"}
            >
              <Image
                src={"/images/discord.png"}
                width={30}
                height={30}
                alt=""
              />{" "}
              <p className=" text-sizeParagraphBase font-semibold">
                <Image
                  className=" rounded"
                  src={"/images/logo.png"}
                  width={100}
                  height={100}
                  alt=""
                />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
