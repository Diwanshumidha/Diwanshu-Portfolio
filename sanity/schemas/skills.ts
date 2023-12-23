import { defineField, defineType } from "sanity";

export default defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "link", title: "Icon", type: "url" }),
    defineField({ name: "style", title: "Style", type: "string" }),
  ],
});
