"use client";
const { createContext, useState, useEffect } = require("react");

export const ContextApi = createContext();

export const ContextApiProvider = ({ children }) => {
  const [harvestMoonAudio] = useState(
    () => new Audio("/music/harvestmoon.mp3")
  );
  const [isHarvestMoonAudioPlaying, setIsHarvestMoonAudioPlaying] =
    useState(false);

  useEffect(() => {
    harvestMoonAudio.volume = 0.1; // Set volume
    harvestMoonAudio.loop = true; // Enable looping

    const playMusic = async () => {
      try {
        await harvestMoonAudio.play();
        setIsHarvestMoonAudioPlaying(true); // Update state when autoplay succeeds
      } catch (error) {
        console.log("Autoplay failed. Waiting for user interaction.");
      }
    };

    playMusic();

    // Cleanup audio on component unmount
    return () => {
      harvestMoonAudio.pause();
      harvestMoonAudio.currentTime = 0;
    };
  }, [harvestMoonAudio]);

  const handlePlayHarvestMoonAudioPauseClick = () => {
    if (isHarvestMoonAudioPlaying) {
      harvestMoonAudio.pause();
      setIsHarvestMoonAudioPlaying(false);
    } else {
      harvestMoonAudio.play();
      setIsHarvestMoonAudioPlaying(true);
    }
  };
  return (
    <ContextApi.Provider
      value={{ handlePlayHarvestMoonAudioPauseClick, harvestMoonAudio }}
    >
      {children}
    </ContextApi.Provider>
  );
};
