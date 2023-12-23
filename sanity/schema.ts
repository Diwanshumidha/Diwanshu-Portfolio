import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";

import projects from "./schemas/projects";
import skills from "./schemas/skills";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, projects, skills],
};
