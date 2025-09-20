@adminManagement
Feature: admin Management

  Background:
    Given I am on the login page
    When I launch the application URL
    Then the application should be loaded successfully
    And I click "Login" button
    Then I enter credentials based on role "multiple"

 Scenario: Navigate to profile page from avatar icon
    When I click the profile side menu
    Then I should be navigated to the adminManagement
    And I should see the admin page titles


