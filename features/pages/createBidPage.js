const PageUtilClassName = require('./commonUtils/PageUtils');

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
        this.submitButton = this.page.locator('//button[text()="Submit"]');
        this.proceedButton = this.page.locator('//button[text()="Proceed"]');
        this.confirmButton = this.page.locator('//button[text()="Confirm"]');

        this.sendEstimateButton = this.page.locator('//button[contains(., "Send Estimate")]');
        this.approveEstimateButton = this.page.locator("//button[contains(.,'Approve Estimate')]");


        this.okButton = this.page.locator('//button[text()="Ok"]');
        this.updateButton = this.page.locator('//button[text()="Update"]');
        this.locattionMiles = this.page.locator('(//input[@type="text"])[10]');
        this.expandRowButton = this.page.locator('//button[@aria-label="expand row"]');
        this.actionButton = this.page.locator('//button[@id="demo-positioned-button"]');
        this.actionRedButtonBorder = this.page.locator('//tr[@style="border: 2px solid red;"]');
        this.saveButton = this.page.locator('//button[text()="save"]');
        this.currentTab = this.page.locator('//button[@aria-selected="true"]')

        this.editTaskInput = this.page.locator('//span[contains(normalize-space(.), "Enter a Value")]/ancestor::fieldset/preceding-sibling::input')
        this.edutTaskUnitSelection = this.page.locator('//label[contains(normalize-space(.), "Unit")]/following-sibling::div//div[@role="combobox"]')
        this.edutTaskUnitOptions = this.page.locator('//li[@role="option"]')




        // Tax Terms Tab input elements
        //div[@role="combobox" and @id="demo-simple-select"]
        this.taxTermsTabInput = this.page.locator('//div[@role="combobox" and @id="demo-simple-select"]')
        this.taxTermsTabOptions = this.page.locator('//li[@role="option"]/p')
        this.taxNameInput = this.page.locator("//span[text()='Tax Name']/ancestor::div[contains(@class,'MuiInputBase-root')]//input")
        this.taxPercentageInput = this.page.locator("//span[text()='percentage']/ancestor::div[contains(@class,'MuiInputBase-root')]//input")



    }

    async clickCreateBidButton() {
        console.log("clickCreateBidButton");
        await PageUtilClassName.waitForPageLoad(this.page);
        await this.page.waitForTimeout(3000);
        const button = this.createBidButton;
        await PageUtilClassName.waitForElementToBeStable(button, this.page);
        await button.scrollIntoViewIfNeeded();
        await button.click();
        await this.page.waitForTimeout(3000);
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

    async clickSendEstimateButton() {
        await this.page.waitForTimeout(3000);
        await this.page.waitForLoadState('load');
        await this.sendEstimateButton.waitFor({ state: 'visible' });
        await PageUtilClassName.waitForElementToBeStable(this.sendEstimateButton, this.page);
        await this.sendEstimateButton.scrollIntoViewIfNeeded();
        await this.sendEstimateButton.click();
    }

    async clickApproveEstimateButton() {
        await this.page.waitForTimeout(3000);
        await this.page.waitForLoadState('load');
        await this.approveEstimateButton.waitFor({ state: 'visible' });
        await PageUtilClassName.waitForElementToBeStable(this.approveEstimateButton, this.page);
        await this.approveEstimateButton.scrollIntoViewIfNeeded();
        await this.approveEstimateButton.click();
    }

    async clickSubmitButton() {
        await this.page.waitForTimeout(3000);
        await this.submitButton.waitFor({ state: 'visible' });
        await PageUtilClassName.waitForElementToBeStable(this.submitButton, this.page);
        await this.submitButton.scrollIntoViewIfNeeded();
        await this.submitButton.click();
    }

    async clickExpandRowButton() {
        await this.page.waitForTimeout(3000);
        await this.expandRowButton.first().waitFor({ state: 'visible' });
        await this.expandRowButton.first().scrollIntoViewIfNeeded();
        await this.expandRowButton.first().click();
        await this.actionButton.last().waitFor({ state: 'visible' });
        await this.actionButton.last().scrollIntoViewIfNeeded();
        await this.actionButton.first().waitFor({ state: 'visible' });
        await this.actionButton.first().scrollIntoViewIfNeeded();
    }



    async clickExpandRowButtonInRow(rowNumber) {
        await this.page.waitForTimeout(3000);
        await this.expandRowButton.nth(rowNumber).waitFor({ state: 'visible' });
        await this.expandRowButton.nth(rowNumber).scrollIntoViewIfNeeded();
        await this.expandRowButton.nth(rowNumber).click();
    }




    async clickProceedButton() {
        await this.proceedButton.click();
    }
    async clickViewButton() {
        await this.page.getByRole('button', { name: 'View' }).first().click();
    }

    async clickContinueButton() {
        await this.page.getByRole('button', { name: 'Continue' }).first().click();
    }
    async clickEditButton() {
        await this.page.getByText('Edit').click();
    }

    async clickUpdateButton() {
        await this.page.waitForTimeout(3000);
        await this.updateButton.waitFor({ state: 'visible' });
        await this.updateButton.scrollIntoViewIfNeeded();
        await this.updateButton.click();
    }

    async clickCreateEstimateButton() {
        await this.page.getByRole('button', { name: 'Create Estimate' }).first().click();
        await this.page.waitForTimeout(3000);
        const currentTab = await this.currentTab.textContent();
        console.log("currentTab: " + currentTab);
        if (currentTab == "Tax") {
            await this.page.waitForTimeout(3000);
            await this.page.getByText('Gantt Tasks').click();
            await this.page.waitForTimeout(3000);
            await this.page.getByRole('button', { name: 'Create Estimate' }).first().click();
        } else {

        }

    }


    async clickCreateEstimateButtonAgain() {

        await this.page.waitForTimeout(3000);
        await this.page.getByRole('button', { name: 'Create Estimate' }).first().click();
        await this.page.waitForTimeout(3000);

    }




    async clickSaveButton() {
        await this.page.waitForTimeout(3000);
        await this.saveButton.waitFor({ state: 'visible' });
        await this.saveButton.scrollIntoViewIfNeeded();
        await this.saveButton.click();
    }

    async clickOkButton() {
        await this.okButton.click();
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


    async clickBomTab() {
        await this.page.waitForTimeout(3000);
        await this.page.getByRole('tab', { name: 'Bom' }).waitFor({ state: 'visible' });
        await this.page.getByRole('tab', { name: 'Bom' }).scrollIntoViewIfNeeded();
        await this.page.getByRole('tab', { name: 'Bom' }).click();
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



    // Actions
    async clickRedActionButton() {
        await this.page.waitForTimeout(3000);
        const redButtonBorder = this.actionRedButtonBorder.first();

        await redButtonBorder.waitFor({ state: 'visible' });
        await redButtonBorder.scrollIntoViewIfNeeded();
        // find child button and click
        const childButton = redButtonBorder.locator('button');
        await childButton.waitFor({ state: 'visible', timeout: 5000 });
        await childButton.click();
    }


    /**
     * Reusable method to add BOM
     * @param {object} page - Playwright Page instance
     * @param {object} options - Options for BOM
     * @param {string} options.vendorName - Vendor name to select
     * @param {string} options.vendorAddress - Vendor address to select
     * @param {string} options.product - Product name to select
     * @param {string} options.productAddress - Product vendor address to select
     * @param {string} options.optionValue - Option value to select
     * @param {string|number} options.quantity - Quantity to enter
     */
    async addBom({
        vendorName,
        vendorAddress,
        product,
        productAddress,
        optionValue,
        quantity
    }) {

        // Vendor selection
        await this.page.getByRole('combobox', { name: 'Vendor Name' }).click();
        await this.page.getByRole('option', { name: vendorName }).click();

        await this.page.getByRole('combobox', { name: 'Vendor Address' }).click();
        await this.page.getByRole('option', { name: vendorAddress }).click();

        // Add BOM
        await this.page.waitForTimeout(3000);
        const addBomButton = this.page.getByRole('button', { name: 'Add Bom' })
        await addBomButton.waitFor({ state: 'visible' });
        await addBomButton.scrollIntoViewIfNeeded();
        await addBomButton.click();

        // Product selection in dialog
        const dialog = this.page.getByRole('dialog', { name: 'Edit Task' });
        await dialog.waitFor({ state: 'visible' });
        await dialog.locator('#free-solo-with-text-demo').waitFor({ state: 'visible' });
        await dialog.locator('#free-solo-with-text-demo').scrollIntoViewIfNeeded();
        await dialog.locator('#free-solo-with-text-demo').click();
        await this.page.getByRole('option', { name: product }).click();

        // Product Vendor Address
        await this.page.getByRole('combobox', { name: `Vendor Address ${productAddress}` }).click();
        await this.page.getByRole('option', { name: optionValue }).click();

        // Quantity
        const qtyInput = this.page.getByRole('spinbutton', { name: 'Quanitity Unit Sub Total' });
        await qtyInput.click();
        await qtyInput.fill(quantity.toString());

    }



    async enterEditTaskInput(value) {
        await this.page.waitForTimeout(3000);
        await this.editTaskInput.waitFor({ state: 'visible' });
        await this.editTaskInput.scrollIntoViewIfNeeded();
        await this.editTaskInput.click();
        await this.editTaskInput.fill(value);
    }

    /**
     * Select a unit option in Edit Task dropdown
     * @param {string} value - Option text to select
     */
    async selectEditTaskUnitSelection(value) {
        try {
            // Wait until dropdown is visible
            await this.edutTaskUnitSelection.waitFor({ state: 'visible', timeout: 10000 });
            await this.edutTaskUnitSelection.scrollIntoViewIfNeeded();
            await this.edutTaskUnitSelection.click();

            // Filter from already saved locator
            const option = this.edutTaskUnitOptions.filter({ hasText: value });

            // Ensure the option is visible before clicking
            await option.first().waitFor({ state: 'visible', timeout: 5000 });
            await option.first().scrollIntoViewIfNeeded();
            await option.first().click();

        } catch (error) {
            throw new Error(`❌ Failed to select unit option "${value}": ${error.message}`);
        }
    }


    async clickDeleteButton(buttonText) {
        await this.page.waitForTimeout(3000);
        const deleteButton = this.page.getByText(buttonText);
        await deleteButton.waitFor({ state: 'visible' });
        await deleteButton.scrollIntoViewIfNeeded();
        await deleteButton.click();

    }

    async deleteAllTasksInTab() {
        console.log("🗑️ Deleting all tasks in the Gantt Tasks tab");

        // Small buffer wait for UI to settle
        await this.page.waitForTimeout(2000);

        while (true) {
            const buttons = this.actionRedButtonBorder.locator('button');
            const count = await buttons.count();

            if (count === 0) {
                console.log("✅ No more tasks to delete");
                break;
            }
            if (count == 1) {
                console.log("✅ No more tasks to delete");

                break;
            }

            const childButton = buttons.first(); // always delete the first one

            try {
                await childButton.scrollIntoViewIfNeeded();
                await childButton.waitFor({ state: 'visible', timeout: 5000 });
                await childButton.click({ delay: 300 });

                // Confirm delete flow
                await this.clickDeleteButton("Delete");
                await this.clickProceedButton();
                await this.clickOkButton();

                // Wait a bit for the row to disappear before next loop
                await this.page.waitForTimeout(1000);

                console.log(`✅ Task deleted, ${count - 1} remaining`);


                if (count == 1) {
                    console.log("✅ No more tasks to delete");
                    await this.clickProceedButton();
                    await this.clickOkButton();

                    // Wait a bit for the row to disappear before next loop
                    await this.page.waitForTimeout(1000);
                    break;
                }
            } catch (err) {
                console.warn(`⚠️ Failed to delete a task:`, err.message);
                break; // Stop loop if something unexpected happens
            }
        }
    }

    async validateActiveTabIsVisible(tabName) {
        console.log("validateActiveTabIsVisible: " + tabName);
        try {
            await this.page.waitForTimeout(3000);
            const currentTab = await this.currentTab.textContent();
            console.log("currentTab: " + currentTab);
            expect(currentTab).toContain(tabName);
            console.log("✅ Active tab is visible: " + tabName);

        } catch (error) {
            console.log("error: " + error);

            console.log("❌ Active tab is not visible: " + tabName);
        }



    }



    async selectTaxTermsTab(taxTerm) {
        await this.taxTermsTabInput.click();
        await this.taxTermsTabOptions.getByText(taxTerm).click();
    }

    async enterTaxName(taxName) {
        await this.taxNameInput.fill(taxName);
    }

    async enterTaxPercentage(taxPercentage) {
        await this.taxPercentageInput.fill(taxPercentage);
    }


    async fillTaxTermsTab(taxTerm, taxName, taxPercentage) {
        await this.page.waitForTimeout(3000);
        await this.selectTaxTermsTab(taxTerm);
        await this.enterTaxName(taxName);
        await this.enterTaxPercentage(taxPercentage);
    }

    async clickConfirmButton() {
        await this.page.waitForTimeout(3000);
        await this.confirmButton.waitFor({ state: 'visible' });
        await this.confirmButton.scrollIntoViewIfNeeded();
        await this.confirmButton.click();
        await this.page.waitForTimeout(3000);
    }


    async sendAndApproveEstimate() {
        await PageUtilClassName.scrollBottomThenUp(this.page);
        await this.clickSendEstimateButton();
        await this.clickOkButton();
        await this.clickApproveEstimateButton();
        await this.page.waitForTimeout(3000);
        await this.clickOkButton();

    }






}

module.exports = createBidPage;