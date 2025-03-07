import { test, expect, Page } from '@playwright/test';
import { Rooms } from '../pages/booking/rooms';
import { RoomBookingDetails } from '../pages/booking/room-booking-details';
import { BookingConfirmation } from '../pages/booking/booking-confirmation';

test.describe('Should be able to make a booking', () => {
    let roomsPanel: Rooms;
    let roomBookingDetails: RoomBookingDetails;
    let bookingConfirmation: BookingConfirmation;

    test.fixme('should be able to make a booking', async({ page }) => {
        page.goto("/");
        await page.getByRole('link', { name: 'home page' }).click();
        roomsPanel = new Rooms(page);
        await roomsPanel.bookThisRoom();

        roomBookingDetails = new RoomBookingDetails(page);

        const startBoundingBox = await page.locator('div.rbc-date-cell:not(.rbc-off-range,.rbc-current) button')
                                    .nth(1)
                                    .boundingBox();
        const endBoundingBox = await page.locator('div.rbc-date-cell:not(.rbc-off-range,.rbc-current) button')
                                     .nth(3)
                                     .boundingBox();

        if (startBoundingBox !== null && startBoundingBox !== undefined) {
            await page.mouse.move(
                startBoundingBox.x + startBoundingBox.width / 2,
                startBoundingBox.y + startBoundingBox.height / 2
            );
        } else {
            console.error('startBoundingBox is null or undefined');
        }

        await page.mouse.down();

        if (endBoundingBox !== null && endBoundingBox !== undefined) {
            await page.mouse.move(
                endBoundingBox.x + endBoundingBox.width / 2,
                endBoundingBox.y + endBoundingBox.height / 2);
        } else {
            console.error('endBoundingBox is null or undefined');
        }
        //  Drag to the end date

          // Release the mouse to finalize the date selection
        await page.mouse.up();

        roomBookingDetails.enterFirstname('John');
        roomBookingDetails.enterLastname('Doe');
        roomBookingDetails.enterEmail('john.doe@email.com');
        roomBookingDetails.enterPhone('1234567891');
        roomBookingDetails.book();

        bookingConfirmation = new BookingConfirmation(page);
        await expect(bookingConfirmation.bookingConfirmationDialog()).toBeVisible();
    });
})