import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-dark-default",
      },
      langs: [
        "javascript",
        "html",
        "css",
        "makefile",
        "python",
        "json",
        "jsx",
        "vue",
        "go",
      ],
      transformers: [],
    },
  },
  prefetch: true,
  output: "static",
});
