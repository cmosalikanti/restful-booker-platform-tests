import { Locator, Page, expect } from '@playwright/test';

export class RoomsPanel {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async expectRoomsHeaderToBeVisible() {
        const elem = this.page.getByRole('heading', { name: 'Rooms' });

        //  if we are directly calling scrollIntoViewIfNeeded, Playwright is throwing an error that it's already visible !
        if(!await elem.isVisible()) {
            console.log('scrolling into view');
            await elem.scrollIntoViewIfNeeded();
        }

        await expect(elem).toBeVisible();
    }

    async expectRoomImageToBeVisible() {
        const elem = this.page.locator('.hotel-room-info img');

        if(!await elem.isVisible()) {
            console.log('scrolling into view');
            await elem.scrollIntoViewIfNeeded();
        }

        await expect(elem).toBeVisible();
    }

    async expectBookThisRoomToBeVisible() {
        const elem = this.page.locator('.hotel-room-info button');

        if(!await elem.isVisible()) {
            console.log('scrolling into view');
            await elem.scrollIntoViewIfNeeded();
        }

        await expect(elem).toBeVisible();
    }
}