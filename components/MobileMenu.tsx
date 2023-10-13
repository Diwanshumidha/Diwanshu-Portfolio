import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { NavLink } from "./Navlink";
import AudioToggle from "./AudioToggle";
import ThemeSwitch from "./ThemeSwich";
import { routes } from "@/lib/Data";

const MobileMenu = () => {
  const [opened, setopen] = useState(false);
  return (
    <>
      <div onClick={() => setopen(true)}>
        <HiMenuAlt3 size={30} />
      </div>

      <div
        className={` w-full h-[100dvh] px-5 py-5 flex flex-col fixed bg-background ease-in transition-all duration-300 left-0 top-0 z-50 ${
          opened ? "unmasked" : "masked"
        }`}
      >
        <div className=" ml-auto" onClick={() => setopen(false)}>
          {" "}
          <AiOutlineClose size={20} />{" "}
        </div>
        <div className="mt-9 h-full flex-col flex justify-between">
          <ul className=" w-full grow ">
            {routes.map((item, index) => {
              return (
                <li key={index} className={`list-none  mt-4  w-full flex  justify-center text-gray-500`}>
                  <NavLink
                    className=" hover:text-foreground text-2xl nav-link relative py-1"
                    activeClassName=" text-foreground"
                    href={item.path}
                    onClick={()=>{setopen(false)}}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <ul className=" pb-5">
            <li className=" flex items-center gap-2">
              <AudioToggle />
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
