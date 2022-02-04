const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './cypress/reports/cucumber-json/',
  reportPath: './cypress/reports/cucumber-json/html-resports',
  metadata: {
    browser: {
      name: 'chrome',
      version: '97',
    },
    device: 'Local test machine',
    platform: {
      name: 'Microsoft Windows',
      version: '10',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Packtpub Cypress Course' },
      { label: 'Release', value: '1.2.3' },
      { label: 'Cycle', value: 'B11221.34321' },
      { label: 'Execution Start Time', value: 'Feb 04th 2022, 00:33 AM EST' },
      { label: 'Execution End Time', value: 'Feb 04th 2022, 00:34 AM EST' },
    ],
  },
});
