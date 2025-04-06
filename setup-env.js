#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n=== FinFluent Environment Setup ===\n');
console.log('This script will help you set up your environment variables for local development.\n');
console.log('You\'ll need your Supabase URL and anon key from your Supabase dashboard:\n');
console.log('1. Log in to your Supabase dashboard: https://app.supabase.io/');
console.log('2. Select your project');
console.log('3. Go to Project Settings > API');
console.log('4. Copy the URL and anon key from the "Project API keys" section\n');

const envPath = path.join(__dirname, '.env.local');

const promptUser = () => {
  rl.question('Enter your Supabase URL: ', (supabaseUrl) => {
    if (!supabaseUrl) {
      console.log('Supabase URL is required.');
      return promptUser();
    }

    rl.question('Enter your Supabase anon key: ', (supabaseKey) => {
      if (!supabaseKey) {
        console.log('Supabase anon key is required.');
        return promptUser();
      }

      const envContent = `# Supabase Configuration
VITE_SUPABASE_URL=${supabaseUrl.trim()}
VITE_SUPABASE_ANON_KEY=${supabaseKey.trim()}

# Add other environment variables as needed
`;

      fs.writeFileSync(envPath, envContent);
      console.log('\nEnvironment variables have been set up successfully!');
      console.log(`Created: ${envPath}`);
      console.log('\nYou can now run your app with:');
      console.log('npm run dev\n');

      rl.close();
    });
  });
};

// Check if .env.local already exists
if (fs.existsSync(envPath)) {
  rl.question('.env.local already exists. Do you want to overwrite it? (y/N): ', (answer) => {
    if (answer.toLowerCase() === 'y') {
      promptUser();
    } else {
      console.log('Setup cancelled. Your existing .env.local file was not modified.');
      rl.close();
    }
  });
} else {
  promptUser();
} 