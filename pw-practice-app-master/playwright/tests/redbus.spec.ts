import { test, expect } from '@playwright/test';

test("Selecting dropdown", async ({ page }) => {
    await page.goto("https://redbus.in");

    // Click on the source input field
    await page.locator('#src').click();

    // Type "Bengaluru" into the input field
    await page.locator('#src').type("Bengaluru",{delay:1000});
    // await page.keyboard.type('World', { delay: 100 }); // Types slower, like a user


    await page.waitForTimeout(5000)
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