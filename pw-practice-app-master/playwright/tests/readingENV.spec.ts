import {expect, test} from '@playwright/test'

test("Reading ENV", async({page}) => {
    await page.goto(process.env.URL);
})