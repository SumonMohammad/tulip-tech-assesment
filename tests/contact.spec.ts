import { test } from "../src/fixtures/base-fixture";
import { expect } from "@playwright/test";

test.describe("Test contact form with valid and invalid data", () => {
  test("Test contact form with invalid data", async ({ contactPage }) => {
    await contactPage.goToUrl();
    await expect(contactPage.sendButton).toBeVisible();
    await contactPage.sendButton.click();
    await expect(contactPage.fNameErrorMessage).toBeVisible();
    await expect(contactPage.fNameErrorMessage).toHaveText("First name is required");
    
    await expect(contactPage.lNameErrorMessage).toBeVisible();  
    await expect(contactPage.lNameErrorMessage).toHaveText("Last name is required");
    await expect(contactPage.emailErrorMessage).toBeVisible();
    await expect(contactPage.emailErrorMessage).toHaveText("Email is required");
    await expect(contactPage.subjectErrorMessage).toBeVisible();
    await expect(contactPage.subjectErrorMessage).toHaveText("Subject is required");
    await expect(contactPage.messageErrorMessage).toBeVisible();
    await expect(contactPage.messageErrorMessage).toHaveText("Message is required");
  });

  test("Test contact form with valid data", async ({ contactPage }) => {
    await contactPage.goToUrl();
    
    await contactPage.firstName.fill("John");
    await contactPage.LastName.fill("Doe");
    await contactPage.emailAddress.fill("john.doe@example.com");
    await contactPage.subject.selectOption(["customer-service"]);
    await contactPage.message.fill("Test Message");
    await expect(contactPage.sendButton).toBeVisible();
    await contactPage.sendButton.click();
  });   
});
