import {test, expect} from '@playwright/test'

test.skip('dialog box', async({page}) => {
    await page.goto('http://localhost:4200');
    await page.getByTitle("Tables & Data").click();
    await page.getByTitle("Smart Table").click();
    const targetRow = page.getByRole('row', {name:'snow@gmail.com'})
    await targetRow.locator('.nb-edit').click()
    await page.locator('input-editor').getByPlaceholder('Age').clear()
    await page.locator('input-editor').getByPlaceholder('Age').fill("36")
    await page.locator('.nb-checkmark').click();
    await page.locator("ul li").getByText('2').click();
    

    const f = page.getByRole('row', {name: "11"}).filter({has: page.locator('td').nth(1).getByText('11')})
    await f.locator('.nb-edit').click()
    await page.locator('input-editor').getByPlaceholder('E-mail').clear()
    await page.locator('input-editor').getByPlaceholder('E-mail').fill("test@tv.com")
})


test.skip('webtable', async({page}) => {

    const ages = ["20", "30", "40", "200"]

    await page.goto('http://localhost:4200');
    await page.getByTitle("Tables & Data").click();
    await page.getByTitle("Smart Table").click();

    for(let age of ages){
    await page.getByPlaceholder('Age').clear();
    
    await page.getByPlaceholder('Age').fill(age)
    await page.waitForTimeout(2000)

    const rows = page.locator('tbody tr')
    for(let row of await rows.all()){
        const cellvalue = await row.locator('td').last().textContent();
        if(age === "200"){
            expect(cellvalue).toEqual(" No data found ")
        }
        else{
        expect(cellvalue).toEqual(age)
        }
        }
    }
})


test.skip('validating username', async({page}) => {
    const ages = ["20", "30", "40", "200"]

    await page.goto('http://localhost:4200');
    await page.getByTitle("Tables & Data").click();
    await page.getByTitle("Smart Table").click();

    await page.getByPlaceholder('Username').fill("snow");
    await page.waitForTimeout(2000)
    const text  = await page.locator("tr td").allTextContents();
    console.log(text);
    await expect(text).toContain('snow@gmail.com');
})

test('Date picker', async({page}) => {
    await page.goto('http://localhost:4200')
    await page.getByTitle('Forms').click();
    await page.getByTitle('Datepicker').click();
    const formPicker = await page.getByPlaceholder('Form Picker')
    formPicker.click()

    let date = new Date();
    date.setDate(date.getDate() + 500)
    const expectedDate = date.getDate().toString()
    const expectedMonthShort = date.toLocaleString('En-US', {month:'short'})
    const expectedMonthLong = date.toLocaleString('En-US', {month:'long'})

    const expectedYear = date.getFullYear()
    const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`
    
    //getting calendar month and year
    let calendarMonthYear = await page.locator('nb-calendar-view-mode').textContent()
    const expectedMonthYear = `${expectedMonthLong} ${expectedYear}`
    
    while(!calendarMonthYear.includes(expectedMonthYear)){
        await page.locator("[data-name='chevron-right']").click()
        calendarMonthYear = await page.locator('nb-calendar-view-mode').textContent()
    }

    await page.locator("[class='day-cell ng-star-inserted']").getByText(expectedDate,{exact:true}).click()
    await expect(formPicker).toHaveValue(dateToAssert)

    
})