const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html",
  openReportInBrowser: true,
  reportName: "Test Framework",
  displayDuration: true,
  displayReportTime: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "104",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
});
