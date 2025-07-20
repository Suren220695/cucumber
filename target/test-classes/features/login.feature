Feature: SauceDemo Login Functionality
  As a user of the SauceDemo application
  I want to be able to log in to the system
  So that I can access the inventory and shopping features

  Background:
    Given I am on the SauceDemo login page

  @smoke @login
  Scenario: Successful login with valid credentials
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page
    And I should see the inventory items

  @login @negative
  Scenario: Failed login with invalid username
    When I enter username "invalid_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should see an error message
    And the error message should contain "Username and password do not match"

  @login @negative
  Scenario: Failed login with invalid password
    When I enter username "standard_user"
    And I enter password "wrong_password"
    And I click the login button
    Then I should see an error message
    And the error message should contain "Username and password do not match"

  @login @negative
  Scenario: Failed login with empty credentials
    When I enter username ""
    And I enter password ""
    And I click the login button
    Then I should see an error message
    And the error message should contain "Username is required"

  @login @locked
  Scenario: Failed login with locked user
    When I enter username "locked_out_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should see an error message
    And the error message should contain "Sorry, this user has been locked out"

  @login @performance
  Scenario: Login with performance glitch user
    When I enter username "performance_glitch_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page
    And I should see the inventory items
