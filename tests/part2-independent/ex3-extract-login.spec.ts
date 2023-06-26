import { test, expect } from '@playwright/test';

test.describe('creating article @p2-ex3', () => {
  const articleTitle = 'Webinar';
  const articleBody = 'Hej!';

  test.beforeEach(async ({ page }) => {
    await loginToService(page);

    await page.getByTestId('open-articles').click();
    await page.getByRole('button', { name: 'Add Article' }).click();

    await page.getByTestId('title-input').fill(articleTitle);
    await page.getByTestId('body-text').fill(articleBody);
    await page.getByTestId('save').click();
  });

  test('creates new article', async ({ page }) => {
    await expect.soft(page.getByTestId('article-title')).toHaveText(articleTitle);
    await expect.soft(page.getByTestId('article-body')).toHaveText(articleBody);
  });

  test('update article body', async ({ page }) => {
    const updatedArticleBody = 'Hej! Update!';

    await page.getByTestId('edit').click();
    await page.getByTestId('body-input').fill(updatedArticleBody);
    await page.getByTestId('update').click();

    await expect.soft(page.getByTestId('article-body')).toHaveText(updatedArticleBody);
  });
});

async function loginToService(page) {
  await page.goto('');
  await page.getByTestId('btn-dropdown').click();
  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByPlaceholder('Enter User Email').fill('Moses.Armstrong@Feest.ca');
  await page.getByPlaceholder('Enter Password').fill('test1');
  await page.getByPlaceholder('Enter Password').press('Enter');
}
