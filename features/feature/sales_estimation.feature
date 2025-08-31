Feature: Sales Estimation Functionality

  Background:
    Given I am on the login page
    When I launch the application URL
    Then the application should be loaded successfully
    And I click "Login" button
    Then I enter credentials based on role "sales"

  @sales-estimation
  Scenario: Sales customer and property selection
    Given I am on the Home page
    When I navigate to the Sold Production page
    When I complete all active tasks
    And I click the "Contract" button
    Then I should be navigated to the Contract page
    When I read the contract document
    And I attach a PDF file
    Then the PDF file should be uploaded and validated successfully
    When I click the "Save" button
    Then I should see the "Contract Upload Successfully" popup
    And I click the "OK" button

