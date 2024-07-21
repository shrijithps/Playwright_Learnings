import {test, expect} from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";


test.beforeEach("Before each", async({page}) => {
    await page.goto('/')
})

test("selecting and validating date fileds", async({page}) => {
    const pageManager = new PageManager(page);
    await pageManager.selectDate().selectDatepickerwithRangeFromToday(4, 15);
    await page.screenshot({path:"testScreenshots/selectingdate.png"})
})