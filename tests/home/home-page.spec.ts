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

  const locatorForPlatformSourceCode = page.getByRole('link', { name: 'restful-booker-platform source code', exact: true })
  await expect(locatorForPlatformSourceCode).toBeVisible();
  await expect(locatorForPlatformSourceCode).toHaveAttribute("href", "https://github.com/mwinteringham/restful-booker-platform");

  const locatorForPlatformSource = page.getByRole('link', { name: 'restful-booker-platform source', exact: true })
  await expect(locatorForPlatformSource).toBeVisible();
  await expect(locatorForPlatformSource).toHaveAttribute("href", "https://github.com/mwinteringham/restful-booker-platform");

  const locatorForBuildPipeline = page.getByRole('link', { name: 'build process in this public build pipeline' })
  await expect(locatorForBuildPipeline).toBeVisible();
  await expect(locatorForBuildPipeline).toHaveAttribute("href", "https://circleci.com/gh/mwinteringham/workflows/restful-booker-platform");

  const locatorForHomePageLink = page.getByRole('link', {name: 'home page', exact: true});
  await expect(locatorForHomePageLink).toBeVisible();
  await expect(locatorForHomePageLink).toHaveAttribute("href", "https://automationintesting.online");

  const locatorForAdminPanelLink = page.getByRole('link', {name: 'admin panel', exact: true});
  await expect(locatorForAdminPanelLink).toBeVisible();
  await expect(locatorForAdminPanelLink).toHaveAttribute("href", "https://automationintesting.online/#/admin");

  const locatorForReadMoreFeaturesLink = page.getByRole('link', {name: 'read more about the features here', exact: true})
  await expect(locatorForReadMoreFeaturesLink).toBeVisible();
  await expect(locatorForReadMoreFeaturesLink).toHaveAttribute("href", "https://github.com/mwinteringham/restful-booker-platform/projects/1");

  const locatorForFeelFreeToRaiseItHereLink = page.getByRole('link', {name: 'feel free to raise it here', exact: true})
  await expect(locatorForFeelFreeToRaiseItHereLink).toBeVisible();
  await expect(locatorForFeelFreeToRaiseItHereLink).toHaveAttribute("href", "https://github.com/mwinteringham/restful-booker-platform/issues");

  await expect(page.getByRole('button', { name: 'Let me hack!' })).toBeVisible();
});

test('should verify the contents of the Rooms section', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'home page' }).click();
  await expect(page.locator('.container-fluid img.hotel-logoUrl')).toBeVisible();
  await expect(page.getByText('Welcome to Shady Meadows')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Rooms' })).toBeVisible();
});