import {test, expect} from 'playwright/test'

test('Test Suite111', async({page}) => {
    const modalOverlays = page.locator('nb-menu').getByTitle('Modal & Overlays');
    await page.goto('http://localhost:4200')
    modalOverlays.click();
    // const checkbox = await page.locator('nb-checkbox').locator('checkbox', {hasText:'Hide on click'});
    // checkbox.click()
    // const value = checkbox.isChecked()
    // await expect(value).toBeTruthy();
})