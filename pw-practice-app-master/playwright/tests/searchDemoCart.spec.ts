import {test} from '@playwright/test'

test("searchDemoCart", async({page}) => {
    await page.goto("https://demo-opencart.com/")
    await page.getByPlaceholder("Search").pressSequentially("MacBook Air")
    await page.keyboard.press("Enter")
    await page.locator('h4 a',{hasText:"MacBook Air"}).click();
    await page.locator('h1', {hasText:"MacBook Air"}).isVisible();
})