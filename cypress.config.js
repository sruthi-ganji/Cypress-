const { defineConfig } = require("cypress");
const env = process.env
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const { verifyDownloadTasks } = require('cy-verify-downloads');


module.exports = defineConfig({
  env: {
    url: "http://the-internet.herokuapp.com/"

  },
  projectId: 'syopdg',
  defaultCommandTimeout: 6000,
  requestTimeout: 6000,
  execTimeout: 80000,
  pageLoadTimeout: 100000,
  reporter: 'mochawesome',
  reporterOptions: {
    "reportDir": "mochawesome-report",
    "overwrite": false,
    "html": true,
    "json": true,
    "charts": true,
    "saveAllAttempts": false
 },
 "retries": {
  // Configure retry attempts for `cypress run`
  // Default is 0
  "runMode": 2,
  // Configure retry attempts for `cypress open`
  // Default is 0
  "openMode": 2
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', { downloadFile })
      on('task', verifyDownloadTasks);

    },

  },
});
