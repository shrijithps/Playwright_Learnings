import {test, expect} from 'playwright/test'

test('clicking checkbox @regression', async({page}) => {
    const modalOverlays = page.getByTitle('Modal & Overlays');
    await page.goto('/')
    await page.locator('nb-menu').getByTitle('Modal & Overlays').screenshot({path:"testScreenshots/clickingcheckbox.png"})
    await modalOverlays.click();
    // const checkbox = await page.locator('nb-checkbox').locator('checkbox', {hasText:'Hide on click'});
    // checkbox.click()
    // const value = checkbox.isChecked()
    // await expect(value).toBeTruthy();
})