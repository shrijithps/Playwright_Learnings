import {test} from '@playwright/test'

test("playwright datepicker", async({page}) => {
    let expectedYear = "January 2025";
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
})