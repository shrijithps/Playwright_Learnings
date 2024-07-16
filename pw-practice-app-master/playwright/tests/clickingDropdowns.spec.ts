import {test, expect} from '@playwright/test'


test("Selecting dark theme", async ({ page }) => {
        await page.goto('http://localhost:4200');
        await page.locator("[status='primary']").click();
        await page.waitForSelector('nb-option', { state: 'visible' });
        const header = page.locator('nb-layout-header')
        await page.locator('nb-option').filter({ hasText: 'dark' }).click();
        await expect(header).toHaveCSS('background-color', 'rgb(34, 43, 69)')
})