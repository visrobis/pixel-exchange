import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" z-50 flex justify-center items-center h-16 w-screen fixed">
      <nav className="  shadow-bottom-light flex justify-around items-center mt-10 fixed w-8/12 h-16 rounded-3xl bg-color-nav text-color-100">
        <div className="flex justify-center items-center gap-1">
          <Image
            className=" rounded-xl"
            src={"/images/alien.gif"}
            width={50}
            height={50}
            alt=""
          />
          <Image src={"/images/logo.png"} width={100} height={100} alt="" />
        </div>
        <div>
          <Link href={"/"}>Testimonials</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
