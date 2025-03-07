import { Locator, Page, expect } from '@playwright/test';

export class ContactUsPanel {
    private nameInputField: Locator;
    private emailInputField: Locator;
    private phoneInputField: Locator;
    private subjectInputField: Locator;
    private messageInputField: Locator;
    private page: Page;

    constructor(page: Page) {
        this.page = page;
        this.nameInputField = this.page.getByTestId('ContactName');
        this.emailInputField = this.page.getByTestId('ContactEmail');
        this.phoneInputField = this.page.getByTestId('ContactPhone');
        this.subjectInputField = this.page.getByTestId('ContactSubject');
        this.messageInputField = this.page.getByTestId('ContactDescription');
    }

    getNameInputField(): Locator {
        return this.nameInputField;
    }

    getEmailInputField(): Locator {
        return this.emailInputField;
    }

    getPhoneInputField(): Locator {
        return this.phoneInputField;
    }

    getSubjectInputField(): Locator {
        return this.subjectInputField;
    }

    getMessageInputField(): Locator {
        return this.messageInputField;
    }

    async expectIconIsVisibleFor(filterString: string) {
        await expect(this.page.getByRole('paragraph').filter({ hasText: filterString }).locator('span')).toBeVisible();
    }

    getNameFieldAddOn() {
        return this.page.locator('#basic-addon1').first();
    }

    getEmailFieldAddOn() {
        return this.page.locator('#basic-addon1').nth(1);
    }

    getPhoneFieldAddOn() {
        return this.page.locator('#basic-addon1').nth(2);
    }

    getSubjectFieldAddOn() {
        return this.page.locator('#basic-addon1').nth(3);
    }

    getMaps() {
        return this.page.locator('.pigeon-overlays');
    }

    getSubmitButton(): Locator {
        return this.page.getByRole('button', { name: 'Submit' });
    }

    getContactUs() {
        return this.page.locator('.contact');
    }

    async submitContactUs() {
        await this.getSubmitButton().click();
    }

    getContactUsForm(){
        return this.page.locator('form');
    }
}