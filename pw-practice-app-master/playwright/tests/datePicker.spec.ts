import {test} from '@playwright/test'

test("playwright datepicker", async({page}) => {
    let expectedYear = "January 2025";
    let expectedDate = "25"
    await page.goto("https://demo.automationtesting.in/Datepicker.html")
    await page.locator(".imgdp").click();
    let yearMonth = await page.locator(".ui-datepicker-title").textContent();

    while(!(yearMonth.includes(expectedYear))){
        await page.locator("[title='Next']").click();
        await page.waitForTimeout(500);
        yearMonth = await page.locator(".ui-datepicker-title").textContent();
        if (yearMonth.includes("January") && yearMonth.includes("2025")) {
            console.log("Found the expected year and month")
            break;
        }   
    }

    let dates = await page.locator('[data-handler="selectDay"]').locator('a').allTextContents();
    for(let date of dates){
        if(date.includes(expectedDate)){
            await page.locator('[data-handler="selectDay"]').locator('a', {hasText:expectedDate}).click();
            break;
        }
    }
})