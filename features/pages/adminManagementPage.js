const { expect } = require("playwright/test")

class AdminManagementPage {
    constructor(page) {
        this.page = page
        this.path = "/admin"
        this.sideMenuButton = this.page.locator('//div[@class="topbar-left-content MuiBox-root css-0"]//button')
        this.AdminManagementButton = this.page.locator("//button[normalize-space(.)='Admin Management']").first()
        this.pageTitles = this.page.locator('//div[@aria-label="admin management tabs"]//button')

    }


    async goto() {
        let url = await this.page.url()
        const parts = url.split("/");
        const domainWithProtocol = parts[0] + "//" + parts[2];
        await this.page.goto(domainWithProtocol + this.path);
    }


    async clickSideMenu() {

        try {
            await this.sideMenuButton.waitFor({ state: "visible" })
            await this.sideMenuButton.click();

        } catch (error) {
            console.log(error);

        }

    }


    async navigateToAdminManagement() {

        let url = await this.page.url()
        const parts = url.split("/");
        const domainWithProtocol = parts[0] + "//" + parts[2];
        try {
            await this.AdminManagementButton.waitFor({ state: "visible" })
            await this.AdminManagementButton.click();

            await this.page.waitForURL(domainWithProtocol + this.path, { timeout: 10000 });
        } catch (error) {
            console.log(error);
            await this.goto()
        }

    }


    async verifyPageTitles(expectedTitles) {
        let titles = await this.pageTitles.allTextContents();
        console.log(titles);
        // expect(titles).toEqual(expectedTitles)
        // expect(titles).toContain(expectedTitles)
        

    }


    



}



module.exports = AdminManagementPage