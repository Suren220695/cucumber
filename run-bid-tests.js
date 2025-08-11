#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting Bid Creation Test Suite...\n');

const testOptions = {
    headless: process.argv.includes('--headed') ? false : true,
    tags: process.argv.includes('--quick') ? '@bid-creation and @quick' : '@bid-creation',
    format: process.argv.includes('--html') ? 'html:reports/bid-creation-report.html' : 'progress'
};

try {
    console.log(`📋 Test Configuration:`);
    console.log(`   - Mode: ${testOptions.headless ? 'Headless' : 'Headed'}`);
    console.log(`   - Tags: ${testOptions.tags}`);
    console.log(`   - Format: ${testOptions.format}`);
    console.log('');

    // Build the cucumber command
    let command = `npx cucumber-js --tags "${testOptions.tags}" --format ${testOptions.format}`;

    if (testOptions.headless === false) {
        command += ' --world-parameters \'{"headless": false}\'';
    }

    console.log(`🔧 Executing: ${command}\n`);

    // Run the tests
    execSync(command, {
        stdio: 'inherit',
        cwd: __dirname
    });

    console.log('\n✅ Bid Creation Tests Completed Successfully!');

    if (testOptions.format.includes('html')) {
        console.log(`📊 HTML Report: ${path.join(__dirname, 'reports/bid-creation-report.html')}`);
    }

} catch (error) {
    console.error('\n❌ Bid Creation Tests Failed!');
    console.error('Error:', error.message);
    process.exit(1);
} 