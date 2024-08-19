import {test} from '@playwright/test';
import { text } from 'stream/consumers';

test("goibiotest", async({page}) => {
    await page.goto("https://www.goibibo.com/flights/");
    await page.locator("[class='logSprite icClose']").click();
    await page.locator('p', {hasText:"Round-trip"}).click();

    await page.locator('span:has-text("From") + p:has-text("Enter city or airport")').click()
    await page.waitForTimeout(200);
    await page.locator('span:has-text("From") + p:has-text("Enter city or airport")').pressSequentially("mangalore", {delay:500});

    await page.waitForTimeout(2000);
    let textcontent = await page.locator('#autoSuggest-list').locator('li').locator('span').allInnerTexts();

    console.log(textcontent)
    for(let a of textcontent){
        if(a.includes("Mangalore")){
            await page.locator('span', {hasText:a}).click()
        }
    }
})