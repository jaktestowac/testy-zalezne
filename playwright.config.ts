import { defineConfig, devices } from '@playwright/test';
import * as path from 'path';

// Path for storing session for Part 5 exercises 
export const STORAGE_STATE = path.join(__dirname, 'temp/session.json');

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  // ⚠️ Set to 2 to force parallel mode, default is 0 so 50% of your logical cores will be used
  workers: 0,
  reporter: 'html',
  // ⚠️ Modify below timeout if 10s is to short for your environment
  timeout: 10 * 1000,
  use: {
    // ⚠️ Set your url to app
    baseURL: 'https://[YOUR-APP].glitch.me/',
    // Traces and screenshots are always on 
    trace: 'on',
    screenshot: 'on',
  },
  projects: [
    // No dependency
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Part5 setup 
    // ⚠️ Remember to comment it back when using other exercises

    // // Part5 Ex1 Simple dependency in project
    // {
    //   name: 'setup-1',
    //   grep: /@p5-login-ex1/,
    // },
    // {
    //   name: 'auth-1',
    //   grep: /@p5-ex1/,
    //   dependencies: ['setup-1'],
    //   use: {
    //     storageState: STORAGE_STATE,
    //   },
    // },

    // // Part5 Ex2 Simple dependency split to separate files
    // {
    //   name: 'setup-2',
    //   grep: /@p5-login-ex2/,
    // },
    // {
    //   name: 'auth-2',
    //   grep: /@p5-ex2/,
    //   dependencies: ['setup-2'],
    //   use: {
    //     storageState: STORAGE_STATE,
    //   },
    // },

  //   // Part5 Ex3 Dependency file refactored
  //   {
  //     name: 'setup-3',
  //     testMatch: 'tests/**/*.setup.ts',
  //   },
  //   {
  //     name: 'auth-3',
  //     grep: /@p5-ex3/,
  //     dependencies: ['setup-3'],
  //     use: {
  //       storageState: STORAGE_STATE,
  //     },
  //   },
  ],
});
