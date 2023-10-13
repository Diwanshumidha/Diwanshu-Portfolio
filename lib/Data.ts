export const PROJECTS = [
  {
    title: "Popcorn Box",
    description:
      "A Fully Functional IMDB Clone with advance search rating and Actors info",
    img: "/projects/PopcornBox.png",
    link: "https://popcornboxx.vercel.app/",
    githublink: "https://github.com/Diwanshumidha/DMDB",
    skills: ["React", "Tailwind", "Css"],
  },
  {
    title: "Next Boost CLI",
    description: "A CLI tool to setup next js app easily and quickly",
    img: "/projects/snap.png",
    githublink: "https://github.com/Diwanshumidha/NextBoost",
    skills: ["Npm", "nodejs",'git'],
  },
  {
    title: "Next Boost",
    description: "A Documentation of CLI tool To make Next Easy and start",
    img: "/projects/nextboost.png",
    link: "https://nextboost.netlify.app/",
    githublink: "https://github.com/Diwanshumidha/NextBoost",
    skills: ["Vitepress", "Stylus"],
  },
  {
    title: "Portfolio Template",
    description:
      "A Portfolio Template with parallax effects and simple animations",
    img: "/projects/Nishant.png",
    link: "https://nishantjii.vercel.app/",
    githublink: "https://github.com/Diwanshumidha/Nishant-Portfolio",
    skills: ["React", "Nextjs", "Tailwind"],
  },
  {
    title: "Gardern Your Relationship",
    description:
      "Worked in Gardern Your Relationship for Tann Mann Foundation",
    img: "/projects/gyr.png",
    link: "https://gardeningyourrelationships.com/",
    skills: ["React", "Tailwind"],
  },
  {
    title: "DM Grocery",
    description: "A Simple Ecommerce Website ",
    img: "/projects/ecom.png",
    link: "https://dmgrocery.netlify.app/",
    skills: ["React", "Tailwind", "Redux", "Css"],
  },
  {
    title: "Motivational Quotes",
    description: "A simple and one of my first apps",
    img: "/projects/quotes.png",
    link: "https://quotesum.netlify.app/",
    skills: ["React", "Css"],
  },
];

export type ProjectType = {
  title: string;
  description: string;
  img: string;
  link?: string;
  githublink?: string;
  skills: string[];
};

// Please Dont remove github email twitter or linkedin
export const SocialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/Diwanshumidha",
    icon: "/icons/github-f.svg",
    leavesWebsite: true,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/diwanshu-340716211/",
    icon: "/icons/linkedin-f.svg",
    leavesWebsite: true,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/DiwanshuMd",
    icon: "/icons/twitter.svg",
    leavesWebsite: true,
  },
  {
    name: "Email",
    link: "mailto:contactdm@gmail.com",
    icon: "/icons/mail-f.svg",
    leavesWebsite: true,
  },
];

export const SKILLS = [
  {
    name: "HTML",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Python",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "TypeScript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Sass",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    name: "Next.js",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    style: "color-invert",
  },
  {
    name: "React.js",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Git",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Firebase",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Supabase",
    link: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
  },
  {
    name: "MongoDB",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Prisma",
    link: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
    style: "color-invert",
  },
  {
    name: "Node.js",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Tailwind CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "GraphQl",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
];

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
};
export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: SocialLinks,
    },
  ],
};

type Route = {
  title: string;
  path: string;
};
export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
];

// Function to find a link by name
export function findLinkByName(name: string) {
  // Loop through the SocialLinks array
  for (const socialLink of SocialLinks) {
    if (socialLink.name === name) {
      return socialLink.link;
    }
  }
  // Return null if the name is not found
  return "/";
}

export const sourceCodeLink = "https://github.com/Diwanshumidha/Diwanshu-Portfolio";
export const Email = "contactdm@gmail.com";
