
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const SalesEstimatePage = require('../pages/SalesEstimatePage');

setDefaultTimeout(90 * 1000);

let salesEstimationPage;


Given('I am on the Home page', async function () {
    console.log("I am on the Home page");
    salesEstimationPage = new SalesEstimatePage(this.page);
    await salesEstimationPage.scrollToBottom();
})

When('I navigate to the Sold Production page', async function () {
    console.log("I navigate to the Sold Production page");
    await salesEstimationPage.navigateToSoldProductionPage()

});


When('I complete all active tasks', async function () {
    await salesEstimationPage.completeAllTasks();
})

Then('I should be navigated to the Contract page', async function () {
    await salesEstimationPage.navigateToContractPage();
})

When('I read the contract document', async function () {
    await salesEstimationPage.readContractDocument();
})

Then('the PDF file should be uploaded successfully', async function () {
    await salesEstimationPage.uploadPDFFile();
})

Then('I should see the {string} popup', async function (s) {
    await salesEstimationPage.verifyPopup(s);
})

When('I attach a PDF file', async function () {
    await salesEstimationPage.attachPDFFile();
})

Then('the PDF file should be uploaded and validated successfully', async function () {
    await salesEstimationPage.validatePDFFileUpload();
})

Then('I click the {string} button in the Sales Estimate page', async function () {
    await salesEstimationPage.clickCreateEstimateButton();
})


