// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
require("cypress-xpath");
// Import commands.js using ES2015 syntax:
import './commands'
import { addMatchImageSnapshotCommand } from "@simonsmith/cypress-image-snapshot/command";

addMatchImageSnapshotCommand();

// can also add any default options to be used 
// by all instances of `matchImageSnapshot`
addMatchImageSnapshotCommand({
  failureThresholdType: "percent",
  capture: "viewport",
  customDiffConfig: { threshold: 1 },
})

beforeEach(() => {
    cy.clearAllCookies();
    cy.visit("")
    cy.viewport(Cypress.env('deviceForTesting'));

    if (Cypress.env('isMobile') == true) {
        cy.log(Cypress.env("isMobile"));
    }
});

// Alternatively you can use CommonJS syntax:
// require('./commands')