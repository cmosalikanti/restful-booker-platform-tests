import { Locator, Page, expect } from '@playwright/test';

export class AdminPanel {
  readonly page: Page;
  private loginHeader: Locator
  private usernameInputField: Locator;
  private passwordInputField: Locator;
  private submitButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.loginHeader = this.page.getByTestId('login-header');
    this.usernameInputField = this.page.getByTestId('username');
    this.passwordInputField = this.page.getByTestId('password');
    this.submitButton = this.page.getByTestId('submit');
  }

  async fillUsername(username: string) {
    await this.usernameInputField.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordInputField.fill(password);
  }

  async submitAdminCredentials(){
    await this.submitButton.click();
  }

  async loginWith(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.submitAdminCredentials();
  }

  getUsernameInputField(): Locator {
    return this.usernameInputField;
  }

  getPasswordInputField(): Locator {
    return this.passwordInputField;
  }

  getSubmitButton(): Locator {
    return this.submitButton;
  }

  getLoginHeader(): Locator {
    return this.loginHeader;
  }

  getBnBBookingManagement() {
    return this.page.getByRole('link', { name: 'B&B Booking Management' });
  }

  async expectErrorFor(field: Locator) {
    await expect(field).toHaveAttribute("style", /red/);
  }
}
