import { Locator, Page } from '@playwright/test';

export class RoomBookingDetails {
    readonly page: Page;
    readonly firstNameLocator: Locator;
    readonly lastNameLocator: Locator;
    readonly emailLocator: Locator;
    readonly phoneLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameLocator = this.page.locator('input[name="firstname"]');
        this.lastNameLocator = this.page.locator('input[name="lastname"]');
        this.emailLocator = this.page.locator('input[name="email"]');
        this.phoneLocator = this.page.locator('input[name="phone"]');
    }

    async enterFirstname(firstName: string) {
        await this.firstNameLocator.click();
        await this.firstNameLocator.fill(firstName);
    }

    async enterLastname(lastName: string) {
        await this.lastNameLocator.click();
        await this.lastNameLocator.fill(lastName);
    }

    async enterEmail(email: string) {
        await this.emailLocator.click();
        await this.emailLocator.fill(email);
    }

    async enterPhone(phone: string) {
        await this.phoneLocator.click();
        await this.phoneLocator.fill(phone);
    }

    async book() {
        await this.page.getByRole('button', {name: 'Book'}).click();
    }
}