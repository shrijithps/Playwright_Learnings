import {test} from '@playwright/test'

test("makemytrip", async({page}) => {
    await page.goto("https://www.makemytrip.com")
    await page.locator("[data-cy='closeModal']").click();
    
    //selecting radio button
    await page.locator("li", {hasText:"Round Trip"}).click();

    //clicking from
    await page.locator('span', {hasText:"From"}).click();

    //entering text in from field
    await page.getByPlaceholder('From').pressSequentially("Bengaluru", {delay:200})

    //timeout
    await page.waitForTimeout(1000);

    //list of fromcities
    let fromCities = await page.locator("[role='listbox']").locator('li')

    //clicking text with bengaluru
    for (let i = 0; i < (await fromCities.count()); i++) {
        const cityText = await fromCities.nth(i).innerText();
        if (cityText.includes('Mangalore')) {
            await fromCities.nth(i).click();
            break;
        }
    }

})