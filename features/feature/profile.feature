Feature: Profile Page Navigation

  Background:
    Given I am on the login page
    When I launch the application URL
    Then the application should be loaded successfully
    And I click "Login" button
    Then I enter credentials based on role "sales"

  @profile
  Scenario: Navigate to profile page from avatar icon
    When I click the profile avatar icon
    Then I should be navigated to the profile page
    And I should see the profile details
