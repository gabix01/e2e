const { defineConfig } = require('cypress')

module.exports = defineConfig({
  animationDistanceThreshold: 5,
  blockHosts: null,
  browsers: [
    {
      channel: 'stable',
      displayName: 'Chrome',
      family: 'chromium',
      majorVersion: 92,
      name: 'chrome',
      path: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      version: '80.0.3987.163',
    },
    {
      channel: 'stable',
      displayName: 'Firefox',
      family: 'firefox',
      info: 'Firefox support is currently in beta! You can help us continue to improve the Cypress + Firefox experience by [reporting any issues you find](https://on.cypress.io/new-issue).',
      majorVersion: 90,
      name: 'firefox',
      path: 'C:\\Program Files\\Mozilla Firefox\\firefox.exe',
      version: '74.0.0.7373',
      userAgent:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    },
    {
      channel: 'stable',
      displayName: 'Edge',
      family: 'chromium',
      majorVersion: 92,
      name: 'edge',
      path: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
      version: '80.0.361.66',
    },
  ],
  env: {
    url: 'TestArena',
  },
  chromeWebSecurity: true,
  defaultCommandTimeout: 4000,
  execTimeout: 60000,
  fileServerFolder: '',
  fixturesFolder: 'cypress/fixtures',
  hosts: null,
  modifyObstructiveCode: true,
  numTestsKeptInMemory: 50,
  pageLoadTimeout: 60000,
  port: null,
  projectId: 'null',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  requestTimeout: 5000,
  responseTimeout: 30000,
  screenshotsFolder: 'cypress/results/screenshots',
  taskTimeout: 60000,
  trashAssetsBeforeRuns: true,
  userAgent: null,
  video: false,
  videoCompression: 32,
  videoUploadOnPasses: true,
  videosFolder: 'cypress/videos',
  viewportHeight: 768,
  viewportWidth: 1366,
  waitForAnimations: true,
  watchForFileChanges: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins')(on, config)
    },
    baseUrl: 'http://demo.testarena.pl',
    excludeSpecPattern: '*.hot-update.js',
    specPattern: 'cypress/e2e/**/*.*',
  },
})
