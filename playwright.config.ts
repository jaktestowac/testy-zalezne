import { defineConfig, devices } from '@playwright/test';
import * as path from 'path';

export const STORAGE_STATE = path.join(__dirname, 'temp/session.json');
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  timeout: 10 * 1000,
  use: {
    baseURL: 'https://flannel-pitch-inspiration.glitch.me/',
    trace: 'on',
    screenshot: 'on',
  },
  projects: [
    // No dependency
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // // Simple dependency in project
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

    // Simple dependency split to separate files
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

    // // Dependency file refactored
    // {
    //   name: 'setup-3',
    //   testMatch: 'tests/**/*.setup.ts',
    // },
    // {
    //   name: 'auth-3',
    //   grep: /@p5-ex3/,
    //   dependencies: ['setup-3'],
    //   use: {
    //     storageState: STORAGE_STATE,
    //   },
    // },
  ],
});
