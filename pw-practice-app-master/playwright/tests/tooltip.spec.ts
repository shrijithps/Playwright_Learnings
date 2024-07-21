import {test, expect} from '@playwright/test'

test('test suite1', async({page}) => {
    await page.goto('/');
    await page.locator('nb-menu').getByTitle('Modal & Overlays').click();
    await page.getByTitle('Tooltip').click();
    await page.getByRole('button', {name:'Top'}).hover()
    const tooltip = await page.locator('nb-tooltip').textContent();
    console.log(tooltip)
    await expect(tooltip).toEqual("This is a tooltip")
    //span "This is a tooltip"
})