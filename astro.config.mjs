import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import node from "@astrojs/node";
import auth from "auth-astro";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), auth(), tailwind()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});