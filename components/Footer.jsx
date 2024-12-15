import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center gap-3 h-36">
        <div>
          <h4 className=" font-general font-extrabold text-sizeSubtitle">
            Explore Pixel Exchange
          </h4>
        </div>
        <div className=" space-y-1">
          <div>
            <Link
              className="flex justify-center items-center"
              href={"https://discord.gg/tZ379swSJB"}
            >
              <Image
                src={"/images/facebook.png"}
                width={20}
                height={20}
                alt=""
              />{" "}
              <p className="text-sizeParagraphBase font-semibold ">
                Elvis P Robis
              </p>
            </Link>
          </div>
          <div>
            <Link
              className="flex justify-center items-center"
              href={"https://discord.gg/tZ379swSJB"}
            >
              <Image
                src={"/images/discord.png"}
                width={20}
                height={20}
                alt=""
              />{" "}
              <p className="text-sizeParagraphBase font-semibold">
                Pixel Exchange
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
