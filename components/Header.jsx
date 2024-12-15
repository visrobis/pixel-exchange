"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Contacts from "./Contacts";
import { ContextApi } from "@/context/contextapi";

const Header = () => {
  const {
    handlePlayHarvestMoonAudioPauseClick,
    harvestMoonAudio,
    handlePlayAlbionAudioPauseClick,
    handlePlayRanAudioPauseClick,

    isAlbionAudioPlaying,
    isRanAudioPlaying,
    isHarvestMoonAudioPlaying,
  } = useContext(ContextApi);

  return (
    <div className="z-50 flex justify-center items-center h-16 w-screen fixed">
      <nav className="px-1 shadow-bottom-light flex justify-around items-center mt-10 fixed w-8/12 h-16 rounded-3xl bg-color-nav text-color-100">
        <div className="flex justify-center items-center gap-1 relative">
          <div className="group relative">
            <Image
              onClick={handlePlayHarvestMoonAudioPauseClick}
              className="rounded-xl cursor-pointer"
              src={"/images/alien.gif"}
              width={50}
              height={50}
              alt={harvestMoonAudio ? "Pause Music" : "Play Music"}
            />
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-gray-700 text-white text-sm px-2 py-1 rounded">
              {harvestMoonAudio ? "Pause Music" : "Play Music"}
            </span>
          </div>
          <Image src={"/images/logo.png"} width={100} height={100} alt="" />
        </div>

        <div className="relative">
          <Link href={"https://www.facebook.com/groups/954073679578964"}>
            Proof
          </Link>
          <Contacts />
        </div>
      </nav>
      <div className=" hidden">
        <button onClick={handlePlayHarvestMoonAudioPauseClick}>
          {isHarvestMoonAudioPlaying
            ? "Pause Harvest Moon"
            : "Play Harvest Moon"}
        </button>
        <button onClick={handlePlayRanAudioPauseClick}>
          {isRanAudioPlaying ? "Pause Ran" : "Play Ran"}
        </button>
        <button onClick={handlePlayAlbionAudioPauseClick}>
          {isAlbionAudioPlaying ? "Pause Albion" : "Play Albion"}
        </button>
      </div>
    </div>
  );
};

export default Header;
