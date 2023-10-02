const multipleReporters = require('cypress-multi-reporters');
const junitReporter = require('mocha-junit-reporter');

module.exports = (on, config) => {
  const reporters = multipleReporters({
    reporters: [
      {
        reporter: junitReporter,
        options: {
          mochaFile: 'cypress/results/custom-junit.xml', // Specify your desired file name here
          toConsole: true, // Output XML to the console
        },
      },
    ],
  });

  on('after:run', (results) => {
    const xml = reporters(results, config);
    const testsuites = `<testsuites name="Cypress Tests" time="${results.totalDuration / 1000}" tests="${results.totalTests}" failures="${results.totalFailed}" />`;
    console.log(`${xml}\n${testsuites}`);
    return xml;
  });
};
