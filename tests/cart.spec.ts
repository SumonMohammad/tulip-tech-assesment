import { test } from "../src/fixtures/base-fixture";
import { expect } from "@playwright/test";


test("Test add to cart functionality", async({cartPage})=>{
    await cartPage.goToUrl();
    await expect(cartPage.productTile).toBeVisible();
    await cartPage.productTile.click();
    await expect(cartPage.increaseQuantityButton).toBeVisible();
    await cartPage.increaseQuantityButton.click();
    await cartPage.increaseQuantityButton.click();
    await expect(cartPage.addToCartButton).toBeVisible();
    await cartPage.addToCartButton.click();
    await expect(cartPage.addTocartPopup).toBeVisible();
    await cartPage.cartIcon.click();
    await expect(cartPage.productPrice).toBeVisible();
    await expect(cartPage.cartTotal).toBeVisible();
    await expect(cartPage.productQuantity).toBeVisible();

})