const testData = require('../utils/data.json');
class LoginPage {
    constructor(page) {
        this.page = page;
        this.url = 'https://ca-gmscloud-webapps-ncus-st.whiteground-c828087f.northcentralus.azurecontainerapps.io/';

        // Page elements - these would need to be updated based on actual page structure
        // this.usernameInput = '[data-testid="username"]';
        // this.passwordInput = '[data-testid="password"]';
        // this.loginButton = '[data-testid="login-button"]';
        // this.errorMessage = '[data-testid="error-message"]';
    }

    async navigateTo() {
        await this.page.goto(this.url);
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }

    async getPageTitle() {
        return await this.page.title();
    }

    async getCurrentUrl() {
        return this.page.url();
    }

    async isPageLoaded() {
        try {
            await this.page.waitForLoadState('domcontentloaded', { timeout: 10000 });
            return true;
        } catch (error) {
            return false;
        }
    }

    async takeScreenshot(name) {
        await this.page.screenshot({ path: `screenshots/${name}.png` });
    }

    async clickLoginButton() {
        await this.page.getByRole('button', { name: 'Login' }).waitFor({ state: 'visible' });
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async enterCredentialsBasedOnRole(role) {
        // Get credentials from test data
        const userCredentials = testData.users[role];

        if (!userCredentials) {
            throw new Error(`Invalid role: ${role}. Available roles: ${Object.keys(testData.users).join(', ')}`);
        }

        // Wait for form elements to be visible
        await this.page.getByRole('textbox', { name: 'Email Address' }).waitFor({ state: 'visible' });
        await this.page.getByRole('textbox', { name: 'Password' }).waitFor({ state: 'visible' });
        await this.page.getByRole('button', { name: 'Sign in' }).waitFor({ state: 'visible' });

        // Fill in credentials from test data
        await this.page.getByRole('textbox', { name: 'Email Address' }).fill(userCredentials.email);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(userCredentials.password);

        // Click sign in button
        await this.page.getByRole('button', { name: 'Sign in' }).click();
    }

    async verifyWisconsinGreenhouseCompanyIsDisplayed() {
        await this.page.getByText('Wisconsin Greenhouse Company').waitFor({ state: 'visible', timeout: 30000 });
    }

}

module.exports = LoginPage; 