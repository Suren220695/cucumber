const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

// Set default timeout to 30 seconds
setDefaultTimeout(30 * 1000);

let loginPage;

Given('I am on the login page', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.navigateTo();
});

When('I launch the application URL', async function () {
    await loginPage.waitForPageLoad();
});

Then('the application should be loaded successfully', async function () {
    const isLoaded = await loginPage.isPageLoaded();
    expect(isLoaded).toBe(true);

    const currentUrl = await loginPage.getCurrentUrl();
    expect(currentUrl).toContain('ca-gmscloud-webapps-ncus-st.whiteground-c828087f.northcentralus.azurecontainerapps.io');

    const pageTitle = await loginPage.getPageTitle();
    console.log(`Page title: ${pageTitle}`);
    console.log(`Current URL: ${currentUrl}`);

    // Take a screenshot for verification
    await loginPage.takeScreenshot('login-page-loaded');
});
Then('I click {string} button', async function (buttonName) {
    await loginPage.clickLoginButton(buttonName);
})

Then('I enter credentials based on role {string}', async function (role) {
    await loginPage.enterCredentialsBasedOnRole(role);

})

Then('I verify the {string} is displayed', (s) => {
  // Write code here that turns the phrase above into concrete actions
})
