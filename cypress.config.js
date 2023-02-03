import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,
  viewportWidth: 1000,
  viewportHeight: 1000,
  waitForAnimations: true,
  failOnStatusCode: false,
  video: false,
  screenshotsFolder: 'cypress/reports/screenshots',
  trashAssetsBeforeRuns: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      screenshotOnRunFailure: false,
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
  },
})
