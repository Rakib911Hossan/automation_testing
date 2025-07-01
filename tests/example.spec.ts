// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/login.page';
// import testdata from "../fixtures/testdata.json";
// // import * as fs from 'fs';
// // import * as path from 'path';

// // // Ensure the userAuthState.json file exists
// // const userAuthStatePath = path.resolve(__dirname, '../fixtures/auth/userAuthState.json');
// // if (!fs.existsSync(userAuthStatePath)) {
// //   fs.writeFileSync(userAuthStatePath, JSON.stringify({}));
// // }


// test('login with valid data', async ({ page }) => {
//   await page.goto('http://192.168.1.125:31767/zone/zEu'); // Replace with your actual login URL
//   // const loginPage = new LoginPage(page);
//   // await loginPage.navigate(); // Replace with your actual login URL
//   // await loginPage.login(testdata.validuser.username, testdata.validuser.password); // Replace with actual credentials
//   // await page.pause(); // Pause to inspect the page before login
// });

// // test('login with inValid data', async ({ page }) => {
// //   const loginPage = new LoginPage(page);
// //   await loginPage.navigate(); // Replace with your actual login URL
// //   await loginPage.login(testdata.invaliduser.username, testdata.invaliduser.password); // Replace with actual credentials
// //   await page.pause(); // Pause to inspect the page before login
// // });