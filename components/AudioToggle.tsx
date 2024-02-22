import React, { useRef, useState } from "react";

const AudioToggle = () => {
  const [isplaying, setisplaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const toggleMusic = () => {
    if (isplaying) {
      audio?.pause();
      setisplaying(false);
    } else {
      audio?.play();
      setisplaying(true);
    }
  };

  const loadAudio = () => {
    if (!audio) {
      const newAudio = new Audio("/song.mp3");
      newAudio.preload = "auto";
      newAudio.loop = true;
      setAudio(newAudio);
    }
  };

  const handleMouseEnter = () => {
    loadAudio();
    if (audio) {
      audio.load();
    }
  };

  return (
    <button
      title="Toggle Music"
      onClick={toggleMusic}
      onMouseEnter={handleMouseEnter}
      className="flex h-[25px] gap-1 cursor-pointer"
    >
      <>
        <div className="h-[60%] my-auto w-1 bg-secondary relative">
          <div
            className={`bg-primary absolute w-full right-0 bottom-0 transition-all duration-700 !delay-700 ${
              isplaying ? "playing" : "pause"
            }`}
          ></div>
        </div>
        <div className="h-full w-1 bg-secondary relative">
          <div
            className={`bg-primary absolute w-full right-0 bottom-0 transition-all duration-700 ${
              isplaying ? "playing" : "pause"
            }`}
          ></div>
        </div>
        <div className="h-[60%] my-auto w-1 bg-secondary relative">
          <div
            className={`bg-primary absolute w-full right-0 bottom-0 transition-all duration-700 !delay-200 ${
              isplaying ? "playing" : "pause"
            }`}
          ></div>
        </div>
      </>

      <span className="sr-only">Toggle Music</span>
    </button>
  );
};

export default AudioToggle;
