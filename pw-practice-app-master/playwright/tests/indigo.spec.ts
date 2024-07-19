import {expect, test} from '@playwright/test';

test("Indigo", async({page}) => {
    await page.goto("https://www.goindigo.in/");
    await page.getByPlaceholder("From").fill("Bengaluru");
})