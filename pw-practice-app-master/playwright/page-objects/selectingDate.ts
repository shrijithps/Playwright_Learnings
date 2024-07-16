import { Locator, Page } from "@playwright/test";
import {test, expect} from '@playwright/test';

export class SelectingDate{
    readonly page : Page

    constructor(page : Page){
        this.page = page
    }

    async selectDate(noofDaysFromToday: number){
        await this.page.getByTitle('Forms').click();
        await this.page.getByTitle('Datepicker').click();
        await this.dateRangeSelector(noofDaysFromToday)
    }

    async selectDatepickerwithRangeFromToday(startDayFromToday: number, endDayFromToday: number){
        await this.page.getByTitle('Forms').click();
        await this.page.getByTitle('Datepicker').click();
        const formPicker = await this.page.getByPlaceholder('Range Picker')
        await formPicker.click()
        const dateToAssertStart = await this.dateRangeSelector(startDayFromToday)
        const dateToAssertEnd = await this.dateRangeSelector(endDayFromToday)
        const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`;
        await expect(formPicker).toHaveValue(dateToAssert);
    }

    private async dateRangeSelector(noofDaysFromToday: number){
        let date = new Date();
        date.setDate(date.getDate() + noofDaysFromToday)
        const expectedDate = date.getDate().toString()
        const expectedMonthShort = date.toLocaleString('En-US', {month:'short'})
        const expectedMonthLong = date.toLocaleString('En-US', {month:'long'})
    
        const expectedYear = date.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`
        
        //getting calendar month and year
        let calendarMonthYear = await this.page.locator('nb-calendar-view-mode').textContent()
        const expectedMonthYear = `${expectedMonthLong} ${expectedYear}`
        
        while(!calendarMonthYear.includes(expectedMonthYear)){
            await this.page.locator("[data-name='chevron-right']").click()
            calendarMonthYear = await this.page.locator('nb-calendar-view-mode').textContent()
        }
    
        await this.page.locator("[class='range-cell day-cell ng-star-inserted']").getByText(expectedDate,{exact:true}).click()
        return dateToAssert;
    }
}