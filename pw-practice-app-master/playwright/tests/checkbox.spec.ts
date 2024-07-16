import {test, expect} from 'playwright/test'

test('Test Suite', async({page}) => {
    
    await page.goto('http://localhost:4200')
    await page.getByTitle('Modal & Overlays').click();
    await page.getByTitle('Toastr').click();
    await page.getByText('Hide on click').click({force:true})
    const value = await page.getByText('Hide on click').isChecked()
    await expect(value).toBeFalsy();
})


test("Checking all the checkboxes", async({page}) => {
    const checkbox = page.getByRole('checkbox')
    for(const box of await checkbox.all()){
        await box.check({force: true})
        expect(await box.isChecked()).toBeTruthy();
    }
})