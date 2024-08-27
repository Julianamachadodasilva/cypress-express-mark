const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    env: {
      apiUrl: 'http://localhost:3333'
    },
    viewportWidth: 1920,    // Configurando o tamanho da tela que o cypress deve utilizar nos testes ViewportSize
    viewportHeight: 1080,   // Configurando o tamanho da tela que o cypress deve utilizar nos testes ViewportSize
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
