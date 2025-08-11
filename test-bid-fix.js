#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🧪 Testing Bid Creation Fix...\n');

try {
    // Test the syntax by running a dry run
    console.log('🔍 Checking syntax and step definitions...');

    const command = 'npx cucumber-js --dry-run --tags @bid-creation';

    console.log(`🔧 Executing: ${command}\n`);

    execSync(command, {
        stdio: 'inherit',
        cwd: __dirname
    });

    console.log('\n✅ Syntax check passed! The fix should work now.');
    console.log('\n🚀 You can now run the actual tests with:');
    console.log('   npm run test:bid-creation');

} catch (error) {
    console.error('\n❌ Syntax check failed!');
    console.error('Error:', error.message);
    process.exit(1);
} 