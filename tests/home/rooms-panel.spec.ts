import { test, expect } from '@playwright/test';
import { RoomsPanel } from '../../pages/home/rooms-panel';

test('should verify that room(s) are available to book', async({ page }) => {
    await page.goto("/");
    let roomsPanel = new RoomsPanel(page);

    roomsPanel.expectRoomsHeaderToBeVisible();
    roomsPanel.expectRoomImageToBeVisible();
    roomsPanel.expectBookThisRoomToBeVisible();
})