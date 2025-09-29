const { expect } = require("playwright/test");
const PageUtilClassName = require("./commonUtils/PageUtils");

class ProfilePage {


    constructor(page) {
        this.page = page;
        this.profileAvatar = this.page.locator('//div[contains(@class,"MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault topbar-profile-avatar")]');
        this.profileButton = this.page.getByRole('menuitem', { name: 'Profile' })
        this.profileSettings = this.page.locator("//ul[@role='menu']//li[.//text()[normalize-space()='Settings']]")
        this.logout = this.page.locator("//ul[@role='menu']//li[.//text()[normalize-space()='Logout']]")
        this.profilePageActiveTab = this.page.locator("//button[@aria-selected='true']")
    }


    async clickProfileAvatar() {
        await PageUtilClassName.waitForElementToBeStable(this.profileAvatar, this.page);
        await this.profileAvatar.scrollIntoViewIfNeeded();
        await this.profileAvatar.click();
    }

    async clickprofileButton() {
        await PageUtilClassName.waitForPageLoad(this.page);
        // await PageUtilClassName.waitForElementToBeStable(this.profileButton, this.page);
        await this.page.waitForTimeout(3000);
        // Hover on the profile button with timeout
        await this.profileButton.hover({ timeout: 5000 });
        // Click with force and timeout
        await this.profileButton.click({ force: true, timeout: 5000 });
        await this.page.waitForTimeout(3000);
        await this.profileButton.click({ force: true, timeout: 5000 });
    }

    async validateTheProfilePageActiveTab() {
        await PageUtilClassName.waitForElementToBeStable(this.profilePageActiveTab, this.page);
        await this.profilePageActiveTab.isVisible();
        let activeTab = await this.profilePageActiveTab.textContent();
        console.log("activeTab: " + activeTab);
        expect(activeTab).toContain("Personal info");
        console.log("✅ Profile page is active: " + activeTab);
        return activeTab;
    }


}

module.exports = ProfilePage;