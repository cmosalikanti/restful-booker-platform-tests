import { Locator, Page } from '@playwright/test';

export class RoomBookingDetails {
    private page: Page;
    private firstName: Locator;
    private lastName: Locator;
    private email: Locator;
    private phone: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = this.page.locator('input[name="firstname"]')
        this.lastName = this.page.locator('input[name="lastname"]')
        this.email = this.page.locator('input[name="email"]')
        this.phone = this.page.locator('input[name="phone"]')
    }

    async enterFirstname(firstName: string) {
        await this.firstName.click()
        await this.firstName.fill(firstName);
    }

    async enterLastname(lastName: string) {
        await this.lastName.click()
        await this.lastName.fill(lastName);
    }

    async enterEmail(email: string) {
        await this.email.click()
        await this.email.fill(email);
    }

    async enterPhone(phone: string) {
        await this.phone.click()
        await this.phone.fill(phone);
    }

    async book() {
        await this.page.getByRole('button', {name: 'Book'}).click();
    }
}