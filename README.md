# Cucumber Playwright Test Framework

This project contains a complete Cucumber + Playwright test framework for automated testing.

## Project Structure

```
├── features/
│   ├── Login.feature          # Feature file with scenarios
│   ├── pages/
│   │   └── LoginPage.js       # Page Object Model
│   ├── step-definitions/
│   │   └── loginSteps.js      # Step definitions
│   └── support/
│       ├── hooks.js           # Setup and teardown hooks
│       └── world.js           # Custom World with Playwright setup
├── screenshots/               # Screenshots directory (auto-created)
├── reports/                   # Test reports directory (auto-created)
├── package.json
├── cucumber.js               # Cucumber configuration
└── README.md
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install chromium
```

## Running Tests

### Run all tests (headless mode - default):
```bash
npm test
```

### Run tests in headless mode:
```bash
npm run test:headless
```

### Run tests in headed mode (visible browser):
```bash
npm run test:headed
```

## Features

- **Headless Mode**: Tests run in headless mode by default (as per user preference)
- **Screenshots**: Automatic screenshots on test failures
- **HTML Reports**: Cucumber HTML reports generated in `reports/` directory
- **Page Object Model**: Organized page objects for maintainable tests
- **Custom World**: Playwright browser context management
- **Error Handling**: Proper cleanup and error handling

## Current Test

The `Login.feature` contains a scenario that:
1. Navigates to the specified URL: `https://ca-gmscloud-webapps-ncus-st.whiteground-c828087f.northcentralus.azurecontainerapps.io/`
2. Waits for the page to load
3. Verifies the application loaded successfully
4. Takes a screenshot for verification

## Adding New Tests

1. Create new feature files in `features/`
2. Add step definitions in `features/step-definitions/`
3. Create page objects in `features/pages/` if needed
4. Run tests with `npm test`

## Configuration

- Browser: Chromium (configurable in `world.js`)
- Viewport: 1280x720
- Timeout: 30 seconds
- Screenshots: Saved in `screenshots/` directory
- Reports: HTML reports in `reports/` directory 