import { test } from "../src/fixtures/base-fixture";
import { expect } from "@playwright/test";
import { parsePrice } from '../src/utils/price-parser';


test("Validate cart price when quantity changes", async ({ cartPage }) => {
  await cartPage.goToUrl();

  await cartPage.productTile.click();
  await cartPage.increaseQuantityButton.click();
  await cartPage.increaseQuantityButton.click();
  await cartPage.addToCartButton.click();
  await cartPage.cartIcon.click();
  await cartPage.productQuantity.fill("3");
  await expect(cartPage.cartTotal).toBeVisible();
  const unitPriceText = await cartPage.productPrice.textContent();
  expect(unitPriceText).not.toBeNull();
  const unitPrice = parsePrice(unitPriceText!);
  const quantityValue = await cartPage.productQuantity.inputValue();
  const quantity = Number(quantityValue);
  const expectedTotal = unitPrice * quantity;
  const cartTotalText = await cartPage.cartTotal.textContent();
  expect(cartTotalText).not.toBeNull();
  const actualTotal = parsePrice(cartTotalText!);
  expect(actualTotal).toBeCloseTo(expectedTotal, 2);
});