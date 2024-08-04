import {expect, test} from '@playwright/test'

test("VerifyProducts", async({page}) => {
    await page.goto("https://www.automationexercise.com")
    await page.locator(':text-is("Products")').click();
    await page.locator(":text-is('All Products')").isVisible();
    const productContainer = page.locator('.single-products', { hasText: 'Blue Top' });
    await page.locator('.choose').locator("[href='/product_details/1']").click();

    //assertion
    await expect(page.locator('h2')).toContainText('Blue Top');
    await expect(page.locator('p')).toContainText('Category: Women > Tops');
    await expect(page.locator('span')).toContainText('Rs. 500');

    const availability = page.locator('b', {hasText:'Availability'})

    await expect(availability.locator('..').locator('p')).toContainText('In Stock');

    //Verify that detail detail is visible: product name, category, price, availability, condition, brand

    // const productLocator = page.locator("//h2[contains(text(), 'Blue Top')]/parent::div/parent::div[contains(@class, 'single-products')]");
    // console.log(productLocator.isVisible())
    // await productLocator.locator('.choose').locator("//a[contains(text()='View Product')]").click();
});