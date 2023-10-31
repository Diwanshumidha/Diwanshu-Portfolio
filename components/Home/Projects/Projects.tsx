import React from "react";
import ProjectsCard from "./ProjectsCard";
import { PROJECTS } from "@/lib/Data";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="flex flex-col text-left justify-between pt-8 relative my-14">
      <div id="learnmore">
        <div className="overflow-x-hidden w-full pt-5">
          <h2 className="landingSectionTitle max-w-sm md:max-w-max mx-auto md:mx-0 text-center md:text-left relative text-3xl font-bold mb-10 pt-4 md:pt-0 md:w-max">
            Here are a few of my favorite projects.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {PROJECTS.slice(0, 3).map((Project, idx) => (
          <ProjectsCard key={idx} Project={Project} />
        ))}
      </div>
      <div className="relative w-full mt-12 flex justify-center items-center">
        <Link
          className={buttonVariants({
            variant: "outline",
            rounded: "full",
            class: "w-[70%]",
          })}
          href={"/projects"}
        >
          {" "}
          View All{" "}
        </Link>
      </div>
    </section>
  );
};

export default Projects;
