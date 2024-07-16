import { Locator, Page } from "@playwright/test";

export class NavigationPage{

    readonly page : Page
    readonly formLayoutsMenuItem : Locator
    readonly tablesandData : Locator
    readonly smartTable : Locator

    constructor(page : Page){
        this.page = page
        this.formLayoutsMenuItem = page.getByTitle('Form Layouts')
        this.tablesandData = page.getByTitle("Tables & Data")
        this.smartTable = page.getByTitle("Smart Table")
    }


async formLayoutsPage(){
    await this.selectGroupMenuItem('Forms')
    await this.formLayoutsMenuItem.click();
    await this.page.waitForTimeout(5000);
}

async dialogBox(){
    await this.tablesandData.click();
    await this.smartTable.click();
}

async tooltip(){
    await this.page.locator('nb-menu').getByTitle('Modal & Overlays').click();
    await this.page.getByTitle('Tooltip').click();
}

async datePicker(){
    await this.selectGroupMenuItem('Forms')
    await this.page.locator("[title='Datepicker']").click();
}

private async selectGroupMenuItem(groupItemTitle: string){
    const groupMenuItem = this.page.getByTitle(groupItemTitle)
    const expandState = await groupMenuItem.getAttribute('aria-expanded')
    if(expandState =='false'){
        await groupMenuItem.click();
        }
    }
}