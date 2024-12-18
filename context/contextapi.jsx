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

  // AlbionOnline OST
  const [playMusicAlbionOnline, setPlayAlbionOnline] = useState(false);
  const [audioAlbionOnline, setAudioAlbionOnline] = useState(null);

  // Handle HarvestMoon
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

  // Handle RanOnl
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

  // Handle RanOnl
  const handlePlaySoundAlbionOnline = () => {
    if (audioAlbionOnline) {
      // Ensure the audio object is not null
      if (!playMusicAlbionOnline) {
        audioAlbionOnline.pause();
        audioAlbionOnline.volume = 0.1;
      } else {
        audioAlbionOnline.play();
      }
    }
  };

  useEffect(() => {
    const audioInstanceHarvestMoon = new Audio("/music/harvestmoon.mp3");
    setAudioHarvestMoon(audioInstanceHarvestMoon);

    const audioInstanceRanOnlinePinas = new Audio("/music/ran.mp3");
    setAudioRanOnlinePinas(audioInstanceRanOnlinePinas);

    const audioInstanceAlbionOnline = new Audio("/music/albion.mp3");
    setAudioAlbionOnline(audioInstanceAlbionOnline);

    // only run once on the first render on the client
    return () => {
      audioInstanceHarvestMoon.pause();
      setAudioHarvestMoon(null);
      audioInstanceRanOnlinePinas.pause();
      setAudioRanOnlinePinas(null);
      audioInstanceAlbionOnline.pause();
      setAudioAlbionOnline(null);
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
        setAudioAlbionOnline,
        setPlayAlbionOnline,
        handlePlaySoundAlbionOnline,
        playMusicAlbionOnline,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
