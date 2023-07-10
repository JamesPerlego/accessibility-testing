import { defineConfig } from 'cypress';

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa.perlego.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
  },
  env: {
    name: 'qa',
    baseAPI: 'https://api-eu-west-2-dev.perlego.com',
  },
  viewportWidth: 1100,
  viewportHeight: 900,
  video: true,
  retries: 1,
  numTestsKeptInMemory: 0,
  defaultCommandTimeout: 20000,
  requestTimeout: 40000,
  userAgent: 'perlego-cypress-test',
});
