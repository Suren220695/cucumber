# GitHub Actions Workflow Setup

## Scheduled Test Run Workflow

This workflow automatically runs Cucumber tests every day at 2:00 PM IST (8:30 AM UTC) and can also be triggered manually.

### Features

- **Scheduled Execution**: Runs daily at 2:00 PM IST with `@regression` tag
- **Manual Trigger**: Allows custom tag selection and environment choice
- **Slack Integration**: Sends test results to Slack channel
- **HTML Report Generation**: Creates and publishes Cucumber HTML reports
- **Allure Reports**: Generates detailed Allure test reports
- **Artifact Storage**: Stores test results and reports for 30 days

### Setup Requirements

#### 1. Slack Integration

To enable Slack notifications, add the following secret to your GitHub repository:

1. Go to your repository → Settings → Secrets and variables → Actions
2. Add a new repository secret:
   - **Name**: `SLACK_WEBHOOK_URL`
   - **Value**: Your Slack webhook URL

To get a Slack webhook URL:

1. Go to your Slack workspace
2. Create a new app or use an existing one
3. Enable Incoming Webhooks
4. Create a webhook for your desired channel (e.g., `#test-results`)

#### 2. GitHub Pages (Optional)

To enable HTML report deployment:

1. Go to repository Settings → Pages
2. Set source to "GitHub Actions"
3. The workflow will automatically deploy reports to `https://yourusername.github.io/yourrepo/test-reports/`

### Usage

#### Scheduled Runs

- Automatically runs every day at 2:00 PM IST
- Uses `@regression` tag by default
- Runs in `production` environment
- Results are sent to Slack

#### Manual Runs

1. Go to Actions tab in your repository
2. Select "Scheduled Test Run" workflow
3. Click "Run workflow"
4. Choose:
   - **Tags**: Any valid Cucumber tags (e.g., `@smoke`, `@login`, `@regression`)
   - **Environment**: `production`, `staging`, or `development`

### Workflow Jobs

1. **test**: Runs the Cucumber tests and generates reports
2. **slack-notification**: Sends results to Slack
3. **deploy-report**: Deploys HTML reports to GitHub Pages (if on main branch)

### Test Configuration

The workflow uses the following test configuration:

- **Default tags**: `@regression` for scheduled runs
- **Browser**: Headless mode (as per user preference)
- **Environment**: `production` for scheduled runs
- **Reports**: Both Cucumber HTML and Allure reports are generated

### Artifacts

The workflow creates the following artifacts:

- `cucumber-html-report`: HTML test report
- `allure-report`: Detailed Allure report
- `test-results`: JSON test results for parsing

### Troubleshooting

1. **Slack notifications not working**: Verify `SLACK_WEBHOOK_URL` secret is set correctly
2. **Tests failing**: Check the Actions logs for detailed error information
3. **Reports not generating**: Ensure all dependencies are installed correctly
4. **Manual trigger not working**: Verify you have the necessary permissions to run workflows
