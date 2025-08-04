Feature: Login Functionality
  As a user
  I want to access the application
  So that I can perform login operations

  @login
  Scenario: Launch Application URL
    Given I am on the login page
    When I launch the application URL
    Then the application should be loaded successfully
    And I click "Login" button
    Then I enter credentials based on role "labour"
    And I verify the "Wisconsin Greenhouse Company" is displayed
