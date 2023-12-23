import { Sacramento } from "next/font/google";
import Link from "next/link";
import React from "react";

const Scr = Sacramento({
  variable: "--scr",
  weight: ["400"],
  subsets: ["latin"],
});

const Logo = () => {
  const Name = "Diwanshu";
  return (
    <Link href="/">
      <span className="font-black text-xl flex items-center">
        {Name.split("").map((letter, index) => {
          return (
            <span
              key={index}
              className={`hover:text-primary text-4xl font-bold  hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim ${
                Scr.className
              } ${index + 1 === 5 ? "text-primary" : "text-foreground"}`}
            >
              {letter}
            </span>
          );
        })}
      </span>
    </Link>
  );
};

export default Logo;
