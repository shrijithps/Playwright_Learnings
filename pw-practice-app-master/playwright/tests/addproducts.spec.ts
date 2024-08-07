import { test, expect } from '@playwright/test';

test('add products in Playwright', async ({ page }) => {
  await page.goto('http://automationexercise.com');

  // Navigate to products page
  await page.locator(':text-is("Products")').click();
  await expect(page.locator(":text-is('All Products')")).toBeVisible();

  // Add the first product
  const firstProduct = page.locator("[src='/get_product_picture/1']");
  await expect(firstProduct.locator('xpath=following-sibling::p[contains(text(), "Blue Top")]')).toBeVisible();
  const firstProductPriceText = await firstProduct.locator('xpath=following-sibling::h2').textContent();
  const firstProductPrice = parseInt(firstProductPriceText.replace('Rs. ', '').trim(), 10);
  console.log(firstProductPrice);
  await firstProduct.hover();
  await page.locator("[data-product-id='1']", { hasText: 'Add to cart' }).first().click();
  await page.locator('button', { hasText: 'Continue Shopping' }).click();

  // Add the second product
  const secondProduct = page.locator("[src='/get_product_picture/6']");
  await expect(secondProduct.locator('xpath=following-sibling::p[contains(text(), "Summer White Top")]')).toBeVisible();
  const secondProductPriceText = await secondProduct.locator('xpath=following-sibling::h2').textContent();
  const secondProductPrice = parseInt(secondProductPriceText.replace('Rs. ', '').trim(), 10);
  console.log(secondProductPrice);
  await secondProduct.hover();
  await page.locator("[data-product-id='6']", { hasText: 'Add to cart' }).first().click();

  // Calculate the expected total price
  const expectedTotalPrice = firstProductPrice + secondProductPrice;
  console.log(`Expected Total Price: ${expectedTotalPrice}`);

  // Proceed to checkout
  await page.locator("u", { hasText: 'View Cart' }).click();
  await page.locator('a', { hasText: 'Proceed To Checkout' }).click();

  // Login
  await page.locator('u', { hasText: 'Register / Login' }).click();
  await page.locator("[data-qa='login-email']").fill("testuser89+004@test.com");
  await page.locator("[data-qa='login-password']").fill('testuser');
  await page.locator('[data-qa="login-button"]').click();
  await expect(page.locator(':text-is("Delete Account")')).toBeVisible();

  // Verify total price in the cart
  await page.locator("[href='/view_cart']").first().click();
  await page.locator('a', { hasText: 'Proceed To Checkout' }).click();
  const actualTotalPriceText = await page.locator('.cart_total_price').textContent();
  const actualTotalPrice = parseInt(actualTotalPriceText.replace('Rs ', '').trim(), 10);

  expect(actualTotalPrice).toBe(expectedTotalPrice);
});
