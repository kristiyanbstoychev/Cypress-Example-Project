const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require ("@simonsmith/cypress-image-snapshot/plugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    experimentalWebKitSupport: true,
    video: false,
    setupNodeEvents(on) {
      addMatchImageSnapshotPlugin(on),
        this.viewportHeight,
        this.viewportWidth,
        // implement node event listeners here
        //launch the browser in incognito mode
        on("before:browser:launch", (browser = {}, launchOptions) => {
          if (browser.family === "chromium" && browser.name !== "electron") {
            launchOptions.args.push("--incognito");
            return launchOptions;
          }

          if (browser.name === "electron") {
            launchOptions.preferences.incognito = true;
            return launchOptions;
          }
        });
    },
    //global variables
    env: {
      //list of available devices
      // iphone-8, samsung-s10, ipad-mini, macbook-11, macbook-13, macbook-15, macbook-16
      firstName: "Fname" + Date.now(),
      lastName: "Lname" + Date.now(),
      username: "testUser" + Date.now(),
      password: "Password1!",
      bankName: "Bank" + Date.now(),
      deviceForTesting: "macbook-16",
      isMobile: "false",
    },
  },
});
