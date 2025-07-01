import { test, expect } from '@playwright/test';
import { ClientPage } from '../pages/client.page';
import { LoginPage } from '../pages/login.page';
import testdata from "../fixtures/testdata.json";

test('Login and Add Client', async ({ page }) => {
  // const loginPage = new LoginPage(page);
  // await loginPage.navigate();
  // await loginPage.login(testdata.validuser.username, testdata.validuser.password);
  // // await page.waitForURL('**/dashboard');

  const clientPage = new ClientPage(page);
  await clientPage.navigateToClientPage();
  // await page.waitForURL('**/client');

  await clientPage.addClient({
    fullName: 'Redwan',
    phone: '01680069764',
    email: 'redwan@gmail.com',
    nationalId: '1231241352456',
  });
  // await expect(page.getByText('Client added successfully')).toBeVisible(); // adjust to actual success message
});