module.exports = {
    default: {
        require: ['features/step-definitions/*.js', 'features/support/*.js'],
        format: ['progress-bar', 'html:cucumber-report.html'],
        formatOptions: { snippetInterface: 'async-await' }
    },
    allure: {
        require: ['features/step-definitions/*.js', 'features/support/*.js'],
        format: ['progress-bar', 'allure'],
        formatOptions: {
            snippetInterface: 'async-await',
            allure: {
                resultsDir: './allure-results'
            }
        }
    }
}; 