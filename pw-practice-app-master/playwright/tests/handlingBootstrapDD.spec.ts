import {test} from '@playwright/test'

test("handlingBootstrapDD", async({page}) => {
    await page.goto("https://getbootstrap.com/docs/5.2/components/dropdowns/")
    await page.locator("[data-bs-toggle='dropdown']", {hasText:"Dropdown button"}).first().click();
    const dropdownElements = await page.locator('.dropdown').locator(".dropdown-menu show").locator('li');
    console.log(dropdownElements)
    // for(let dropdownvalue of dropdownElements){
    //     console.log(dropdownvalue)
    //     if(dropdownvalue == 'Action'){
    //         await page.waitForTimeout(2000)
    //         await page.locator('li').filter({hasText:dropdownvalue}).click()
    //     }
    // }
})