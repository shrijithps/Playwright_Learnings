import {test} from '@playwright/test'

test("playwright datepicker", async({page}) => {
    let expectedYear = "January 2025";
    await page.goto("https://demo.automationtesting.in/Datepicker.html")
    await page.locator(".imgdp").click();
    let yearMonth = await page.locator(".ui-datepicker-title").textContent();
    while(!(yearMonth.includes(expectedYear))){
        yearMonth = await page.locator(".ui-datepicker-title").textContent();
        if(yearMonth === "January 2025")
            console.log("hellow")
        console.log(yearMonth)
        await page.locator("[title='Next']").click();
    }

})