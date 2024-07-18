import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';

test.beforeEach('Before each block', async ({page}) =>{
  await page.goto('http://localhost:4200');
  await page.getByText('Forms').click();
})

test('clicking form layouts', async ({ page }) => {
  await page.getByTitle('Form Layouts').click();
});

test('verifying grid using text', async({page}) => {
  await page.locator(':text("Using the Grid")').isVisible();
})

test('verifying label', async({page}) => {
  await page.getByTitle('Form Layouts').click();
  await page.getByLabel('Email').first().click();
  await page.locator('nb-radio-group nb-radio label').filter({hasText: 'Option 1'}).click()
})

test('parent elements', async({page}) => {
  await page.getByTitle('Form Layouts').click();
  await page.locator('nb-card', {hasText:"Using the Grid"}).getByRole('textbox', {name:"Email"}).click();
  await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox', {name:"Email"}).fill("s");
})


test("Fill details", async({page}) => {
  const basicForm = page.locator('nb-card').filter({hasText:"Basic form"});
  await page.getByTitle('Form Layouts').click();
  // await basicForm.getByRole('textbox',{name:"basicformEmail"}).fill("p.shrijith+101@talview.com")
  await basicForm.locator("[name='basicformEmail']").fill("p.shrijith+101@talview.com")
  await basicForm.locator("[name='basicformPassword']").fill('Shri@098'); 
})

test("Clicking submit button", async({page}) => {
  await page.getByTitle('Form Layouts').click();
  const basicForm = page.locator('nb-card').filter({hasText:"Basic form"});
  const buttonText = await basicForm.locator('button').textContent();
  expect(buttonText).toEqual('Submit')
})

test("validating text in radio boxes", async({page})=> {
  await page.getByTitle('Form Layouts').click();
  const option = await page.locator('nb-card').getByText('Option 1').textContent()
  expect(option).toEqual('Option 1');
})

test("validating input details", async({page}) => {
  const basicForm = page.locator('nb-card').filter({hasText:"Basic form"});
  const email = basicForm.locator("[name='basicformEmail']")
  await page.getByTitle('Form Layouts').click();

  email.fill("p.shrijith+0330@tv.com")
  await expect(email).toHaveValue('p.shrijith+0330@tv.com')
  const textboxvalue = await email.inputValue();
  console.log(textboxvalue)
  expect(textboxvalue).toEqual('p.shrijith+0330@tv.com')

  const emailplaceholder = await email.getAttribute('type')
  expect(emailplaceholder).toEqual('email')
  
})

