import { defineConfig } from "cypress";
import * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
    defaultCommandTimeout: 10000,
    env: {
      url: "https://billings.dev.appsensesolutions.com/",
      token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkMDNhZTdmNDczZjJjNmIyNTI3NmMwNjM2MGViOTk4ODdlMjNhYTkiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjpbIkFkbWluIiwiU2NoZWR1bGVyIl0sImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9yZWFkdG9tZS0zMTU0MTUiLCJhdWQiOiJyZWFkdG9tZS0zMTU0MTUiLCJhdXRoX3RpbWUiOjE2ODczNDAwNTEsInVzZXJfaWQiOiIxRWZWRW9nenlOVkVYTmZqaXRlYlZTSWkxdjQyIiwic3ViIjoiMUVmVkVvZ3p5TlZFWE5maml0ZWJWU0lpMXY0MiIsImlhdCI6MTY4NzM0MDA1MSwiZXhwIjoxNjg3MzQzNjUxLCJlbWFpbCI6ImJlbnphY2guZmlyZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJiZW56YWNoLmZpcmVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQiLCJ0ZW5hbnQiOiJXb3VuZHNEeW5hbWljLXJuNGJ0In19.qOsivztjIv2-f8qh9Nr5GstSm7WEdEoF9GBu_mbsqotOr8AzFFWZXdZpeoS2p2XoFc6UojI1CfzROH0Dxsu5LPYHNaRPBYDXw_95W3EamBcbZNjLoMYovmcXRXFEXL2zomt7CUFZyJUZVXNOVXounZLPWxoVKAa9-x0kMSc-kWAQfHYuZ5bquzyQcEWtJOZPWFCOCig4Nso1vdvnG-PuVGZLd6e1Q7KIkaKDDOJ0V4srMX6-ad8EX-tDNYYCpjTcIz2r9gJBP6kWsOvUMDlVx0nqfF6FJZwOZvpgpNOzfMo1zM-MgyYPuk03UHjF-OSYtmm9W7cMSN9h6qyH05IR4w",
    },
    retries: {
      runMode: 1,
  
    },
  
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
  reporter: "junit",
  reporterOptions: {
    mochaFile: "cypress/results/results.xml",
    toConsole: true
  },
});