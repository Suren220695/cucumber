  Scenario: Validate required fields in trade creation
    Given I am on the dashboard page
    When I click the Create Bid button
    Given I am on the trade details form
    When I try to submit without filling required fields
    Then I should see validation error messages
    And the form should not be submitted

  Scenario: Validate date validation in trade creation
    Given I am on the dashboard page
    When I click the Create Bid button
    When I add customer name "Darrel Turner"
    And I select property name "barn"
    And I choose date in feature year "2023"
    Then I should see date validation error message

  Scenario Outline: Create trade estimates for different trade types
    Given I am on the dashboard page
    When I click the Create Bid button
    When I add customer name "Darrel Turner"
    And I select property name "barn"
    And I choose date in feature year "2024"
    And I select trade "<trade_type>" to create an estimate
    Then I should see the estimate creation form
    And the trade type should be "<trade_type>"

    Examples:
      | trade_type |
      | Electrical |
      | Plumbing  |
      | HVAC      |
      | Roofing   |

  Scenario: Create new customer during trade creation
    Given I am on the dashboard page
    When I click the Create Bid button
    When I add customer name "New Customer"
    And I select property name "barn"
    And I choose date in feature year "2024"
    And I select trade "Electrical" to create an estimate
    Then I should see the new customer creation form
    When I fill new customer details
    Then the new customer should be created successfully

  Scenario: Handle urgent project scenarios
    Given I am on the dashboard page
    When I click the Create Bid button
    When I add customer name "Darrel Turner"
    And I select property name "barn"
    And I choose date in feature year "2024"
    And I select trade "Electrical" to create an estimate
    And I mark project as urgent
    Then I should see urgent project indicators
    And the estimate should be prioritized 