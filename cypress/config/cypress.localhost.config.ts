import { defineConfig } from 'cypress';

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
  },
  env: {
    name: 'localhost',
    baseAPI: 'https://api-eu-west-2-dev.perlego.com',
  },
  projectId: 'ub8448',
  viewportWidth: 1100,
  viewportHeight: 900,
  video: true,
  retries: 2,
  numTestsKeptInMemory: 0,
  defaultCommandTimeout: 20000,
  requestTimeout: 40000,
  userAgent: 'perlego-cypress-test',
});
