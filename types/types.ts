export type Project = {
  _updatedAt: string;
  githublink: string;
  skills: null;
  skillsName: {
    _type: "skillsName";
    _key?: string;
    value: string;
  }[];
  link: string;
  _id: string;
  _createdAt: string;
  _rev: string;
  _type: "projects";
  img: {
    _type: "image";
    alt: string;
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  description: string;
  title: string;
};

export type Skills = {
  name: string;
  link: string;
  style?: string;
};
