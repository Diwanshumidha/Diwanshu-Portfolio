import React from "react";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {" "}
      <div className="hidden md:block bg-primary z-[10000] w-full top-0 left-0  h-full fixed animate"></div>
      <div className="hidden md:block bg-primary z-[10000] w-full top-0 h-full right-0  fixed animate"></div>
      {children}
    </>
  );
};

export default template;
