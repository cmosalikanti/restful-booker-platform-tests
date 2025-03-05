import { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';


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

  async clickLoginButton(){
    await this.submitButton.click();
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLoginButton();
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

  async expectInputFieldToHaveAnError(field: Locator) {
    await expect(field).toHaveAttribute('style', expect.stringContaining('red'))
  }
}
