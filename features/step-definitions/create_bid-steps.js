const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const createBidPage = require('../pages/createBidPage');

setDefaultTimeout(90 * 1000);

let bidCreationPage;


When('I click the {string} button', async function (buttonText) {
    console.log("I click the " + buttonText + " button");
    bidCreationPage = new createBidPage(this.page);
    await bidCreationPage.page.waitForTimeout(3000);
    if (buttonText == "Contract") {
        await bidCreationPage.clickContractButton();
    } else if (buttonText == "Create Bid") {
        await bidCreationPage.clickCreateBidButton();
    } else {
        await bidCreationPage.clickCreateBidButton();
    }
    console.log("I click the " + buttonText + " button");
});

When('I select customer {string}', async function (ßcustomerName) {
    console.log("I select customer " + ßcustomerName);
    await bidCreationPage.selectCustomer(ßcustomerName);
});

When('I select property {string}', async function (propertyName) {
    console.log("I select property " + propertyName);
    await bidCreationPage.selectProperty(propertyName);
});

When('I select the date {string} {string}', async function (year, day) {
    console.log("I select the date " + year + " " + day);
    await bidCreationPage.selectDate(year, day);
});

When('I choose the greenhouse {string}', async function (greenhouseName) {
    console.log("I choose the greenhouse " + greenhouseName);
    await bidCreationPage.selectGreenhouse(greenhouseName);
});


When('I choose duration {string} {string} {string} {string}', async function (year, day, hours, minutes) {
    console.log("I choose duration " + year + " " + day + " " + hours + " " + minutes);
    await bidCreationPage.selectDateAndDuration(year, day, hours, minutes);

});

When('I click {string}', async function (buttonText) {
    console.log("I click " + buttonText);
    if (buttonText == "Next") {
        await bidCreationPage.clickNextButton();
    } else if (buttonText == "Submit") {
        await bidCreationPage.clickSubmitButton();
    } else if (buttonText == "Proceed") {
        await bidCreationPage.clickProceedButton();
    } else if (buttonText == "Ok") {
        await bidCreationPage.clickOkButton();
    } else if (buttonText == "View") {
        await bidCreationPage.clickViewButton();
    } else if (buttonText == "Continue") {
        await bidCreationPage.clickContinueButton();
    } else if (buttonText == "Create Estimate") {
        await bidCreationPage.clickCreateEstimateButton();
    } else if (buttonText == "Expand Row") {
        await bidCreationPage.clickExpandRowButton();
    } else if (buttonText == "Red Action Button") {
        await bidCreationPage.clickRedActionButton();
    } else if (buttonText == "Edit") {
        await bidCreationPage.clickEditButton();
    } else if (buttonText == "Update") {
        await bidCreationPage.clickUpdateButton();
    } else if (buttonText == "save") {
        await bidCreationPage.clickSaveButton();
    } else if (buttonText == "Delete") {
        await bidCreationPage.clickDeleteButton(buttonText);
    } else if (buttonText == "Create Estimate again") {
        await bidCreationPage.clickCreateEstimateButtonAgain();
    } else if (buttonText == "Confirm") {
        await bidCreationPage.clickConfirmButton();
    }

});


When('I click expand row {string}', async function (rowNumber) {
    await bidCreationPage.clickExpandRowButtonInRow(rowNumber);
});






When('I enable required switches and checkboxes', async function () {
});


When('I enter quantity {string}', async function (quantity) {
    console.log("I enter quantity " + quantity);
});

Then('I confirm the bid by clicking {string} and {string}', async function (firstButton, secondButton) {
    console.log("I confirm the bid by clicking " + firstButton + " and " + secondButton);
});











Given('the user is on the Asset Info page', async function () {

});

When('the user selects {string} for Is this a historic building?', async function (answer) {
    await bidCreationPage.selectYesForIsThisAHistoricBuilding(answer);
});

When('the user selects {string} for Can this building be accessed with ladder?', async function (answer) {
    await bidCreationPage.selectNoForCanThisBuildingBeAccessedWithLadder(answer);
});

When('the user selects {string} for Can scaffolding be set up on?', async function (answer) {
    await bidCreationPage.selectYesForCanScaffoldingBeSetUpOn(answer);
});

