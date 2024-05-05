import Google from "@auth/core/providers/google";
import GitHub from "@auth/core/providers/github";
import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import node from "@astrojs/node";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  integrations: [db(), auth()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
