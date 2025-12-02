import { test, expect } from '@playwright/test';

test('test title page is "My Test"', async ({ page }) => {
  // Uses the baseURL defined in the configuration
  await page.goto('http://localhost:3000/');

  // Check if the page title is correct
  await expect(page).toHaveTitle(/My Test/);
});

test('test can navigate between navbar links', async ({ page }) => {
  // Uses the baseURL defined in the configuration
  await page.goto('http://localhost:3000/');

  // Check main view
  const dashboard = await page.locator('h3');
  await expect(dashboard).toHaveText('My Dashboard');

  // Check routing works
  await page.getByRole('link', { name: 'Articles' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
});