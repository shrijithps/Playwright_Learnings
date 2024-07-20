import {expect, test} from '@playwright/test'
import path from 'path';

test("autoWaitTest", async({page}) =>{
    await page.goto('http://www.uitestingplayground.com/ajax');
    await page.locator("[id='ajaxButton']").click();
  
    const successButton = await page.locator(".bg-success")
    
    await successButton.waitFor({state: "attached"})
    const allcontents = await successButton.allTextContents()


    expect(allcontents).toContain('Data loaded with AJAX get request.');

})