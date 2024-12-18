"use client";
const { createContext, useState, useEffect } = require("react");

export const ContextApi = createContext();

export const ContextApiProvider = ({ children }) => {
  // // HarvestMoon OST
  const [playMusicHarvestMoon, setPlayMusicHarvestMoon] = useState(false);
  const [audioHarvestMoon, setAudioHarvestMoon] = useState(null);

  // RanOnLinePinas OST
  const [playMusicRanOnlinePinas, setPlayRanOnlinePinas] = useState(false);
  const [audioRanOnlinePinas, setAudioRanOnlinePinas] = useState(null);

  const handlePlaySoundHarvestMoon = () => {
    if (audioHarvestMoon) {
      // Ensure the audio object is not null
      if (!playMusicHarvestMoon) {
        audioHarvestMoon.pause();
        audioHarvestMoon.volume = 0.1;
      } else {
        audioHarvestMoon.play();
        if (audioHarvestMoon.play()) {
          audioRanOnlinePinas.pause();
        }
      }
    }
  };
  const handlePlaySoundRanOnlinePinas = () => {
    if (audioRanOnlinePinas) {
      // Ensure the audio object is not null
      if (!playMusicRanOnlinePinas) {
        audioRanOnlinePinas.pause();
        audioRanOnlinePinas.volume = 0.1;
      } else {
        audioRanOnlinePinas.play();
      }
    }
  };

  useEffect(() => {
    const audioInstanceHarvestMoon = new Audio("/music/harvestmoon.mp3");
    setAudioHarvestMoon(audioInstanceHarvestMoon);

    const audioInstanceRanOnlinePinas = new Audio("/music/ran.mp3");
    setAudioRanOnlinePinas(audioInstanceRanOnlinePinas);

    // only run once on the first render on the client
    return () => {
      audioInstanceHarvestMoon.pause();
      setAudioHarvestMoon(null);
      audioInstanceRanOnlinePinas.pause();
      setAudioRanOnlinePinas(null);
    };
  }, []);
  return (
    <ContextApi.Provider
      value={{
        setAudioHarvestMoon,
        setPlayMusicHarvestMoon,
        handlePlaySoundHarvestMoon,
        playMusicHarvestMoon,
        setAudioRanOnlinePinas,
        setPlayRanOnlinePinas,
        handlePlaySoundRanOnlinePinas,
        playMusicRanOnlinePinas,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
