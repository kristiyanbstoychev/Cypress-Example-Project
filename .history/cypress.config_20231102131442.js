const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require ("@simonsmith/cypress-image-snapshot/plugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    experimentalWebKitSupport: true,
    video: false,
    setupNodeEvents(on) {
      addMatchImageSnapshotPlugin(on);
    },
    //global variables
    env: {
      //list of available devices
      // iphone-8, samsung-s10, ipad-mini, macbook-11, macbook-13, macbook-15, macbook-16
      username: u + Date.now(),
      deviceForTesting: "macbook-16",
      isMobile: false,
    },
  },
});
