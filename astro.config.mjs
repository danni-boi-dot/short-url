import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import node from "@astrojs/node";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), auth()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
