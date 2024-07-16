import {test, expect} from '@playwright/test'

test("Test Suite", async({page}) => {
    await page.goto('http://localhost:4200')
    await page.getByTitle('Forms').click();
    await page.getByTitle('Form Layouts').click()
    const usingGrid = page.locator('nb-card', {hasText: "Using the Grid"})
    await usingGrid.getByRole('radio', {name:'Option 1'}).check({force:true})
    const radioStatus = await usingGrid.getByRole('radio', {name:'Option 1'}).isChecked();
    expect(radioStatus).toBeTruthy()
    await expect(usingGrid.getByRole('radio', {name:"Option 1"})).toBeChecked()
    const radioStatus2 = await usingGrid.getByRole('radio', {name:'Option 2'}).isChecked();
    expect(radioStatus2).toBeFalsy()
})