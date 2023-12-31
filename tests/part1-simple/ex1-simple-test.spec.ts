import { test, expect } from '@playwright/test';

test('creates new article @p1-ex1', async ({ page }) => {
  // Arrange
  await page.goto('');
  await page.getByTestId('btn-dropdown').click();
  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByPlaceholder('Enter User Email').fill('Moses.Armstrong@Feest.ca');
  await page.getByPlaceholder('Enter Password').fill('test1');
  await page.getByPlaceholder('Enter Password').press('Enter');

  await page.getByTestId('open-articles').click();
  await page.getByRole('button', { name: 'Add Article' }).click();

  // Act
  const articleTitle = 'Webinar';
  const articleBody = 'Hej!';
  await page.getByTestId('title-input').fill(articleTitle);
  await page.getByTestId('body-text').fill(articleBody);
  await page.getByTestId('save').click();

  // Assert
  await expect.soft(page.getByTestId('article-title')).toHaveText(articleTitle);
  await expect.soft(page.getByTestId('article-body')).toHaveText(articleBody);
});
