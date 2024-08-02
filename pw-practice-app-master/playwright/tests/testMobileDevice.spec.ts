import {test} from '@playwright/test'

test("testMobileDevice", async({page}) => {
    const modalOverlays = page.getByTitle('Modal & Overlays');
    await page.goto('/')
    await page.locator('nb-menu').getByTitle('Modal & Overlays').screenshot({path:"testScreenshots/clickingcheckbox.png"})
    await modalOverlays.click();
})