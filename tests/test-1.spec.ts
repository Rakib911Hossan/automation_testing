import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.1.125:31675/auth/realms/isp/protocol/openid-connect/auth?client_id=isp-public-cli&redirect_uri=http%3A%2F%2F192.168.1.125%3A31767%2Fusers%2F43ad6ac2-48cb-40b0-bda6-7d89d4f7cc0c&state=83478c8b-212c-4a2b-a69f-1e177a90155b&response_mode=fragment&response_type=code&scope=openid&nonce=66a2a047-e5a6-4136-8350-341b208bc368&code_challenge=ZYb9KNvJblnai6bPLrolU1f_o9yevGcsdGOJbKEl8s4&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'User name' }).click();
  await page.getByRole('textbox', { name: 'User name' }).fill('allpermission@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Client', exact: true }).click();
  await page.getByRole('button', { name: 'Add Client' }).click();
  await page.locator('div').filter({ hasText: /^Connection Type\*Select \.\.\.$/ }).locator('div').nth(4).click();
  await page.locator('div').filter({ hasText: /^Client Connectivity Type\*Select \.\.\.$/ }).locator('div').nth(4).click();
  await page.locator('div').filter({ hasText: /^Share$/ }).click();
});