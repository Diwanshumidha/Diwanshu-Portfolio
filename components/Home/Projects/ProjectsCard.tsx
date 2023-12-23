"use client";
import { urlForImage } from "@/sanity/lib/image";
import { Project } from "@/types/types";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Tilt from "react-parallax-tilt";

const NotFound = "/projects/NotFound.jpeg";

const ProjectsCard = ({ Project }: { Project: Project }) => {
  console.log(Project);
  return (
    <Tilt scale={1.02}>
      <div className="max-w-sm group mx-auto flex flex-col projects-center md:projects-start md:justify-center ">
        <a
          href={Project.link || Project.githublink || "/"}
          target="_blank"
          className=" relative  h-[231.91px]  rounded-xl border-secondary border p-2 transition group-hover:-translate-y-2 group-hover:opacity-75 group-hover:border-primary will-change-projectCard"
        >
          <img
            className="w-full h-full object-cover rounded-md"
            alt="IMAGE"
            onError={(e) => (e.currentTarget.src = NotFound)}
            src={
              Project?.img?.asset ? urlForImage(Project.img.asset) : NotFound
            }
          ></img>
        </a>

        <div className="w-full mt-5">
          <div className="flex projects-center justify-between">
            <a rel="noopener" href={Project.link} target="_blank">
              <h3 className="text-lg font-bold">{Project.title}</h3>
            </a>
            <div className="space-x-2 flex text-primary">
              {Project.link && (
                <a
                  href={Project.link}
                  className=" hover:text-foreground"
                  target="_blank"
                >
                  <FiExternalLink />
                  <span className=" sr-only">Visit Website</span>
                </a>
              )}

              {Project.githublink && (
                <a
                  href={Project.githublink}
                  className=" hover:text-foreground"
                  target="_blank"
                >
                  <FiGithub />
                  <span className=" sr-only">Visit Source Code</span>
                </a>
              )}
            </div>
          </div>
          <p className="text-fun-gray text-left text-sm">
            {Project.description}
          </p>
          <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
            {Project.skillsName
              ? Project.skillsName?.map((name) => (
                  <li key={name.value}>
                    <div className="m-1 rounded-lg text-sm bg-secondary py-1 px-2 cursor-pointer hover:opacity-75">
                      {name.value}
                    </div>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectsCard;
