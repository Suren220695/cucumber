package com.saucedemo.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import com.saucedemo.utils.DriverManager;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/test/resources/features",
    glue = {"com.saucedemo.steps", "com.saucedemo.hooks"},
    plugin = {
        "pretty",
        "html:target/cucumber-reports/cucumber-pretty.html",
        "json:target/cucumber-reports/CucumberTestReport.json"
    },
    monochrome = true,
    tags = "@login"
)
public class CucumberTestRunner {
    
    @AfterClass
    public static void tearDown() {
        DriverManager.quitDriver();
    }
} 