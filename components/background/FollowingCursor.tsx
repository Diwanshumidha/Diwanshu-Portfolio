"use client";
import React, { useEffect, useRef } from "react";

const FollowingCursor = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Add an event listener to track mouse movement
  const trackMouse = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    ref.current?.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards", easing: "ease-in" }
    );
  };

  // Attach the event listener when the component mounts
  useEffect(() => {
    document.addEventListener("mousemove", trackMouse);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", trackMouse);
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="h-[400px] blob aspect-square blur-3xl spin pointer-events-none   dark:opacity-25 opacity-60 bg-white rounded-full fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      ></div>
    </>
  );
};

export default FollowingCursor;
