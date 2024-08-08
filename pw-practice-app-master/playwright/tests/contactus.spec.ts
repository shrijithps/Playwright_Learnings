import {test} from '@playwright/test'

test("contact us", async({page}) => {
    await page.goto("https://www.automationexercise.com/");
    await page.locator("a", {hasText:"Home"}).isVisible()
    await page.locator('a', {hasText:"Contact us"}).click();
    await page.getByPlaceholder('Name').fill("test name")
    await page.locator('[data-qa="email"]').fill("test@test.com")
    await page.locator("[name='subject']").fill("sample name")
    await page.locator('#message').fill("sample message");
    await page.locator('[name="upload_file"]').setInputFiles('testScreenshots/selectingdate.png');
    await page.waitForTimeout(2000);
    await page.locator('[data-qa="submit-button"]').click();
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
      });

    await page.locator('[class="status alert alert-success"]', {hasText:"Success! Your details have been submitted successfully."});

})