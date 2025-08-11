Feature: Create a Bid as a Sales User

  Background:
    Given I am on the login page
    When I launch the application URL
    Then the application should be loaded successfully
    And I click "Login" button
    Then I enter credentials based on role "sales"

  @create-bid
  Scenario: Sales user creates a bid for a customer and property
    When I click the "Create Bid" button
    And I select customer "Darrel   Turner"
    And I select property "barn"
    And I select the date "2027" "1"
    And I choose the greenhouse "P.3"
    And I choose duration "2027" "1" "8" "10"
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
    When the user enters "12" as the Width of the Greenhouse in feet
    And the user enters "6" as the Width of the Greenhouse in inches
    And the user enters "20" as the Length of the Greenhouse in feet
    And the user enters "0" as the Length of the Greenhouse in inches
    And the user selects "I want to build a New Foundation" as the type of foundation
    And the user enters "90" as the expected Snow Load
    And the user enters "100" as the expected Wind Load
    And the user selects "Home Attached" as the Greenhouse type
    And the user selects "Lean To" as the type of Home Attached setup
    When user selects Maximum Height Limit as "Yes"
    And user selects Roof Pitch Preference as "Cape Cod style - 12/12"
    And user selects Glazing Preference as "Glass"
    And user selects type of Glass as "6mm Single Glass"
    And user enters number of Trusses as "5"
    And user selects Greenhouse Frame Color as "Black"
    And user selects Doors option as "No"
    And user selects Awning Vent type as "Double"
    And user enters quantity for Double Awning Vent as "3"
    And I click "Next"
    And I click "Submit"
    And I click "Proceed"
    And I click "Ok"
    # Then the form should reflect the entered asset information
    # And I enable required switches and checkboxes
    # And I enter quantity "33"
    # And I click "Next"
    # And I click "Submit"
    # Then I confirm the bid by clicking "Proceed" and "Ok"
