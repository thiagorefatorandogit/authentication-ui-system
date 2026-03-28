const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:3000',
    supportFile: false,
    specPattern: 'cypress/**/*.cy.js',
    viewportWidth: 1280,
    viewportHeight: 720
  },
});