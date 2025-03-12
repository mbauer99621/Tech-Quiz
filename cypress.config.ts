import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'yshtia',
  e2e: {
    baseUrl: "http://localHost:3001",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
