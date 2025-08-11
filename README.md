# Cucumber Test Suite for Trade Creation

This directory contains the converted Cucumber tests for the Trade Creation functionality, converted from the original Playwright test script.

## 🏗️ Project Structure

```
cucumber/
├── features/
│   ├── feature/
│   │   ├── Login.feature          # Login functionality tests
│   │   └── TradeCreation.feature  # Trade creation flow tests
│   ├── pages/
│   │   ├── LoginPage.js           # Login page object model
│   │   └── TradeCreationPage.js   # Trade creation page object model
│   ├── step-definitions/
│   │   ├── loginSteps.js          # Login step definitions
│   │   └── tradeCreationSteps.js  # Trade creation step definitions
│   ├── support/
│   │   ├── hooks.js               # Test hooks and setup
│   │   └── world.js               # World configuration
│   └── utils/
│       └── data.json              # Test data
├── reports/                        # Test execution reports
├── screenshots/                    # Test failure screenshots
├── cucumber.js                     # Cucumber configuration
├── package.json                    # Dependencies
├── run-tests.js                    # Test runner script
└── README.md                       # This file
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd cucumber
npm install
```

### 2. Run All Tests
```bash
# Using the test runner script
node run-tests.js

# Or directly with cucumber-js
npx cucumber-js
```

### 3. Run Specific Features
```bash
# Run only trade creation tests
npx cucumber-js features/feature/TradeCreation.feature

# Run with specific tags
npx cucumber-js --tags @trade-creation
npx cucumber-js --tags @happy-path
```

## 📋 Test Scenarios

### Trade Creation Flow (`@trade-creation @happy-path`)
This scenario covers the complete trade creation process:

1. **Initial Setup**
   - Navigate to dashboard
   - Click Create Bid button
   - Verify form is loaded

2. **Customer & Property Selection**
   - Add customer name (e.g., "Darrel Turner")
   - Select property name (e.g., "barn")
   - Choose project year

3. **Trade Details**
   - Select trade type (e.g., "P.3 Greenhouse Luxurious")
   - Set discussion date
   - Set project start/end dates
   - Set project time

4. **Trade Options & Configuration**
   - Enable required trade options
   - Select project sides
   - Set project budget

5. **Form Submission**
   - Submit the form
   - Handle confirmation dialogs
   - Complete the process

### Validation Tests (`@trade-creation @validation`)
- Tests form validation without required fields
- Verifies error messages are displayed
- Ensures form is not submitted

### Date Validation Tests (`@trade-creation @date-validation`)
- Tests past date restrictions
- Verifies warning messages
- Tests future date acceptance

## 🎯 Key Features

### Page Object Model
- **TradeCreationPage.js**: Comprehensive page object with all trade creation methods
- **LoginPage.js**: Login functionality page object
- Robust error handling and logging
- Screenshot capture on failures

### Step Definitions
- **tradeCreationSteps.js**: All trade creation step definitions
- **loginSteps.js**: Login step definitions
- Proper error handling and assertions
- Integration with Playwright for browser automation

### Test Data Management
- Centralized test data in `utils/data.json`
- Environment-specific configurations
- Reusable test data sets

## 🔧 Configuration

### Cucumber Configuration (`cucumber.js`)
```javascript
module.exports = {
    default: {
        requireModule: ['@babel/register'],
        require: ['features/step-definitions/**/*.js', 'features/pages/**/*.js'],
        format: ['progress', 'html:reports/cucumber-report.html'],
        formatOptions: { snippetInterface: 'async-await' }
    }
};
```

### Environment Variables
```bash
# Set these environment variables as needed
NODE_ENV=test
BROWSER=headless  # As per user preference
BASE_URL=https://your-application-url.com
```

## 📊 Test Execution

### Running Tests
```bash
# Run all tests
npm test

# Run with specific configuration
npm run test:headless
npm run test:headed

# Run with tags
npm run test:smoke
npm run test:regression
```

### Test Reports
- **Console Output**: Real-time test progress
- **HTML Report**: Detailed report in `reports/cucumber-report.html`
- **Screenshots**: Automatic capture on test failures

### Debugging
```bash
# Run with verbose output
npx cucumber-js --verbose

# Run with specific feature and line
npx cucumber-js features/feature/TradeCreation.feature:15

# Run with world parameters
npx cucumber-js --world-parameters '{"headless": false}'
```

## 🐛 Troubleshooting

### Common Issues

1. **Element Not Found**
   - Check if selectors are still valid
   - Verify page structure hasn't changed
   - Use browser dev tools to inspect elements

2. **Timing Issues**
   - Increase timeout values in step definitions
   - Add explicit waits for dynamic content
   - Use `waitForLoadState` for page transitions

3. **Test Data Issues**
   - Verify test data in `utils/data.json`
   - Check environment-specific configurations
   - Ensure test data is valid for current application state

### Debug Mode
```bash
# Enable debug logging
DEBUG=true npx cucumber-js

# Run with screenshots on every step
SCREENSHOT_EVERY_STEP=true npx cucumber-js
```

## 📈 Best Practices

### Writing Tests
- Use descriptive scenario names
- Keep scenarios focused and atomic
- Use data tables for multiple test cases
- Implement proper cleanup in hooks

### Page Objects
- Keep locators centralized
- Implement robust error handling
- Use meaningful method names
- Add comprehensive logging

### Step Definitions
- Keep steps simple and readable
- Implement proper assertions
- Handle errors gracefully
- Use appropriate timeouts

## 🔄 Maintenance

### Regular Updates
- Review and update selectors as UI changes
- Update test data for new features
- Maintain compatibility with application updates
- Review and optimize test execution time

### Code Quality
- Follow consistent naming conventions
- Implement proper error handling
- Add comprehensive logging
- Maintain test data integrity

## 📞 Support

For questions or issues with the test suite:
1. Check the troubleshooting section
2. Review test logs and screenshots
3. Verify application state and data
4. Check for recent application changes

---

**Note**: This test suite is designed to work with the Trade Creation application. Ensure the application is running and accessible before executing tests. 