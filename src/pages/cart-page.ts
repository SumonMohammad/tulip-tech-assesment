import { expect, Locator, Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly productTile: Locator;
  readonly increaseQuantityButton: Locator;
  readonly addTocartPopup: Locator;
  readonly cartIcon: Locator;
  readonly cartTotal: Locator;
  readonly productPrice: Locator;
  readonly productQuantity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    this.productTile = page.locator('[data-test="product-name"]').filter({ hasText: 'Combination Pliers' }) ;
    this.increaseQuantityButton = page.locator('[data-test="increase-quantity"]');
    this.addTocartPopup = page.getByRole('alert', { name: 'Product added to shopping' });
    this.cartIcon = page.locator('[data-test="nav-cart"]');
    this.cartTotal = page.locator('[data-test="cart-total"]');
    this.productPrice = page.locator('[data-test="product-price"]');
    this.productQuantity = page.locator('[data-test="product-quantity"]');


  }

  async goToUrl(): Promise<void> {
    await this.page.goto("https://practicesoftwaretesting.com/");
    await this.page.waitForLoadState("networkidle");
  }
}
