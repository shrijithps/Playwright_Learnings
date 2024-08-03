import {expect, test} from '@playwright/test'

test("handlingDD", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    await page.locator("#dropdown").selectOption("Option 1")
    await expect(page.locator("#dropdown")).toHaveValue("1");
})