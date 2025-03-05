import { test, expect } from '@playwright/test';

test('should verify the contents on welcome page section', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('img', { name: 'Brackets' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Building blocks' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Go arrow' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Magnifying glass' })).toBeVisible();

  await expect(page.locator('#collapseBanner')).toContainText('Exploration:');
  await expect(page.locator('#collapseBanner')).toContainText('Automation:');
  await expect(page.locator('#collapseBanner')).toContainText('Infrastructure:');
  await expect(page.locator('#collapseBanner')).toContainText('Get Started:');

  await expect(page.getByRole('link', { name: 'restful-booker-platform source code' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'restful-booker-platform source code' })).toHaveAttribute("href", "https://github.com/mwinteringham/restful-booker-platform");
  await expect(page.getByRole('link', { name: 'restful-booker-platform source', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'build process in this public build pipeline' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'build process in this public build pipeline' })).toHaveAttribute("href", "https://circleci.com/gh/mwinteringham/workflows/restful-booker-platform");
  await expect(page.getByRole('link', { name: 'home page' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'home page' })).toHaveAttribute("href", "https://automationintesting.online");
  await expect(page.getByRole('link', { name: 'admin panel', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'admin panel', exact: true })).toHaveAttribute("href", "https://automationintesting.online/#/admin");
  await expect(page.getByRole('link', { name: 'read more about the features here', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'read more about the features here', exact: true })).toHaveAttribute("href", "https://github.com/mwinteringham/restful-booker-platform/projects/1");
  await expect(page.getByRole('link', { name: 'feel free to raise it here' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'feel free to raise it here' })).toHaveAttribute("href", "https://github.com/mwinteringham/restful-booker-platform/issues");

  await expect(page.getByRole('button', { name: 'Let me hack!' })).toBeVisible();
});

test('should be able to view admin panel and the contents', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'admin panel', exact: true }).click();
  await expect(page.getByTestId('login-header')).toContainText('Log into your account');
  await expect(page.getByTestId('username')).toBeVisible();
  await expect(page.getByTestId('password')).toBeVisible();
  await expect(page.getByTestId('submit')).toBeVisible();
});

test('should verify the contents of the contact section', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'home page' }).click();

  await expect(page.locator('#basic-addon1').first()).toBeVisible();
  await expect(page.getByTestId('ContactName')).toBeVisible();
  await expect(page.locator('#basic-addon1').nth(1)).toBeVisible();
  await expect(page.getByTestId('ContactEmail')).toBeVisible();
  await expect(page.locator('#basic-addon1').nth(2)).toBeVisible();
  await expect(page.getByTestId('ContactPhone')).toBeVisible();
  await expect(page.locator('#basic-addon1').nth(3)).toBeVisible();
  await expect(page.getByTestId('ContactSubject')).toBeVisible();
  await expect(page.getByText('Message', { exact: true })).toBeVisible();
  await expect(page.getByTestId('ContactDescription')).toBeVisible();

  await expect(page.locator('.contact')).toContainText('Shady Meadows B&B');
  await expect(page.getByRole('paragraph').filter({ hasText: 'Shady Meadows B&B' }).locator('span')).toBeVisible();

  await expect(page.locator('.contact')).toContainText('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S');

  await expect(page.locator('.contact')).toContainText('012345678901');
  await expect(page.getByRole('paragraph').filter({ hasText: '012345678901' }).locator('span')).toBeVisible();

  await expect(page.locator('.contact')).toContainText('fake@fakeemail.com');
  await expect(page.getByRole('paragraph').filter({ hasText: 'fake@fakeemail.com' }).locator('span')).toBeVisible();

  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();

  await expect(page.locator('.pigeon-overlays')).toBeVisible();
});

test('should verify the contents of the Rooms section', async ({ page }) => {
  await page.goto('/');
  await page.goto('https://automationintesting.online/');
  await page.getByRole('link', { name: 'home page' }).click();
  await expect(page.getByRole('img', { name: 'Hotel logoUrl' })).toBeVisible();
  await expect(page.getByText('Welcome to Shady Meadows, a')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Rooms' })).toBeVisible();
});