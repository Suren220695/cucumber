const { Before, After, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');

// Set default timeout to 120 seconds for better reliability
setDefaultTimeout(120 * 1000);

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, '../../screenshots');
if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
}

// Create reports directory if it doesn't exist
const reportsDir = path.join(__dirname, '../../reports');
if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
}

Before(async function () {
    await this.init();
});

After(async function (scenario) {
    // Take screenshot on failure
    if (scenario.result.status === 'FAILED') {
        const screenshotName = `failed-${scenario.pickle.name.replace(/\s+/g, '-').toLowerCase()}`;
        await this.page.screenshot({
            path: path.join(screenshotsDir, `${screenshotName}.png`),
            fullPage: true
        });
        console.log(`Screenshot saved: ${screenshotName}.png`);
    }

    await this.cleanup();
});

AfterAll(async function () {
    console.log('All scenarios completed');
}); 