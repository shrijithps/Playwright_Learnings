import {test} from '@playwright/test'

test("playwright datepicker", async({page}) => {
    let expectedYear = "January 2025";
    await page.goto("https://demo.automationtesting.in/Datepicker.html")
    await page.locator(".imgdp").click();
    let yearMonth= await page.locator(".ui-datepicker-title").textContent();
    console.log(yearMonth)

})