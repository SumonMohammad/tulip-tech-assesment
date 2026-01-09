import { expect, Locator, Page } from "@playwright/test";

export class ContactPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly fNameErrorMessage: Locator;
  readonly LastName: Locator;
  readonly lNameErrorMessage: Locator;
  readonly emailAddress: Locator;
  readonly emailErrorMessage: Locator;
  readonly subject: Locator;
  readonly subjectErrorMessage: Locator;
  readonly message: Locator;
  readonly messageErrorMessage: Locator;
  readonly sendButton: Locator

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('[data-test="first-name"]')
  
    this.fNameErrorMessage = page.locator('[data-test="first-name-error"]')
    this.LastName = page.locator('[data-test="last-name"]')
    this.lNameErrorMessage = page.locator('[data-test="last-name-error"]')
    this.emailAddress = page.locator('[data-test="email"]')
    this.emailErrorMessage = page.locator('[data-test="email-error"]')
    this.subject = page.locator('[data-test="subject"]')
    this.subjectErrorMessage = page.locator('[data-test="subject-error"]')
    this.message = page.locator('[data-test="message"]')
    this.messageErrorMessage = page.locator('[data-test="message-error"]')
    this.sendButton = page.locator('[data-test="contact-submit"]')
  
  }

  async goToUrl(): Promise<void> {
    await this.page.goto("https://practicesoftwaretesting.com/contact");
    await this.page.waitForLoadState("networkidle");
  }

  // async addToCartItem(): Promise<void>{
  //   await this.addToCartButtom.click()
  // }

  // async removeItem(): Promise<void>{
  //   await this.removeButton.click()
  // }
}
