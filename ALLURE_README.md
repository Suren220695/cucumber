# Allure Reporting for Cucumber Tests

This project uses [Allure Framework](https://allurereport.org/) to generate comprehensive test reports for Cucumber.js tests. Allure provides detailed insights into test execution, including test steps, status, timing, and more.

## 🚀 Quick Start

### 1. Run Tests with Allure Reporting

```bash
# Run tests in headless mode with Allure reporting
npm run test:headless

# Run tests in headed mode with Allure reporting
npm run test:headed

# Run specific browser tests with Allure reporting
npm run test:chrome
npm run test:firefox
npm run test:webkit
```

### 2. Generate and View Reports

```bash
# Generate HTML report from test results
npm run allure:generate

# Open the generated report in browser
npm run allure:open

# Serve results directly (recommended for CI/CD)
npm run allure:serve
```

## 📁 Directory Structure

After running tests, the following directories are automatically created:

```
cucumber/
├── allure-results/          # Raw test results (JSON files)
├── allure-report/           # Generated HTML reports
└── utils/
    └── reporter.js          # Custom Allure reporter
```

## 🔧 Configuration

### Custom Reporter (`utils/reporter.js`)

The custom Allure reporter extends `CucumberJSAllureFormatter` and provides:

- **Automatic directory creation**: Creates `allure-results` and `allure-report` folders
- **Label support**: Automatically tags tests with feature, suite, and custom labels
- **Link support**: Supports issue tracking links (e.g., `@issue=123`)
- **Severity levels**: Supports severity annotations (e.g., `@severity=high`)

### Supported Annotations

```gherkin
@feature:User Management
@severity:high
@issue=PROJ-123
@epic:Authentication
@story:User Login
```

## 📊 Report Features

### 1. Test Execution Overview

- **Dashboard**: High-level test execution summary
- **Timeline**: Test execution timeline with duration
- **Categories**: Test categorization by status and type

### 2. Detailed Test Information

- **Test Steps**: Individual step execution with status
- **Parameters**: Test data and parameters used
- **Attachments**: Screenshots, logs, and other files
- **Environment**: Test environment details

### 3. Analytics and Trends

- **Trends**: Test execution trends over time
- **Statistics**: Pass/fail ratios and execution metrics
- **History**: Historical test execution data

## 🛠️ Available Scripts

| Script                    | Description                             |
| ------------------------- | --------------------------------------- |
| `npm run test:headless`   | Run tests in headless mode with Allure  |
| `npm run test:headed`     | Run tests in headed mode with Allure    |
| `npm run test:chrome`     | Run tests with Chrome browser           |
| `npm run test:firefox`    | Run tests with Firefox browser          |
| `npm run test:webkit`     | Run tests with WebKit browser           |
| `npm run allure:generate` | Generate HTML report from results       |
| `npm run allure:open`     | Open generated report in browser        |
| `npm run allure:serve`    | Serve results directly (CI/CD friendly) |

## 🔍 Viewing Reports

### Option 1: Open Generated Report

```bash
npm run allure:generate
npm run allure:open
```

- Generates static HTML files
- Opens report in default browser
- Good for sharing reports

### Option 2: Serve Results Directly

```bash
npm run allure:serve
```

- Starts local web server
- Serves results dynamically
- Better for CI/CD environments
- Access via `http://localhost:port`

## 🏷️ Custom Labels and Metadata

### Adding Custom Labels

```javascript
// In your step definitions
const { Allure } = require("allure-cucumberjs");

// Add custom labels
await Allure.label("priority", "high");
await Allure.label("component", "authentication");
```

### Adding Test Descriptions

```javascript
// Add test description
await Allure.description("This test validates user login functionality");

// Add HTML description
await Allure.descriptionHtml("<b>Bold</b> description with <i>formatting</i>");
```

### Adding Attachments

```javascript
// Attach text content
await Allure.attachment("log.txt", "Test execution log content", "text/plain");

// Attach file from path
await Allure.attachmentPath(
  "screenshot.png",
  "/path/to/screenshot.png",
  "image/png"
);
```

## 🚀 CI/CD Integration

### GitHub Actions Example

```yaml
- name: Run Tests
  run: npm run test:headless

- name: Generate Allure Report
  run: npm run allure:generate

- name: Upload Allure Report
  uses: actions/upload-artifact@v2
  with:
    name: allure-report
    path: allure-report/
```

### Jenkins Pipeline Example

```groovy
stage('Test') {
    steps {
        sh 'npm run test:headless'
    }
    post {
        always {
            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results/']]
            ])
        }
    }
}
```

## 📱 Report Customization

### Custom Labels Configuration

```javascript
// In utils/reporter.js
const config = {
  labels: [
    {
      pattern: [/@feature:(.*)/],
      name: "epic",
    },
    {
      pattern: [/@severity:(.*)/],
      name: "severity",
    },
    // Add more custom patterns
  ],
  links: [
    {
      pattern: [/@issue=(.*)/],
      type: "issue",
      urlTemplate: "https://your-jira.com/browse/%s",
    },
  ],
};
```

### Environment Information

```javascript
// Add environment details
const environmentInfo = {
  framework: "Cucumber.js",
  language: "JavaScript",
  runtime: "Node.js",
  version: process.version,
};
```

## 🔍 Troubleshooting

### Common Issues

1. **Allure command not found**

   ```bash
   npm install -g allure-commandline
   ```

2. **Report not generating**

   - Check if `allure-results` directory contains JSON files
   - Verify Allure commandline is installed globally

3. **Browser not opening automatically**
   - Use `npm run allure:open` manually
   - Check browser security settings

### Debug Mode

```bash
# Run with verbose logging
DEBUG=allure* npm run test:headless
```

## 📚 Additional Resources

- [Allure Framework Documentation](https://allurereport.org/docs/)
- [Allure Cucumber.js Integration](https://github.com/allure-framework/allure-js/tree/master/packages/allure-cucumberjs)
- [Allure Report Examples](https://github.com/allure-framework/allure-examples)

## 🤝 Contributing

To enhance the Allure reporting:

1. Modify `utils/reporter.js` for custom behavior
2. Update label patterns and link configurations
3. Add custom metadata and attachments
4. Test with different test scenarios

## 📄 License

This Allure reporting setup is part of the Cucumber test suite and follows the same licensing terms as the main project.
