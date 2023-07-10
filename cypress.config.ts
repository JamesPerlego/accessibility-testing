import { defineConfig } from "cypress";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)
    
          return null
        },
        table(message) {
          console.table(message)
    
          return null
        }
      })
    },
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
  retries: 0,
  numTestsKeptInMemory: 50,
  defaultCommandTimeout: 20000,
  requestTimeout: 40000,
  userAgent: 'perlego-cypress-test',
});
