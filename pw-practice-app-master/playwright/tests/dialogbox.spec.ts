import {test, expect} from '@playwright/test'

test('dialog box', async({page}) => {
    await page.goto('http://localhost:4200');
    await page.getByTitle("Tables & Data").click();
    await page.getByTitle("Smart Table").click();

    page.on('dialog', dialog => {
        expect(dialog.message()).toEqual('Are you sure you want to delete?')
        dialog.accept()
    })
    
    await page.getByRole('table').locator('tr', {hasText:'mdo@gmail.com'}).locator('.nb-trash').click()
})