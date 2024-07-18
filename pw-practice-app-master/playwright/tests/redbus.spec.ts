import { test, expect } from '@playwright/test';

test("Selecting dropdown", async({page}) => {
    await page.goto("https://redbus.in");
    // await page.locator('label',{hasText:"From"}).click();
    await page.locator('#src').click()
    await page.locator('#src').fill("Bengaluru");
    const text = await page.locator(".sc-dnqmqq dZhbJF").locator('text').allInnerTexts();
    for(const a of await text){
        console.log(a);
        if (a == "Bengaluru"){
            page.locator('text', {hasText:a}).click()
        }

    }
})