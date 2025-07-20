# SauceDemo Cucumber Framework

A comprehensive test automation framework for the SauceDemo application using Cucumber, Selenium WebDriver, and Java with Maven.

## 🚀 Features

- **Cucumber BDD Framework**: Write tests in Gherkin syntax for better collaboration
- **Page Object Model**: Maintainable and reusable page objects
- **Selenium WebDriver**: Cross-browser automation support
- **Maven Project**: Easy dependency management and build process
- **Headless Mode**: Run tests without browser UI (default configuration)
- **Screenshot Capture**: Automatic screenshots on test failures
- **Multiple Browser Support**: Chrome and Firefox support
- **Comprehensive Test Scenarios**: Covers various login scenarios

## 📋 Prerequisites

- Java 11 or higher
- Maven 3.6 or higher
- Chrome or Firefox browser (for non-headless mode)

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd sauceDemoCucumberWithLogin
```

### 2. Install Dependencies
```bash
mvn clean install
```

### 3. Run Tests

#### Run All Tests
```bash
mvn test
```

#### Run Specific Tags
```bash
# Run only smoke tests
mvn test -Dcucumber.filter.tags="@smoke"

# Run only negative tests
mvn test -Dcucumber.filter.tags="@negative"

# Run multiple tags
mvn test -Dcucumber.filter.tags="@smoke or @login"
```

#### Run with Different Browser
```bash
# Run with Chrome (default)
mvn test -Dbrowser=chrome

# Run with Firefox
mvn test -Dbrowser=firefox
```

#### Run in Headed Mode
```bash
# Run with browser UI visible
mvn test -Dheadless=false
```

## 📁 Project Structure

```
sauceDemoCucumberWithLogin/
├── src/
│   ├── test/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── saucedemo/
│   │   │           ├── hooks/
│   │   │           │   └── Hooks.java
│   │   │           ├── pages/
│   │   │           │   ├── LoginPage.java
│   │   │           │   └── InventoryPage.java
│   │   │           ├── runners/
│   │   │           │   └── CucumberTestRunner.java
│   │   │           ├── steps/
│   │   │           │   └── LoginSteps.java
│   │   │           └── utils/
│   │   │               └── DriverManager.java
│   │   └── resources/
│   │       ├── features/
│   │       │   └── login.feature
│   │       └── config.properties
├── pom.xml
└── README.md
```

## 🧪 Test Scenarios

The framework includes the following test scenarios:

### Login Feature (`login.feature`)

1. **Successful Login** (`@smoke @login`)
   - Valid username and password
   - Redirects to inventory page
   - Shows inventory items

2. **Invalid Credentials** (`@login @negative`)
   - Invalid username
   - Invalid password
   - Empty credentials

3. **Locked User** (`@login @locked`)
   - Locked out user account
   - Appropriate error message

4. **Performance Glitch User** (`@login @performance`)
   - User with performance issues
   - Successful login with delay

## 🏷️ Tags

- `@smoke`: Critical test scenarios
- `@login`: All login-related tests
- `@negative`: Negative test scenarios
- `@locked`: Locked user scenarios
- `@performance`: Performance-related scenarios

## 📊 Test Reports

After running tests, reports are generated in:
- **HTML Report**: `target/cucumber-reports/cucumber-pretty.html`
- **JSON Report**: `target/cucumber-reports/CucumberTestReport.json`

## ⚙️ Configuration

### Browser Configuration
- Default browser: Chrome
- Headless mode: Enabled by default
- Window size: 1920x1080

### Timeouts
- Implicit wait: 10 seconds
- Explicit wait: 10 seconds
- Page load timeout: 30 seconds

### Test Data
The framework uses the following test users from SauceDemo:
- `standard_user`: Normal user
- `locked_out_user`: Locked user
- `performance_glitch_user`: User with performance issues
- `secret_sauce`: Default password for all users

## 🔧 Customization

### Adding New Features
1. Create feature file in `src/test/resources/features/`
2. Create step definitions in `src/test/java/com/saucedemo/steps/`
3. Create page objects in `src/test/java/com/saucedemo/pages/`
4. Update test runner if needed

### Adding New Browsers
1. Update `DriverManager.java` with new browser configuration
2. Add browser-specific dependencies to `pom.xml`

## 🐛 Troubleshooting

### Common Issues

1. **WebDriver Issues**
   - Ensure Chrome/Firefox is installed
   - Check WebDriverManager logs for driver download issues

2. **Test Failures**
   - Check screenshots in test reports
   - Verify SauceDemo application is accessible
   - Check network connectivity

3. **Build Issues**
   - Ensure Java 11+ is installed
   - Verify Maven installation
   - Check proxy settings if behind corporate firewall

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For questions or issues, please create an issue in the repository or contact the development team. 