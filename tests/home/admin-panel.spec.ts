import { test, expect } from '@playwright/test';
import { AdminPanel } from '../../pages/home/admin-panel';

test.describe('Admin panel tests', () => {
    let adminPanel: AdminPanel;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        adminPanel = new AdminPanel(page);
    });
    
    test('should be able to view admin panel and the contents', async ({ page }) => {
        //    'B&B Booking Management' link will be in the DOM when 'admin panel' link is clicked
        const bookingManagementLink = page.getByRole('link', { name: 'B&B Booking Management' })
        await expect(bookingManagementLink).not.toBeAttached();
        await page.getByRole('link', { name: 'admin panel', exact: true }).click();
        await expect(bookingManagementLink).toBeAttached();
    
        await expect(adminPanel.getLoginHeader()).toContainText('Log into your account');
        await expect(adminPanel.getUsernameInputField()).toBeVisible();
        await expect(adminPanel.getPasswordInputField()).toBeVisible();
        await expect(adminPanel.getSubmitButton()).toBeVisible();
    });
    
    test('should be able to login with a valid username and password', async({ page }) => {
        await page.getByRole('link', {name: 'admin panel', exact: true}).click();
        await adminPanel.getUsernameInputField().fill('admin')
        await adminPanel.getPasswordInputField().fill('password')
        await adminPanel.getSubmitButton().click();
        await expect(page.getByRole('link', { name: 'Logout', exact: true })).toBeAttached();
    });
    
    test('should prompt for error behaviour when login is attempted without username and password', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', {name: 'admin panel', exact: true}).click();
        await adminPanel.getSubmitButton().click();
        adminPanel.expectInputFieldToHaveAnError(adminPanel.getUsernameInputField());
        adminPanel.expectInputFieldToHaveAnError(adminPanel.getPasswordInputField());
    });
    
    test('should prompt for error behaviour when username is not entered', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', {name: 'admin panel', exact: true}).click();
        await adminPanel.getPasswordInputField().fill('password')
        await adminPanel.getSubmitButton().click();
        adminPanel.expectInputFieldToHaveAnError(adminPanel.getUsernameInputField());
        adminPanel.expectInputFieldToHaveAnError(adminPanel.getPasswordInputField());
    });
    
    test('should prompt for error behaviour when password is not entered', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', {name: 'admin panel', exact: true}).click();
        await adminPanel.getUsernameInputField().fill('admin')
        await adminPanel.getSubmitButton().click();
        adminPanel.expectInputFieldToHaveAnError(adminPanel.getUsernameInputField());
        adminPanel.expectInputFieldToHaveAnError(adminPanel.getPasswordInputField());
    });
})


test('sdsd', async() => {
    

});
