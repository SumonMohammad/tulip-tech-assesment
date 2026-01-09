import { test as base } from '@playwright/test';
import { ContactPage } from '../pages/contact-page';
import { CartPage } from '../pages/cart-page';

export const test = base.extend<{
    contactPage: ContactPage;
    cartPage: CartPage;
   
}>({
    
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    contactPage: async ({ page }, use) => {
        const contactPage = new ContactPage(page);      
        await use(contactPage);
    }
   
});