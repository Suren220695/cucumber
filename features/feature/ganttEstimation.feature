Feature: gant estimation Feature
Background:
    Given I am on the login page
    When I launch the application URL
    Then the application should be loaded successfully
    And I click "Login" button
    Then I enter credentials based on role "sales"

@gantt-chart-estimation
  Scenario: Sales user creates a bid for  new foundation
    When I click the "Create Bid" button
    And I select customer "Mike    Wade"
    And I select property "Bell Residence"
    And I select the date "2028" "6"
    And I choose the greenhouse "Greenhouse Commercial"
    And I choose duration "2027" "6" "8" "10"
    And I click "Next"
    Given the user is on the Asset Info page
    When the user selects "No" for Is this a historic building?
    When the user selects "No" for Can this building be accessed with ladder?
    When the user selects "No" for Can scaffolding be set up on?
    When the user selects "No" for Can machinery access?
    When the user selects "No" for Are there any parking restrictions or permits required for the work crew?
    When the user selects "No" for Can heavy machinery be driven on your driveway?
    When the user selects "No" for Can a dumpster be placed next the building being worked on?
    When the user enters "30" into the wind exposure field
    Given the user clicks the "Trade Question" tab
    When the user enters "6" "4" as the Width of the Greenhouse in Feet and Inches
    And the user enters "6" as the Length of the Greenhouse in Feet and Inches    
    And the user selects "I want to build a New Foundation" as the type of foundation
    And the user enters "90" as the expected Snow Load
    And the user enters "100" as the expected Wind Load
    And the user selects "Home Attached" as the Greenhouse type
    And the user selects "Lean To" as the type of Home Attached setup
    When user selects Maximum Height Limit as "Yes"
    # And user selects Roof Pitch Preference as "Standard 6/12 Roof Pitch"
    # And user selects Glazing Preference as "Standard Polycarb (Clear 8MM Twin Wall)"  doubt but cler wil now 
    And user selects Doors option as "No" 
    And I click "Next"
    And I click "Submit"
    And I click "Proceed"
    And I click "Ok"
    And I click "View"
    And I click "Submit"
    And I click "Continue"
    Given the user clicks the "Gantt" tab
    # And I click edit "Id 9" "Id 12"
# Edit a task in the Bom tab
    When the user fills BOM details as Gantt tab:
      | vendorName     | vendorAddress | product              | productAddress | optionValue | quantity |
      | Marling Lumber | Atlas Ave     | Andersen Storm Doors |  613 Atlas Ave | b           |       50 |
      | Marling Lumber | Atlas Ave     | Andersen Storm Doors |  613 Atlas Ave | b           |       50 |
# 
    Given I edit a task with following details  as Gantt tab
      | value | unit  |
      |   100 | sq.ft |
      |   100 | ft    |
      |   100 | sq.ft |
      |   100 | ft    |
      |   100 | sq.ft |
      |   100 | ft    |
      |   100 | ft    |
    And I delete all tasks in the Gantt tab
    And i click "Save changes"
    And I click "Create Estimate"
    Then validate the active tab is "Tax" is visible
    When I fill the Tax Terms tab with details
      | taxTerm | taxName | taxPercentage |
      | PO      | State tax    |    0 |
      | Invoice | State tax    |    0 |
    And I click "update"
    And I click "ok"
    Then validate the active tab is "Gantt Tasks" is visible
    And I click "Create Estimate again"
    And I click "Confirm"
    When I send and approve the estimate
 # finished in the Tax tab
