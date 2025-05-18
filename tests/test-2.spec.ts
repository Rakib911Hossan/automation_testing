import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.1.125:31675/auth/realms/isp/protocol/openid-connect/auth?client_id=isp-public-cli&redirect_uri=http%3A%2F%2F192.168.1.125%3A31767%2Fkam%2FrI8%2Fkam-confirm&state=4e642b03-0ff1-4fad-a3b2-a7c6065e7754&response_mode=fragment&response_type=code&scope=openid&nonce=4fa22722-1c16-4af6-9620-871195c6dabe&code_challenge=6NaDgH5yY-JhicGW7Kjwp65fJVyTEC7OksPFMjx71nc&code_challenge_method=S256');
  await page.locator('.kcLoginLogo').click();
  await page.locator('.kcFormCardClass').click();
  await page.getByRole('textbox', { name: 'User name' }).click();
  await page.getByRole('textbox', { name: 'User name' }).fill('allpermission@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.pause();
});