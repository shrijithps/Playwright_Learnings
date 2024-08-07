import {test} from '@playwright/test'

test("Search product", async({page}) => {
    await page.goto("https://www.automationexercise.com");
    await page.locator(':text-is("Products")').click();

    await page.locator('#search_product').fill("top");

    await page.locator('#submit_search').click();
    await page.waitForTimeout(5000);
    const resulttext = await page.locator('.single-products').locator('[class="productinfo text-center"]').locator('p').allInnerTexts()
    console.log(resulttext)
})