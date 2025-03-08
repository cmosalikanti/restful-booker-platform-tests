import { Page } from '@playwright/test';

export class RoomsPanel {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}