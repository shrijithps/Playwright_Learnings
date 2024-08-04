import {expect, test} from '@playwright/test'

test("VerifyProducts", async({page}) => {
    await page.goto("https://www.automationexercise.com")
    await page.locator(':text-is("Products")').click();
    await page.locator(":text-is('All Products')").isVisible();
    const productContainer = page.locator('.single-products', { hasText: 'Blue Top' });
    await page.locator('.choose').locator("[href='/product_details/1']").click();

    //assertion
    await expect(page.locator('.product-information > h2')).toContainText('Blue Top');
    await page.locator('.product-information > p', {hasText:'Category: Women > Tops'});
    await page.locator('span > span', {hasText:'Rs. 500'});

    // Use condition to check if the element contains the text "In stock"
    
    await page.locator('.product-information').locator('p', {hasText:"New"})



    //Verify that detail detail is visible: product name, category, price, availability, condition, brand

    // const productLocator = page.locator("//h2[contains(text(), 'Blue Top')]/parent::div/parent::div[contains(@class, 'single-products')]");
    // console.log(productLocator.isVisible())
    // await productLocator.locator('.choose').locator("//a[contains(text()='View Product')]").click();
});