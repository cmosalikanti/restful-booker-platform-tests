import { Locator, Page } from '@playwright/test';

export class Rooms {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async bookThisRoom() {
        await this.page.getByRole('button', { name: 'Book this room' }).first().click();
    }
}
