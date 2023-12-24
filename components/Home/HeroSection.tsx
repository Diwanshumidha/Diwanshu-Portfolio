"use client";
import { buttonVariants } from "@/components/ui/button";
import { findLinkByName } from "@/lib/Data";
import Link from "next/link";
import { useCallback } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineDownload,
} from "react-icons/ai";
const HeroSection = () => {
  return (
    <section className=" flex justify-center relative  w-full m-auto flex-col text-center items-center h-[calc(100dvh-80px)] pt-20 pb-40">
      <p className="text-xl mb-5">Hey, I'm Diwanshu.</p>
      <h1 className="inline-block text-foreground max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold">
        Turning <span className=" text-primary">Ideas</span> into seamless web{" "}
        <span className=" text-primary">realities</span>.
      </h1>
      <div className=" flex gap-5 ">
        <Link
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            class: "w-[190px]",
            rounded: "full",
          })}
          href={"#contact"}
        >
          Contact Me
        </Link>
        <a
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            class: "w-[130px] max-md:hidden gap-2",
            rounded: "full",
          })}
          target="_blank"
          href={"/Resume.pdf"}
        >
          CV
          <AiOutlineDownload size={16} />
        </a>

        {/* <Button variant={'outline'} size={'lg'} className='w-[130px] max-md:hidden gap-2' rounded={'full'}>CV<AiOutlineDownload size={16}/></Button> */}
      </div>
      <div className=" fixed right-6 bottom-6 max-md:hidden justify-center items-center flex flex-col gap-2">
        <a
          title=" Github"
          className="hover:text-primary cursor-pointer"
          target="_blank"
          href={findLinkByName("GitHub")}
        >
          <AiFillGithub size={25} />
        </a>
        <a
          title=" Linkedin"
          className="hover:text-primary cursor-pointer"
          target="_blank"
          href={findLinkByName("LinkedIn")}
        >
          <AiFillLinkedin size={25} />
        </a>
        <a
          title=" Twitter"
          className="hover:text-primary cursor-pointer"
          target="_blank"
          href={findLinkByName("Twitter")}
        >
          <AiFillTwitterSquare size={25} />
        </a>
        <div className=" h-20 w-1 bg-primary"></div>
      </div>
      <Link
        href={"#learnmore"}
        className="absolute w-7 group cursor-pointer h-12 border-input bottom-8 border rounded-full "
      >
        <div className=" w-[70%] mt-1 group-hover:mt-[25px] transition-all mx-auto aspect-square rounded-full bg-primary top-5"></div>
      </Link>
    </section>
  );
};

export default HeroSection;
