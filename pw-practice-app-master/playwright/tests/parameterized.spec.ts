import {expect, test} from '@playwright/test';
import { FillingCredentials } from '../page-objects/fillingCredentials';

test.beforeEach("Before each", async({page}) => {
    await page.goto('http://localhost:4200')
})

test("autoWaitTest", async({page}) =>{
    const obj = new FillingCredentials(page);
    await obj.fillEmailAndPassword("test@tv.com", "samplepassword");
    
})