import React, { ElementRef, useEffect, useRef, useState } from "react";

const AudioToggle = () => {
  const [isplaying, setisplaying] = useState(false);
  const ref = useRef<ElementRef<"audio">>(null);
  const ToggleMusic = () => {
    if (isplaying) {
      ref.current?.pause();
      setisplaying(false);
    } else {
      ref.current?.play();
      setisplaying(true);
    }
  };

  return (
    <button
      title="Toggle Music"
      onClick={ToggleMusic}
      className=" flex h-[25px] gap-1 cursor-pointer "
    >
      <div className="  h-[60%] my-auto w-1 bg-secondary relative  ">
        <div className={`bg-primary absolute w-full right-0 bottom-0 transition-all duration-700   !delay-700 ${isplaying?'playing':'pause'}`}></div>
      </div>
      <div className=" h-full w-1 bg-secondary relative ">
        <div className={`bg-primary absolute w-full right-0 bottom-0 transition-all  duration-700  ${isplaying?'playing':'pause'} `}></div>
      </div>
      <div className=" h-[60%] my-auto  w-1 bg-secondary relative ">
        <div className={`bg-primary absolute w-full right-0 bottom-0 transition-all duration-700  !delay-200 ${isplaying?'playing':'pause'} `}></div>
      </div>
      <span className=" sr-only">Toggle Music</span>
      <audio
        src='/song.mp3'
        ref={ref}
        preload="false"
        loop
        
      ></audio>
    </button>
  );
};

export default AudioToggle;
