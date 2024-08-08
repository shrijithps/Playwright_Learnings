import {test} from '@playwright/test'

test("hoverelement", async({page}) => {
    await page.goto("https://demo-opencart.com/")
    await page.locator('[class="nav-item dropdown"]', {hasText:"Components"}).hover();

    await page.waitForSelector('li a', {hasText:"Monitors (2)"});
    await page.locator('li').locator('a', {hasText:"Monitors (2)"}).click();
})