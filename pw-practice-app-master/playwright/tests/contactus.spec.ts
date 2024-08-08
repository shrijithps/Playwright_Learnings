import {test} from '@playwright/test'

test("contact us", async({page}) => {
    await page.goto("https://www.automationexercise.com/");
    await page.locator("a", {hasText:"Home"}).isVisible()
    await page.locator('a', {hasText:"Contact us"}).click();
    await page.getByPlaceholder('Name').fill("test name")
    await page.locator('[data-qa="email"]').fill("test@test.com")
    await page.locator("[name='subject']").fill("sample name")
    await page.locator('#message').fill("sample message");
    await page.locator('[name="upload_file"]').setInputFiles('testScreenshots/invoicesample.pdf');
    await page.locator('[name="submit"]').scrollIntoViewIfNeeded();
    const submitButton = page.locator('[name="submit"]');
    console.log(await page.locator('[name="submit"]').isEnabled())
    await page.waitForTimeout(500)

    if (await submitButton.first().isVisible() && await submitButton.first().isEnabled()) {
        await submitButton.first().click();
      } else {
        console.error('Submit button is not interactable');
      }
    await page.locator('[class="status alert alert-success"]', {hasText:"Success! Your details have been submitted successfully."});
})