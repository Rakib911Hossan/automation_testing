import { test, expect } from '@playwright/test';
import { ClientPage } from '../pages/client.page';
import { LoginPage } from '../pages/login.page';
import testdata from "../fixtures/testdata.json";
import dotenv from 'dotenv';
dotenv.config();

test('Login and Add Client', async ({ page }) => {
  // const loginPage = new LoginPage(page);
  // await loginPage.navigate();
  // const email = process.env.LOGIN_EMAIL as string;
  // const password = process.env.LOGIN_PASSWORD as string;

  // await loginPage.login(email, password);
  // await page.waitForURL('**/dashboard');

  const clientPage = new ClientPage(page);
  await clientPage.navigateToClientPage(); // Ensure the client page is loaded
  await clientPage.clientMenu.click(); // or navigateToClientPage()
  await page.waitForURL('**/client');

  await clientPage.addClient({
    fullName: 'Redwan',
    phone: '01680069764',
    email: 'redwan@gmail.com',
    nationalId: '1231241352456',
  });
 // adjust to actual success message
});