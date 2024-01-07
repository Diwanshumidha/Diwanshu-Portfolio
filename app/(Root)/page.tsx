import HeroSection from "@/components/Home/HeroSection";
import Skills from "@/components/Home/Skills/Skills";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/components/Home/Contact/Contact"));
const Projects = dynamic(() => import("@/components/Home/Projects/Projects"));

export const metadata: Metadata = {
  title: "Diwanshu Midha - MERN Stack Developer ",
  description:
    "Explore the web development journey of Diwanshu Midha, a skilled MERN and React Developer, showcasing expertise in full-stack development.",
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Diwanshu Midha",
    description:
      "I am a passionate MERN (MongoDB, Express, React, Node.js) developer, and this is where I showcase my journey through the world of web development.",
    url: "https://diwanshumidha.vercel.app/",
    siteName: "Portfolio",
    images: [
      {
        url: "/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diwanshu Portfolio",
    description:
      "I am a passionate MERN (MongoDB, Express, React, Node.js) developer, and this is where I showcase my journey through the world of web development.",
    images: ["/og.png"],
  },
  category: "technology",
  generator: "Next.js",
  applicationName: "Diwanshu Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Portfolio",
    "Diwanshu",
    "Diwanshu Midha",
    "diwanshu",
    "Deewanshu",
    "Nextjs Portfolio",
    "Fullstack Developer",
    "Web Developer",
    "MERN developer",
    "Diwanshu Midha Portfolio",
    "Diwanshu Portfolio",
    "Nextjs Developer",
    "Deevanshu Midha",
    "Diwanshu Midha Profile",
    "Dm",
    "diwmidha",
  ],
  authors: [{ name: "Diwanshu Midha" }],
  colorScheme: "dark",
  creator: "Diwanshu Midha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  verification: {
    google: "zOmhd2rafpvsPkUgdUby7eFXc3bu7L_3nl4UfDcbNGg",
    other: {
      me: ["saidishu1880@gmail.com"],
    },
  },
};
const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="mt-20 w-full space-y-32">
        <Projects />
        <Skills />
        <Contact />
        <section className="sr-only">
          <h2>About Me</h2>
          <p>
            Welcome to the digital realm of Diwanshu Midha, a fervent Fullstack
            Developer specializing in the MERN (MongoDB, Express, React,
            Node.js) stack. Embark on a captivating journey through the dynamic
            landscape of web development as Diwanshu shares his expertise and
            passion for crafting innovative solutions. Dive into a world where
            MongoDB, Express, React, and Node.js converge seamlessly to create
            cutting-edge applications. As a dedicated Fullstack Developer,
            Diwanshu Midha brings a wealth of experience and proficiency to the
            table. From the intricacies of database management with MongoDB to
            the robustness of server-side development using Express and Node.js,
            Diwanshu's prowess in the MERN stack is truly commendable. His
            commitment to excellence is evident in every line of code, making
            this corner of the web a showcase of unparalleled skill and
            creativity. Explore the React Developer side of Diwanshu Midha's
            expertise, where user interfaces come to life with seamless
            interactivity and engaging user experiences. Witness the fusion of
            technical precision and artistic flair as Diwanshu leverages React
            to build intuitive and visually stunning front-end solutions. From
            responsive designs to state-of-the-art user interfaces, this
            platform is a testament to the limitless possibilities that arise
            when React development is in the hands of a skilled practitioner
            like Diwanshu.
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
