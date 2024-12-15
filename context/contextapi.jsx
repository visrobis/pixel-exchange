"use client";
const { createContext, useState, useEffect } = require("react");

export const ContextApi = createContext();

export const ContextApiProvider = ({ children }) => {
  const [harvestMoonAudio, setHarvestMoonAudio] = useState(null);
  const [isHarvestMoonAudioPlaying, setIsHarvestMoonAudioPlaying] =
    useState(false);

  const [ranAudio, setRanAudio] = useState(null);
  const [isRanAudioPlaying, setIsRanAudioPlaying] = useState(false);

  const [albionAudio, setAlbionAudio] = useState(null);
  const [isAlbionAudioPlaying, setIsAlbionAudioPlaying] = useState(false);

  useEffect(() => {
    // Only run this in the browser
    if (typeof window !== "undefined") {
      const audioInstance = new Audio("/music/harvestmoon.mp3");
      audioInstance.volume = 0.2; // Set volume
      audioInstance.loop = true; // Enable looping
      setHarvestMoonAudio(audioInstance);
    }
  }, []);

  const handlePlayHarvestMoonAudioPauseClick = () => {
    if (harvestMoonAudio) {
      if (isHarvestMoonAudioPlaying) {
        harvestMoonAudio.pause();
        setIsHarvestMoonAudioPlaying(false);
      } else {
        ranAudio.pause();
        albionAudio.pause();
        harvestMoonAudio.play().catch((err) => {
          console.log("Audio playback failed", err);
        });
        setIsHarvestMoonAudioPlaying(true);
      }
    }
  };

  useEffect(() => {
    // Only run this in the browser
    if (typeof window !== "undefined") {
      const audioInstance = new Audio("/music/ran.mp3");
      audioInstance.volume = 0.2; // Set volume
      audioInstance.loop = true; // Enable looping
      setRanAudio(audioInstance);
    }
  }, []);

  const handlePlayRanAudioPauseClick = () => {
    if (ranAudio) {
      if (isRanAudioPlaying) {
        ranAudio.pause();
        setIsRanAudioPlaying(false);
      } else {
        harvestMoonAudio.pause();
        albionAudio.pause();
        ranAudio.play().catch((err) => {
          console.log("Audio playback failed", err);
        });
        setIsRanAudioPlaying(true);
      }
    }
  };

  useEffect(() => {
    // Only run this in the browser
    if (typeof window !== "undefined") {
      const audioInstance = new Audio("/music/albion.mp3");
      audioInstance.volume = 0.2; // Set volume
      audioInstance.loop = true; // Enable looping
      setAlbionAudio(audioInstance);
    }
  }, []);

  const handlePlayAlbionAudioPauseClick = () => {
    if (albionAudio) {
      if (isAlbionAudioPlaying) {
        albionAudio.pause();
        setIsAlbionAudioPlaying(false);
      } else {
        harvestMoonAudio.pause();
        ranAudio.pause();
        albionAudio.play().catch((err) => {
          console.log("Audio playback failed", err);
        });
        setIsAlbionAudioPlaying(true);
      }
    }
  };
  return (
    <ContextApi.Provider
      value={{
        handlePlayHarvestMoonAudioPauseClick,
        harvestMoonAudio,
        handlePlayAlbionAudioPauseClick,
        handlePlayRanAudioPauseClick,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
