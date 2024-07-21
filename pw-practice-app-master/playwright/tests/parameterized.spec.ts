import {expect, test} from '@playwright/test';
import { FillingCredentials } from '../page-objects/fillingCredentials';

test.beforeEach("Before each Block", async({page}) => {
    await page.goto('/')
})

test("autoWaitTest", async({page}) =>{
    const obj = new FillingCredentials(page);
    await obj.fillEmailAndPassword("test@tv.com", "samplepassword");
    
})