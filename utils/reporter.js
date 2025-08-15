const { AllureRuntime } = require('allure-js-commons');
const { CucumberJSAllureFormatter } = require('allure-cucumberjs');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AllureReporter extends CucumberJSAllureFormatter {
    constructor(options) {
        super(options, new AllureRuntime({ resultsDir: './allure-results' }), {
            labels: [
                {
                    pattern: [/@feature:(.*)/],
                    name: 'epic',
                },
                {
                    pattern: [/@severity:(.*)/],
                    name: 'severity',
                },
            ],
            links: [
                {
                    pattern: [/@issue=(.*)/],
                    type: 'issue',
                    urlTemplate: 'https://example.org/browse/%s',
                },
            ],
        });
        
        this.resultsDir = path.join(process.cwd(), 'allure-results');
        this.reportDir = path.join(process.cwd(), 'allure-report');
        this.ensureDirectories();
    }

    ensureDirectories() {
        // Create allure-results directory if it doesn't exist
        if (!fs.existsSync(this.resultsDir)) {
            fs.mkdirSync(this.resultsDir, { recursive: true });
            console.log(`Created directory: ${this.resultsDir}`);
        }

        // Create allure-report directory if it doesn't exist
        if (!fs.existsSync(this.reportDir)) {
            fs.mkdirSync(this.reportDir, { recursive: true });
            console.log(`Created directory: ${this.reportDir}`);
        }
    }

    generateReport() {
        try {
            console.log('Generating Allure report...');
            
            // Check if allure command is available
            try {
                execSync('allure --version', { stdio: 'pipe' });
            } catch (error) {
                console.log('Allure command not found. Installing allure commandline...');
                try {
                    execSync('npm install -g allure-commandline', { stdio: 'inherit' });
                } catch (installError) {
                    console.log('Failed to install allure-commandline globally. Please install it manually:');
                    console.log('npm install -g allure-commandline');
                    return;
                }
            }

            // Generate report from allure-results to allure-report
            execSync(`allure generate ${this.resultsDir} -o ${this.reportDir} --clean`, { stdio: 'inherit' });
            console.log(`Allure report generated successfully at: ${this.reportDir}`);
            
            // Open the report in browser (optional)
            try {
                execSync(`allure open ${this.reportDir}`, { stdio: 'inherit' });
            } catch (openError) {
                console.log('Report generated. To view it, run: allure open allure-report');
            }
        } catch (error) {
            console.error('Error generating Allure report:', error.message);
        }
    }

    // Method to be called after all tests complete
    async finalize() {
        console.log('Finalizing Allure reporting...');
        this.generateReport();
    }
}

module.exports = AllureReporter;
