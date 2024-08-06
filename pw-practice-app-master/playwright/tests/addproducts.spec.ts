import {test} from '@playwright/test'

test("add products in playwright", async({page}) => {
    await page.goto('http://automationexercise.com')

    await page.locator(':text-is("Products")').click();
    await page.locator(":text-is('All Products')").isVisible();


    const imageElement1 = page.locator("[src='/get_product_picture/1']");
    const firstElement = imageElement1.locator('xpath=following-sibling::p[contains(text(), "Blue Top")]');
    const firstElementPriceS = await imageElement1.locator('xpath=following-sibling::h2').textContent();

    const firstTrimmedPrice = firstElementPriceS.replace('Rs. ', '').trim();
    console.log(parseInt(firstTrimmedPrice))
    

    await firstElement.hover()
    await page.locator("[data-product-id='1']", {hasText:'Add to cart'}).first().click();

    await page.locator('button', {hasText:'Continue Shopping'}).click();

    const imageElement2 = page.locator("[src='/get_product_picture/2']");
    const secondElement = imageElement2.locator('xpath=following-sibling::p[contains(text(), "Men Tshirt")]');
    const secondElementPriceS = await imageElement2.locator('xpath=following-sibling::h2').textContent();

    const secondTrimmedPrice = secondElementPriceS.replace('Rs. ', '').trim();
    console.log(parseInt(secondTrimmedPrice))
    await secondElement.hover()
    await page.locator("[data-product-id='2']", {hasText:'Add to cart'}).first().click();

    
})