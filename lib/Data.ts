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
    icon: "/icons/Twitter.svg",
    leavesWebsite: true,
  },
  {
    name: "Email",
    link: "mailto:contactmidha@gmail.com",
    icon: "/icons/mail-f.svg",
    leavesWebsite: true,
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

export const sourceCodeLink =
  "https://github.com/Diwanshumidha/Diwanshu-Portfolio";
export const Email = "contactmidha@gmail.com";
