import { test, expect } from '@playwright/test';
import { AdminPanel } from '../../pages/home/admin-panel';

test.describe('Admin panel tests', () => {
    let adminPanel: AdminPanel;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', {name: 'admin panel', exact: true}).click();
        adminPanel = new AdminPanel(page);
    });

    test('should be able to view B&B Booking Management link', async () => {
        await expect(adminPanel.getBnBBookingManagement()).toBeVisible();
    });
    
    test('should be able to view admin panel and the contents', async () => {
        await expect(adminPanel.getLoginHeader()).toContainText('Log into your account');
        await expect(adminPanel.getUsernameInputField()).toBeVisible();
        await expect(adminPanel.getPasswordInputField()).toBeVisible();
        await expect(adminPanel.getSubmitButton()).toBeVisible();
    });
    
    test('should be able to login with a valid username and password', async({ page }) => {
        await adminPanel.loginWith('admin', 'password');
        await expect(page.getByRole('link', { name: 'Logout', exact: true })).toBeAttached();
    });
    
    test('should prompt for error behaviour when login is attempted without username and password', async () => {
        await adminPanel.submitAdminCredentials();
        await adminPanel.expectErrorFor(adminPanel.getUsernameInputField());
        await adminPanel.expectErrorFor(adminPanel.getPasswordInputField());
    });
    
    test('should prompt for error behaviour when username is not entered', async () => {
        await adminPanel.fillPassword('password')
        await adminPanel.submitAdminCredentials();
        await adminPanel.expectErrorFor(adminPanel.getUsernameInputField());
        await adminPanel.expectErrorFor(adminPanel.getPasswordInputField());
    });
    
    test('should prompt for error behaviour when password is not entered', async () => {
        await adminPanel.fillUsername('admin')
        await adminPanel.submitAdminCredentials();
        await adminPanel.expectErrorFor(adminPanel.getUsernameInputField());
        await adminPanel.expectErrorFor(adminPanel.getPasswordInputField());
    });
})