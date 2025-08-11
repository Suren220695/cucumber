Feature: Login Functionality
  As a user
  I want to access the application
  So that I can perform login operations

  @login @labour
  Scenario: Launch Application URL
    Given I am on the login page
    When I launch the application URL
    Then the application should be loaded successfully
    And I click "Login" button
    Then I enter credentials based on role "sales"
    And I verify the "Wisconsin Greenhouse Company" is displayed

  @login @scenario-outline @roles
  Scenario Outline: Login with different user roles
    Given I am on the login page
    When I launch the application URL
    Then the application should be loaded successfully
    And I click "Login" button
    Then I enter credentials based on role "<role>"
    And I verify the "Wisconsin Greenhouse Company" is displayed

    Examples:
      | role    |
      | labour  |
      | sales   |
      | foreman |
      | admin   |
