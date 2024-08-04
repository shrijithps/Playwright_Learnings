import {test} from '@playwright/test'

test("VerifyProducts", async({page}) => {
    await page.goto("https://www.automationexercise.com")
    await page.locator(':text-is("Products")').click();
    await page.locator(":text-is('All Products')").isVisible();
    
})