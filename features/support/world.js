const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');

class CustomWorld {
    constructor({ parameters }) {
        this.parameters = parameters;
        this.browser = null;
        this.context = null;
        this.page = null;
        this.headless = parameters.headless !== false; // Default to headless mode
         this.browserName = parameters.browser || 'firefox'; // Default chromium
    }

    async init() {



               let browserType;
               switch (this.browserName.toLowerCase()) {
            case 'firefox':
                browserType = firefox;
                break;
            case 'webkit': // Safari engine
                browserType = webkit;
                break;
            case 'edge': 
            case 'chromium':
            default:
                browserType = chromium;
        }


       this.browser = await browserType.launch({
            headless: this.headless,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        this.context = await this.browser.newContext({
            viewport: null,
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