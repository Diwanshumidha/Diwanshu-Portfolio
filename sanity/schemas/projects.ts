import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "img",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({ name: "githublink", title: "Github Link", type: "url" }),
    defineField({ name: "link", title: "Project Link", type: "url" }),
    defineField({ name: "priority", title: "Priority", type: "number" }),

    defineField({
      name: "skillsName",
      title: "Skills",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "skillsName",
          fields: [{ type: "string", name: "value" }],
        }),
      ],
    }),
  ],
});
