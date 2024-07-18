import {Page} from "@playwright/test";

export class HelperBase{

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async waitForSeconds(){
        await this.page.waitForTimeout(10000);
    }
}