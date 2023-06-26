import { test, expect } from '@playwright/test';
import { APIRequestContext } from 'playwright-core';

test.describe('creating article @p7-ex1', () => {
  let articleUrl = '';
  test.beforeEach(async ({ page }) => {
    await loginToService(page);
  });

  test('create article', async ({ page }) => {
    const articleTitle = 'Webinar';
    const articleBody = 'Hej!';

    await createArticle(page, articleTitle, articleBody);

    await expect.soft(page.getByTestId('article-title')).toHaveText(articleTitle);
    await expect.soft(page.getByTestId('article-body')).toHaveText(articleBody);

    articleUrl = page.url();
  });

  test('update article', async ({ page, request }, baseURL) => {
    const restoreDB = await request.get(
      `${baseURL}/api/restoreDB`
    );
    expect(restoreDB.ok()).toBeTruthy();
    const updatedArticleBody = 'Hej! Update!';
    page.goto('/article.html?id=22');

    await page.getByTestId('edit').click();
    await page.getByTestId('body-input').fill(updatedArticleBody);
    await page.getByTestId('update').click();

    await expect.soft(page.getByTestId('article-body')).toHaveText(updatedArticleBody);
  });
});

async function createArticle(page, articleTitle: string, articleBody: string):Promise<void> {
  await page.getByTestId('open-articles').click();
  await page.getByRole('button', { name: 'Add Article' }).click();

  await page.getByTestId('title-input').fill(articleTitle);
  await page.getByTestId('body-text').fill(articleBody);
  await page.getByTestId('save').click();
}

async function loginToService(page):Promise<void> {
  await page.goto('');
  await page.getByTestId('btn-dropdown').click();
  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByPlaceholder('Enter User Email').fill('Moses.Armstrong@Feest.ca');
  await page.getByPlaceholder('Enter Password').fill('test1');
  await page.getByPlaceholder('Enter Password').press('Enter');
}

async function createArticleApi(request, articleTitle: string, articleBody: string) {
  const newArticleData = {
        user_id: 1,
        title: articleTitle,
        body: articleBody,
        date: '2023-05-26T11:21:00Z',
        image: '.\\data\\images\\256\\chuttersnap-9cCeS9Sg6nU-unsplash.jpg',
    };

    const token = await loginAndReturnToken(request);
    const loggedHeaders = {
        Authorization: `Bearer ${token}`,
    };

    // Act
    const createArticleResponse = await request.post(endpoints.articles, {
        data: newArticleData,
        headers: loggedHeaders,
    });
}

export async function loginAndReturnToken(request: APIRequestContext): Promise<string> {
    const loginData = {
      email: 'Moses.Armstrong@Feest.ca',
      password: "test1"
    }

    // login:
    const loginResponse = await request.post(endpoints.login, {data: loginData});
    const loginResponseData = await loginResponse.json();

    return loginResponseData.access_token;
}

export const endpoints = {
    articles: '/api/articles/',
    login: '/api/login/'
};