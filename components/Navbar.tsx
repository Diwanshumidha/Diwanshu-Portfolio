"use client";
import Link from "next/link";
import React from "react";
import { NavLink } from "./Navlink";
import ThemeSwitch from "./ThemeSwich";
import { Sacramento } from "next/font/google";
import MobileMenu from "./MobileMenu";
import { routes, sourceCodeLink } from "@/lib/Data";
import dynamic from "next/dynamic";
const AudioToggle = dynamic(() => import("./AudioToggle"));

const Scr = Sacramento({
  variable: "--scr",
  weight: ["400"],
  subsets: ["latin"],
});

const Name = "Diwanshu";
function Navbar() {
  return (
    <nav className="flex h-[80px] items-center justify-between mx-auto max-w-[1400px] px-5 md:px-14">
      <ul>
        <li className="list-none font-bold text-lg cursor-pointer">
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
        </li>
      </ul>

      <ul className="flex items-center space-x-10 max-md:hidden">
        {routes.map((item, index) => {
          return (
            <li key={index} className={`list-none text-gray-500`}>
              <NavLink
                className=" hover:text-foreground nav-link relative py-1"
                activeClassName=" text-foreground"
                href={item.path}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
        <li className=" flex items-center gap-2">
          <AudioToggle />
          <ThemeSwitch />
          <a href={sourceCodeLink} target="_blank">
            <img
              className=" text-primary w-[24px] h-[24px] cursor-pointer"
              alt="srccode"
              src="/icons/github.svg"
            />
            <span className=" sr-only">Source Code</span>
          </a>
        </li>
      </ul>
      <ul className="md:hidden">
        <MobileMenu />
      </ul>
    </nav>
  );
}

export default Navbar;
