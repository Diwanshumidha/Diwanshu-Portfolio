import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/client.fetch";
import { Skills } from "@/types/types";
import { groq } from "next-sanity";

const Skills = async () => {
  const query = groq`*[_type == 'skills'] {
    name,
    link,
    style
  }`;

  // const SKILLS = (await client.fetch(query)) as Skills[];
  const SKILLS: Skills[] = await sanityFetch({
    query: query,
    tags: ["skills"],
  });

  return (
    <section className=" flex flex-col md:flex-row gap-5 md:gap-0  justify-center overflow-hidden ">
      <h2 className="text-3xl  relative max-md:text-center ">
        I got the experience.
        <br /> Here is my toolbelt for success.
      </h2>
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

type skillProp = {
  skill: Skills;
};
const SkillCard = ({ skill }: skillProp) => {
  return (
    <div
      title={skill.name}
      className="w-10 mx-auto flex items-center flex-col justify-center"
    >
      <img
        src={`${skill.link}`}
        loading="lazy"
        alt={skill.name}
        className={`${skill.style} w-[40px] h-[40px]`}
      />
      <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
        {skill.name}
      </p>
    </div>
  );
};
