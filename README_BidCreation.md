# Bid Creation Test Automation

This document describes the automated test suite for the Bid Creation functionality using Cucumber and Playwright.

## Overview

The bid creation test suite automates the process of creating new bids in the Graceful Management System. It covers the complete workflow from selecting customers and properties to configuring services and submitting bids.

## Test Structure

### Background Section
All bid creation tests automatically handle login through the Background section:
```gherkin
Background:
  Given I am on the login page
  When I launch the application URL
  Then the application should be loaded successfully
  And I click "Login" button
  Then I enter credentials based on role "labour"
  And I verify the "Wisconsin Greenhouse Company" is displayed
```

This ensures that every test scenario starts with a fresh login session.

## Test Scenarios

### 1. Basic Bid Creation (@smoke)
- **Scenario**: Create a new bid successfully
- **Coverage**: Happy path bid creation with minimal configuration
- **Tags**: `@bid-creation @smoke`

### 2. Detailed Bid Creation (@detailed)
- **Scenario**: Create bid with detailed configuration
- **Coverage**: Comprehensive bid creation with all service configurations
- **Tags**: `@bid-creation @detailed`

## Test Steps

### Prerequisites
- Customer "Darrel Turner" must exist in the system
- Property "barn" must be available
- Property type "P.3 Greenhouse Luxurious" must be configured
- Login credentials for "labour" role must be configured in `data.json`

### Main Workflow
1. **Automatic Login (Background)**
   - Navigate to login page
   - Launch application URL
   - Enter credentials for "labour" role
   - Verify successful login

2. **Navigate to Bid Creation**
   - Click "Create Bid" button

2. **Select Customer and Property**
   - Select customer: "Darrel Turner"
   - Select property: "barn"
   - Select property type: "P.3 Greenhouse Luxurious"

3. **Configure Dates and Duration**
   - Set start date to 1st of next month
   - Set end date to 1st of 2027
   - Set duration: 8 hours and 10 minutes

4. **Configure Services**
   - Enable/disable various service switches
   - Configure property access settings (Front, Right, Left, Back)
   - Set quantity to 33

5. **Submit Bid**
   - Click "Next" button
   - Click "Submit" button
   - Confirm submission (Proceed → Ok)

## Page Objects

### BidCreationPage
The main page object containing all bid creation related methods:

- `clickCreateBidButton()` - Initiates bid creation
- `selectCustomer(customerName)` - Selects customer from dropdown
- `selectProperty(propertyName)` - Selects property from dropdown
- `selectPropertyType()` - Selects property type
- `setStartDate()` - Configures start date
- `setEndDate()` - Configures end date
- `setDuration()` - Sets duration (hours and minutes)
- `configureAllRequiredServices()` - Configures all service switches
- `setQuantity(quantity)` - Sets quantity value
- `clickNextButton()` - Proceeds to next step
- `clickSubmitButton()` - Submits the bid
- `confirmSubmission()` - Confirms final submission

## Step Definitions

### bidCreationSteps.js
Contains all the step definitions that map Gherkin steps to page object methods:

- **Given**: Setup steps (user logged in)
- **When**: Action steps (clicking buttons, selecting options)
- **Then**: Verification steps (checking success)

## Running Tests

### Run All Bid Creation Tests
```bash
npm run test:bid-creation
```

### Run Specific Scenarios
```bash
# Run smoke tests only
npm run test:bid-creation -- --tags @smoke

# Run detailed tests only
npm run test:bid-creation -- --tags @detailed
```

### Run with Different Modes
```bash
# Headless mode (default)
npm run test:bid-creation

# Headed mode for debugging
npm run test:bid-creation -- --world-parameters '{"headless": false}'
```

## Test Data

The tests use the following test data:
- **Customer**: Darrel Turner
- **Property**: barn
- **Property Type**: P.3 Greenhouse Luxurious
- **Duration**: 8 hours, 10 minutes
- **Quantity**: 33
- **Dates**: Dynamic (next month for start, 2027 for end)

## Screenshots

The test suite automatically captures screenshots:
- On test failure (saved to `screenshots/` directory)
- On successful bid creation completion
- Screenshots are named descriptively for easy identification

## Troubleshooting

### Common Issues

1. **Element Not Found**
   - Check if the application UI has changed
   - Verify selectors in BidCreationPage.js
   - Ensure proper wait conditions

2. **Date Selection Issues**
   - Date picker implementation may vary
   - Check if month/year navigation works correctly
   - Verify date format expectations

3. **Service Configuration Failures**
   - Some switches may be conditionally visible
   - Check if prerequisites are met
   - Verify checkbox states

### Debug Mode
Run tests in headed mode to see the browser actions:
```bash
npm run test:bid-creation -- --world-parameters '{"headless": false}'
```

## Maintenance

### Updating Selectors
If the application UI changes:
1. Update selectors in `BidCreationPage.js`
2. Test the changes with a single scenario
3. Run full regression suite

### Adding New Scenarios
1. Add new scenario to `BidCreation.feature`
2. Implement corresponding methods in `BidCreationPage.js`
3. Add step definitions in `bidCreationSteps.js`
4. Test the new functionality

## Integration

This test suite integrates with:
- **Login Tests**: Automatically handles login in Background section
- **World Configuration**: Uses shared browser context
- **Hooks**: Leverages common setup/teardown
- **Reporting**: Integrates with Cucumber HTML reports

## Best Practices

1. **Page Object Pattern**: All UI interactions are encapsulated in page objects
2. **Explicit Waits**: Use proper wait conditions for element visibility
3. **Error Handling**: Graceful handling of timeouts and failures
4. **Screenshots**: Automatic capture for debugging
5. **Tagging**: Proper test categorization for selective execution 