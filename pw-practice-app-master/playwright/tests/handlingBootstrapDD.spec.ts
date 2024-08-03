import { test } from '@playwright/test';

test('handlingBootstrapDD', async ({ page }) => {
    await page.goto('https://getbootstrap.com/docs/5.2/components/dropdowns/');
    
    await page.locator("[data-bs-toggle='dropdown']", { hasText: "Dropdown button" }).first().click();
    
    // Get all dropdown menu items
    const dropdownItems = await page.locator('.dropdown-menu .dropdown-item').allTextContents();
    
    for (let dropdownItem of dropdownItems) {
        if (dropdownItem.trim() === 'Action') {
            await page.waitForTimeout(2000);
            await page.locator('.dropdown-menu .dropdown-item').filter({ hasText: 'Action' }).first().click();
            break;
        }
    }
});
