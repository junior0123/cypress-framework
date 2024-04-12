const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
module.exports = defineConfig({
  retries:1,
  video: false,
  e2e: {
    setupNodeEvents: (on, config) => {
      allureCypress(on, {
        resultsDir: "./allure-results",
      });

      return config;
    },
  },
});
