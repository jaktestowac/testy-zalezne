import { test, expect } from '@playwright/test';

test.describe('creating article @p3-ex1', () => {
  test.beforeEach(async ({ page }) => {
    await loginToService(page);
  });

  test('new article operations', async ({ page }) => {
    const articleTitle = 'Webinar';
    const articleBody = 'Hej!';

    await test.step('create article', async () => {
      await createArticle(page, articleTitle, articleBody);

      await expect.soft(page.getByTestId('article-title')).toHaveText(articleTitle);
      await expect.soft(page.getByTestId('article-body')).toHaveText(articleBody);
    });

    await test.step('update article', async () => {
      const updatedArticleBody = 'Hej! Update!';

      await page.getByTestId('edit').click();
      await page.getByTestId('body-input').fill(updatedArticleBody);
      await page.getByTestId('update').click();

      await expect.soft(page.getByTestId('article-body')).toHaveText(updatedArticleBody);
    });
  });
});

async function createArticle(page, articleTitle: string, articleBody: string) {
  await page.getByTestId('open-articles').click();
  await page.getByRole('button', { name: 'Add Article' }).click();

  await page.getByTestId('title-input').fill(articleTitle);
  await page.getByTestId('body-text').fill(articleBody);
  await page.getByTestId('save').click();
}

async function loginToService(page) {
  await page.goto('');
  await page.getByTestId('btn-dropdown').click();
  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByPlaceholder('Enter User Email').fill('Moses.Armstrong@Feest.ca');
  await page.getByPlaceholder('Enter Password').fill('test1');
  await page.getByPlaceholder('Enter Password').press('Enter');
}
