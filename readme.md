# <div align="center">1.setup E2E 🚀</div>  
  

- npm install -g  
  

- npx./node_modules  
  

- npx cypress open  
- npm install cypress@10.10.0 --save-dev
  

# **<div align="center">2.set up BDD🚀</div>**  
  

- npm install --save-dev @badeball/cypress-cucumber-preprocessor  
  

- npm install --save-dev @bahmutov/cypress-esbuild-preprocessor  
  

- npm i @bahmutov/cypress-esbuild-preprocessor  
  

# **<div align="center">3. cypress.config.js</div>**  
  

```
import { defineConfig } from "cypress";
import * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
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
});
```  
  

# <div align="center">4. thêm tsconfig.json</div>  
  

```
{
  "compilerOptions": {
    "paths": {
      "@badeball/cypress-cucumber-preprocessor/*": ["./node_modules/@badeball/cypress-cucumber-preprocessor/dist/subpath-entrypoints/*"]
    }
  }
}
```
  
  
# <div align="center">4.1 thêm upload file</div>  
  

npm install cypress-file-upload --save-dev
  
  
# <div align="center">4.2 clipboardy</div>  
  

npm install clipboardy --save-dev
  
  

# <div align="center">5. cập nhật file package.json</div>  
  

 "devDependencies": {
    "@badeball/cypress-cucumber-preprocessor": "^16.0.3",  
  

```
6. npm install ts-loader --save-dev
7. npm install -D cypress-xpath
8. npx cypress run -e TAGS='@login' --headed
9. npm install --save-dev cypress-cucumber-attach-screenshots-to-failed-steps
10. junit report
npm install cypress-junit-reporter --save-dev
npm install --save-dev cypress-multi-reporters mocha-junit-reporter

11. run
 npx cypress run --reporter junit
12. date moment 
npm install cypress-moment
13. run 
npx cypress run --spec "cypress\e2e\UI\Apointments\Filter.feature" --reporter junit
14. xpath
npm install -D cypress-xpath
```  
  

<br/>  


## My Skill Set  
<table><tr><td valign="top" width="33%">



</td><td valign="top" width="33%">



</td><td valign="top" width="33%">



</td></tr></table>  

<br/>  


## Connect with me  
  

<br/>  


## Github Stats  
  

<br/>  


## Recent Blog Posts  
  

<br/>  

  ```
  
        steps:
          - name: 'gcr.io/cloud-builders/docker'
            args: ['build', '-t', 'gcr.io/readtome-315415/my-jenkins', '.']
          - name: 'gcr.io/cloud-builders/docker'
            args: ['push', 'gcr.io/readtome-315415/my-jenkins']
          - name: 'gcr.io/cloud-builders/gcloud'
            args: ['run', 'deploy', 'my-jenkins', '--image', 'gcr.io/readtome-315415/my-jenkins', '--platform', 'managed', '--region', 'us-central1']
          - name: 'gcr.io/cloud-builders/gcloud'
            args: ['run', 'services', 'update', 'my-jenkins', '--platform', 'managed', '--region', 'us-central1', '--update-env-vars', 'JENKINS_OPTS=--httpPort=8080']
          - name: 'gcr.io/cloud-builders/gcloud'
            args:
              - 'run'
              - 'deploy'
              - 'my-jenkins'
              - '--image'
              - 'gcr.io/readtome-315415/my-jenkins'
              - '--platform'
              - 'managed'
              - '--region'
              - 'us-central1'
              - '--set-env-vars'
              - 'INITIAL_ADMIN_PASSWORD=$(docker run --rm -v /var/jenkins_home:/var/jenkins_home gcr.io/readtome-315415/my-jenkins bash -c "cat /var/jenkins_home/secrets/initialAdminPassword")'
  ```

<br/>  

  

<br/>  


<br />

----
<div align="center">Generated using <a href="https://profilinator.rishav.dev/" target="_blank">Github Profilinator</a></div>