When('the user selects {string} for Can machinery access?', async function (answer) {
    await bidCreationPage.selectYesForCanMachineryAccess(answer);
});

When('the user selects {string} for Are there any parking restrictions or permits required for the work crew?', async function (answer) {
    await bidCreationPage.selectNoForAreThereAnyParkingRestrictionsOrPermitsRequiredForTheWorkCrew(answer);
});

When('the user selects {string} for Can heavy machinery be driven on your driveway?', async function (answer) {
    await bidCreationPage.selectYesForCanHeavyMachineryBeDrivenOnYourDriveway(answer);
});

When('the user selects {string} for Can a dumpster be placed next the building being worked on?', async function (answer) {
    await bidCreationPage.selectNoForCanADumpsterBePlacedNextTheBuildingBeingWorkedOn(answer);
});

When('the user enters {string} into the wind exposure field', async function (windExposure) {
    await bidCreationPage.enterWindExposure(windExposure);
});



// 
// Given the user clicks the "Trade Question" tab
// When the user enters "12" as the Width of the Greenhouse in feet
// And the user enters "6" as the Width of the Greenhouse in inches
// And the user enters "20" as the Length of the Greenhouse in feet
// And the user enters "0" as the Length of the Greenhouse in inches
// And the user selects "I want to build a New Foundation"
// And the user enters "90" as the expected Snow Load
// And the user enters "100" as the expected Wind Load
// And the user selects "Home Attached" as the Greenhouse type
// And the user selects "Lean To" as the type of Home Attached setup
// # Then the form should reflect the entered asset information

Given('the user clicks the {string} tab', async function (tabName) {
    if (tabName == "Trade Question") {
        await bidCreationPage.clickTradeQuestionTab(tabName);
    } else if (tabName == "Bom") {
        await bidCreationPage.clickBomTab();
    } else if (tabName == "TAX") {
        await bidCreationPage.clickGanttTasksTab();
    }
});

When('the user enters {string} as the Width of the Greenhouse in feet', async function (width) {
    await bidCreationPage.enterWidthOfGreenhouseInFeet(width);
});

When('the user enters {string} as the Width of the Greenhouse in inches', async function (width) {
    await bidCreationPage.enterWidthOfGreenhouseInInches(width);
});

When('the user enters {string} as the Length of the Greenhouse in feet', async function (length) {
    await bidCreationPage.enterLengthOfGreenhouseInFeet(length);
});

When('the user enters {string} as the Length of the Greenhouse in inches', async function (length) {
    await bidCreationPage.enterLengthOfGreenhouseInInches(length);
});

When('the user selects {string} as the type of foundation', async function (foundation) {
    await bidCreationPage.selectIWantToBuildANewFoundation(foundation);
});


When('the user enters {string} as the expected Snow Load', async function (snowLoad) {
    await bidCreationPage.enterExpectedSnowLoad(snowLoad);
});

When('the user enters {string} as the expected Wind Load', async function (windLoad) {
    await bidCreationPage.enterExpectedWindLoad(windLoad);
});

When('the user selects {string} as the Greenhouse type', async function (type) {
    await bidCreationPage.selectGreenhouseType(type);
});

When('the user selects {string} as the type of Home Attached setup', async function (setup) {
    await bidCreationPage.selectTypeOfHomeAttachedSetup(setup);
});






When('user selects Maximum Height Limit as {string}', async function (option) {
    await bidCreationPage.selectMaximumHeightLimit(option)
});

When('user selects Roof Pitch Preference as {string}', async function (pitchType) {
    await bidCreationPage.selectRoofPitchPreference(pitchType)
});

When('user selects Glazing Preference as {string}', async function (glazingType) {
    await bidCreationPage.selectGlazingPreference(glazingType)
});

When('user selects type of Glass as {string}', async function (glassType) {
    await bidCreationPage.selectTypeofGlass(glassType)
});

When('user selects type of Polycarb as {string}', async function (polycarbType) {
    await bidCreationPage.selectTypeofPolycarb(polycarbType)
});

When('user enters number of Trusses as {string}', async function (trusses) {
    await bidCreationPage.enterNumberOfTrusses(trusses)
});

