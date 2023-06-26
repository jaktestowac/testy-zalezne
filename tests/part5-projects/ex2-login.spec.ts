import { test, expect } from '@playwright/test';
import { STORAGE_STATE } from '../../playwright.config';

test('login to service @p5-login-ex2', async ({ page }) => {
  await loginToService(page);
  await page.context().storageState({ path: STORAGE_STATE });
});

async function loginToService(page) {
  await page.goto('');
  await page.getByTestId('btn-dropdown').click();
  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByPlaceholder('Enter User Email').fill('Moses.Armstrong@Feest.ca');
  await page.getByPlaceholder('Enter Password').fill('test1');
  await page.getByPlaceholder('Enter Password').press('Enter');
}
