import {test} from '@playwright/test'

test("hoverElements", async({page}) => {
    await page.goto("https://demo-opencart.com/");
    await page.locator('a').locator('[alt="iPhone 6"]').isVisible();
    await page.locator('a').locator('[alt="iPhone 6"]').hover();
    await page.locator('[data-bs-target="#carousel-banner-0"]').locator('[class="fa-solid fa-chevron-right"]').click();
    await page.locator('[alt="MacBookAir"]').isVisible();
})