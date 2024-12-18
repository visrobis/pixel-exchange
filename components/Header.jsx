"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Contacts from "./Contacts";
import { ContextApi } from "@/context/contextapi";

const Header = () => {
  const {
    handlePlaySoundHarvestMoon,
    playMusicHarvestMoon,
    setPlayMusicHarvestMoon,
  } = useContext(ContextApi);

  return (
    <div className="z-50 flex justify-center items-center h-16 w-screen fixed">
      <nav className="px-1 shadow-bottom-light flex justify-around items-center mt-10 fixed w-8/12 h-16 rounded-3xl bg-color-nav text-color-100">
        <div className="flex justify-center items-center gap-1 relative">
          {handlePlaySoundHarvestMoon()}
          <button
            onClick={() => setPlayMusicHarvestMoon(!playMusicHarvestMoon)}
          >
            <div className="group relative flex justify-center items-center">
              <Image
                className="rounded-xl cursor-pointer"
                src={"/images/alien.gif"}
                width={50}
                height={50}
                alt={""}
              />
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-700 text-white text-sm px-2 py-1 rounded">
                {playMusicHarvestMoon ? "Pause Music" : "Play Music"}
              </span>
              <Image src={"/images/logo.png"} width={100} height={100} alt="" />
            </div>
          </button>
        </div>

        <div className="relative">
          <Link href={"https://www.facebook.com/groups/954073679578964"}>
            Proof
          </Link>
          <Contacts />
        </div>
      </nav>
    </div>
  );
};

export default Header;
