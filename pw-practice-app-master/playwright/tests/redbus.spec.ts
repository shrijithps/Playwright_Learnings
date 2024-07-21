import { expect } from '@playwright/test';
import {test} from '../test-options'

test("Selecting dropdown", async ({ page, globalsQaURL }) => {
    await page.goto(globalsQaURL);

    // Click on the source input field
    await page.locator('#src').click();

    // Type "Bengaluru" into the input field
    await page.locator('#src').pressSequentially("Bengaluru",{delay:500});

    await page.waitForTimeout(1000)
    // Wait for the dropdown to appear
    await page.waitForSelector('.sc-dnqmqq.dZhbJF'); // Adjust selector as per the actual dropdown
    // Get all options in the dropdown
    const options = await page.locator("text[class='placeHolderMainText']").allTextContents();
    console.log(options)
    // Iterate through the options and click on "Bengaluru"
    for (const option of options) {
        if (option == "Bengaluru"){
            await page.
            locator('li').filter({hasText:option}).first().click();
        }
    }
});