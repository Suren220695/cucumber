package com.saucedemo.steps;

import com.saucedemo.pages.LoginPage;
import com.saucedemo.pages.InventoryPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.And;
import org.assertj.core.api.Assertions;

public class LoginSteps {
    
    private LoginPage loginPage;
    private InventoryPage inventoryPage;
    
    public LoginSteps() {
        this.loginPage = new LoginPage();
        this.inventoryPage = new InventoryPage();
    }
    
    @Given("I am on the SauceDemo login page")
    public void i_am_on_the_saucedemo_login_page() {
        loginPage.navigateToLoginPage();
        Assertions.assertThat(loginPage.isLoginPageDisplayed()).isTrue();
    }
    
    @When("I enter username {string}")
    public void i_enter_username(String username) {
        loginPage.enterUsername(username);
    }
    
    @When("I enter password {string}")
    public void i_enter_password(String password) {
        loginPage.enterPassword(password);
    }
    
    @When("I click the login button")
    public void i_click_the_login_button() {
        loginPage.clickLoginButton();
    }
    
    @Then("I should be redirected to the inventory page")
    public void i_should_be_redirected_to_the_inventory_page() {
        Assertions.assertThat(inventoryPage.isInventoryPageDisplayed()).isTrue();
    }
    
    @Then("I should see the inventory items")
    public void i_should_see_the_inventory_items() {
        Assertions.assertThat(inventoryPage.getInventoryItemsCount()).isGreaterThan(0);
    }
    
    @Then("I should see an error message")
    public void i_should_see_an_error_message() {
        Assertions.assertThat(loginPage.isErrorMessageDisplayed()).isTrue();
    }
    
    @And("the error message should contain {string}")
    public void the_error_message_should_contain(String expectedMessage) {
        String actualMessage = loginPage.getErrorMessage();
        Assertions.assertThat(actualMessage).contains(expectedMessage);
    }
} 