import {expect, test} from '@playwright/test';

test("Indigo website", async({page}) => {
    await page.goto("https://www.goindigo.in/");
    await page.getByPlaceholder("From").fill("Bengaluru");
})