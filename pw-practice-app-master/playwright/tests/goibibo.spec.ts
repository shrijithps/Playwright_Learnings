import {test} from '@playwright/test';
import { text } from 'stream/consumers';

test("goibiotest", async({page}) => {
    await page.goto("https://www.goibibo.com/flights/");
    await page.locator("[class='logSprite icClose']").click();
    await page.locator('p', {hasText:"Round-trip"}).click();

    await page.locator('span:has-text("From") + p:has-text("Enter city or airport")').click()
    await page.waitForTimeout(100);
    await page.locator('span:has-text("From") + p:has-text("Enter city or airport")').pressSequentially("mangalore", {delay:300});

    await page.waitForTimeout(1000);
    let fromCities = await page.locator('#autoSuggest-list').locator('li').locator('span').allInnerTexts();

    for(let fromCity of fromCities){
        if(fromCity.includes("Mangalore")){
            await page.locator('span', {hasText:fromCity}).click()
        }
    }

    await page.locator('span:has-text("To") + input[type="text"]').click()
    await page.waitForTimeout(100);
    await page.locator('span:has-text("To") + input[type="text"]').pressSequentially("bengaluru", {delay:300});

    await page.waitForTimeout(1000);
    let toCities = await page.locator('#autoSuggest-list').locator('li').locator('span').allInnerTexts();

    for(let toCity of toCities){
        if(toCity.includes("Bengaluru")){
            await page.locator('span', {hasText:toCity}).click()
        }
    }

    await page.locator("[data-id='dweb_pip_id'] > p").first().click();
    await page.waitForTimeout(500);
    await page.locator('span:has-text("Departure") + p').click();
})