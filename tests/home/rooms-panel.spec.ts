import { test, expect } from '@playwright/test';

test('should verify that room(s) are available to book', async({ page}) => {
    await page.goto('/');
    await expect(page.locator('.hotel-room-info img')).toBeVisible();
    await expect(page.locator('.hotel-room-info button')).toBeVisible();
    await expect(page.locator('.room-header')).toBeVisible();
});
