import { test, expect, Page } from '@playwright/test';
import { ContactUsPanel } from '../../pages/home/contact-us-panel';

test.describe('Contact us panel tests', () => {
    let contactUsPanel: ContactUsPanel;

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        contactUsPanel = new ContactUsPanel(page);
    });
    
    test('should be able to view contact us panel and the contents', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: 'home page' }).click();
      
        await expect(contactUsPanel.getNameFieldAddOn()).toBeVisible();
        await expect(contactUsPanel.getNameInputField()).toBeVisible();
        await expect(contactUsPanel.getEmailFieldAddOn()).toBeVisible();
        await expect(contactUsPanel.getEmailInputField()).toBeVisible();
        await expect(contactUsPanel.getPhoneFieldAddOn()).toBeVisible();
        await expect(contactUsPanel.getPhoneInputField()).toBeVisible();
        await expect(contactUsPanel.getSubjectFieldAddOn()).toBeVisible();
        await expect(contactUsPanel.getSubjectInputField()).toBeVisible();
        await expect(page.getByText('Message', { exact: true })).toBeVisible();
        await expect(contactUsPanel.getMessageInputField()).toBeVisible();
      
        contactUsPanel.expectIconIsVisibleFor('Shady Meadows B&B');
        await expect(contactUsPanel.getContactUs()).toContainText('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S');
        contactUsPanel.expectIconIsVisibleFor('012345678901');
        contactUsPanel.expectIconIsVisibleFor('fake@fakeemail.com');
      
        await expect(contactUsPanel.getSubmitButton()).toBeVisible();
        await expect(contactUsPanel.getMaps()).toBeVisible();
    });

    test('should report errors when information for contact us is not provided', async({ page }) => {
        await page.goto('https://automationintesting.online/');
        await page.getByRole('link', { name: 'home page' }).click();
        await contactUsPanel.submitContactUs();
        await expect(contactUsPanel.getContactUsForm()).toContainText('Phone may not be blank');
        await expect(contactUsPanel.getContactUsForm()).toContainText('Subject may not be blank');
        await expect(contactUsPanel.getContactUsForm()).toContainText('Name may not be blank');
        await expect(contactUsPanel.getContactUsForm()).toContainText('Message must be between 20 and 2000 characters.');
        await expect(contactUsPanel.getContactUsForm()).toContainText('Message may not be blank');
        await expect(contactUsPanel.getContactUsForm()).toContainText('Subject must be between 5 and 100 characters.');
        await expect(contactUsPanel.getContactUsForm()).toContainText('Email may not be blank');
        await expect(contactUsPanel.getContactUsForm()).toContainText('Phone must be between 11 and 21 characters.');
    });
});