import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import testdata from "../../fixtures/testdata.json";


test('login with valid data', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate(); // Replace with your actual login URL
  await loginPage.login(testdata.validuser.username, testdata.validuser.password); // Replace with actual credentials
  // Pause to inspect the page before login
await page.goto('http://192.168.1.125:31767/zone/');
await page.pause(); 
await page.context().storageState({
  path: 'fixtures/auth/userAuthState.json'
});

// test('login with inValid data', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.navigate(); // Replace with your actual login URL
//   await loginPage.login(testdata.invaliduser.username, testdata.invaliduser.password); // Replace with actual credentials
//   await page.pause(); // Pause to inspect the page before login
});