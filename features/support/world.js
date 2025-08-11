const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld {
    constructor({ parameters }) {
        this.parameters = parameters;
        this.browser = null;
        this.context = null;
        this.page = null;
        this.headless = parameters.headless !== false; // Default to headless mode
    }

    async init() {
        this.browser = await chromium.launch({
            headless: this.headless,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        this.context = await this.browser.newContext({
            viewport: { width: 1280, height: 720 },
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            recordVideo: {
                dir: 'reports/videos',
                size: {
                    width: 1280,
                    height: 720
                }
            }
        });

        this.page = await this.context.newPage();

        // Set default timeout - increased for better reliability
        this.page.setDefaultTimeout(120000);
        this.page.setDefaultNavigationTimeout(120000);
    }

    async cleanup() {
        if (this.page) {
            await this.page.close();
        }
        if (this.context) {
            await this.context.close();
        }
        if (this.browser) {
            await this.browser.close();
        }
    }
}

setWorldConstructor(CustomWorld); 