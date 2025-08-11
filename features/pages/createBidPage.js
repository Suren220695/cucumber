class createBidPage {
    constructor(page) {
        this.page = page;
        //button[text()='Create Bid']
        this.createBidButton = this.page.locator('//button[text()="Create Bid"]');
        //input[@placeholder="MMMM DD, YYYY"]
        this.dateInput = this.page.locator('//input[@placeholder="MMMM DD, YYYY"]');
        ////div[@title="P.3"]
        this.greenhouseLuxuriousInput = this.page.locator('//div[@title="P.3"]');

        //input[@placeholder="MMMM DD, YYYY hh:mm aa"]
        this.timeInput = this.page.locator('//input[@placeholder="MMMM DD, YYYY hh:mm aa"]');
        this.nextButton = this.page.locator('//button[text()="Next"]');
        this.locattionMiles = this.page.locator('(//input[@type="text"])[10]');


    }

    async clickCreateBidButton() {
        await this.page.waitForTimeout(3000);
        await this.createBidButton.click({ force: true });
        await this.createBidButton.click();
    }

    async selectCustomer(customerName) {
        await this.page.getByRole('combobox', { name: 'Customer Name' }).click();
        await this.page.getByRole('option', { name: customerName }).click();
    }

    async selectProperty(propertyName) {
        await this.page.getByRole('combobox', { name: 'Property Name' }).click();
        await this.page.getByRole('option', { name: propertyName }).click();
    }



    /**
  * Selects a specific date from a calendar widget.
  * @param {import('@playwright/test').Page} page - The Playwright page object.
  * @param {number} year - The year to select (e.g., 2027).
  * @param {number} day - The day of the month to select (e.g., 13).
  */
    async selectDate(year, day) {
        // Open the date picker
        await this.page.locator('div').filter({ hasText: /^Choose Date$/ }).getByLabel('Choose date', { exact: true }).click();

        // Switch to calendar view
        await this.page.getByRole('button', { name: 'calendar view is open, switch' }).click();

        // Select the year
        await this.page.getByRole('radio', { name: String(year) }).click();

        // Wait for the calendar to update
        await this.page.waitForTimeout(500); // Optional: adjust based on UI responsiveness

        // Select the day (only enabled gridcells)
        await this.page.locator('button[role="gridcell"]:not([disabled])')
            .filter({ hasText: String(day) })
            .first()
            .click();
    }


    /**
     * Selects a date and duration from a calendar and time picker.
     * @param {import('@playwright/test').Page} page - The Playwright page object.
     * @param {number} year - The year to select (e.g., 2027).
     * @param {number} day - The day of the month to select (e.g., 1).
     * @param {string} hours - The duration in hours (e.g., '8').
     * @param {string} minutes - The duration in minutes (e.g., '10').
     */
    async selectDateAndDuration(year, day, hours, minutes) {

        // Open the date picker
        await this.page.waitForTimeout(3000);
        await this.page.locator("(//button[@aria-label='Choose date'])[1]").click();

        // Switch to calendar view
        await this.page.getByRole('button', { name: 'calendar view is open, switch' }).click();

        // Select the year
        await this.page.getByRole('radio', { name: String(year) }).click();

        // Wait for calendar to update
        await this.page.waitForTimeout(500);

        // Select the day (only enabled gridcells)
        await this.page.locator('button[role="gridcell"]:not([disabled])')
            .filter({ hasText: String(day) })
            .first()
            .click();

        // Wait for time picker to appear
        await this.page.waitForSelector('ul[role="listbox"]');

        // Select hour
        await this.page.locator('ul[role="listbox"]')
            .locator(`li[role="option"]:not([aria-disabled="true"])`, { hasText: `${hours.padStart(2, '0')}` })
            .first()
            .click();

        // Select minute
        await this.page.locator('ul[role="listbox"]')
            .locator(`li[role="option"]:not([aria-disabled="true"])`, { hasText: `${minutes.padStart(2, '0')}` })
            .first()
            .click();

        // Confirm selection
        await this.page.getByRole('button', { name: 'OK' }).click();
    }

    async selectGreenhouse(greenhouseName) {
        await this.greenhouseLuxuriousInput.click();
    }



    async clickNextButton() {
        await this.nextButton.click();
    }

    async selectYesForIsThisAHistoricBuilding(question) {
        if (question == "Yes") {
            await this.page.locator('(//input[@value="Yes"])[1]').click();
        } else {
            await this.page.locator('(//input[@value="No"])[1]').click();
        }

    }

    async selectNoForCanThisBuildingBeAccessedWithLadder(question) {
        if (question == "No") {
            await this.page.locator('(//input[@value="No"])[2]').click();
        } else {
            await this.page.locator('(//input[@value="Yes"])[2]').click();
        }
    }

    async selectYesForCanScaffoldingBeSetUpOn(question) {
        if (question == "Yes") {
            await this.page.locator('(//input[@value="Yes"])[3]').click();
        } else {
            await this.page.locator('(//input[@value="No"])[3]').click();
        }
    }
    async selectYesForCanMachineryAccess(question) {
        if (question == "Yes") {
            await this.page.locator('(//input[@value="Yes"])[4]').click();
        } else {
            await this.page.locator('(//input[@value="No"])[4]').click();
        }
    }

    async selectNoForAreThereAnyParkingRestrictionsOrPermitsRequiredForTheWorkCrew(question) {
        if (question == "No") {
            await this.page.locator('(//input[@value="No"])[5]').click();
        } else {
            await this.page.locator('(//input[@value="Yes"])[5]').click();
        }
    }

    async selectYesForCanHeavyMachineryBeDrivenOnYourDriveway(question) {
        if (question == "Yes") {
            await this.page.locator('(//input[@value="Yes"])[6]').click();
        } else {
            await this.page.locator('(//input[@value="No"])[6]').click();
        }
    }

    async selectNoForCanADumpsterBePlacedNextTheBuildingBeingWorkedOn(question) {
        if (question == "No") {
            await this.page.locator('(//input[@value="No"])[7]').click();
        } else {
            await this.page.locator('(//input[@value="Yes"])[7]').click();
        }
    }

    async enterWindExposure(windExposure) {
        await this.locattionMiles.fill(windExposure);
    }

    async clickTradeQuestionTab(tabName) {
        // add wait for 3 seconds for select the tab
        await this.page.waitForTimeout(3000);
        await this.page.getByRole('tab', { name: tabName }).click();
    }

    async enterWidthOfGreenhouseInFeet(width) {

        // element stote in this page is #demo-helper-text-aligned
        await this.page.locator('#demo-helper-text-aligned').first().click();
        await this.page.locator('#demo-helper-text-aligned').first().fill(width);

    }

    async enterWidthOfGreenhouseInInches(width) {
        await this.page.locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.Mui-focused > #demo-helper-text-aligned').click();
        await this.page.locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.Mui-focused > #demo-helper-text-aligned').fill(width);
    }

    async enterLengthOfGreenhouseInFeet(length) {
        await this.page.locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.Mui-focused > #demo-helper-text-aligned').click();
        await this.page.locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.Mui-focused > #demo-helper-text-aligned').fill(length);
    }

    async enterLengthOfGreenhouseInInches(length) {
        await this.page.locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.Mui-focused > #demo-helper-text-aligned').click();
        await this.page.locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.Mui-focused > #demo-helper-text-aligned').fill(length);
    }

    async selectIWantToBuildANewFoundation(foundation) {
        await this.page.waitForTimeout(3000);
        await this.page.getByText(foundation, { exact: true }).click();
    }

    // snow load field
    async enterExpectedSnowLoad(length) {
        await this.page.locator('div:nth-child(9) > .MuiFormControl-root > .MuiInputBase-root > #demo-helper-text-aligned').click();
        await this.page.locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.Mui-focused > #demo-helper-text-aligned').fill(length);
    }

    async enterExpectedWindLoad(length) {
        await this.page.locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.Mui-focused > #demo-helper-text-aligned').click();
        await this.page.locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.Mui-focused > #demo-helper-text-aligned').fill(length);
    }

    async selectGreenhouseType(type) {
        await this.page.getByText(type, { exact: true }).click();
    }

    async selectTypeOfHomeAttachedSetup(setup) {
        await this.page.getByText(setup, { exact: true }).click();
    }

    async selectLeanToSetup(setup) {
        await this.page.getByRole('checkbox', { name: setup, exact: true }).check();
    }

    async selectMaximumHeightLimit(option) {
        if (option == "Yes") {
            await this.page.locator('label:nth-child(1) > .MuiTypography-root').first().click();
        } else {
            await this.page.locator('label:nth-child(2) > .MuiTypography-root').first().click();
        }
    }

    async selectRoofPitchPreference(pitchType) {
        await this.page.getByText(pitchType, { exact: true }).click();
    }

    async selectGlazingPreference(glazingType) {
        await this.page.getByText(glazingType, { exact: true }).click();
    }

    async selectTypeofGlass(glassType) {
        await this.page.getByText(glassType, { exact: true }).click();
    }

    async selectGreenhouseFrameColor(color) {
        await this.page.getByText(color, { exact: true }).first().click();
    }

    async selectDoorsOption(option) {
        if (option == "Yes") {
            await this.page.locator('(//span[text()="Yes"])[2]').click();
        } else {
            await this.page.locator('(//span[text()="No"])[2]').click();
        }
    }

    async enterNumberOfTrusses(trusses) {
        await this.page.locator('#demo-helper-text-aligned').nth(4).click();
        await this.page.locator('#demo-helper-text-aligned').nth(4).fill(trusses);
    }

    async selectAwningVentType(ventType) {
        await this.page.getByText(ventType, { exact: true }).click();
    }

    //Double Awning Vent
    async enterDoubleAwningVent(quantity) {
        await this.page.locator('(//input[@id="demo-helper-text-aligned"])[6]').click();
        await this.page.locator('(//input[@id="demo-helper-text-aligned"])[6]').fill(quantity);

    }
    async enterSingleAwningVent(quantity) {
        await this.page.locator('(//input[@id="demo-helper-text-aligned"])[6]').click();
        await this.page.locator('(//input[@id="demo-helper-text-aligned"])[6]').fill(quantity);
    }



}

module.exports = createBidPage;