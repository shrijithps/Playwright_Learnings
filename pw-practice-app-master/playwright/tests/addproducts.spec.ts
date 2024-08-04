import {test} from '@playwright/test'

test("add products in playwright", async({page}) => {
    await page.goto('http://automationexercise.com')

    await page.locator(':text-is("Products")').click();
    await page.locator(":text-is('All Products')").isVisible();

    const imageElement = page.locator("[src='/get_product_picture/1']");
  
    // Locate the paragraph element that is a sibling of the image element
    const firstElement = imageElement.locator('xpath=following-sibling::p[contains(text(), "Blue Top")]');

    await firstElement.hover()

    await page.locator("[data-product-id='1']", {hasText:'Add to cart'}).first().click();
})