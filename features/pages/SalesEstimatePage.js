const { expect } = require("playwright/test");
const PageUtilClassName = require("./commonUtils/PageUtils");

class SalesEstimatePage {
    constructor(page) {
        this.page = page;

        this.clockInButton = this.page.getByText('Clock In');
        this.clockOutButton = this.page.getByText('Clock Out');
        this.completeTaskButton = this.page.getByText('Complete Task');

        this.draftButton = this.page.getByText('Draft');



        this.newTaskButton = this.page.getByText('Next Task');
        this.activeTaskButton = this.page.getByText('Active Task');
        this.soldProductionButton = this.page.locator('//img[@src="/static/media/GmsLogo.f1033cac95ed5890f259.png"]/ancestor::div[contains(@class,"topbar-left-content")]//button');
        this.attachPDFButton = this.page.locator('//button[@class="secondaryButton"]');





    }

    async clockIn() {
        await PageUtilClassName.waitForElementToBeStable(this.clockInButton, this.page);
        await this.clockInButton.scrollIntoViewIfNeeded();
        await this.clockInButton.click();
    }
    async clockOut() {
        await PageUtilClassName.waitForElementToBeStable(this.clockOutButton, this.page);
        await this.clockOutButton.scrollIntoViewIfNeeded();
        await this.clockOutButton.click();
    }
    async completeTask() {
        await PageUtilClassName.waitForElementToBeStable(this.completeTaskButton, this.page);
        await this.completeTaskButton.scrollIntoViewIfNeeded();
        await this.completeTaskButton.click();
    }
    async newTask() {
        await PageUtilClassName.waitForElementToBeStable(this.newTaskButton.first(), this.page);
        await this.newTaskButton.first().scrollIntoViewIfNeeded();
        await this.newTaskButton.first().click();
    }



    async completeAllTasks() {
        let count = 0;
        while (true) {
            try {
                await this.page.waitForTimeout(1000);
                await expect(this.clockInButton).toBeVisible();
                await this.clockIn();
                await this.completeTask();
                count++;
                console.log("Completed task ✅ ", count);
            } catch (error) {
                console.log("No more tasks to complete ✅ ");
                console.log(error.message);

                break;
            }
        }

    }


    async scrollToBottom() {
        await this.page.waitForTimeout(1000);
        await PageUtilClassName.slowScrollUseBody(this.page);
    }


    async navigateToSoldProductionPage() {
        await this.page.waitForTimeout(1000);
        await PageUtilClassName.waitForElementToBeStable(this.soldProductionButton, this.page);
        await this.soldProductionButton.scrollIntoViewIfNeeded();
        await this.soldProductionButton.click();
    }



    async validateContractPageNavigation() {
        console.log("🔎 Validating navigation to Contract page...");

        try {
            await expect(this.page).toHaveURL(/.*\/contract/, { timeout: 10000 });
            console.log("✅ Successfully navigated to Contract page.");
        } catch (error) {
            const currentUrl = await this.page.url();
            console.error(`❌ Validation failed! Expected URL to contain '/contract' but got: ${currentUrl}`);
            throw error; // rethrow so test still fails
        }
    }


    async navigateToContractPage() {
        await this.page.waitForTimeout(1000);
        await PageUtilClassName.waitForPageLoad(this.page);
        await this.validateContractPageNavigation();
    }



    async printEditorText() {
        console.log("📝 Extracting text from editor...");

        // get the text content (must await!)
        const textContent = await this.page.locator('//div[@class="ql-editor"]').innerText();

        console.log("Raw Text Content:", textContent);

        // clean up: trim and normalize spaces/newlines
        const formattedText = textContent
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0) // remove empty lines
            .join('\n');

        console.log("========== 📄 Document Content ==========");
        console.log(formattedText);
        console.log("=========================================");

        return formattedText; // optional: return for assertions
    }




    async readContractDocument() {
        console.log("📜 Starting document reading process...");
        try {
            await this.page.waitForTimeout(1000);
            await PageUtilClassName.waitForElementToBeStable(this.draftButton, this.page);
            console.log("✅ Draft button is stable.");
            await PageUtilClassName.slowScroll(this.page, this.draftButton);
            console.log("✅ Successfully scrolled to Draft button.");
            await this.printEditorText();
            console.log("🎉 Document has been successfully read!");
        } catch (error) {
            console.error("❌ Failed while reading the document:", error.message);
            throw error;
        }
    }


    async attachPDFFile() {
        await this.page.waitForTimeout(1000);
        await PageUtilClassName.waitForElementToBeStable(this.attachPDFButton, this.page);
        await this.attachPDFButton.scrollIntoViewIfNeeded();
        await PageUtilClassName.uploadFileViaButton(this.attachPDFButton, "features/utils/testData/dummy_contract.pdf", this.page);
    }



    async validatePdfUpload() {
        try {
          console.log("📂 Validating PDF upload...");
      
          const iframe = this.page.locator('//iframe[contains(@class,"viewer-frame")]');
          await PageUtilClassName.waitForElementToBeStable(iframe, this.page);
      
          await expect(iframe).toBeVisible({ timeout: 5000 });
      
          const src = await iframe.getAttribute("src");
      
          if (src && src.startsWith("blob:")) {
            console.log("✅ PDF upload validated successfully. Src:", src);
            return true;
          } else {
            throw new Error("❌ PDF iframe found but no valid src attribute.");
          }
        } catch (error) {
          console.error("❌ PDF validation failed:", error.message);
          throw error;
        }
      }
      

    async validatePDFFileUpload() {
        await this.page.waitForTimeout(1000);
        await this.validatePdfUpload();
    }


    async verifyPopup(expectedText, timeout = 5000) {
        try {
          console.log(`🔎 Waiting for popup with text: "${expectedText}" ...`);
      
          // Locate popup by text
          const popup = this.page.getByText(expectedText, { exact: false });
      
          // Wait until it's visible
          await expect(popup).toBeVisible({ timeout });
      
          // Extra validation: check text content
          const actualText = await popup.textContent();
          console.log(`✅ Popup is visible. Text found: "${actualText?.trim()}"`);
      
          return true;
        } catch (error) {
          console.error(`❌ Popup with text "${expectedText}" not found within ${timeout}ms.`);
          throw error;
        }
      }
      


    async clickCreateEstimateButton() {
        await this.page.getByRole('button', { name: 'Create Estimate' }).first().click();
        await this.page.waitForTimeout(3000);
    }










}

module.exports = SalesEstimatePage;