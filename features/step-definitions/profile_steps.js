const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const ProfilePage = require('../pages/profilePage');


setDefaultTimeout(90 * 1000);

let profilePage;



When('I click the profile avatar icon', async function () {
    profilePage = new ProfilePage(this.page);
    profilePage.clickProfileAvatar();
})

Then('I should see the profile details', async function () {
    profilePage.clickprofileButton();
})
Then('I should be navigated to the profile page', async function () {
    await profilePage.validateTheProfilePageActiveTab();
})
