import {test, expect} from "@playwright/test";
import { SelectingDate } from "../page-objects/selectingDate";

test.beforeEach("Before each", async({page}) => {
    await page.goto('http://localhost:4200')
})

test("validating input details", async({page}) => {
    const selectingdate = new SelectingDate(page);
    // await selectingdate.selectDate(5);
    await selectingdate.selectDatepickerwithRangeFromToday(4, 15);
})