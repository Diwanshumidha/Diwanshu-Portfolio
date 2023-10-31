import HeroSection from "@/components/Home/HeroSection";
import Skills from "@/components/Home/Skills/Skills";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/components/Home/Contact/Contact"));
const Projects = dynamic(() => import("@/components/Home/Projects/Projects"));

export const metadata = {
  title: "Diwanshu Midha - MERN Stack Developer ",
  description:
    "Welcome to my corner of the web! I am a passionate MERN (MongoDB, Express, React, Node.js) developer, and this is where I showcase my journey through the world of web development.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  siteName: "Diwanshu Midha Portfolio",
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
      </div>
    </>
  );
};

export default Home;
