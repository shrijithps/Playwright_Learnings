import {expect, test} from '@playwright/test'

test("handling web elements example 1 ", async({page}) => {
    test.slow()
    await page.goto('https://demoqa.com')
    await page.reload()
    await page.waitForSelector('text=Elements');
    await expect(page.locator('h5').getByText('Elements')).toBeVisible();
    await page.locator('h5').getByText('Elements').click();

    //clicking textbox
    await page.locator('span').getByText('Text Box').click();
    //clicking username textbox field
    await page.locator('#userName').pressSequentially('Shrijith');
    //enterting the email id
    await page.locator("[type='email']").fill("sandeshkaranth90+3039@gmail.com")
    //entering the current address
    await page.locator('#currentAddress-wrapper').locator('#currentAddress').fill("This is the current address");
    //entering the permanent address
    await page.locator('div > #permanentAddress').fill('This is a permanent address');

    //assertions
    await expect(page.locator('#userName')).toHaveValue("Shrijith");
    await expect(page.locator("[type='email']")).toHaveValue("sandeshkaranth90+3039@gmail.com");
    await expect(page.locator('#currentAddress-wrapper').locator('#currentAddress')).toHaveValue("This is the current address");
    await expect(page.locator('div > #permanentAddress')).toHaveValue('This is a permanent address');


})