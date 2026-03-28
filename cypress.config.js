const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000', 
    specPattern: 'cypress/**/*.cy.js',
    supportFile: false,
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});