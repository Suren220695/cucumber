module.exports = {
  default: {
    require: ['features/step-definitions/*.js', 'features/support/*.js'],
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  }
}; 