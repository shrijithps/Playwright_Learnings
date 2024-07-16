import {test, expect} from '@playwright/test'

test('proview login', async({page}) => {
    await page.goto('https://admin.talview.org/login?redirect_url=https%253A%252F%252Fproview-console.talview.org%252Flogin&username=sandeep.hm+69@talview.com');
    await page.locator("[type='password']").fill("Talview@123")
    await page.locator('button', {hasText:'Sign In'}).click();
    await page.waitForURL("https://proview-console.talview.org/login?");
    await page.goto('https://proview-console.talview.org/')
})
