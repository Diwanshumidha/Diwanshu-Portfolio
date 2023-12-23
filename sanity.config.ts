/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { theme } from "./lib/theme";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import Logo from "./components/Logo";
import { AlarmCheck } from "lucide-react";
import L from "./components/StudioLogo";

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--my-blue": "#4285f4",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
};

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  icon: L,
  title: "Portfolio CMS",
  name: "Portfolio_CMS",
  theme,

  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
});
