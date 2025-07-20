package com.saucedemo.pages;

import com.saucedemo.utils.DriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;
import java.util.List;

public class InventoryPage {
    
    private WebDriver driver;
    private WebDriverWait wait;
    
    // Locators
    private By inventoryContainer = By.id("inventory_container");
    private By inventoryItems = By.cssSelector(".inventory_item");
    private By inventoryTitle = By.cssSelector(".title");
    
    public InventoryPage() {
        this.driver = DriverManager.getDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }
    
    public boolean isInventoryPageDisplayed() {
        try {
            return wait.until(ExpectedConditions.visibilityOfElementLocated(inventoryContainer)).isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }
    
    public int getInventoryItemsCount() {
        List<WebElement> items = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(inventoryItems));
        return items.size();
    }
    
    public String getPageTitle() {
        WebElement titleElement = wait.until(ExpectedConditions.visibilityOfElementLocated(inventoryTitle));
        return titleElement.getText();
    }
} 