import { test, expect } from '@playwright/test';
import { STORAGE_STATE } from '../../playwright.config';

test('login to service @p5-login-ex1', async ({ page }) => {
  await loginToService(page);
  await page.context().storageState({ path: STORAGE_STATE });
});

test.describe.configure({ mode: 'serial' });

test.describe('creating article @p5-ex1', () => {
  let articleUrl = '';

  test('create article', async ({ page }) => {
    const articleTitle = 'Webinar';
    const articleBody = 'Hej!';

    await page.goto('/welcome');
    await createArticle(page, articleTitle, articleBody);

    await expect.soft(page.getByTestId('article-title')).toHaveText(articleTitle);
    await expect.soft(page.getByTestId('article-body')).toHaveText(articleBody);

    articleUrl = page.url();
  });

  test('update article', async ({ page }) => {
    const updatedArticleBody = 'Hej! Update!';
    page.goto(articleUrl);

    await page.getByTestId('edit').click();
    await page.getByTestId('body-input').fill(updatedArticleBody);
    await page.getByTestId('update').click();

    await expect.soft(page.getByTestId('article-body')).toHaveText(updatedArticleBody);
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
