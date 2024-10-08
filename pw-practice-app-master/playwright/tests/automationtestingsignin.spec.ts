import {test} from '@playwright/test'

test("automationtestingsignin", async({page}) => {
    await page.goto("https://www.automationexercise.com/")
    await page.locator('[alt="Website for automation practice"]').isVisible();
    await page.locator(':text-is("Signup / Login")').click();
    await page.locator(':text("Login to your account")').isVisible();

    await page.locator("[data-qa='login-email']").fill("testuser89+004@test.com")
    await page.locator("[data-qa='login-password']").fill('testuser')
    await page.locator('[data-qa="login-button"]').click()
    await page.locator(':text-is("Delete Account")').isVisible();

})