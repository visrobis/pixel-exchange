"use client";
const { createContext, useState, useEffect } = require("react");

export const ContextApi = createContext();

export const ContextApiProvider = ({ children }) => {
  const [playMusic, setPlayMusic] = useState(false);
  const [audio, setAudio] = useState(null);

  const playSound = () => {
    if (audio) {
      // Ensure the audio object is not null
      if (!playMusic) {
        audio.pause();
        audio.volume = 0.1;
      } else {
        audio.play();
      }
    }
  };
  useEffect(() => {
    const audioInstance = new Audio("/music/harvestmoon.mp3");
    setAudio(audioInstance);
    // only run once on the first render on the client
    return () => {
      audioInstance.pause();
      setAudio(null); // Reset the audio state when component unmounts
    };
  }, []);
  return (
    <ContextApi.Provider
      value={{
        audio,
        setAudio,
        playSound,
        playMusic,
        setPlayMusic,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
