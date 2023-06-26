import { test, expect } from '@playwright/test';

test('test recorded @p1-ex0', async ({ page }) => {
  await page.goto('');
  await page.getByTestId('btn-dropdown').click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Enter User Email').click();
  await page.getByPlaceholder('Enter User Email').fill('Moses.Armstrong@Feest.ca');
  await page.getByPlaceholder('Enter Password').click();
  await page.getByPlaceholder('Enter Password').fill('test1');
  await page.getByRole('button', { name: 'LogIn' }).click();
  await page.getByTestId('open-articles').click();
  await page.getByRole('button', { name: 'Add Article' }).click();
  await page.getByTestId('title-input').click();
  await page.getByTestId('title-input').fill('Webinar');
  await page.getByTestId('body-text').click();
  await page.getByTestId('body-text').fill('Hej!');
  await page.getByTestId('save').click();
});
