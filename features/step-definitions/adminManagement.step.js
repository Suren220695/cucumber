const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const AdminManagementPage = require('../pages/adminManagementPage');
setDefaultTimeout(90 * 1000);


let adminManagementPage;



When('I click the profile side menu', async function () {


    adminManagementPage=new AdminManagementPage(this.page)
     await adminManagementPage.clickSideMenu()
       


    // clickSideMenu
 
})

Then('I should see the admin page titles',  async function (){
//   adminManagementPage.
      await adminManagementPage.verifyPageTitles()
})
Then('I should be navigated to the adminManagement',  async function () {
  await adminManagementPage.navigateToAdminManagement()
})
