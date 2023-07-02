# About

Exercises for training dependent tests handling.

All exercises have detailed descriptions available after signing here:
https://jaktestowac.pl/pw-strategie/
You will get link to recording of full webinar, presentation and tips (in Polish language).

## Tested app

Information how to get tested app is located in page available after registering here https://jaktestowac.pl/pw-strategie/

⚠️ Glitch free account is limited to 4k requests per hour, app is deleted after 5 days without account

## Required software

- `Node.js`
- `Visual Studio Code`
- extensions for VSC:
  - `Prettier - Code formatter`
  - `Playwright Test for VSCode`

## How to install project

1. Install packages:

   ```
   npm i
   ```

2. Install playwright browsers:

   ```
   npx playwright install
   ```

3. Configure `playwright.config.json`
   - Set baseURL to your app main url.
   - Set timeout to desired value (current 10s can be to short)

## How to run tests

There are few ways of test running:

1. Navigate to folder with given exercise an simply run test by pressing green arrow
2. Open `Testing` tab located in left menu (flask icon), unfold all tests and choose one or as many as you want to be run.
   If test not appears, refresh tab or check `playwright.config.ts` if you have everything set properly with `projects` section.
3. Run npm scripts by copy pasting scripts form `package.json` form `scripts` section.
4. Yse VSC npm script run section:
   - in `Explorer` tab menu check `NPM Scripts`
   - in very bottom of Explorer tab you will find section `NPM SCRIPTS`
   - choose script you want to run

## ⚠️ How to run test with projects (part5-projects)

1. Go to `playwright.config.ts`
2. In `projects` comment first item under `// No dependency`
3. Uncomment item related to exercise i.e. `Part5 Ex1 Simple dependency in project`
4. Run tests for given exercises from `part5-projects` folder in i.e `tests\part5-projects\ex1-projects-simple.spec.ts`
5. After finishing testing remember to comment back project item in `playwright.config.ts` and uncomment first project item

## Reports

Just run script form `package.json`:

```
npm run report
```

Recommended option is running this script in separate console.

After running test the report is updated and you can refresh page with report

# Tips

- run same tests couple times (if it works)
- check reports and traces
- broke test and try to find problem in report
- ⚠️ be careful with test with projects (part 5)
