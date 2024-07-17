import { Page } from "@playwright/test";
import { SelectingDatePage } from "../page-objects/selectingDate";

export class PageManager{

    private readonly page: Page
    private readonly selectingDate: SelectingDatePage

    constructor(page: Page){
        this.page = page
        this.selectingDate = new SelectingDatePage(this.page);
    }

    selectDate(){
        return this.selectingDate
    }
}