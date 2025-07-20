package com.saucedemo.hooks;

import com.saucedemo.utils.DriverManager;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class Hooks {
    
    @Before
    public void setUp() {
        // Initialize driver if needed
        DriverManager.getDriver();
    }
    
    @After
    public void tearDown(Scenario scenario) {
        // Take screenshot if scenario fails
        if (scenario.isFailed()) {
            TakesScreenshot ts = (TakesScreenshot) DriverManager.getDriver();
            byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot, "image/png", "Screenshot");
        }
        
        // Quit driver after each scenario
        DriverManager.quitDriver();
    }
} 