import ProjectsCard from "@/components/Home/Projects/ProjectsCard";
import { sanityFetch } from "@/sanity/lib/client.fetch";
// import { PROJECTS } from "@/lib/Data";

import { Project } from "@/types/types";
import { Metadata } from "next";
import { groq } from "next-sanity";
import React from "react";

export const metadata: Metadata = {
  title: "Projects - Diwanshu Midha",
  description:
    "These are my some of the amazing Projects Diwanshu  build with user friendly ui with amazing features and responsiveness  ",
  alternates: {
    canonical: "/projects",
  },
};

const page = async () => {
  const query = groq`*[_type == 'projects'] {
    ...,
    skills->
  } | order(priority desc)`;

  const PROJECTS: Project[] = await sanityFetch({
    query: query,
    tags: ["projects"],
  });

  return (
    <>
      <div className=" min-h-screen">
        <div className=" flex flex-col text-center mb-9 mt-9 md:mt-24 justify-center items-center">
          <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
            Projects <span className=" text-primary">{"</>"}</span>
          </h1>
          <p className=" text-secondary-gray text-xl sm:text-2xl max-w-3xl m-auto">
            I've built cool apps and websites using anything from HTML to React
            (and even PHP!). Here are some of my favorite projects over the
            course of my journey.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
          {PROJECTS.map((Project, idx) => (
            <ProjectsCard key={idx} Project={Project} />
          ))}
        </div>
        <div className=" text-center mt-6 text-secondary-gray">
          Hey, hey, hey... I've got even more on my GitHub!
        </div>
      </div>
    </>
  );
};

export default page;

export const revalidate = 10;