When('user selects Greenhouse Frame Color as {string}', async function (color) {
    await bidCreationPage.selectGreenhouseFrameColor(color)
});

When('user selects Doors option as {string}', async function (option) {
    await bidCreationPage.selectDoorsOption(option)
});

When('user selects Awning Vent type as {string}', async function (ventType) {
    await bidCreationPage.selectAwningVentType(ventType)
});

When('user enters quantity for Single Awning Vent as {string}', async function (quantity) {
    await bidCreationPage.enterSingleAwningVent(quantity)
});

When('user enters quantity for Double Awning Vent as {string}', async function (quantity) {
    await bidCreationPage.enterDoubleAwningVent(quantity)
});

When('the user fills BOM details:', async function (dataTable) {

    const bomDetails = dataTable.hashes(); // take first row from table
    await bidCreationPage.page.waitForTimeout(3000);

    for (const bomDetail of bomDetails) {
        const { vendorName, vendorAddress, product, productAddress, optionValue, quantity } = bomDetail;
        console.log("the user fills BOM details: " + vendorName + " " + vendorAddress + " " + product + " " + productAddress + " " + optionValue + " " + quantity);

        await bidCreationPage.page.waitForTimeout(3000);
        await bidCreationPage.clickRedActionButton();
        await bidCreationPage.clickEditButton();
        await bidCreationPage.clickBomTab();
        await bidCreationPage.addBom({
            vendorName,
            vendorAddress,
            product,
            productAddress,
            optionValue,
            quantity
        });
        await bidCreationPage.clickSaveButton();
        await bidCreationPage.clickUpdateButton();
        await bidCreationPage.clickOkButton();
    }






});

Given('I edit a task with following details', async function (dataTable) {

    await bidCreationPage.page.waitForTimeout(3000);
    const editTaskDetails = dataTable.hashes(); // take first row from table
    for (const editTaskDetail of editTaskDetails) {
        const { value, unit } = editTaskDetail;
        console.log("I edit a task with following details: " + value + " " + unit);
        await bidCreationPage.clickRedActionButton();
        await bidCreationPage.clickEditButton();
        await bidCreationPage.enterEditTaskInput(value);
        await bidCreationPage.selectEditTaskUnitSelection(unit);
        await bidCreationPage.clickUpdateButton();
        await bidCreationPage.clickOkButton();
    }



});

Given('I delete all tasks in the Gantt Tasks tab', async function () {
    await bidCreationPage.deleteAllTasksInTab();
});

Then('validate the active tab is {string} is visible', async function (tabName) {
    await bidCreationPage.validateActiveTabIsVisible(tabName);
});

When('I fill the Tax Terms tab with details', async function (dataTable) {
    await bidCreationPage.page.waitForTimeout(3000);
    const taxTermsDetails = dataTable.hashes(); // take first row from table
    for (const taxTermDetails of taxTermsDetails) {
        const { taxTerm, taxName, taxPercentage } = taxTermDetails;
        console.log("I fill the Tax Terms tab with details: " + taxTerm + " " + taxName + " " + taxPercentage);
        await bidCreationPage.fillTaxTermsTab(taxTerm, taxName, taxPercentage);
        await bidCreationPage.clickUpdateButton();
    }

});

When('I send and approve the estimate', async () => {
    await bidCreationPage.sendAndApproveEstimate();
})


/**
 * Step definition for entering greenhouse width in feet and inches
 */
When('the user enters {string} {string} as the Width of the Greenhouse in Feet and Inches', async function (feet, inches) {
    await bidCreationPage.enterGreenhouseWidth(feet, inches);
});

/**
 * Step definition for entering greenhouse length with both feet and inches
 */
When('the user enters {string} {string} as the Length of the Greenhouse in Feet and Inches', async function (feet, inches) {
    await bidCreationPage.enterGreenhouseLength(feet, inches);
});

/**
 * Step definition for entering greenhouse length with only feet specified
 */
When('the user enters {string} as the Length of the Greenhouse in Feet and Inches', async function (feet) {
    await bidCreationPage.enterGreenhouseLength(feet);
});

When('the user fills BOM details as Gantt tab:', () => {
  // Write code here that turns the phrase above into concrete actions
})









