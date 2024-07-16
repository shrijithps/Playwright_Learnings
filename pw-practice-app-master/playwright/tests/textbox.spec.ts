import {test, expect} from '@playwright/test';
import { time } from 'console';


test("Textbox fill", async({page}) => {
    const Email = page.locator('nb-card', {hasText:"Using the Grid"}).getByRole('textbox', {name:'Email'});
    await page.goto('http://localhost:4200')
    
    await page.getByTitle('Forms').click();
    await page.getByTitle('Form Layouts').click()
    await Email.fill("test@tv.com")
    await Email.clear()
    await Email.pressSequentially("test2@tv.com", {delay:200})
    await expect(Email).toHaveValue("test2@tv.com")
})