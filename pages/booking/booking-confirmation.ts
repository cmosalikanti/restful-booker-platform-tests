import { Locator, Page } from '@playwright/test';

export class BookingConfirmation {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    bookingConfirmationDialog() {
        return this.page.getByRole('dialog', { name: 'onRequestClose Example' });
    }
}