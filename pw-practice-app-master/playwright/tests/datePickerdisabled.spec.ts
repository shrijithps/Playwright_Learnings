import {test} from '@playwright/test'

test("playwright datepicker", async({page}) => {
    let expectedYear = "January 2025";
    let expectedDate = "25"
    await page.goto("https://demo.automationtesting.in/Datepicker.html")
    await page.locator("#datepicker2").click();

    let month = await page.locator("[title='Change the month']").locator('[selected="selected"]').textContent();
    let year = await page.locator("[title='Change the year']").locator('[selected="selected"]').textContent();

    console.log(month)
    console.log(year)
    let yearMonth = month+" "+year


    while(!(yearMonth.includes(expectedYear))){
         await page.locator('.datepick-nav').locator("a", {hasText:"Next"}).click();
         await page.waitForTimeout(500);
         month = await page.locator("[title='Change the month']").locator('[selected="selected"]').textContent();
         year = await page.locator("[title='Change the year']").locator('[selected="selected"]').textContent();
         yearMonth = month+" "+year
         if (yearMonth.includes("January") && yearMonth.includes("2025")) {
             console.log("Found the expected year and month")
             break;
         }   
     }

     let dates = await page.locator('tr').locator('td').allTextContents();
    for(let date of dates){
        if(date.includes(expectedDate)){
             await page.locator('tr').locator('td', {hasText:expectedDate}).click();
            break;
         }
     }
})