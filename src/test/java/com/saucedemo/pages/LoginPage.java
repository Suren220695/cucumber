package com.saucedemo.pages;

import com.saucedemo.utils.DriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class LoginPage {
    
    private WebDriver driver;
    private WebDriverWait wait;
    
    // Locators
    private By usernameField = By.id("user-name");
    private By passwordField = By.id("password");
    private By loginButton = By.id("login-button");
    private By errorMessage = By.cssSelector("[data-test='error']");
    private By loginContainer = By.id("login_button_container");
    
    public LoginPage() {
        this.driver = DriverManager.getDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }
    
    public void navigateToLoginPage() {
        driver.get("https://www.saucedemo.com/");
    }
    
    public boolean isLoginPageDisplayed() {
        try {
            return wait.until(ExpectedConditions.visibilityOfElementLocated(loginContainer)).isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }
    
    public void enterUsername(String username) {
        WebElement usernameElement = wait.until(ExpectedConditions.elementToBeClickable(usernameField));
        usernameElement.clear();
        usernameElement.sendKeys(username);
    }
    
    public void enterPassword(String password) {
        WebElement passwordElement = wait.until(ExpectedConditions.elementToBeClickable(passwordField));
        passwordElement.clear();
        passwordElement.sendKeys(password);
    }
    
    public void clickLoginButton() {
        WebElement loginElement = wait.until(ExpectedConditions.elementToBeClickable(loginButton));
        loginElement.click();
    }
    
    public boolean isErrorMessageDisplayed() {
        try {
            return wait.until(ExpectedConditions.visibilityOfElementLocated(errorMessage)).isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }
    
    public String getErrorMessage() {
        WebElement errorElement = wait.until(ExpectedConditions.visibilityOfElementLocated(errorMessage));
        return errorElement.getText();
    }
} 