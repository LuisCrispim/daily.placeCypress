const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.daily.place",
    setupNodeEvents(on, config) {},
  },
  video: false,
  fixturesFolder: false,
});
