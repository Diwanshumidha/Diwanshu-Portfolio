import ProjectsCard from '@/components/Home/Projects/ProjectsCard'
import { PROJECTS } from '@/lib/Data'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Projects - Diwanshu Midha",
  description:
    "These are my some of the amazing apps i build with user friendly ui with amazing features and responsiveness  ",
    alternates: {
      canonical: "/projects",
      languages: {
        "en-US": "/en-US",
      },
    },
};

const page = () => {
  return (
    <>
    <div className=' min-h-screen'>
        <div className=' flex flex-col text-center mb-9 mt-9 md:mt-24 justify-center items-center'>
            <h1 className='text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative'>Projects <span className=' text-primary'>{'</>'}</span></h1>
            <p className=' text-secondary-gray text-xl sm:text-2xl max-w-3xl m-auto'>I've built cool apps and websites using anything from HTML to React (and even PHP!). Here are some of my favorite projects over the course of my journey.</p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {PROJECTS.map((Project,idx) => (
          <ProjectsCard key={idx} Project={Project} />
        ))}
      </div>
      <div className=' text-center mt-6 text-secondary-gray'>Hey, hey, hey... I've got even more on my GitHub!</div>
    </div>
    
    </>
  )
}

export default page