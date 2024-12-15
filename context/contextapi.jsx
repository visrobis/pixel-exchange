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
    // Ensure this only runs in the browser
    const harvestMoonInstance = new Audio("/music/harvestmoon.mp3");
    if (typeof window !== "undefined") {
      harvestMoonInstance.volume = 0.2;
      harvestMoonInstance.loop = true;
      setHarvestMoonAudio(harvestMoonInstance);

      const ranInstance = new Audio("/music/ran.mp3");
      ranInstance.volume = 0.2;
      ranInstance.loop = true;
      setRanAudio(ranInstance);

      const albionInstance = new Audio("/music/albion.mp3");
      albionInstance.volume = 0.2;
      albionInstance.loop = true;
      setAlbionAudio(albionInstance);
    }
    return () => {
      harvestMoonInstance.pause();
      ranInstance.pause();
      albionInstance.pause();
      setHarvestMoonAudio(null); // Reset the audio state when component unmounts
      setRanAudio(null);
      setAlbionAudio(null);
    };
  }, []);

  const handlePlayHarvestMoonAudioPauseClick = () => {
    if (harvestMoonAudio) {
      if (isHarvestMoonAudioPlaying) {
        harvestMoonAudio.pause();
        setIsHarvestMoonAudioPlaying(false);
      } else {
        ranAudio?.pause();
        albionAudio?.pause();
        harvestMoonAudio
          .play()
          .catch((err) => console.log("Playback failed", err));
        setIsHarvestMoonAudioPlaying(true);
      }
    }
  };

  const handlePlayRanAudioPauseClick = () => {
    if (ranAudio) {
      if (isRanAudioPlaying) {
        ranAudio.pause();
        setIsRanAudioPlaying(false);
      } else {
        harvestMoonAudio?.pause();
        albionAudio?.pause();
        ranAudio.play().catch((err) => console.log("Playback failed", err));
        setIsRanAudioPlaying(true);
      }
    }
  };

  const handlePlayAlbionAudioPauseClick = () => {
    if (albionAudio) {
      if (isAlbionAudioPlaying) {
        albionAudio.pause();
        setIsAlbionAudioPlaying(false);
      } else {
        harvestMoonAudio?.pause();
        ranAudio?.pause();
        albionAudio.play().catch((err) => console.log("Playback failed", err));
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
        isAlbionAudioPlaying,
        isRanAudioPlaying,
        isHarvestMoonAudioPlaying,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
